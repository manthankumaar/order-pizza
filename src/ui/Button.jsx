/*eslint-disable react/prop-types */
const Button = ({ children, disabled, type, ...rest }) => {
  const base =
    "focus: inline-block text-sm rounded-full bg-yellow-500 font-semibold uppercase  tracking-wide text-stone-700 ring-offset-2 transition-colors duration-300 hover:bg-yellow-400 focus:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300 disabled:cursor-not-allowed sm:tracking-wide ";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-3 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-2.5 md:py-1.5 text-sm",
    secondary:
      "border border-slate-500 text-sm focus:inline-block rounded-full font-semibold uppercase  tracking-wide text-stone-700 ring-offset-1 transition-colors duration-300 hover:bg-stone-400 focus:bg-stone-500 focus:outline-none focus:ring focus:ring-stone-300 disabled:cursor-not-allowed sm:tracking-wide px-3 py-2 md:px-5 md:py-3",
  };
  return (
    <button {...rest} className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
