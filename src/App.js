import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ClientRoutes from "./Routes/ClientRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <ClientRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
