import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
    
    <header className = 'Header'>
        <Link to = {'/'}>
        🏠
        </Link>
    </header>
    )
}

export default Header