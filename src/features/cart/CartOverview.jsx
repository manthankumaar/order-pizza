import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utilities/helpers";

const CartOverview = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPizzas = cart.length;
  let totalCartValue = 0;
  totalCartValue = cart.reduce(
    (acc, item) => acc + parseInt(item.totalPrice),
    0,
  );

  return (
    <div className="flex items-center justify-between bg-stone-800 p-3 text-sm uppercase text-stone-200 sm:p-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-200 sm:space-x-4">
        <span>{totalPizzas} pizzas</span>
        <span>${formatCurrency(totalCartValue)}</span>
      </p>
      <Link to="/cart">Open Cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
