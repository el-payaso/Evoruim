import React, { useState } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { mainLogo } from "../assets/images";
import Button from "../components/Button";
import Alert from "../components/Alert";
import "../styles/auth.scss";
import { AppleIcon, CheckIcon, EmailIcon, EyeLock, FacebookIcon, GoogleIcon } from "../assets/icons";
import { Link } from "react-router-dom";
import { appPort } from "../utility/port";


const Signup = () => {
  const [show, setShow] = useState(false);
  function submit() {
    // console.log("login");
    // localStorage.setItem('login',true)
    // window.open(" appPort/login","_self")
    // alert("Successfully created account")
    // window.open(" appPort/login","_self")
    setShow(true);
  }

  function showClose() {
    setShow(false);
    window.open(`${appPort}/login`, "_self");
  }

  return (
    <>
      <Alert
        title={"Success"}
        body={"Congratulations, you have completed your registration!"}
        btnTitle={"Done"}
        icon={<CheckIcon/>}
        showClose={showClose}
        show={show}
      />

      <section className="auth">
        <div className="auth__inner">
          <h1 className="auth__title">Sign Up to your account</h1>
          <Row>
            <Col md={12}>
              <div className="inputRow">
                <input placeholder="Enter Full Name" type="text" />
              </div>
            </Col>

            <Col md={12}>
              <div className="inputRow">
                <input placeholder="Enter Email" type="email" />
              </div>
            </Col>

            <Col md={12}>
              <div className="inputRow">
                <div className="inputRow__icon">
                  <input placeholder="Enter Password" type="password" />

                  <span className="inputRow__iconGroup">
                    <EyeLock />
                  </span>
                </div>
              </div>
            </Col>

            <Col md="12">
              <Button title={"Signup"} className="submitBtn" submit={submit} />
            </Col>

            <Col md={12}>
              <div className="auth__socialWrap">
                <p>Or Continue with</p>
                <div className="auth__socialWrap__icon">
                  <ul>
                    <li>
                      <Link to="/">
                        <FacebookIcon />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <GoogleIcon />
                      </Link>
                    </li>

                    <li>
                      <Link to="/">
                        <AppleIcon />
                      </Link>
                    </li>
                  </ul>
                </div>

                <p className="signingText">By signing up, you agree to our <Link to="/">Terms</Link> ,<Link to="/">Data Policy</Link> and <Link to="/">Cookies Policy</Link>.</p>
              </div>
            </Col>
            <Col md="12">
              <p className="newUserLink">
                Already Have an Account?
                <span
                  onClick={() =>
                    window.open(`${appPort}/login`, "_self")
                  }
                >
                  Login
                </span>
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Signup;
