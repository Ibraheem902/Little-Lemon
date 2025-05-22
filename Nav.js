import './Nav.css';
function Nav(){
    return(
        <nav className='navbar'>
            <div className='logo'>
                <img src='https://via.placeholder.com/50x50?text=Logo' alt='Little Lemon Logo'/>
                <h2>Little Lemon</h2>
            </div>
            <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}
export default Nav;