import React from 'react'

const DataTable = ({ studentData }) => {
    console.log(studentData)
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
                    {/* {
                        studentData?.map((item,index) => {
                            return (
                                <tr>
                                    <td>2.</td>
                                    <td>{item?.studentname}</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>Edit</td>
                                </tr>
                            )
                        })
                    } */}
                    <tr>
                        <td>2.</td>
                        <td>Mohit</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Mohit</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Mohit</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Mohit</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Mohit</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Mohit</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>Edit</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default DataTable
