import "./Nav.css";

const Nav = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Blog</a></li>                
                <li><a href="#about">Sobre Mim</a></li>                
            </ul>
        </nav>
    );
};

export default Nav;