import { useAuth } from "./features/auth/hooks/useAuth";

const Home = () => {
    const {user} = useAuth()
  return <div className="flex-center flex-col min-h-screen w-full">
    <h1 className="text-4xl">Hello {user?.username}</h1>
    <p>welcome to home page</p>
  </div>;
};

export default Home;
