import { registerService } from "@/service/auth.service";
import { Modal } from 'flowbite';
import { redirect } from "next/navigation";

const Register = () => {
  async function handleSubmit(userInfo) {
    'use server'
    const newRegister = {
      firstname: userInfo.get('firstname'),
      lastname: userInfo.get('lastname'),
      gender: "idk",
      profile_url: "hello",
      email: userInfo.get('email'),
      password: userInfo.get('password'),
    }
    const res = await registerService(newRegister);
    console.log("data : ", res)
    if(res.status == 200){
      redirect("/login")
    }
  }

  return (
    <main className="w-screen h-screen bg-white">
      <div className="px-32 py-20">
        {/* webite logo */}
        <div className="flex mb-12">
          <img
            src="../assets/icons/logo.svg"
            alt="logo"
            className="w-40 h-40 mr-3"
          />
        </div>

        {/* input field to signin */}
        <div className="flex justify-between w-[90%] ">
          <form className="w-[60%]" action={handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium">
                  First name:
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="firstname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="last_name" className="block mb-2 text-sm font-medium">
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="lastname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.cena@gmail.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phoneNumber"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="123-456-789"
                  // pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="confirm_password"
                  className="block mb-2 text-sm font-medium"
                >
                  Confirm password:
                </label>
                <input
                  type="password"
                  id="confirm_password"
                  name="confirmPassword"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign up
            </button>
          </form>

          <div className="w-80 h-80 mr-20">
            <img
              src="../assets/icons/sign-up.svg"
              alt="sign up"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
