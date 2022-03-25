import React from "react";
import User from "./User";
import Button from "./Button";

import "./Users.css";
import { useNavigate } from "react-router-dom";

const Users = ({ users, handleUserRemove }) => {
  const navigate = useNavigate();
  const handleAddUserClick = () => {
    navigate(`/add`);
  };
  return (
    <>
      <div className="add-button-container">
        <Button onClick={handleAddUserClick}>Adicionar Novo Usuário</Button>
      </div>
      <div className="users-container-table">
        <h1>Nome</h1>
        <h1>Email</h1>
      </div>

      {users.map((user) => (
        <User key={user.id} user={user} handleUserRemove={handleUserRemove} />
      ))}
    </>
  );
};

export default Users;
