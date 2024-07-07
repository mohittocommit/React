import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/dashboard.css';
import { Table } from 'antd';

const Dashboard = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
    ];
    return (
        <div className='page-dashboard page'>
            <section className='dashboard-section'>
                <div className='dashboard-inner d-flex'>
                    <div className='sidebar'>
                        <h2>Dashboard</h2>
                        <Link to="">Home</Link>
                        <Link to="">Student</Link>
                        <Link to="">Teacher</Link>
                    </div>
                    <div className='dashboard-content'>
                        <Table columns={columns} dataSource={data} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard
