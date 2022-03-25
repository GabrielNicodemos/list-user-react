import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useNavigate } from "react-router";

import "./User.css";

const User = ({ user, handleUserRemove }) => {
  const navigate = useNavigate();

  const handleUserInfoClick = () => {
    navigate(`/${user.name}/${user.email}/${user.phone}/${user.website}`);
  };
  return (
    <div className="user-container-primary">
      <div className="user-container">
        <div>{user.name}</div>
        <div>{user.email}</div>
        {/* Icones */}
      </div>
      <div className="buttons-container">
        <button
          className="remove-user"
          onClick={() => handleUserRemove(user.id)}
        >
          <CgClose />
        </button>
        <button className="info-user" onClick={handleUserInfoClick}>
          <CgInfo />
        </button>
      </div>
    </div>
  );
};

export default User;
