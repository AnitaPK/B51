import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

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
          {projects.length > 0 ? (
            projects.map((p, i)=>(
                <tr keys={i}>
              <th>{i+1}</th>
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
    </div>
  );
};

export default Dashboard;
