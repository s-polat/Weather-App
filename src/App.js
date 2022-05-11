/* import './App.css'; */
import { useState } from "react";
import Login from "./components/Login";
import Weather from "./components/Weather";
import { Routes, Route } from "react-router-dom";
import { DataStore } from "./DataStore";

function App() {
  
  const[isLogin, setIsLogin]= useState(false)

  const user = localStorage.getItem("weatherUser");
  return (
    <div className="App">
      <DataStore.Provider value={{isLogin, setIsLogin  }}>
        <Routes>
          <Route path="/" element={user ? <Weather /> : <Login />} />

        </Routes>
      </DataStore.Provider>
    </div>
  );
}

export default App;
