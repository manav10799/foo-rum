import Card from "../components/Card";
import login from "../assets/log-in-2.svg";
import { useContext, useState } from "react";
import CurrentUser from "../context/UserContext";
import { USERS as INITIAL_USERS } from "../utils/users";
import { useNavigate } from "react-router";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const { user, setUser } = useContext(CurrentUser);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [users, setUsers] = useState([...INITIAL_USERS]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAuth = (e) => {
    e.preventDefault();
    setError("");
    if (isSignUp) {
      if (!form.email || !form.password || !form.repeatPassword) {
        setError("Please fill all fields");
        return;
      }
      if (form.password !== form.repeatPassword) {
        setError("Passwords do not match");
        return;
      }
      const userExists = users.some((u) => u.email === form.email);
      if (userExists) {
        setError("User already exists with this email");
        return;
      }
      const newUser = {
        email: form.email,
        password: form.password,
        name: form.email.split("@")[0],
      };
      setUsers([...users, newUser]);
      setUser(newUser);
      setError("");
      navigate("/");
      alert("Signed up successfully!");
    } else {
      if (!form.email || !form.password) {
        setError("Please fill all fields");
        return;
      }
      const currentUser = users.find(
        (u) => u.email === form.email && u.password === form.password
      );
      if (currentUser) {
        setUser(currentUser);
        setError("");
        alert("Signed in successfully!");
        navigate("/");
      } else {
        setError("No user found with these credentials");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-65px)]">
      <Card
        innerChildren={
          <div className="text-center pt-7.5 px-12.5 pb-14">
            <div className="mb-5 bg-[#F8F8F8] rounded-full w-[53px] py-4 pr-4 pl-3 mx-auto flex items-center justify-center">
              <img src={login} alt="Login icon" />
            </div>
            <h2 className="text-xl font-bold mb-1">
              {isSignUp
                ? "Create an account to continue"
                : "Sign in to continue"}
            </h2>
            <p className="text-black/45 text-sm mb-16">
              {isSignUp
                ? "Create an account to access all the features on this app"
                : "Sign in to access all the features on this app"}
            </p>

            <form
              className="flex flex-col gap-4 text-left"
              onSubmit={handleAuth}
            >
              <div>
                <label className="block text-sm mb-1 font-semibold">
                  Email or username
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email or username"
                  className="bg-[#F4F4F4] w-full rounded-lg px-3.5 py-3 focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="bg-[#F4F4F4] w-full rounded-lg px-3.5 py-3 focus:outline-none text-sm"
                />
              </div>
              {isSignUp && (
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Repeat password
                  </label>
                  <input
                    type="password"
                    name="repeatPassword"
                    value={form.repeatPassword}
                    onChange={handleChange}
                    placeholder="Enter your password again"
                    className="bg-[#F4F4F4] w-full rounded-lg px-3.5 py-3 focus:outline-none text-sm"
                  />
                </div>
              )}

              {error && (
                <div className="text-red-600 text-sm font-medium mb-2 text-center animate-pulse">
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-xl py-3.5 font-semibold hover:bg-blue-700 transition cursor-pointer text-sm"
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
            </form>
          </div>
        }
        outerChildren={
          <p
            className="text-center text-black/60 text-sm pt-3.5 pb-0.5 font-medium"
            onClick={() => setIsSignUp((prev) => !prev)}
          >
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
            <a className="text-[#5057EA] font-semibold text-sm cursor-pointer">
              {isSignUp ? "Sign In" : "Sign Up"}
            </a>
          </p>
        }
      />
    </div>
  );
};

export default Login;
