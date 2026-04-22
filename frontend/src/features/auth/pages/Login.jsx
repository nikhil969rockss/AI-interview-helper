import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import InputField from "../components/InputField";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { toast } from "react-toastify";
import { useAuthStore } from "../../store/auth.store";

const Login = () => {
  const { loading, handleLogin } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const TEST_EMAIL = import.meta.env.VITE_TEST_EMAIL;
  const TEST_PASSWORD = import.meta.env.VITE_TEST_PASSWORD;

  const handleSubmit = async (e) => {
    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }
    e.preventDefault();
    await handleLogin({ email, password });
    navigate("/", { replace: true });
  };

  const handleLoginTestUser = async () => {
    await handleLogin({ email: TEST_EMAIL, password: TEST_PASSWORD });
    navigate("/", { replace: true });
  };
  return (
    <div className="bg-background text-on-background font-body-md flex min-h-[60vh] flex-col items-center justify-center overflow-x-hidden">
      {/* HEADER */}
      <Header linkName={"Sign up"} to={"/register"} />
      {/* MAIN */}
      <main className="mt-20 flex w-full max-w-xl items-center justify-center px-6 py-20">
        <div className="glass-panel flex w-full max-w-5xl flex-col overflow-hidden rounded-xl shadow-2xl md:flex-row">
          {/* RIGHT SIDE */}
          <div className="bg-surface-container-lowest w-full p-10">
            <div className="mx-auto max-w-md">
              <div className="mb-10">
                <h1 className="text-center text-2xl font-bold text-white capitalize">
                  Welcome back
                </h1>
                <p className="mt-3 text-center text-sm text-slate-400">
                  Log in to your AI carrer <i className="font-bold">command</i>{" "}
                  center
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* EMAIL */}
                <InputField
                  label="EMAIL"
                  type={"email"}
                  required
                  placeholder="example@gmail.com"
                  iconLeft={<HiOutlineMail />}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                {/* PASSWORD */}

                <InputField
                  label="PASSWORD"
                  placeholder="••••••••"
                  iconLeft={<RiLockPasswordFill />}
                  value={password}
                  type={showPassword ? "text" : "password"}
                  showPassword={showPassword}
                  onTogglePassword={() => setShowPassword(!showPassword)}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                  required
                />

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-center w-full cursor-pointer rounded-lg bg-linear-to-r from-violet-600 to-fuchsia-600 py-3 font-bold text-white transition hover:scale-[0.98] disabled:cursor-not-allowed disabled:from-gray-600 disabled:to-gray-700 disabled:hover:scale-100"
                >
                  {loading ? (
                    <AiOutlineLoading3Quarters
                      size={20}
                      className="animate-spin"
                    />
                  ) : (
                    "Log in"
                  )}
                </button>
              </form>
              <p className="tex-sm mt-4 text-slate-600">
                {"Dont't"} have an account?{" "}
                <Link to={"/register"} className="text-primary hover:underline">
                  Create an account
                </Link>
              </p>

              {/* login as a test user */}
              <button
                onClick={handleLoginTestUser}
                className="mt-4 cursor-pointer text-slate-600 hover:text-white/80 hover:underline"
              >
                Login as a test user
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Login;
