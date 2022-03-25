import React from "react";
import Button from "./Button";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import "./UserInfo.css";
const UserInfo = () => {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);

  const handleBackButtonClick = () => {
    navigate(`/`);
  };
  return (
    <>
      <Header title={"Detalhes"} />
      <div className="user-info-container">
        <h2>Nome: {params.name}</h2>
      </div>
      <div className="user-info-container">
        <h2>Email: {params.email}</h2>
      </div>
      <div className="user-info-container">
        <h2>Tel: {params.phone}</h2>
      </div>
      <div className="user-info-container">
        <h2>Website: {params.website}</h2>
      </div>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
    </>
  );
};

export default UserInfo;
