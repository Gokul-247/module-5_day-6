import "../Assets/CSS/nav.css"

function NavrBar_1(){
    return (
    <div>
        <div class="navbar">
            
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/news">News</a>
            <a href="/contacts">Contacts</a>
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

export default NavrBar_1