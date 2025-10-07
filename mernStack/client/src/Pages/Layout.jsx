import { Link, Outlet } from "react-router-dom"

function Layout() {
    return (
        <>
            <nav className="flex gap-5 text-blue-800 font-bold ">
                <Link className=" text-xl " to="/"> Home </Link>
                <Link className=" text-xl " to="/about"> About </Link>
                <Link className=" text-xl " to="/form"> Form </Link>
            </nav>
            <Outlet />

            <footer className="flex gap-4">
                <p>Copyright. All rights reserved. </p>
                <p>Registered Office : 23 old bunglow farm house</p>
            </footer>

        </>
    )
}

export default Layout
