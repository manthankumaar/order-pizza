import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getUser } from "../../store";

function Cart() {
  const dispatch = useDispatch();
  const username = useSelector(getUser);
  const cart = useSelector(getCart);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2>
        Your cart, <span className="uppercase">{username}</span>{" "}
      </h2>
      {cart.length === 0 ? (
        <p className="p-3 font-semibold">
          Please Add some pizzas in to your Cart 🍕
        </p>
      ) : (
        <ul className="divide-y divide-stone-400 border-b border-stone-400 p-3">
          {cart.map((item) => {
            return <CartItem item={item} key={item.pizzaId} />;
          })}
        </ul>
      )}
      <div className="mt-6 space-x-4 space-y-2 sm:space-y-0">
        <Button type="primary">
          <Link to="/order/new">Order pizzas</Link>
        </Button>
        <Button onClick={handleClearCart} type="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
