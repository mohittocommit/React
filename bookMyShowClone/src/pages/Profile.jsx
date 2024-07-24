import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Profile = () => {
    const userEmail = localStorage.getItem("email");
    const [profileData, setProfileData] = useState();
    const getProfile = async () => {
        try {
            const token = localStorage.getItem("token");;
            const response = await axios.get("http://localhost:9001/api/profile",{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if(response){
                console.log(response)
                setProfileData(response.data[0])
            }
        } catch(error) {
            console.log(error)
        }
    }
    useEffect(()=> {
        getProfile();
    },[])
    return (
        <div className='page-profile page'>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body text-center">
                                <img src="https://placehold.co/10x10" class="rounded-circle mb-3 w-25" alt="Profile Picture" />
                                    <h4>{profileData?.name}</h4>
                                    <p class="text-muted">{profileData?.email}</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-header">
                                <h5>Change Password</h5>
                            </div>
                            <div class="card-body">
                                <form id="changePasswordForm">
                                    <div class="mb-3">
                                        <label for="currentPassword" class="form-label">Current Password</label>
                                        <input type="password" class="form-control" id="currentPassword" required />
                                    </div>
                                    <div class="mb-3">
                                        <label for="newPassword" class="form-label">New Password</label>
                                        <input type="password" class="form-control" id="newPassword" required />
                                    </div>
                                    <div class="mb-3">
                                        <label for="confirmPassword" class="form-label">Confirm New Password</label>
                                        <input type="password" class="form-control" id="confirmPassword" required />
                                    </div>
                                    <button type="submit" class="btn btn-primary">Change Password</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
