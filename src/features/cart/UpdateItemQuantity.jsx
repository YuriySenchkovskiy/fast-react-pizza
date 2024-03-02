import Button from "../../ui/Button.jsx";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {decreaseItemQuantity, increasseItemQuantity} from "./cartSlice.js";

function UpdateItemQuantity ({pizzaId, currentQuantity }) {
    const dispatch = useDispatch();

    return (
        <div className="flex gap-2 items-center md:gap-3">
            <Button type="round" onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
            <span className="text-sm font-medium">{currentQuantity}</span>
            <Button type="round" onClick={() => dispatch(increasseItemQuantity(pizzaId))}>+</Button>
        </div>
    )
 }

 UpdateItemQuantity.propTypes = {
     pizzaId: PropTypes.string.isRequired,
     currentQuantity: PropTypes.number.isRequired,
 };

 export default UpdateItemQuantity ;