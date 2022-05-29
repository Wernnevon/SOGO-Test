import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes";
import SideNav from "./Components/SideNav";
import "./App.css";
import { ToastContextProvider } from "./Context/Toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <SideNav />
        <ToastContextProvider>
          <MyRoutes />
        </ToastContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
