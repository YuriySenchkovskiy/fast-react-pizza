import {Link} from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";
import Username from "../features/user/Username.jsx";

function Header () {
    return (
        <header className='flex items-center justify-between
        bg-yellow-400 uppercase px-4 py-4 max-h-12 border-b border-stone-200 sm:px-6 sm:max-h-24
        font-pizza'>
            <Link to='/' className='tracking-widest'>Fast React Pizza Co.</Link>
            <SearchOrder />

            <Username />
        </header>
    )
 }

 export default Header