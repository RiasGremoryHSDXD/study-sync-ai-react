import '../css/LogInForm.css'
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa'
import { useState } from "react"



export default function LogInForm() {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
  return (
    <form
        className="form-container"
        action=""
        >

        <div className="form-container-items">

            <div className="flex flex-col">
                <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="flex flex-col">
                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="flex flex-col">
                <button className="bg-sky-400 hover:bg-sky-300 text-white">Log in</button>
                
                <div className='flex justify-center'>
                    <label className='text-sky-400 cursor-pointer hover:text-sky-300 hover:underline text-base'>
                        Forget password
                    </label>
                </div>

                <div className='flex justify-center'>
                    <label className='text-green-400 cursor-pointer hover:text-green-300 hover:underline text-base'>
                        Create account
                    </label>
                </div>

                <hr className='m-2'></hr>

                <button className="relative w-full px-4 py-2 font-normal bg-[#dc3545] hover:bg-[#bb2d3b] text-white rounded-md">
                    <FaGoogle className="absolute left-4 top-1/2 -translate-y-1/2 text-xl" />
                    <span className="block text-center w-full 2xl:text-xl sm:text-lg text-base">Sign in with Google</span>
                </button>

                <button className="relative w-full px-4 py-2 font-normal bg-[#0d6efd] hover:bg-[#0b5ed7] text-white rounded-md">
                    <FaFacebook className="absolute left-4 top-1/2 -translate-y-1/2 text-xl" />
                    <span className="block text-center w-full 2xl:text-xl sm:text-lg text-base">Sign in with Facebook</span>
                </button>

                <button className="relative w-full px-4 py-2 font-normal bg-[#0dcaf0] hover:bg-[#31d2f2] text-white rounded-md">
                    <FaTwitter className="absolute left-4 top-1/2 -translate-y-1/2 text-xl" />
                    <span className="block text-center w-full 2xl:text-xl sm:text-lg text-base">Sign in with Twitter</span>
                </button>
            </div>
        </div>
    </form>
  )
}
