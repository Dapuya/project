// import logo from './logo.svg';
import './App.css';
import {Footer} from "./components/footer";
import {Main} from "./components/main"
import {Route, Routes, BrowserRouter} from "react-router-dom";
import {Play} from "./components/play";
import {Navbar} from "./components/navbar";


function App() {
  return (
      <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
              <Route path='/' element={<Main></Main>}/>
              <Route path='play' element={<Play></Play>}/>
          </Routes>
          <Footer></Footer>
      </BrowserRouter>

  );
}

export default App;
