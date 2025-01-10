import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../helpers/http-client";
import Button from "../components/Button";
import Swal from "sweetalert2";

function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleLogin = async (e)=>{

        e.preventDefault()
        try {
            const responseLogin = await baseURL.post("/login", {username, password})
            if(!responseLogin.data.accessToken) throw new Error("Invalid response")
            localStorage.setItem("access_token", responseLogin.data.accessToken)
            navigate("/")
        } catch (error) {
          // console.log(error.message)
          Swal.fire("Invalid Login", "Username or password is incorrect", "error")
        }
    }


  return (
 <div className="flex items-center justify-center min-h-screen bg-white w-full">
      <div className="w-full  p-6 bg-white shadow-md rounded">
        <form onSubmit={handleLogin}>
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-center font-semibold leading-7 text-gray-900">
              Login Page
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-full">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="usernamel"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>


              <div className="sm:col-span-full">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-full">
                <Button name="Login" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login