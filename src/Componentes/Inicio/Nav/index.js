import "./Nav.css";

const Nav = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="sobremim">Sobre Mim</a></li>                
                <li><a href="contato">Contato</a></li>                
            </ul>
        </nav>
    );
};

export default Nav;