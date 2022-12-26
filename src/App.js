import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";

function App() {
	return (
		<div
			className="bg-black text-white h-screen snap-y snap-mandatory 
    overflow-scroll z-0 scrollbar scrollbar-track-black scrollbar-thumb-blue-800"
		>
			<Header />

			<section id="hero" className="snap-start">
				<Hero />
			</section>

			<section id="about" className="snap-center">
				<About />
			</section>

			<section id="experience" className="snap-center">
				<WorkExperience />
			</section>

			<section id="skills" className="snap-center">
				<Skills />
			</section>
		</div>
	);
}

export default App;
