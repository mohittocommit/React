import React, { useEffect, useState, useMemo } from 'react'
import '../styles/dashboard.css';
import Modal from 'react-modal';
import Sidebar from '../components/dashboard/Sidebar';
import TopBar from '../components/dashboard/TopBar';
import Header from '../components/dashboard/Header';
import DataTable from '../components/dashboard/DataTable';
import Input from '../components/form/Input';

import useApiHandler from '../hooks/useApihandler';
import { getAllStudent, addStudent } from '../services/apiService';

const Dashboard = () => {
    const { handleApiCall } = useApiHandler();

    const [studentData, setStudentData] = useState([]);
    const [studentFormData, setStudentFormData] = useState({
        studentname: "",
        fathername: "",
        mothername: "",
        primaryphonenumber: "",
        secondaryphonenumber: "",
        dob: "",
        admissiondate: "",
        address: "",
        caretakername: "",
        desc12: "",
        d3: "cvbh",
        d4: "huj",
        d5: "",
        desc1: "2nd",
        desc2: "A",
        id: 0,
        num1: 2,
        num5: 0,
        schoolid: 1,
        sectionid: 1
    })
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);

    const getAllStudentApi = async () => {
        const payload = {
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
                    console.error("All Student API failed");
                }
            },
            null
        )
    }
    useEffect(() => {
        getAllStudentApi()
    }, [])

    const handleChange = (e) => {
        const {name, value} =  e.target;
        setStudentFormData({
            ...studentFormData,
            [name]: value
        })
    }

    const handleAddStudent = async () => {
        const payload = {
            studentname: studentFormData.studentname,
            fathername: studentFormData.fathername,
            mothername: studentFormData.mothername,
            primaryphonenumber: studentFormData.primaryphonenumber,
            secondaryphonenumber: studentFormData.secondaryphonenumber,
            dob: studentFormData.dob,
            admissiondate: studentFormData.admissiondate,
            address: studentFormData.address,
            caretakername: studentFormData.caretakername,
            desc12: studentFormData.desc12,
            d3: "cvbh",
            d4: "huj",
            d5: "",
            desc1: "2nd",
            desc2: "A",
            id: 0,
            num1: 2,
            num5: 0,
            schoolid: 1,
            sectionid: 1
        }
        const result = await handleApiCall(
            () => addStudent(payload),
            async (response) => {
                if (response.status) {
                    closeModal()
                    getAllStudentApi()
                } else {

                }
            },
            null
        )
    }

    console.log("selectedStudent",selectedStudent?.id)
    const handleUpdateStudent = async () => {
        
        const payload = {
            studentname: studentFormData.studentname,
            fathername: studentFormData.fathername,
            mothername: studentFormData.mothername,
            primaryphonenumber: studentFormData.primaryphonenumber,
            secondaryphonenumber: studentFormData.secondaryphonenumber,
            dob: studentFormData.dob,
            admissiondate: studentFormData.admissiondate,
            address: studentFormData.address,
            caretakername: studentFormData.caretakername,
            desc12: studentFormData.desc12,
            d3: "cvbh",
            d4: "huj",
            d5: "",
            desc1: "2nd",
            desc2: "A",
            id: selectedStudent?.id,
            num1: 2,
            num5: 0,
            schoolid: 1,
            sectionid: 1
        }

        console.log("payload",payload)
        const result = await handleApiCall(
            () => addStudent(payload),
            async (response) => {
                if (response.status) {
                    closeModal()
                    getAllStudentApi()
                } else {

                }
            },
            null
        )
    }
    
    useEffect(() => {
        if (selectedStudent) {
            setStudentFormData({
                studentname: selectedStudent.studentname,
                fathername: selectedStudent.fathername,
                mothername: selectedStudent.mothername,
                primaryphonenumber: selectedStudent.primaryphonenumber,
                secondaryphonenumber: selectedStudent.secondaryphonenumber,
                dob: selectedStudent.dob,
                admissiondate: selectedStudent.admissiondate,
                address: selectedStudent.address,
                caretakername: selectedStudent.caretakername,
                desc12: selectedStudent.desc12 // Adjust fields as per your data structure
                // Ensure all fields are correctly mapped from `selectedStudent` to `studentFormData`
            });
        }
    }, [selectedStudent]);

    const handleUpdateButtonClick = (record) =>{
        setSelectedStudent(record)
        openModal();
    }
    const handleFormSubmit = async(e) => {
        e.preventDefault();
        if (selectedStudent) {
            handleUpdateStudent(studentFormData);
        } else {
            handleAddStudent();
        }
    }

    const dataTableComponent = useMemo(() => {
        if (studentData.length > 0) {
            return <DataTable studentData={studentData} handleUpdateButtonClick={handleUpdateButtonClick}/>;
        }
        return null;
    }, [studentData]);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
        setSelectedStudent(null)
        setStudentFormData({
            studentname: "",
            fathername: "",
            mothername: "",
            primaryphonenumber: "",
            secondaryphonenumber: "",
            dob: "",
            admissiondate: "",
            address: "",
            caretakername: "",
            desc12: "",
            d3: "cvbh",
            d4: "huj",
            d5: "",
            desc1: "2nd",
            desc2: "A",
            id: 0,
            num1: 2,
            num5: 0,
            schoolid: 1,
            sectionid: 1
        })
    }
    
    return (
        <div className='page-dashboard page'>
            <section className='dashboard-section'>
                <div className='dashboard-inner d-flex'>
                    <Sidebar />
                    <div className='dashboard-content'>
                        <TopBar />
                        <Header openModal={openModal} />
                        {dataTableComponent}
                    </div>
                </div>
            </section>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Add Student"
                className="modal"
                overlayClassName="modal-overlay d-flex align-items-center justify-content-center"
            >
                <div className='modal-header d-flex flex-wrap align-items-center justify-content-space-between'>
                    <h6 className='modal-title'>Add Student</h6>
                    <span className='modal-close' onClick={closeModal}>X</span>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="mobile">Student Name</label>
                            <Input
                                type="text"
                                name="studentname"
                                value={studentFormData.studentname}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Father Name</label>
                            <Input
                                type="text"
                                name="fathername"
                                value={studentFormData.fathername}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Mother Name</label>
                            <Input
                                type="text"
                                name="mothername"
                                value={studentFormData.mothername}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Primary Phone Number</label>
                            <Input
                                type="text"
                                name="primaryphonenumber"
                                value={studentFormData.primaryphonenumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Secondary Phone Number</label>
                            <Input
                                type="text"
                                name="secondaryphonenumber"
                                value={studentFormData.secondaryphonenumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">DOB</label>
                            <Input
                                type="date"
                                name="dob"
                                value={studentFormData.dob}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Admission Date</label>
                            <Input
                                type="date"
                                name="admissiondate"
                                value={studentFormData.admissiondate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Address</label>
                            <Input
                                type="text"
                                name="address"
                                value={studentFormData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Care Taker Name</label>
                            <Input
                                type="text"
                                name="caretakername"
                                value={studentFormData.caretakername}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Profile Image URL</label>
                            <Input
                                type="text"
                                name="desc12"
                                value={studentFormData.desc12}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default Dashboard
