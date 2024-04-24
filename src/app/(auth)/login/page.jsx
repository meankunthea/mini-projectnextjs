'use client'
import {signIn} from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Modal } from 'flowbite';

const LoginPage = () => {
  const router = useRouter();

  async function handleLogin (userInfo){
    
    //define structure
    const newUserInfo = {
      email: userInfo.get("email"),
      password: userInfo.get("password")
    }

    //calling next auth service 
    const res = await signIn('credentials', {
      redirect: false, 
      ...newUserInfo,
    })
    if(res.ok ){
      router.push("/todo-list");
    }
  }
  return (
    <main className="w-screen h-screen bg-white">
      <div className="px-32 ">
        <div className="flex ">
          <img
            src="../assets/icons/logo.svg"
            alt="logo"
            className="w-40 h-40 mr-3"
          />
        </div>
        <div className="flex w-[90%]">
          <form className="max-w-sm mx-auto" action={handleLogin}>
            <h1 className="text-2xl font-bold mb-5">Login</h1>
            <div className="mb-5">
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                name="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>

            <div className="flex mt-4">
              <p>Didn't have account yet?</p>
              <p className="text-blue-800 ml-2 font-bold">
                <Link href="/register">Register</Link>
              </p>
              
            </div>
            <div className="mt-10 text-gray-500 flex justify-center">
              <div className="bg-black w-24 h-[1px] mt-3 mr-4"></div>
              <div>Continue With</div>
              <div className="bg-black w-24 h-[1px] mt-3 ml-4"></div>
            </div>

            <button
              type="submit"
              className="mt-10 text-gray-800 rounded-lg border-2 border-black w-full px-5 py-2.5 text-center dark:hover:bg-blue-700 hover:text-white"
            >
              Google
            </button>
          </form>


          <div className=" w-72">
            <img src="../assets/icons/login.svg" alt="login" />
          </div>
        </div>

      </div>
    </main>
  );
};

export default LoginPage;
