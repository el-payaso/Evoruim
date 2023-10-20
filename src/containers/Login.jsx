import React, { useEffect, useState } from "react";
import { Container, Image, Row, Col, Modal } from "react-bootstrap";
import { mainLogo } from "../assets/images";
import Button from "../components/Button";
import SuccessAlert from "../components/Alert";
import Alert from "../components/Alert";


import { Link } from "react-router-dom";
import "../styles/auth.scss";
import { EyeLock } from "../assets/icons";
import { appPort } from "../utility/port";

const Login = () => {
  const [show, setShow] = useState(false);
  function submit() {
    console.log("login");
    // setShow(true);
    localStorage.setItem("login", true);
    window.open(`${appPort}/programs`, "_self");
  }

  return (
    <>
      <section className="auth">
        <div className="auth__inner">
          <h1 className="auth__title">Login into the account</h1>
          <Row>
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
                  <EyeLock/>
                  </span>
                 
                </div>
              </div>
            </Col>

            <Col md={12}>
              <div className="authRemember">
                <div className="remember-text">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div>

                <button
                  className="forgotLink"
                  onClick={() =>
                    window.open(`${appPort}/reset_password`, "_self")
                  }
                >
                  Forgot Password?
                </button>
              </div>
            </Col>

            <Col md="12">
              <Button title={"Login"} className="submitBtn" submit={submit} />
            </Col>
            <Col md="12">
              <p className="newUserLink">
                New user?
                <span
                  onClick={() =>
                    window.open(`${appPort}/signup`, "_self")
                  }
                >
                  Signup
                </span>
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Login;
