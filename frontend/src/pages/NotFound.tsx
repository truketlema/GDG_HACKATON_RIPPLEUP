import { Link } from "react-router-dom"; // if you're using React Router

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-red-400 via-yellow-300 to-orange-400 text-white px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-lg mb-6 text-center max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-white text-orange-500 hover:bg-orange-100 font-semibold px-6 py-2 rounded shadow-md transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
