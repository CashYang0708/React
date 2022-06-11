import {Link} from "react-router-dom";

const Navbar=()=>{
    return(
        <nav className="navbar">
            <h1>Ethanos</h1>
            <div className="links">
                <Link to="/coin">Coin</Link>
                <Link to="/create">Create</Link>
                <Link to="/vote">Vote</Link>
            </div>
        </nav>
    );
}
export default Navbar;