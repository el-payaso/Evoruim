import React, { useEffect, useState } from "react";
import { Container, Image, Row, Col, Modal } from "react-bootstrap";
import {} from "../assets/images";
import Button from "../components/Button";
import SuccessAlert from "../components/Alert";
import Alert from "../components/Alert";
import { CameraIcon, DownArrow, EyeLock, UserIcon } from "../assets/icons";
import { appPort } from "../utility/port";

const UserProfile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };
  function submit() {
    // console.log("login");
    // setShow(true);
    localStorage.setItem("login", true);
    window.open(`${appPort}/programs`, "_self");
  }
  return (
    <>
      <section className="auth">
        <div className="auth__inner">
          <h1 className="auth__title">Edit Profile</h1>
          <Row>
            <Col md={12}>
              <div className="inputRow">

                <div className="editProfileUser">
                  <input
                  id="editUser"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    
                  />
                  <label for="editUser">
                    <div className="editUser__figure">
                      <UserIcon/>
                    </div>
                    <div className="editUser__icon"><CameraIcon/></div>
                  </label>
                </div>
              </div>
            </Col>

            <Col md={12}>
              <div className="inputRow">
                <input placeholder="Name" type="text" />
              </div>
            </Col>

            <Col md={12}>
              <div className="inputRow">
              <input
                  placeholder="E-mail"
                  type="email"
                 
                />
              </div>
            </Col>

            <Col md={12}>
              <div className="inputRow">
              <input
                  placeholder="Phone Number"
                  type="text"
                />
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
              <div className="inputRow">
              <div className="inputRow__icon">
              <select>
                  <option>--Select Country--</option>
                  <option>India</option>
                  <option>Pakistan</option>
                  <option>italy</option>
                </select> 

                  <span className="inputRow__iconGroup">
                  <DownArrow/>
                  </span>
                 
                </div>
              
            
              </div>
            </Col>


           

          

            <Col md="12">
              <Button title={"Save Changes"} className="submitBtn" submit={submit} />
            </Col>
           
          </Row>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
