import React, { useEffect, useState } from "react";
import axios from "axios";
import { createUserApi, getUserApi} from "../service/api";

const EmployeeCards = () => {
  const [users, setUsers] = useState([]);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    empId: "",
    salary: ""
  });

  async function getUserData() {
    try {
      const response = await axios.get(getUserApi);
      console.log(response.data.data);

      setUsers(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  function changeHandler(e) {
    const { name, value } = e.target;

    setNewUser((preItem) => {
      return { ...preItem, [name]: value };
    });
  }

  async function createUser() {
    try {
      const response = await axios.post(createUserApi, newUser);
      console.log(response);

      getUserData();
    } catch (error) {
      console.log(error);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    createUser();
  }

  return (
    <div>
      <h1>Employee System App</h1>

      <form onSubmit={submitHandler}>
        <input
          onChange={changeHandler}
          name="name"
          placeholder="Name"
        />
        <br />

        <input
          onChange={changeHandler}
          name="email"
          placeholder="Email"
        />
        <br />

        <input
          onChange={changeHandler}
          name="empId"
          placeholder="Emp. Id"
        />

        <br />

        <input
        onChange={changeHandler}
        name="salary"
        placeholder="Salary"
        />

        <br />

        <button type="submit">Submit</button>
      </form>

      <div>
        {users.map((item, i) => {
          return (
            <div key={i}>
              <p>Name : {item.name}</p>
              <p>Email : {item.email}</p>
              <p>Emp. Id : {item.empId}</p>
              <p>Salary: {item.salary}</p>

              <div>
                <button>Delete</button>
                <button>Edit</button>
              </div>

              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmployeeCards;