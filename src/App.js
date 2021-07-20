import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Loading from "./components/Loading";
import { useState, useEffect } from "react";
import Users from "./components/Users";
import NoUsers from "./components/NoUsers";

function App() {
  // state area
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  // use Effect functions
  useEffect(() => {
    fetchData();
  }, []);

  // random functions
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const users = await response.json();
      setUsers(users);
      setLoading(false);
    } catch (error) {
      console.log(` error in fetching users data array...}`);
      setLoading(false);
    }
  };

  const refresh = () => {
    fetchData();
  };

  const remove = (id) => {
    const filteredUsers = users.filter((user) => {
      return user.id !== id;
    });

    setUsers(filteredUsers);
  };

  // return  logics
  if (loading === true) {
    return <Loading />;
  }
  if (users.length === 0) {
    return <NoUsers refresh={refresh} />;
  }

  return (
    <>
      <Users users={users} remove={remove} />
    </>
  );
}

export default App;
