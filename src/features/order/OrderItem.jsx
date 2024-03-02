// eslint-disable-next-line react/prop-types,no-unused-vars
import {formatCurrency} from "../../utils/helpers.js";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types,no-unused-vars
function OrderItem({ item, isLoadingIngredients, ingredients }) {
    // eslint-disable-next-line react/prop-types
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3 space-y-1">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
        <p className='text-am capitalize italic text-stone-500'>{isLoadingIngredients ?
            "Loading..." : ingredients.join(", ")}</p>
    </li>
  );
}

OrderItem.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
  isLoadingIngredients: PropTypes.bool,
  ingredients: PropTypes.array.isRequired,
};

export default OrderItem;
