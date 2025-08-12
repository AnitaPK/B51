import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loggedUser, setloggedUser] = useState();
  const navigate = useNavigate()

  function login(email, password) {
    console.log(email, password);
    if (user.email == email && user.password == password) {
      setloggedUser({
        ...loggedUser,
        ...{ name: user.name, email: user.email },
      });
      return "login success";
    } else {
      setloggedUser(null);
    }
  }
  function logout(){
    setloggedUser(null)
    navigate('/')
  }
  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("user"));
    setUser({ ...user, ...u });
  }, []);
  console.log(loggedUser, "in authProvider");
  return (
    <AuthContext.Provider value={{ login, loggedUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, AuthContext };
