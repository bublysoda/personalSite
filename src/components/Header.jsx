import { Link } from "react-router-dom"
import './Header.css'
export default function Header(){
return(
    <nav className="navbar">
        <Link to="/homepage">Homepage</Link>
        <Link to="/aboutme">About Me</Link>
        <Link to="/myskills">Skills and Accomplishments</Link>
        <Link to="/contact">Contact Me</Link>
    </nav>
    
)
}