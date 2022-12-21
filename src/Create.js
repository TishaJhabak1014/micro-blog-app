import {useState} from 'react';

const Create = () => {
    const [title, setTitle] = useState('give a title here');
    const [body, setBody] = useState('write your blog here');
    const [author, setAuthor] = useState('mario');


    return (  
        <div className="create">
            <h2>Add a new blog</h2>
            <form action="">
                <label>Blog title: </label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <label>Blog body: </label>
                <textarea name="" id="" cols="30" rows="10" value={body} onChange={(e) => setBody(e.target.value)}required></textarea>
                <label>Blog author: </label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
}
 
export default Create;