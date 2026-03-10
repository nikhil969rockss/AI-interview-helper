const NavLinks = ({ activeNav, setActiveNav, item }) => {
  return (
    <div
      onClick={() => setActiveNav(item.id)}
      key={item.id}
      className={`flex cursor-pointer items-center gap-1 rounded-md p-2 ${activeNav === item.id ? "bg-blue-950 text-blue-400" : ""}`}
    >
      {item.icon}
      <p>{item.label}</p>
    </div>
  );
};

export default NavLinks;
