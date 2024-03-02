import LinkButton from "../../ui/LinkButton.jsx";

function EmptyCart() {
  return (
    <div className='px-4 py-3'>
        <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="font-semibold">Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
