import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import logo from "./images.png";

const Pagenotfound = () => {
  return (
    <Layout>
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <img src={logo}></img>
        <h2 className="pnf-heading">Oops ! Page Not Found</h2>
        <Link to="/" className="pnf-btn">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
