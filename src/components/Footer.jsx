

const Footer = () => {
  return (
    <div className="w-[100%] h-[100%] bg-sky-950 mt-11">
        <div className="flex flex-col justify-center items-center p-6">
            <h1 className="text-2xl font-bold bg-gradient-to-l from-gray-300 via-fuchsia-600 to-orange-600 text-transparent bg-clip-text">Do you want to step into the</h1>
            <h1 className="mb-6 text-2xl font-bold bg-gradient-to-l from-gray-300 via-fuchsia-600 to-orange-600 text-transparent bg-clip-text">Future before others</h1>
            <button className="border-[1px] p-2">Request Early accses</button>
        </div>
        <div className="lg:flex justify-between items-center p-6 w-[100%] md:flex">
            <div className="w-[100%]">
                <h1 className="text-3xl font-bold">GPT-3</h1>
                <p>connect with us All rights Reserved</p>
            </div>
            <div className="w-[100%] mt-5">
                <h3 className="font-bold mb-2">Links</h3>
                <ul> 
                    <li>Overcons</li>
                    <li>Social media</li>
                    <li>counters</li>
                    <li>contacts</li>
                </ul>
            </div>
            <div className="w-[100%] mt-5">
                <h1 className="font-bold mb-2">Company</h1>
                <ul>
                    <li>Terms & conditions</li>
                    <li>Privacy & policy</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer