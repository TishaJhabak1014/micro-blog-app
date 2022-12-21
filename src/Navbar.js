import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dobby Blog</h1>
            <div className="links">
                {/* <a href="/">Home</a> */}
                <Link to='/'>Home</Link>
                {/* // anchor tages does not let SPA's handle the routing within the browser itself */}
                {/* <a href="/create" >Create</a> */}
                <Link to='/create'>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
