/*eslint-disable react/prop-types*/

import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "../../store";

const DeleteItem = ({ id }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteItem(id));
  };
  return (
    <Button onClick={handleClick} type="small">
      Delete
    </Button>
  );
};

export default DeleteItem;
