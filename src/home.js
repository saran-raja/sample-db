import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"
function Home() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const server = () => {
      let url = "http://localhost:3003/data";
      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          setUser(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    server();
  }, []);
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>PersonID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => (
            <tr >
              <td>{item.PersonID}</td>
              <td>{item.FirstName}</td>
              <td>{item.LastName}</td>
              <td>{item.Department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}
export default Home;
