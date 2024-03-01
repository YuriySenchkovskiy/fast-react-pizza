import Header from "./Header.jsx";
import CartOverview from "../features/cart/CartOverview.jsx";
import {Outlet, useNavigation} from "react-router-dom";
import Loader from "./Loader.jsx";

function AppLayout () {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return (
        <div className='grid-rows-[auto_1rf_auto] grid h-screen'>

            {isLoading && <Loader />}

            <Header/>

            <div className='overflow-scroll'>
                <main className='max-w-3xl mx-auto'>
                    <Outlet/>
                </main>
            </div>

            <CartOverview/>
        </div>
    )
 }

 export default AppLayout