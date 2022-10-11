import { List } from "phosphor-react";

const Header = () => {
    return (
        <header className="w-[72rem] mt-8 flex justify-between items-center">
            <a href=""><img src="/logo-com-degrade.png" alt="logo" /></a>

            <div className="w-16 h-10 rounded bg-red-500 flex justify-center items-center">
                <List size={32} weight={"bold"} color={'#fff'} />
            </div>
        </header>
    )
}

export default Header;