import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utilities/helpers";
import { getTotalPizzas, getTotalCartValue } from "../store";

const CartOverviwe = () => {
  const totalPizzas = useSelector(getTotalPizzas);
  const totalCartValue = useSelector(getTotalCartValue);
  if (!totalPizzas) return;

  return (
    <div className="flex items-center justify-between bg-stone-800 p-3 text-sm uppercase text-stone-200 sm:p-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-200 sm:space-x-4">
        <span>{totalPizzas} pizzas</span>
        <span>{formatCurrency(totalCartValue)}</span>
      </p>
      <Link to="/cart">Open Cart &rarr;</Link>
    </div>
  );
};

export default CartOverviwe;
