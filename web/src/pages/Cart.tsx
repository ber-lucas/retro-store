import CartInfo from "../components/CartInfo";
import Header from "../components/Header";

function Cart() {
    return(
        <div className="max-w-[1360px] mx-auto flex flex-col items-center gap-16 py-8">
            <Header />
            <CartInfo />
        </div>
    )
}

export default Cart;