import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button  from 'react-bootstrap/Button'

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Pagination Logic
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  function fetchDate() {
    fetch("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchDate();
  }, []);

  console.log(projects);

  return (
    <div>
       <div className="container mt-4">
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>ProjectName</th>
            <th>Details</th>
            <th>Department</th>
            <th>startDate</th>
            <th>EndDate</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {/* {projects.length > 0 ? (
            projects.map((p, i)=>( */}
          {currentProjects.length > 0 ? (
            currentProjects.map((p, i) => (
                <tr keys={i}>
              <th>
                {/* {i+1} */}
                {startIndex + i + 1}
                </th>
              <th>{p.ProjectName}</th>
              <th>{p.Details}</th>
              <th>{p.Department}</th>
              <th>{p.startDate}</th>
              <th>{p.EndDate}</th>
              <th>{p.status}</th>
            </tr>
            ))
            
          ) : (
            <tr>No project available</tr>
          )}
        </tbody>
      </Table>
      {/* Pagination Controls */}
      <div className="d-flex justify-content-between mt-3">
        <Button variant="primary" onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </Button>

        <div className="align-self-center">
          Page {currentPage} of {totalPages}
        </div>

        <Button variant="primary" onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
