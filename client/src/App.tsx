import React, { useEffect, useState } from 'react';

interface User {
  name: string;
}
const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li>{user.name}</li>
      ))}
    </ul>
  );
};

export default App;
