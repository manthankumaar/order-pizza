/*eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";
import { deleteItem, getCurrentQuantityById } from "../../store";
import UpdatePizzaQuantity from "./UpdatePizzaQuantity";
function CartItem({ item }) {
  const dispatch = useDispatch();
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  const handleDeleteClick = () => {
    dispatch(deleteItem(pizzaId));
  };

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between sm:gap-4">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="mt-2 text-sm font-bold sm:mt-0">
          {formatCurrency(totalPrice)}
        </p>
        <UpdatePizzaQuantity id={pizzaId} currentQuantity={currentQuantity} />
        <Button onClick={handleDeleteClick} type="small">
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
