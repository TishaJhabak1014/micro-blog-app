import { useState , useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() =>{
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(response => {
                if(!response.ok){
                    throw Error("Could not fetch the data");
                    // invalid endpoint
                }
                return response.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setIsPending(false);
                
            }).catch( error => {
                setErr(error.message);
                setIsPending(false);
            });
        }, 1000);
        
    }, []);

    return (  
        <div className="home">
            {err && <div>{err}</div>}
            {isPending && <div> Loading ...</div>}
            {blogs && <BlogList blogs={blogs} title={"All Blogs"}/>  }
        </div>
    );
}
 
export default Home;