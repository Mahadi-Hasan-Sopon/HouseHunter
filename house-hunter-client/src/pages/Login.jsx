import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-gray-50 h-[calc(100vh-80px)]">
      <div className="flex flex-col items-center pt-4 justify-center h-full">
        <h3 className="text-4xl font-bold text-[#ff5c44]">Login Now!</h3>

        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mt-1 p-2"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  name="email"
                  id="email"
                  {...register("email", { required: true })}
                  type="email"
                  className="block w-full mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-2">Email is required</p>
              )}
            </div>

            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  name="password"
                  id="password"
                  {...register("password", { required: true, minLength: 6 })}
                  type="password"
                  className="block w-full mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-2">
                  Password is required
                </p>
              )}
            </div>

            <div className="flex items-center mt-4">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-[#ff5c41] via-[#ff8c41] to-[#ff5c41] rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-4 text-grey-600">
            {"Don't have an account? "}{" "}
            <span>
              <Link to="/register" className="text-[#ff5c41] hover:underline">
                Register
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
