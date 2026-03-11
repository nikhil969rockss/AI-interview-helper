const Button = ({
  type = "button",
  className,
  loading,
  children,
  icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-md bg-[#67435f] px-4 py-2 transition-all duration-300 active:scale-[0.9] ${loading ? "cursor-not-allowed bg-[#67435f55]" : ""} flex cursor-pointer items-center gap-2 ${className}`}
      type={type}
      disabled={loading}
    >
      {icon}
      {loading ? "loading..." : children}
    </button>
  );
};

export default Button;
