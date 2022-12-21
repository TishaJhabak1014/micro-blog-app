import {useParams} from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, isPending, err} = useFetch(`http://localhost:8000/blogs/${id}`);
    return ( 
        <div className="blog-details">
            {err && <div>{err}</div>}
            {isPending && <div> Loading ...</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <div className="blog-body">
                        {blog.body}
                    </div>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;