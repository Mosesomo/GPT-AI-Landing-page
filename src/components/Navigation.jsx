import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { useState } from "react"

const Navigation = () => {
    const [show, setShow] = useState(false);
  return (
    <div className="flex justify-between text-center items-center p-7 fixed w-[100%] bg-gradient-to-l from-gray-700 via-gray-900 to-black">
        <div>
            <h1 className="text-2xl font-bold cursor-pointer">GPT-<span className="text-blue-500">3</span></h1>
        </div>

        {/*laptop link*/}
        <div>
            <ul className="hidden lg:flex justify-center items-center">
                <li className="mr-4 cursor-pointer"><a href="#" className=" hover:text-red-300 active:text-blue-600">Home</a></li>
                <li className="mr-4 cursor-pointer"><a href="#" className=" hover:text-red-300 active:text-blue-600">What is GPT?</a></li>
                <li className="mr-4 cursor-pointer"><a href="#" className=" hover:text-red-300 active:text-blue-600">Cta</a></li>
                <li className="mr-4 cursor-pointer"><a href="#" className=" hover:text-red-300 active:text-blue-600">Case Studies</a></li>
                <li className="cursor-pointer"><a href="#" className=" hover:text-red-300 active:text-blue-600">Library</a></li>
            </ul>
        </div>
        {/*mobile links*/}
        {show &&(
        <div className="lg:hidden absolute top-[75px] right-0 w-[200px] h-[300px] bg-black z-[900]">
            <div className="flex justify-end">
                <AiOutlineClose className="text-white text-2xl cursor-pointer" onClick={() => setShow(false)} />
            </div>
            <ul className="lg:flex justify-start item-start">
                <li onClick={() => setShow(false)} className="mr-4 cursor-pointer"><a href="#" className="hover:text-red-300 active:text-blue-600">Home</a></li>
                <li onClick={() => setShow(false)} className="mr-4 cursor-pointer"><a href="#" className="hover:text-red-300">What is GPT?</a></li>
                <li onClick={() => setShow(false)} className="mr-4 cursor-pointer"><a href="#" className="hover:text-red-300">Open AI</a></li>
                <li onClick={() => setShow(false)} className="mr-4 cursor-pointer"><a href="#" className="hover:text-red-300">Case studies</a></li>
                <li onClick={() => setShow(false)} className="cursor-pointer"><a href="#" className="hover:text-red-300">Library</a></li>
            </ul>
        </div>
        )}

        {/*buttons sign in*/}
        <div className="flex justify-center items-center gap-3">
            <button type="button">Sign In</button>
            <button type="button" className="bg-red-500 p-2 rounded-md hover:bg-white hover:text-red-600 hover:scale-105 duration-150">Sign Up</button>
            <AiOutlineBars size={30} className="lg:hidden cursor-pointer" onClick={() => setShow(true)} />
        </div>
    </div>
  )
}
export default Navigation