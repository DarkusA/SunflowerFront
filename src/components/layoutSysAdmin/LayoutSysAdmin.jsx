    import "./LayoutSysAdmin.css";
    import { Link, Outlet } from "react-router";

    const LayoutSysAdmin = () => {
        return (
            <div className="layout">
                <header className="header">
                    <h1>Sunflower</h1>
                    <nav>
                        <Link to="/catalog">Catalog</Link>
                        <span>|</span>
                        <Link to="/users">Users</Link>
                    </nav>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        );  
    }

    export default LayoutSysAdmin;