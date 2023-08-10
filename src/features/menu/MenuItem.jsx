/*eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";
import { addItem, getCurrentQuantityById } from "../../store";
import DeleteItem from "./DeleteItem";
import UpdatePizzaQuantity from "../cart/UpdatePizzaQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currenQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currenQuantity > 0;
  const dispatch = useDispatch();

  const handleClick = () => {
    const item = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(item));
  };
  return (
    <li className="flex gap-4 p-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-60 grayscale" : ""}`}
      />
      <div className="flex grow flex-col gap-2">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-slate-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm font-medium">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {isInCart ? (
            <div className="flex items-center gap-1 sm:gap-3">
              <UpdatePizzaQuantity id={id} currentQuantity={currenQuantity} />
              <DeleteItem id={id} />
            </div>
          ) : null}
          {!soldOut && !isInCart && (
            <Button onClick={handleClick} type="small">
              +Add to Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
