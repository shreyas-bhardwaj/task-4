import { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((res) => setUsers(res.users))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Users</h1>
          <table class="table table-dark">
            <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
            </tr>
            </thead>
            {users.map(user => (
              <tbody>

              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
              </tbody>
            ))}
          </table>
        </>
      )}
    </div>
  );
}

export default App;