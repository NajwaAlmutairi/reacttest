import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const apiUrl = "https://6706f35ca0e04071d228c2a9.mockapi.io/login";
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    const upperReg = /[A-Z]/;
    if (name.length <= 3) {
      setError("the name should be more than 3 letters");
      return;
    }
    if (username.length <= 3) {
      setError("the username should be more than 3 letters");
      return;
    }
    if (password.length <= 4 && !upperReg.test(password)) {
      setError(
        "the password should be more than 4 letters and containes uppercase letter"
      );
      return;
    }

    axios
      .get(apiUrl)
      .then(function (response) {
        console.log(response.data);
        const usersData = response.data;
        const userExist = usersData.some((ele) => ele.username === username);

        if (!userExist) {
          axios
            .post(apiUrl, {
              name: name,
              username: username,
              password: password,
              fav: [],
              marked: [],
            })
            .then(function (response) {
              navigate("/login");
            })
            .catch(function (error) {
              console.log(error);
              setError("something went wrong please try again later");
            });
        } else {
          setError("the username already being used ");
        }
      })
      .catch(function (error) {
        setError("something went wrong please try again later");
      });
  };

  useEffect(() => {
    setError("");
  }, [name, username, password]);
  useEffect(() => {
    if (localStorage.getItem("username")) {
      localStorage.removeItem("username");
      localStorage.removeItem("name");
      localStorage.removeItem("id");
    }
  }, []);
  return (
    <div className="hero bg-[#dbb086] min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold text-[#28170d]">Register</h1>
        </div>
        <div className="card bg-base-100 w-[24rem] max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            {error && <h1 className="text-red-500 text-center">{error}</h1>}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn text-white bg-orange-800 hover:bg-orange-900"
              >
                Register
              </button>
            </div>
            <p className="text-center pt-2">
              Already have an account?
              <Link to="/login">
                <span className="text-orange-800">Login</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
