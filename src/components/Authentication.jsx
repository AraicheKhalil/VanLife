import { Navigate, Outlet } from "react-router-dom";

function Authentication() {

    const Loggedin = true;
    if (!Loggedin) {
        return <Navigate to='/login?message=You%20must%20log%20in%20first' state={{message : 'You must log-in first'}}/>
    }
    return <Outlet />
  
}

export default Authentication
