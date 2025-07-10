import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import { Toaster } from "@/components/ui/toaster"; // ✅ make sure this is correct

function App() {
  return (
    <>
      <Toaster /> {/* ✅ Mount this globally */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
