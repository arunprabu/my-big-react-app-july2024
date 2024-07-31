import { Link } from "react-router-dom";
import IUser from "../../models/IUser";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const AddUser = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  // validate the form [TODO]
  // Collect the form data
  const { register, handleSubmit } = useForm<IUser>();

  const handleAddUser = (formData: IUser) => {
    console.log(formData);
    // on click of the submit button
    // send the form data to the rest api
    // what's the REST API URL? https://jsonplaceholder.typicode.com/users
    // what's the Http Method? POST
    // what's the REST API Client? Axios
    axios
      .post("https://jsonplaceholder.typicode.com/users", formData)
      .then((response) => {
        // upon successful response
        console.log(response);
        setIsSuccess(true);
      })
      .catch((err) => {
        // upon error this will be executed)
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        console.log("It is over!");
      });
  };

  return (
    <div>
      <h1>Add User</h1>
      <Link to="/user-manager" className="btn btn-link">
        Go Back
      </Link>
      <form
        className="col-md-6 offset-md-3"
        onSubmit={handleSubmit(handleAddUser)}
      >
        <div className="form-group row mb-3">
          <label className="col-sm-2 col-form-label" htmlFor="nameInput">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              id="nameInput"
              className="form-control"
              placeholder="Enter Name"
              {...register("name")}
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="phoneInput" className="col-sm-2 col-form-label">
            Phone
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              id="phoneInput"
              className="form-control"
              placeholder="Enter Phone"
              {...register("phone")}
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="emailInput" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              id="emailInput"
              className="form-control"
              placeholder="Enter Email"
              {...register("email")}
            />
          </div>
        </div>

        {isSuccess && (
          <div className="alert alert-success">Saved Successfully</div>
        )}

        {isError && (
          <div className="alert alert-danger">
            Some Error Occurred. Try again later!
          </div>
        )}

        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
