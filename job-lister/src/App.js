import {BrowserRouter as Router, Routes, Route, Link} from 
'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';;

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='about' element ={<About/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
