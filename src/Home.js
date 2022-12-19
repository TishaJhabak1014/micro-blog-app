const Home = () => {
    const handleClick = (e) => {
        console.log('hello, ninjas', e);
        alert("Hey");
    }

    const handleClickAgain = (name,e) => {
        alert("Hey "+ name);
        console.log(e.target);
    }
    return (  
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}> Click me </button>
            <button onClick={(e) => {
                handleClickAgain('mario', e);
            }}> Click me again</button>
        </div>
    );
}
 
export default Home;