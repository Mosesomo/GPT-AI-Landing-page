
const Blog = () => {
  return (
    <div className="w-[100%] p-12">
        <div className="bg-gradient-to-l from-gray-300 via-fuchsia-600 to-orange-600 text-transparent bg-clip-text text-4xl font-bold mb-6">
            <h1>A lot is happening,</h1>
            <h1>We are blogging about it.</h1>
        </div>
        <div className="w-[100%] h-[100%]">
            <div className="w-[100%] h-[100%] flex justify-center lg:p-10 mb-7">
                <div className="bg-sky-950 w-[100%] h-[100%]">
                    <img className="w-[100%] object-cover" src="https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/assets/blog01.png?raw=true" alt="" />
                    <div className="p-7 w-[100%] flex flex-col">
                        <p className="mb-4 font-light">sep 17, 2022</p>
                        <h1 className="mb-12 font-bold text-2xl">GPT-3 and open AI is the future.Let us Explore how it is?</h1>
                        <button className="border-[1px] w-[150px] rounded-md mt-11">Read More...</button>
                    </div>
                </div>
            </div>
            <div className="lg:flex justify-center items-center gap-3  md:grid grid-cols-2">
                <div className="bg-sky-950 w-[100%] h-[100%] mb-6">
                    <img className="w-[100%] object-cover" src="https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/assets/blog02.png?raw=true" alt="" />
                    <div className="p-7 w-[100%] flex flex-col">
                        <p className="mb-4 font-light">sep 17, 2022</p>
                        <h1 className="mb-12 font-bold text-2xl">GPT-3 and open AI is the future.Let us Explore how it is?</h1>
                        <button className="border-[1px] w-[150px] rounded-md mt-11">Read More...</button>
                    </div>
                </div>
                <div className="bg-sky-950 w-[100%] h-[100%] mb-5">
                    <img className="w-[100%] object-cover" src="https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/assets/blog03.png?raw=true" alt="" />
                    <div className="p-7 w-[100%] flex flex-col">
                        <p className="mb-4 font-light">sep 17, 2022</p>
                        <h1 className="mb-12 font-bold text-2xl">GPT-3 and open AI is the future.Let us Explore how it is?</h1>
                        <button className="border-[1px] w-[150px] rounded-md mt-11">Read More...</button>
                    </div>
                </div>
                <div className="bg-sky-950 w-[100%] h-[100%] mb-5">
                    <img className="w-[100%] object-cover" src="https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/assets/blog04.png?raw=true" alt="" />
                    <div className="p-7 w-[100%] flex flex-col">
                        <p className="mb-4 font-light">sep 17, 2022</p>
                        <h1 className="mb-12 font-bold text-2xl">GPT-3 and open AI is the future.Let us Explore how it is?</h1>
                        <button className="border-[1px] w-[150px] rounded-md mt-11">Read More...</button>
                    </div>
                </div>
                <div className="bg-sky-950 w-[100%] h-[100%]">
                    <img className="w-[100%] object-cover" src="https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/assets/blog05.png?raw=true" alt="" />
                    <div className="p-7 w-[100%] flex flex-col">
                        <p className="mb-4 font-light">sep 17, 2022</p>
                        <h1 className="mb-12 font-bold text-2xl">GPT-3 and open AI is the future.Let us Explore how it is?</h1>
                        <button className="border-[1px] w-[150px] rounded-md mt-11">Read More...</button>
                    </div>
                </div>   
            </div>
        </div>
    </div>
  )
}

export default Blog