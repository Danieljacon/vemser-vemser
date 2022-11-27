import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Candidates } from "./pages/Candidates";
import { Home } from "./pages/Home";
import { theme } from "./utils/theme";
import { CandidatesProvider } from "./context/CandidatesContext";
import { PrivateRoute } from "./pages/PrivateRoute";
import { Dashboard } from "./pages/Dashboard";

export const Router = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CandidatesProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Candidates />} />

            <Route element={<PrivateRoute />} >
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>

          </Routes>
        </CandidatesProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
