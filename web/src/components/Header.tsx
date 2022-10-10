import { List } from "phosphor-react";

const Header = () => {
    return (
        <header className="w-[72rem] m-8 flex justify-between items-center">
            <a href=""><img src="/public/logo-com-degrade.png" alt="logo" /></a>

            <div className="w-16 h-10 rounded-lg bg-red-500 flex justify-center items-center">
                <List size={32} weight={"bold"} color={'#fff'} />
            </div>
        </header>
    )
}

export default Header;