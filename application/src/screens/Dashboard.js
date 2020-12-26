import React from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

import AuthAPI from '../utils/AuthAPI';

function Dashboard() {
    const authApi = React.useContext(AuthAPI);
    const history = useHistory();

    const handleLogout = async () => {
        const result = await axios.get("/auth/signout");
        authApi.setAuth(result.data.auth);
        history.push('/');
    }

    return (
        <div>
            <h1>DASHBOARD</h1>
            <button onClick={handleLogout}>logout</button>
        </div>
    )
}

export default Dashboard;
