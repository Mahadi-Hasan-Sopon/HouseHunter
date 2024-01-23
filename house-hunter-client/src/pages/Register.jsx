import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const RegisterPage = () => {
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
        <h3 className="text-4xl font-bold text-[#ff5c44]">Register Now!</h3>

        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mt-1 p-2"
              >
                Full Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  name="fullName"
                  id="fullName"
                  {...register("fullName", { required: true })}
                  type="text"
                  className="block w-full mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-2">Name is required</p>
              )}
            </div>
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

            <div className="mt-4">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Select Role
              </label>
              <div className="flex flex-col items-start mt-1">
                <select
                  name="role"
                  id="role"
                  {...register("role", { required: true })}
                  className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Role</option>
                  <option value="houseRenter">House Renter</option>
                  <option value="houseOwner">House Owner</option>
                </select>
              </div>
              {errors.role && (
                <p className="text-red-500 text-xs mt-2">Role is required</p>
              )}
            </div>

            <div className="mt-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="flex flex-col items-start">
                <input
                  name="phoneNumber"
                  id="phoneNumber"
                  {...register("phoneNumber", {
                    required: true,
                    minLength: 11,
                    validate: (value) =>
                      // Check if the phone number starts with +880 or 0 and has a total of 11 digits
                      /^(?:\+880|0)(\d{10})$/.test(value),
                  })}
                  type="text"
                  className="block w-full mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.phoneNumber.type === "required"
                    ? "Phone number is required"
                    : errors.phoneNumber.type === "minLength"
                    ? "Phone number must be 11 digits"
                    : "Phone number must start with +880 or 0"}
                </p>
              )}
            </div>

            <div className="flex items-center mt-4">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-[#ff5c41] via-[#ff8c41] to-[#ff5c41] rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 text-grey-600">
            Already have an account?{" "}
            <span>
              <Link to="/login" className="text-[#ff5c41] hover:underline">
                Log in
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
