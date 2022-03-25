import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import UserInfo from "./components/UserInfo";
import Header from "./components/Header";

toast.configure();
const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(data);
      setUsers(data);
    };

    fetchUsers();
  }, []);
  const handleUserAdd = (nameUser, emailUser, websiteUser, telefoneUser) => {
    const newUsers = [
      ...users,
      {
        id: uuidv4(),
        name: nameUser,
        email: emailUser,
        phone: telefoneUser,
        website: websiteUser,
      },
    ];
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUsers)
      .then((response) => {
        if (response.status === 201) {
          notifySuccess("Usuário cadastrado com sucesso");
          setUsers(newUsers);
        } else {
          notifyError("Erro ao cadastrar usuário");
        }
      });
  };

  const handleUserRemove = (userId) => {
    const newUsers = users.filter((user) => user.id !== userId);
    axios.delete(`https://reqres.in/api/posts/${userId}`).then((response) => {
      if (response.status === 204) {
        notifySuccess("Usuário deletado com sucesso");
        setUsers(newUsers);
      } else {
        notifyError("Erro ao deletar usuário");
      }
    });
  };

  const notifySuccess = (msg) => {
    toast.success(`${msg}`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  const notifyError = (msg) => {
    toast.success(`${msg}`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };
  return (
    <>
      <div className="title">
        <h1>Lista de Usuários (React)</h1>
        <p>Feito por carinho por Gabriel Nicodemos</p>
      </div>
      <Router>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header title={"Usuários"} />
                  <Users users={users} handleUserRemove={handleUserRemove} />
                </>
              }
            />
            <Route
              path="/:name/:email/:phone/:website"
              element={<UserInfo />}
            />
            <Route
              path="/add"
              element={<AddUser handleUserAdd={handleUserAdd} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
