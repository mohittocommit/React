import React from 'react'

const DataTable = ({ studentData, handleUpdateButtonClick }) => {
    const sortedStudentData = JSON?.parse(studentData).reverse();
    return (
        <div className='table-data'>
            <table>
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>STUDENT NAME</th>
                        <th>FATHER NAME</th>
                        <th>MOTHER NAME</th>
                        <th>PRIMARY MOBILE</th>
                        <th>SECONDARY MOBILE</th>
                        <th>ADDRESS</th>
                        <th>DOB</th>
                        <th>ADMISSION DATE</th>
                        <th>CARE TAKER NAME</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sortedStudentData?.map((item,index) => {
                            return (
                                <tr>
                                    <td>{index+1}.</td>
                                    <td>{item?.studentname}</td>
                                    <td>{item?.fathername}</td>
                                    <td>{item?.mothername}</td>
                                    <td>{item?.primaryphonenumber}</td>
                                    <td>{item?.secondaryphonenumber}</td>
                                    <td>{item?.address}</td>
                                    <td>{item?.dob}</td>
                                    <td>{item?.admissiondate}</td>
                                    <td>{item?.caretakername}</td>
                                    <td>
                                        <button className='btn-light' onClick={()=> handleUpdateButtonClick(item)}>Edit</button>
                                        <button className='btn-light'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DataTable
