import Button from "../../ui/Button.jsx";
import {useFetcher} from "react-router-dom";
import {updateOrder} from "../../services/apiRestaurant.js";

function UpdateOrder () {
    const fetcher = useFetcher();

    return (
        // проведет ревалидацию
        <fetcher.Form method="PATCH" className='text-right'>
            <Button type='primary'>
                Make priority
            </Button>
        </fetcher.Form>
    )
 }

 export default UpdateOrder;

export async function action({params}) {
    const data = {priority: true};
    await updateOrder(params.orderId, data)
    return null;
}