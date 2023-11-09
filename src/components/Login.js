import React, { useState } from "react";

const Login = (props) => {
  const [isLogged, setLogged] = useState(false);

  const changeStatus = (status) => {
    setLogged(status);
  }

  return (
    <div>
      {
        !isLogged ?
        <div>
            <p>Faça o login:</p>
            <button onClick={() => changeStatus(true)}>Login</button>
        </div> 
        :
        <div>
            <p>Bem-vindo!</p>
            <button onClick={() => changeStatus(false)}>Logout</button>
        </div>
      }
    </div>
  );
};

export default Login;