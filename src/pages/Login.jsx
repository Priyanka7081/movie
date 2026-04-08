import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <button
        onClick={() => navigate("/home")}
        className="bg-red-600 px-6 py-2 rounded"
      >
        Sign in as Guest
      </button>
    </div>
  );
}