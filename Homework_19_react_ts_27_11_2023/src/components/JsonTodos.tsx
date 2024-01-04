import React, { useEffect, useState } from 'react';

interface IUser {
  id: number;
  name: string;
  email: string;
 
}

const UsersList = () => {
  const [users, setUsers] = useState<IUser[] | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users &&
          users.map((user) => (
            <li key={user.id}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <hr />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UsersList;


