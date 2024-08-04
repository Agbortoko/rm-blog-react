import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1 className="font-bold text-2xl text-red-500">RabbitMaid</h1>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" className='create py-3 px-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all ease-in-out'>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;