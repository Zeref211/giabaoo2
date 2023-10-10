
import DieuhuongURL from '../router/DieuhuongURL';
import './../Css/App.css';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Nav from './Nav';
import News from './News';
import NewsDetail from './NewsDetail';


function App() {
  return (
    
    <div className="App">
      <Nav/>
      {/* <Home/> */}
      {/* <News/>  */}
      {/* <NewsDetail/>
      <Contact/> */}
      <DieuhuongURL/>
      <Footer/>
      
    </div>
   
  );
}

export default App;
