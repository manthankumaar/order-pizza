import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import { Link } from "react-router-dom";
function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 p-2 text-center sm:my-16 md:p-4">
      <h1 className="mb-6  font-sans text-xl font-semibold text-stone-700 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username ? (
        <Button type="primary">
          <Link to="/menu">Menu</Link>{" "}
        </Button>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
