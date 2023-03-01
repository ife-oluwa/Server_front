import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Users from "./scenes/users";
import Line from "./scenes/line";
import Bar from "./scenes/bar";
import AddUser from "./scenes/add-user";
import Calendar from "./scenes/calendar";
import History from "./scenes/history";
import Dashboard from "./scenes/dashboard";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/users" element={<Users />} />
              <Route path="/line" element={<Line />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/history" element={<History />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
