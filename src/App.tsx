import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Tags from "./Pages/Tags";
import Links from "./Pages/Links";
import RedirectLink from "./Redirect/RedirectLink";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/links" element={<Links />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/r/:short_code" element={<RedirectLink />} />
      </Routes>
    </BrowserRouter>
  );
}
