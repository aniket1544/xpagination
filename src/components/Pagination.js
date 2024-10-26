import './Pagination.css';
import { useState, useEffect, useMemo } from 'react';

const Pagination = () => {
    const [employeeList, setEmployeeList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentList, setCurrentList] = useState([]);
    const maxRows = 10;
    const maxPages = Math.ceil(employeeList.length / 10);







    return (
        <div>
            <h1 className='heading'>Employee Data Table</h1>
            <table className='table'>
                <thead>
                    <tr className='header'>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentList.map((employee) => {
                            return (
                                <tr>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.role}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className='pagination_div'>
                <button onClick={handlePrev} disabled={currentPage === 1 ? true : false}>
                    Previous
                </button>
                <div>{currentPage}</div>
                <button onClick={handleNext} disabled={currentPage === maxPages ? true : false}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;