const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>RabbitMaid</h1>

            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={
                        { 
                            color: "white",
                            backgroundColor: "red",
                            borderRadius: '10px'
                        }
                    }>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;