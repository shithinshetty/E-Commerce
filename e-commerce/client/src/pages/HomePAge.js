import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";

const HomePAge = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={" E-commerce21"}>
      <h1>Home Page</h1>
      <pre> {JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default HomePAge;
