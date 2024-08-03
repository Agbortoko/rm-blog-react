import BlogList from "./BlogList";
import { useEffect, useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {
          title: "My new website",
          body: "lorem ipsum...",
          author: "mario",
          id: 1,
        },
        { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
        {
          title: "Web dev top tips",
          body: "lorem ipsum...",
          author: "mario",
          id: 3,
        },
      ]);


    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("Use Effect Ran");
        console.log(name);
    }, [name]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="Blogs" handleDelete={handleDelete}/>
            <button className="bg-neutral-100 py-3 px-2 rounded-lg hover:bg-neutral-200" onClick={() => setName('Jugan')}>Change Name</button>
            <p>{ name }</p>
        </div>
    ); 

}

// Ended in video number 7 start 8 next


export default Home;