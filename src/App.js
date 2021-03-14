import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Componets/Header/Header";
import News from "./Componets/News/News";
import Post from "./Componets/Post/Post";
import Footer from "./Componets/Footer/Footer";
// import Last from './Componets/Last/Last'
// import Pagi from './Componets/Pagi/Pagi'
import Pagination from "./Componets/Pagination/Pagination";
import axios from "axios";


function App() {
  return (
    <div className="App">
      
      <Header></Header>

      <News></News>

      <Pagination></Pagination>

      <Footer></Footer>
    
    </div>
  );
}

export default App;
