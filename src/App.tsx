import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes";
import SideNav from "./Components/SideNav";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <SideNav />
        <MyRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
