import { List } from "phosphor-react";

const Header = () => {
    return (
        <header className="w-[72rem] mt-8 flex justify-between items-center">
            <a href=""><img src="/logo-com-degrade.png" alt="logo" /></a>

            <button className="w-16 h-10 rounded bg-red-500 flex justify-center items-center hover:bg-red-600">
                <List size={32} weight={"bold"} color={'#fff'} />
            </button>
        </header>
    )
}

export default Header;