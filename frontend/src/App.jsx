import "./App.css";
import CreateProduct from "./components/CreateProduct";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
function App() {
  const { theme } = useTheme();
  console.log("theme: ", theme);
  return (
    <BrowserRouter>
      <div className={`app ${theme === "light" && "light-mode"}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
