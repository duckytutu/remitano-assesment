import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import ShareVideo from "./pages/ShareVideo";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/share"
            element={
              <AuthRoute>
                <ShareVideo />
              </AuthRoute>
            }
          />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
