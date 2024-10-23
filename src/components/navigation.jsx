import "../Assets/CSS/nav.css"
import {Link} from 'react-router-dom'

function NavrBar_2(){
    return (
    <div>
        <div class="navbar">
            <Link to ='/'>Home</Link>
            <Link to ='/about'>About</Link>
            <Link to ='/news'>News</Link>
            <Link to ='/contact'>Contact</Link>
            <Link to ='/product'>Product</Link>
            <Link to ='/mycounter'>Counter App</Link>
            <Link to ='/random_user'>Random User me API</Link>
            <div class="dropdown">
            <button class="dropbtn">Dropdown 
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            </div>
        </div> 
    </div>
</div>
    )
}

export default NavrBar_2