import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { loading, handleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin({email, password})
    navigate("/")
  };
  return (
    <main className="flex-center min-h-screen">
      <div className="max-w-135 min-w-100 border border-gray-600/30 p-6 rounded-xl flex flex-col gap-6">
        <h1 className="text-4xl font-bold">Login</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input
            id={"email"}
            name="email"
            inputType="email"
            placeholder="Enter your Email"
            lable={"Email"}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            id={"password"}
            name="password"
            inputType="password"
            placeholder="Enter your Password"
            lable={"Password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button loading={loading} type="submit">Login</Button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link
            className="text-[#9c7b95] font-semibold hover:underline"
            to={"/register"}
          >
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};
export default Login;
