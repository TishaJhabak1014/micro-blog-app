import { useState , useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    //let name = "mario"; // make this variable reactive
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    // use props to pass this data from this component to BogList-reuseable component

    const [name, setName] = useState('Tisha');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() =>{
        console.log('use effect run');
        console.log(name);

    }, [name]);

    // [ ] => empty dependency array makes the func run at the initial render only


    // the anon func inside useEffect hook fires on every render, any state/data change triggers a rerender
    // changing state inside useEffect could end up to a continuous loop of renders

    return (  
        <div className="home">
            <BlogList blogs={blogs} title={"All Blogs"} handleDelete = {handleDelete}/>  
            {/* propertyname and value */}
            <h1>{name}</h1>
            <button onClick={() => setName('-Tisha')}> Click here</button>
        </div>
    );
}
 
export default Home;