import Header from "./components/Header";
import Hero from "./components/Hero";

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
		</div>
	);
}

export default App;
