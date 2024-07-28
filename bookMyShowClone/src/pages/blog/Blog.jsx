import React, {useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Blog = () => {
    const [blogData, setBlogData] = useState([]);
    const [blogCat, setBlogCat] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const fetchBlogList = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:9001/posts");
            setBlogData(response.data)
            const blogCategories = response.data.map((item) => item.category )
            const uniqueCategoris = [...new Set(blogCategories)]
            setBlogCat(uniqueCategoris)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }
    const handleBlogSearch = async (e) => {
        const searchedQuery = e.target.value;
        if(searchedQuery.length > 3) {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:9001/posts?title=${e.target.value}`)
                setBlogData(response.data)
            } catch(error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        } else if(searchedQuery.length === 0){
            fetchBlogList();
        } else {
            setBlogData([])
        }
    }
    const handleBlogFilter = async (e) => {
        const filterQuery = e.target.value;
        if(filterQuery === "All") {
            fetchBlogList();
        } else {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:9001/posts?category=${filterQuery}`)
                setBlogData(response.data)
            } catch(error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
    }
    const handleNavigateAddPost = () => {
        navigate("/pages/add-post")
    }
    useEffect(() => {
        fetchBlogList();
    }, [])
    return (
        <>
            <div className='page-blog page'>
                <div className="container mt-2">
                    <h1 className="mb-4">Blog</h1>
                    <div className='d-flex'>
                    <input className="form-control me-2 w-auto" type="search" placeholder="Search" aria-label="Search" onChange={handleBlogSearch}/>
                    <select className="form-select w-auto" onChange={handleBlogFilter}>
                        <option value="All">All</option>
                        {
                            blogCat.map((item,index)=> {
                                return (
                                    <option value={item}>{item}</option>
                                )
                            })
                        }
                    </select>
                    <button className='btn btn-dark ms-1' onClick={handleNavigateAddPost}>
                        Add New
                    </button>
                    </div>
                    <table className="table table-striped mt-4">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Category</th>
                                <th scope="col">Details</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading ?
                                    <tr>
                                        <td colSpan="3" className="text-center">
                                            <div className="spinner-border text-primary" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </td>
                                    </tr>
                                    :
                                    blogData.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    {item.id}
                                                </td>
                                                <td className="align-middle">{item.title}</td>
                                                <td className="align-middle">{item.category}</td>
                                                <td className="align-middle">
                                                    <Link to={`/posts/${item.id}`}>Read More</Link>
                                                </td>
                                                <td className="align-middle">
                                                    Edit | Delete
                                                </td>
                                            </tr>
                                        )
                                    })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Blog
