import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Link to="home">Home</Link> |
            <Link to="registration">Registration</Link> |
            <Link to="login">Login</Link> | &emsp; &emsp; 
            <Link to="multer">Multer</Link> |
            <Link to="image">Image jsx</Link> |
            <Link to="multiplefile"> Multiple_upload </Link> |

            <hr />

            <div style={{ height: "85vh"}}>
                <Outlet />
            </div>


            <hr />
            www.jsonWebToken&Bcrypt.com 2025.
        </>
    )
}


export default Layout;