import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate(); // Hook para redirección

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center bg-gray-900">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-6xl font-bold text-white mb-4">
          Welcome to <span className="text-indigo-600">ERP Stilo</span>
        </h1>
        <p className="text-xl text-gray-400">
          Streamline your business operations with our powerful ERP solution.
        </p>
      </header>

      {/* Main Content */}
      <main className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl">
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Get Started
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of businesses managing their operations efficiently
            with ERP Stilo. Choose an option below to begin your journey.
          </p>
          <div className="space-y-4">
            <button
              onClick={() => navigate("/login")}
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 text-lg cursor-pointer"
            >
              Login to Your Account
            </button>
            <button
              onClick={() => navigate("/register")}
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300 text-lg cursor-pointer"
            >
              Create a New Account
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500">
        <p>
          © {new Date().getFullYear()} ERP Stilo. All rights reserved.
        </p>
      </footer>
    </div>
  );
};