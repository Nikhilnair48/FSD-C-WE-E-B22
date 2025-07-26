import { Link, Outlet } from "react-router";
import "../App.css";

function Layout() {
    return (
        <div className="app-layout">
            <header className="app-header">
                <Link to="/" className="logo">My Blog</Link>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/articles">Articles</Link>
                </nav>
            </header>
            <main>
                {/* Outlet component is a placeholer
                where nested routes will be rendered */}
                <Outlet />
            </main>
            <footer className="app-footer">
                <p>The React Blog</p>
            </footer>
        </div>
    )
}

export default Layout;