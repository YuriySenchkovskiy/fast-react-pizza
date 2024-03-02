import PropTypes from 'prop-types';
import Button from "../../ui/Button.jsx";
import {useDispatch} from "react-redux";
import {deleteItem} from "./cartSlice.js";

function DeleteItem ({pizzaId}) {
    const dispatch = useDispatch()

    return (
        <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
            Delete
        </Button>
    )
 }

DeleteItem.propTypes = {
    pizzaId: PropTypes.string.isRequired,
};

 export default DeleteItem