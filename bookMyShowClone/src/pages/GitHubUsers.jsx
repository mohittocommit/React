import React, { useEffect, useState } from 'react'
import axios from 'axios';

const GitHubUsers = () => {
    const [gitUserData, setGitUserData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchGitUserList = async () => {
        try {
            const response = await axios.get("https://api.github.com/users");
            setGitUserData(response.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchGitUserList();
    }, [])

    return (
        <>
            <div className='page-githubUser page'>
                <div className="container mt-5">
                    <h1 className="mb-4">GitHub Users</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Avatar</th>
                                <th scope="col">Username</th>
                                <th scope="col">Profile URL</th>
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
                                                    <img src={item.avatar_url} width="50" height="50" className="rounded-circle" style={{ width: "50px", height: "50px" }} />
                                                </td>
                                                <td className="align-middle">{item.login}</td>
                                                <td className="align-middle">
                                                    <a href={item.html_url} target="_blank" rel="noopener noreferrer">
                                                        {item.html_url}
                                                    </a>
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

export default GitHubUsers
