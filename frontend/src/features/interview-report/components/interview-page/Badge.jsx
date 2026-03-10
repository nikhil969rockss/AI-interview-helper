const Badge = ({ className, children }) => {
  return (
    <div
      className={`rounded-md border border-gray-600 px-2 py-1 text-xs font-bold ${className}`}
    >
      {children}
    </div>
  );
};

export default Badge;
