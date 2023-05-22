/* eslint-disable no-unused-vars */

import React from "react";
import { auth, provider } from "../../services/firebase";
import { FcGoogle } from "react-icons/fc";
import * as C from "./style";
import Logo from "../../assets/logo.png";

const Login = () => {
  const handleSignin = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <C.Container>
      <div className="div-left">
        <img src={Logo} alt="" />
        <h1>
          Converse com mais <span className="pe">liberdade!</span>
        </h1>
        <h2>Converse na WolfTalk </h2>
        <C.Button onClick={handleSignin}>
          <FcGoogle className="logo-google"/>
          Login com Google
        </C.Button>
      </div>
    </C.Container>
  );
};

export default Login;
