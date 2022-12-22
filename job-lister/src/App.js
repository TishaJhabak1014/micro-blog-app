import {BrowserRouter as Router, Routes, Route, NavLink} from 
'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';;

function App() {
  return (
    <Router>
      <header>
        <h1>JobHub</h1>
        {/* creates link that are handled within the browser */}
        {/* react-router-dom just swaps the content without sending any request to the browser */}
        {/* navlink has active class associated with it unlink link */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
      </header>
      <main> 
        {/* had to be rendered using urls as specified in path */}
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='about' element ={<About/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
