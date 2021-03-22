import React from 'react'; 
import "./App.css";
import Header from "./Componets/Header/Header";
import News from "./Componets/News/News";
import Footer from "./Componets/Footer/Footer";
import Pagination from "./Componets/Pagination/Pagination";



function App(){ /*extends /*Component*/ 
 
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
