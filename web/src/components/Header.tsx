import CreateDropdownMenu from "./CreateDropdownMenu";

const Header = () => {
    return (
        <header className="w-[72rem] mt-8 flex justify-between items-center">
            <a href=""><img src="/logo-com-degrade.png" alt="logo" /></a>
            <CreateDropdownMenu/>
        </header>
    )
}

export default Header;