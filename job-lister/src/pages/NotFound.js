import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <h2>Page Not Found</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, nihil? Atque eligendi eius officia alias dicta, quo est tempora sequi minus? Placeat magnam labore ut sequi ipsa nulla, culpa expedita eligendi architecto vel rerum nostrum dolore sapiente, necessitatibus, maxime eum unde? Corporis ullam, odio deserunt non dolores soluta odit repudiandae quam, totam sequi earum eius officia nisi exercitationem et explicabo quidem, culpa maiores sit minus nihil. Soluta, quae in. Necessitatibus accusantium obcaecati totam quidem beatae iure placeat voluptate dignissimos explicabo tempora ullam fuga repellendus hic quas laudantium similique ratione numquam laborum ut fugiat doloribus, tempore perspiciatis! Repellendus esse voluptatum doloribus?</p>

            <p>Go to <Link to="/">Homepage</Link></p>
        </div>
     );
}
 
export default NotFound;