/*eslint-disable react/prop-types */
import { formatCurrency } from "../../utilities/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p className="font-bold">
          <span>{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-400">
        {isLoadingIngredients ? (
          "loading...."
        ) : (
          <span>{ingredients?.join(", ")}</span>
        )}
      </p>
    </li>
  );
}

export default OrderItem;
