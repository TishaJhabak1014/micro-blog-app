import { useState , useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    //let name = "mario"; // make this variable reactive
    const [blogs, setBlogs] = useState(null);
    // use props to pass this data from this component to BogList-reuseable component

    useEffect(() =>{
        fetch('http://localhost:8000/blogs')
        .then(response => {
            return response.json();
        })
        .then(data => {
            setBlogs(data);
        }) 
    }, []);

    // [ ] => empty dependency array makes the func run at the initial render only


    // the anon func inside useEffect hook fires on every render, any state/data change triggers a rerender
    // changing state inside useEffect could end up to a continuous loop of renders

    return (  
        <div className="home">
            {blogs && <BlogList blogs={blogs} title={"All Blogs"}/>  }
            {/* propertyname and value */}
        </div>
    );
}
 
export default Home;