import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const userSet = await axios.get("http://localhost:5000/api/get-users");
      setUsers(userSet);
    };

    fetchData();
  }, [users]);
  return <div className="App"></div>;
}

export default App;
