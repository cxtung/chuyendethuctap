import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UserService from "../../service/UserService";
import { Password } from "@mui/icons-material";

export default function Register() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [load, setLoad] = useState(Date.now());

  const handleregister = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      var user = new FormData();
      user.append("name", name);
      user.append("username", username);
      user.append("phone", phone);
      user.append("email", email);
      user.append("gender", gender);
      user.append("password", password);
      user.append("roles",)
      (async () => {
        const result = await UserService.postUser(user);
        if (result.data.status == true) {
          setLoad(Date.now());
        }
      })();
    } else {
      alert("Check your password again");
    }
  };
  return (
    <>
      <section
        className="breadcrumbs-section background_bg"
        data-img-src="image/cart-breadcrumbs-img.jpg"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="page_title text-center">
                <h1>My Account</h1>
                <ul className="breadcrumb justify-content-center">
                  <li>
                    <a href="index.html">home</a>
                  </li>
                  <li>
                    <a href="#">shop</a>
                  </li>
                  <li>
                    <span>My Account</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt_large pb_large">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <div className="title">
                <h4>Register</h4>
              </div>
              <form
                method="post"
                className="login_form "
                onSubmit={handleregister}
              >
                <div className="form-group">
                  <label>
                    Username <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    required=""
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                    name="username"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <label>
                    name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    required=""
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    name="username"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <label>
                    phone <span className="required">*</span>
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    required=""
                    className="form-control"
                    name="username"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <label>
                    Email address <span className="required">*</span>
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    required=""
                    className="form-control"
                    name="username"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <label>
                    gender<span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    required=""
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="form-control"
                    name="username"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <label>
                    Password <span className="required">*</span>
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    required=""
                    type="password"
                    name="password"
                  />
                </div>
                <div className="form-group">
                  <label>
                    Enter Password <span className="required">*</span>
                  </label>
                  <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="form-control"
                    required=""
                    type="password"
                    name="password"
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    name="login"
                    defaultValue="Register"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
