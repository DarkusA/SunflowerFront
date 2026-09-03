import { BrowserRouter, Routes, Route } from "react-router";
import LayoutSysAdmin from "./components/layoutSysAdmin/LayoutSysAdmin";

function Catalog() {
    return <h2>Catalog</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutSysAdmin />}>
                    <Route path="catalog" element={<Catalog />} />
                    <Route path="users" element={<Users />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;