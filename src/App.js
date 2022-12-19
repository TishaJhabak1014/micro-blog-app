import './App.css';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  // const person = {name: 'yoshi', age: 30};
  const link = "http://www.google.com";
  return (
    <div className="App">
        {/* we have to return a template here by a compnent */}
        <div className="content">
          <h1>{title}</h1>
          <p>Liked {likes} times</p>
          {/* <p>{person}</p> */}
          <p>{10}</p>
          <p>{"hello ninjas"}</p>
          <p>{[1,2,4,5]}</p>
          <p>{Math.random() * 10}</p>

          <a href={link}> Google sites</a>

        </div>
    </div>
  );
}

export default App;
// we export the component