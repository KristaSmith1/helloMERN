import React from "react";
import { Route, Routes } from "react-router-dom";
import Records from "./components/records.js";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Records />} />
      </Routes>
    </div>
  )
}
export default App;