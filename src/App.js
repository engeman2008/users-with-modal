import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (userData) => {
    setUsers((prev) => {
      return [...prev, userData];
    });
  };
  return (
    <Fragment>
      <AddUser onAdd={addUserHandler} />
      <UsersList users={users} />
    </Fragment>
  );
}

export default App;
