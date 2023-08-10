/*eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "../../store";

const UpdatePizzaQuantity = ({ id, currentQuantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1">
      <Button
        onClick={() => {
          dispatch(decreaseItemQuantity(id));
        }}
        type="round"
      >
        -
      </Button>
      <span className="text-xs font-medium">{currentQuantity}</span>
      <Button
        onClick={() => {
          dispatch(increaseItemQuantity(id));
        }}
        type="round"
      >
        +
      </Button>
    </div>
  );
};

export default UpdatePizzaQuantity;
