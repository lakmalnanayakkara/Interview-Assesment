import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const userSet = await axios.get("http://localhost:5000/api/get-users");
      setUsers(userSet.data);
    };

    fetchData();
  }, []);
  return (
    <div className="">
      <table>
        <tr>
          <th>User ID</th>
          <th>User Name</th>
          <th>User Email</th>
        </tr>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
