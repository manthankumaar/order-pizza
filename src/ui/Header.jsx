import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b-2 border-stone-300 bg-yellow-500 p-3 font-pizza uppercase tracking-widest">
      <Link to="/">Order-Pizza Co.</Link>
      <div className="flex gap-2">
        <SearchOrder />
        <UserName />
      </div>
    </header>
  );
};

export default Header;
