import { useState } from "react";

export default function User() {
  const [user, setUser] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  const getData = () => {
    return fetch(url).then((res) => res.json());
  };

  const fetchAndGetUser = async () => {
    try {
      const data = await getData();
      setUser(data); // update fn

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Welcome to my user Page</h1>
      <button onClick={fetchAndGetUser}>FetchAndGetUser</button>

      <hr />

      {user.map((el) => (
        <div
          style={{ border: "1px solid red", padding: "20px", margin: "20px" }}
        >
          <h1>Name: {el.name}</h1>
          <h2>Email: {el.email}</h2>
          <h3>Userid: {el.id}</h3>
          <p>Website: {el.website}</p>
          <button>More info</button>
        </div>
      ))}
    </div>
  );
}
