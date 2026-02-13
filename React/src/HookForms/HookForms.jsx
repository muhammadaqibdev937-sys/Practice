
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset
  } = useForm();

  
  async function onSubmit(data) {
  
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success("Registration Successful", { autoClose: 1200 });
    console.log(data);
    reset();
  }

 
  function onError(errors) {
    Object.values(errors).forEach(err =>
      toast.error(err.message, { autoClose: 3000 })
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="w-full max-w-sm bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col gap-4"
      >
        <h2 className="text-xl font-semibold text-white text-center">
          Register
        </h2>

     
        <div className="flex flex-col gap-1">
          <label className="text-gray-300 text-sm">Name</label>
          <input
            className="p-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            {...register("name", {
              required: "Name is required",
              minLength: { value: 4, message: "Minimum 4 characters" },
              maxLength: { value: 15, message: "Maximum 15 characters" },
              pattern: {
                value: /^[A-Za-z ]+$/,
                message: "Only letters are allowed"
              }
            })}
          />
        </div>

        
        <div className="flex flex-col gap-1">
          <label className="text-gray-300 text-sm">Email</label>
          <input
            className="p-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid email address"
              }
            })}
          />
        </div>

    
        <button
          type="submit"
          disabled={isSubmitting}
          className={`mt-2 py-2 rounded-lg transition text-white 
            ${
              isSubmitting
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }
          `}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
