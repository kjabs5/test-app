import React, { useEffect, useState } from "react";
import axios from "axios";

function Counter(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setUsers(result.data);
    }
    getUsers();
  });
  return (
    <React.Fragment>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Counter;
