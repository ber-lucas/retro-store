import CartInfo from "../components/CartInfo";
import Header from "../components/Header";
import ProfileInfos from "../components/ProfileInfos";
import ProfileMenu from "../components/ProfileMenu";
import Body from "../components/Store/Body";

function Cart() {
    return(
        <div className="max-w-[1360px] mx-auto flex flex-col items-center gap-16 py-8">
            <Header />
            <CartInfo />

        </div>
    )
}

export default Cart;