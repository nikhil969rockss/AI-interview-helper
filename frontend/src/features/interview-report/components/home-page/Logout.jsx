import { useNavigate } from "react-router-dom";

import { useAuthStore } from "../../../store/auth.store";

const Logout = () => {
  const { user, handleLogout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    await handleLogout();
    return navigate("/login");
  };
  return (
    <div className="flex w-[20%] items-center justify-end">
      <div className="flex flex-col gap-1">
        <p>Hello👋{user?.username}</p>
        <button
          onClick={handleLogoutClick}
          className="cursor-pointer rounded-md bg-rose-700 px-4 py-2 active:scale-95"
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Logout;
