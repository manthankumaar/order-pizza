import { useSelector } from "react-redux";

const UserName = () => {
  const username = useSelector((state) => state.user.username);
  if (!username) return;
  return (
    <div className="hidden text-sm font-semibold sm:block">{username}</div>
  );
};

export default UserName;
