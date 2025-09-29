import React from "react";
import "./adduser.css";
import { Link } from "react-router-dom";

const AddUser = () => {
  return (
    <div className="addUser">
      <Link to="/" type="button" class="btn btn-secondary">
        <i class="fa-solid fa-backward"></i> Back
      </Link>

      <h3>Add new user </h3>
      <form action="" className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Enter your address"
          />
        </div>
        <div className="inputGroup">
          <button type="button" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
