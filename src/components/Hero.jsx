
const Hero = () => {
  return (
    <div className="lg:flex justify-between items-center p-10">
      <div className="mt-[120px] lg:block justify-center items-center w-[100%]">
        <div className="mb-3 bg-gradient-to-l from-gray-300 via-fuchsia-600 to-orange-600 text-transparent bg-clip-text">
          <h2 className="text-4xl font-bold">Let Build Something</h2>
          <h2 className="text-4xl font-bold">amazing with GPT-3 openAI</h2>
        </div>
        <div className="mb-3">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laudantium deserunt. Molestiae provident quas, ipsum earum explicabo et velit quasi quod dignissimos dolorum error, rerum numquam pariatur esse animi doloribus.</p>
        </div>
        <div className="flex justify-start items-center mb-3 w-[100%]">
          <input className="w-[100%] border-none outline-none bg-sky-950 p-3 rounded-l-md" type="email" placeholder="Enter your Email"></input>
          <button className="bg-red-600 rounded-r-md">Get Started</button>
        </div>
        <div className="flex justify-start items-center gap-2 mt-3">
          <img src="https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/assets/people.png?raw=true" alt="" />
          <p>More than 160000 people are using it</p>
        </div>
      </div>
      <div>
        <img className="bg-clip-border object-cover w-[100%]" src="https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/assets/ai.png?raw=true" alt="" />
      </div>
    </div>
  )
}

export default Hero