import React from "react";
import { Link } from "react-router-dom";

interface User {
  id?: number;
  name?: string;
  email_address?: string;
  phone_number?: string;
}

interface Props {
  user: User;
}

const Main: React.FC<Props> = ({ user = {} }) => {
  const containerStyle: React.CSSProperties = {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    paddingTop: "5%",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "36px",
    marginBottom: "20px",
    color: "#FFF",
  };

  const linkStyle = {
    width: "10%",
    textAlign: "center",
    textDecoration: "none",
    padding: "5px 10px",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "4px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome {user?.name}</h1>
      <Link to={`/products`} style={linkStyle}>
        View Products
      </Link> <br/>
      <Link to={`/credit_cards`} style={linkStyle}>
        View CC's
      </Link> <br/>
      <Link to={`/transactions`} style={linkStyle}>
        View Purchases
      </Link>
    </div>
  );
};

export default Main;
