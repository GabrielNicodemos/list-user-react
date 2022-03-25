import React, { useState } from "react";

import "./AddUser.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
const AddUser = ({ handleUserAdd }) => {
  const [inputDataName, setInputDataName] = useState("");
  const [inputDataEmail, setInputDataEmail] = useState("");
  const [inputDataTel, setInputDataTel] = useState("");
  const [inputDataWebsite, setInputDataWebsite] = useState("");
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(`/`);
  };
  const handleInputName = (e) => {
    setInputDataName(e.target.value);
  };

  const handleInputEmail = (e) => {
    setInputDataEmail(e.target.value);
  };
  const handleInputTel = (e) => {
    setInputDataTel(e.target.value);
  };
  const handleInputWebsite = (e) => {
    setInputDataWebsite(e.target.value);
  };

  const handleUserAddClick = () => {
    handleUserAdd(
      inputDataName,
      inputDataEmail,
      inputDataTel,
      inputDataWebsite
    );
    setInputDataName("");
    setInputDataEmail("");
    setInputDataTel("");
    setInputDataWebsite("");
    handleBackButtonClick();
  };

  return (
    <>
      <div className="add-user-container">
        <Header title={"Cadastro de Usuários"} />
        <input
          onChange={handleInputName}
          valeu={inputDataName}
          type="text"
          className="add-user-input"
          placeholder="Nome"
        />
        <input
          onChange={handleInputEmail}
          valeu={inputDataEmail}
          type="text"
          className="add-user-input"
          placeholder="Email"
        />
        <input
          onChange={handleInputTel}
          valeu={inputDataTel}
          type="text"
          className="add-user-input"
          placeholder="Telefone"
        />
        <input
          onChange={handleInputWebsite}
          valeu={inputDataWebsite}
          type="text"
          className="add-user-input"
          placeholder="Website"
        />
        <div className="add-user-button-container">
          <Button onClick={handleUserAddClick}>Adicionar</Button>
        </div>
        <div className="back-user-button-container">
          <Button onClick={handleBackButtonClick}>Cancelar</Button>
        </div>
      </div>
    </>
  );
};

export default AddUser;
