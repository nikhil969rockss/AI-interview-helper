import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../auth/hooks/useAuth";

const Logout = () => {
  const { user, handleLogout } = useAuth();
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    await handleLogout();
    return navigate("/login");
  };
  return (
    <div className="sticky top-0 left-0 container mx-auto flex items-center justify-end pt-4">
      <div className="flex flex-col gap-1">
        <p>Hello👋{user.username}</p>
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
