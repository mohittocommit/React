import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Blog = () => {
    const [gitUserData, setBlogData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBlogList = async () => {
        try {
            const response = await axios.get("http://localhost:9001/posts");
            setBlogData(response.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchBlogList();
    }, [])
    return (
        <>
            <div className='page-blog page'>
                <div className="container mt-2">
                    <h1 className="mb-4">Blog</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
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
                                    gitUserData.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    {item.id}
                                                </td>
                                                <td className="align-middle">{item.title}</td>
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
