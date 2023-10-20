import React, { Fragment } from "react";
import Header from "../components/Header";
import Home from "../containers/Home";
import Programs from "../containers/Programs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoPlayer from "../containers/Video";
import FooterEvorium from "../components/FooterEvorium";
import Login from "../containers/Login";
import Signup from "../containers/Sigup";
import ResetPassword from "../containers/ResetPassword";
import CreateNewPassword from "../containers/CreateNewPassword";
import UserProfile from "../containers/UserProfile";


const PublicLayout = () => {
  return (
    <div>
        <BrowserRouter>
      <Header />
      <Fragment>
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/videoplayer" element={<VideoPlayer />} />
            <Route path="/login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset_password" element={<ResetPassword />} />
            <Route path="create_new_password" element={<CreateNewPassword />} />
            <Route path="edit-profile" element={<UserProfile />} />

            
          </Routes>
        
      </Fragment>
      <FooterEvorium />
      </BrowserRouter>
    </div>
  );
};

export default PublicLayout;
