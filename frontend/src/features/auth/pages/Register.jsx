import React, { useState } from "react";
import InputField from "../components/InputField";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
import { useAuthStore } from "../../store/auth.store";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { handleRegister, loading } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !username || !password) {
      toast.error("Please fill all fields");
      return;
    }
    await handleRegister({ username, email, password });
    navigate("/", { replace: true });
    toast.success("Register successfully");
  };

  return (
    <div className="bg-background text-on-background font-body-md flex min-h-[60vh] w-full flex-col items-center justify-center overflow-x-hidden">
      {/* HEADER */}
      <Header linkName={"Log In"} to={"/login"} />
      {/* MAIN */}
      <main className="mt-20 flex max-w-7xl items-center justify-center px-6 py-20">
        <div className="glass-panel flex w-full max-w-5xl flex-col overflow-hidden rounded-xl shadow-2xl md:flex-row">
          {/* LEFT SIDE */}
          <div className="relative flex w-full flex-col justify-between overflow-hidden bg-[#020617] p-10 md:w-1/2">
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-violet-500/20 blur-[100px]" />
            <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-[100px]" />

            <div className="relative z-10">
              <span className="text-primary text-xs tracking-[0.2em]">
                ELEVATE YOUR CAREER
              </span>

              <h2 className="mt-6 text-4xl leading-tight font-bold text-white">
                Master every{" "}
                <span className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  conversation.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-slate-400">
                Our AI analyzes your speech patterns, body language, and content
                in real-time to provide the edge you need to land your dream
                role.
              </p>
            </div>

            {/* TESTIMONIAL */}
            <div className="glass-panel mt-10 rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-slate-200 italic">
                "This platform turned my anxiety into confidence. Got 3 offers
                in 1 week."
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="border-primary/30 h-10 w-10 overflow-hidden rounded-full border">
                  <img
                    src="https://i.pravatar.cc/100"
                    alt="user"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Sarah Jenkins</p>
                  <p className="text-xs text-slate-400">Product Designer</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-surface-container-lowest w-full p-10 md:w-1/2">
            <div className="mx-auto max-w-md">
              <div className="mb-10">
                <h1 className="text-2xl font-bold text-white">
                  Create Account
                </h1>
                <p className="mt-1 text-sm text-slate-400">
                  Join thousands of professionals using AI to scale their
                  careers.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <InputField
                  label="USER NAME"
                  placeholder="johnDoe"
                  required
                  iconLeft={<IoPersonCircleOutline />}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

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
                    "Sign up"
                  )}
                </button>
              </form>
              <p className="tex-sm mt-4 text-slate-600">
                Already have an account?{" "}
                <Link to={"/login"} className="text-primary hover:underline">
                  Back to Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
