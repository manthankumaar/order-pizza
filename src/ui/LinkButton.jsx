/*eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LinkButton = ({ children, to }) => {
  const className = "text-sm text-blue-500 hover:text-blue-700 hover:underline";
  const navigate = useNavigate();
  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        &larr;{children}{" "}
      </button>
    );

  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
};

export default LinkButton;
