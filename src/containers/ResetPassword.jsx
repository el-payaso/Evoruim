import React, { useState } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { mainLogo } from "../assets/images";
import Button from "../components/Button";
import Alert from "../components/Alert";
import { EmailIcon } from "../assets/icons";
import { appPort } from "../utility/port";

const ResetPassword = () => {
  const [show, setShow] = useState(false);
  function submit() {
    // console.log("login");
    // localStorage.setItem('login',true)

    setShow(true);
  }
  function showClose() {
    setShow(false);
    window.open(`${appPort}/create_new_password`, "_self");
  }
  return (
    <>
      <Alert
        title={"Check your email"}
        icon={<EmailIcon/>}
        body={"We have sent a password recover instructions to your email."}
        btnTitle={"Done"}
        showClose={showClose}
        show={show}
      />

      <section className="auth">
        <div className="auth__inner">
          <h1 className="auth__title mb-0">Reset Password</h1>
          <p className="auth__subTitle">
            Enter the email address you used when you joined and we’ll send you
            instructions to reset your password
          </p>
          <Row>
            <Col md={12}>
              <div className="inputRow">
                <input placeholder="Enter Email" type="email" />
              </div>
            </Col>

            <Col md="12">
              <Button title={"Send"} className="submitBtn" submit={submit} />
            </Col>
            <Col md="12">
              <p className="newUserLink">
                Remember your Password?
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

export default ResetPassword;
