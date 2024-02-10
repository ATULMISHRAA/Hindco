import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../Homepage";

const RoutersLayout=()=>{
    return(
        <Router>
            <Routes>
          <Route
            path="/"
            exact
            element={<Homepage/>}
          />
          <Route
            path="/home"
            exact
            element={<Homepage/>}
          />
          </Routes>
          </Router>
        
    )
}
export default RoutersLayout;