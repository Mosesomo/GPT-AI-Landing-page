import Brand from "./components/Brand"
import Cta from "./components/Cta"
import Hero from "./components/Hero"
import Navigation from "./components/Navigation"
import Article from "./components/Article"
import Possibility from "./components/possibility"



const App = () => {
  return (
    <div className="bg-gradient-to-l from-gray-700 via-gray-900 to-black h-full text-white">
        <Navigation />
        <Hero />
        <Cta />
        <Brand />
        <Article />
        <Possibility />
    </div>
  )
}
export default App