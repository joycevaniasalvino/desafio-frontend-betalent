import Logo from "../assets/images/Logo.png"
function Header(){
    return (
        <header>
            <div>
                <img src={Logo} alt="Logo BeTalent" />
            </div>
        </header>
    )
}

export default Header;