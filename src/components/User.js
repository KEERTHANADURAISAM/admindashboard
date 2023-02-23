import React from "react";
import { useHistory } from "react-router-dom";

import Base from "../Base/Base";

export default function User() {
    const history=useHistory()
  const user = [
    {
      id: "1",
      name: "Vasanth",
      position: "CTO",
      office: "Honda",
      age: "30",
      start_date: "23/4/2021",
      salary: "40000",
    },
    {
      id: "2",
      name: "Manoj",
      position: "CTO",
      office: "Honda",
      age: "35",
      start_date: "23/4/2020",
      salary: "30000",
    },
    {
      id: "3",
      name: "Dinesh",
      position: "CTO",
      office: "Honda",
      age: "38",
      start_date: "23/4/2019",
      salary: "50000",
    },
    {
      id: "4",
      name: "Martin",
      position: "CTO",
      office: "Honda",
      age: "40",
      start_date: "23/4/2018",
      salary: "45000",
    },
    {
      id: "5",
      name: "Jeeva",
      position: "CTO",
      office: "Honda",
      age: "39",
      start_date: "23/4/2017",
      salary: "60000",
    },
  ];




  return (
    <Base>
    <h2>Tables</h2>
    <p>
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the
        official DataTables documentation.
        </p>

      <button className="user-btn" onClick={()=>history.push("/")}>Create User</button><br></br><br></br>
      <div className="container">
        <table style={{ width: "80%", border: "1px solid black" }}>
          <thead>
            <tr>
              <th>#Sl</th>
              <th>Name</th>
              <th>Office</th>
              <th>Position</th>
              <th>Age</th>
              <th>Start_Date</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user,idx) => (
              <tr>
                <td>{idx+1}</td>
                <td>{user.name}</td>
                <td>{user.office}</td>
                <td>{user.position}</td>
                <td>{user.age}</td>
                <td>{user.start_date}</td>
                <td>${user.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Base>
  );
}
