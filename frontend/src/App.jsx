import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import ThemeProvider from "./context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="shop"></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
