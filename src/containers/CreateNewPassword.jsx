import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { mainLogo } from "../assets/images";
import Button from "../components/Button";
import { EyeLock } from "../assets/icons";
import { appPort } from "../utility/port";

const CreateNewPassword = () => {
  function submit() {
    // console.log("login");
    // localStorage.setItem('login',true)
    window.open(`${appPort}/login`, "_self");
  }

  return (
    <section className="auth">
      <div className="auth__inner">
        <h1 className="auth__title mb-0">Create New password</h1>
        <p className="auth__subTitle">
          Your new password must be differnet from previous used passwords.
        </p>
        <Row>
          <Col md={12}>
            <div className="inputRow">
              <div className="inputRow__icon">
                <input placeholder="Password" type="password" />
                <span className="inputRow__iconGroup">
                  <EyeLock />
                </span>
              </div>
              <span className='infotext'>Must be at least 8 characters</span>
            </div>
          </Col>

          <Col md={12}>
            <div className="inputRow">
              <div className="inputRow__icon">
                <input placeholder="Confirm Password" type="password" />

                <span className="inputRow__iconGroup">
                  <EyeLock />
                </span>
              </div>
              <span className='infotext'>Both passwords must match</span>
            </div>
          </Col>

          <Col md="12">
            <Button title={"Confirm"} className="submitBtn" submit={submit} />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default CreateNewPassword;
