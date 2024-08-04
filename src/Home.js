
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
           {error && <div className="text-center py-3 px-2 bg-red-100 border border-red-900 rounded-lg text-red-900 mb-5 animate-pulse">{error}</div>}
           {isPending && <div className="text-center animate-bounce text-3xl font-semibold">Loading...</div>}
           {blogs && <BlogList blogs={blogs} title="Blogs"/>}
        </div>
    ); 

}

export default Home;