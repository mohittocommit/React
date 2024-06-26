import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'

const BlogDetail = () => {
    const { id } = useParams();
    const [blogDetailData, setBlogDetailData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleBlogDetail = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:9001/posts/${id}`)
            if (response) {
                setBlogDetailData(response.data)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        handleBlogDetail()
    }, [id])

    return (
        <>
            <div className="container mt-5">
                {
                    loading ?
                        <p>Loading....</p>
                        :
                        <>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="/pages/blog">Blog</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{blogDetailData?.title}</li>
                                </ol>
                            </nav>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h1 className="card-title">{blogDetailData?.title}</h1>
                                            <p className="text-muted"><strong>Category: </strong>{blogDetailData?.category}</p>
                                            <p className="card-text mt-2">{blogDetailData?.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                }

            </div>
        </>
    )
}

export default BlogDetail
