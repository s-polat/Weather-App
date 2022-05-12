/* import './App.css'; */
import { useState } from "react";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import { DataStore } from "./DataStore";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const user = localStorage.getItem("weatherUser");

  window.onbeforeunload = function () {
    localStorage.removeItem("weatherUser");
    return "";
  };
  return (
    <div className="App">
      <DataStore.Provider value={{ isLogin, setIsLogin }}>
        <Routes>
          <Route path="/" element={user ? <HomePage /> : <Login />} />
        </Routes>
      </DataStore.Provider>
    </div>
  );
}

export default App;
