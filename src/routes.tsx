import { Route, Routes } from "react-router-dom";
import Client from "./Pages/Client";
import ListClient from "./Pages/Client/List";
import RegisterClient from "./Pages/Client/Register";
import Contract from "./Pages/Contract";
import ListContract from "./Pages/Contract/List";
import RegisterContract from "./Pages/Contract/Register";
import Dashboard from "./Pages/Dashboard";

const MyRoutes = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/client" element={<Client />}>
        <Route index element={<ListClient />} />
        <Route path="register" element={<RegisterClient />} />
      </Route>
      <Route path="/contract" element={<Contract />}>
        <Route index element={<ListContract />} />
        <Route path="register" element={<RegisterContract />} />
      </Route>
    </Routes>
  );
};
export default MyRoutes;
