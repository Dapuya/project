// import logo from './logo.svg';
import './App.css';
import {Footer} from "./components/footer";
import {Main} from "./components/main"
import {Route, Routes, BrowserRouter} from "react-router-dom";
import {Play} from "./components/play";
import {Navbar} from "./components/navbar";
import React from "react";
import {useNavigate} from 'react-router-dom';
import {Rules} from "./components/rules";
import Categories from "./components/categories";


function App() {

  return (
      <BrowserRouter>
          <Navbar></Navbar>
          <Footer classname={'footer'}></Footer>

          <Routes>
              <Route path='/' element={<Main></Main>}/>
              <Route path='play' element={<Play></Play>}/>
              <Route path='/rules' element={<Rules></Rules>}/>
              <Route path='/categories' element={<Categories></Categories>}/>
          </Routes>



      </BrowserRouter>

  );
}

export default App;
