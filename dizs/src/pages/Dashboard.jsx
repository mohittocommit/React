import React, { useEffect, useState } from 'react'
import '../styles/dashboard.css';
import Sidebar from '../components/dashboard/Sidebar';
import TopBar from '../components/dashboard/TopBar';
import Header from '../components/dashboard/Header';
import DataTable from '../components/dashboard/DataTable';

import useApiHandler from '../hooks/useApihandler';
import { getAllStudent } from '../services/apiService';

const Dashboard = () => {
    const { handleApiCall } = useApiHandler();

    const [studentData, setStudentData] = useState([]);

    const getAllStudentApi = async () => {
        const payload ={
            d5: "5535",
            id: 123,
            l1: 1,
            l2: 0,
            l3: 0,
            l4: 6 
        }
        const result = await handleApiCall(
            () => getAllStudent(payload),
            async (response) => {
                if (response.status) {
                    setStudentData(response.data.data)
                } else {
                    console.error("All Student failed");
                }
            },
            null
        )
    }
    useEffect(() => {
        getAllStudentApi();
    }, [])

    return (
        <div className='page-dashboard page'>
            <section className='dashboard-section'>
                <div className='dashboard-inner d-flex'>
                    <Sidebar />
                    <div className='dashboard-content'>
                        <TopBar />
                        <Header />
                        <DataTable studentData={studentData}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard
