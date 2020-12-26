import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';

import Routes from './components/Routes';
import AuthAPI from './utils/AuthAPI';

function App() {
  const [auth, setAuth] = useState(false);

  const readSession = async () => {
    const result = await axios.get("/auth/hassignedin");
    if(result.data.auth) {
      setAuth(true);
    }
  };

  useEffect(() => {
    readSession();
  }, []);

  return (
    <AuthAPI.Provider value={{ auth, setAuth }}>
      <Router>
        <Routes />
      </Router>
    </AuthAPI.Provider>
  );
}

export default App;
