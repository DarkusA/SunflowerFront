import { BrowserRouter, Routes, Route } from "react-router";

import LayoutSysAdmin from "./components/layoutSysAdmin/LayoutSysAdmin";
import Users from "./components/users/Users";
import Catalog from "./components/catalog/Catalog";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutSysAdmin />}>
                    <Route
                        path="catalog"
                        element={<Catalog />}
                    />
                    <Route
                        path="users"
                        element={<Users />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;