import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="hero w-11/12 mx-auto h-screen lg:overflow-hidden">
			<Navbar />
			<Hero />
		</div>
	);
}

export default App;
