import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from "./components/Main";
import Intro from './components/Intro';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Themes';
// import { darkTheme } from './components/Themes';
import Access from './components/Access';

const IP = 'localhost';
export const CONNECTION_URL = `http://${IP}:8081/api`;

function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Routes >
          <Route path="/" element={<Intro />} />
          <Route path="/login" element={<Access isLogin={true} />} />
          <Route path="/register" element={<Access isLogin={false} />} />

          <Route path="/main" element={<Main />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App;
 