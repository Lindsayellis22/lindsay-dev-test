import "./App.css";
import { Button } from "@material-ui/core";
import "animate.css";

function App(props) {
	const style = {
		backgroundColor: "purple",
		color: "white",
		fontWeight: "bold",
	};
	return (
		<>
			<header className="hero-image">
				<div className="hero-text">
					<h1 className="animate__animated animate__fadeIn animate__slower">
						WELCOME TO
					</h1>
					<h2 className="hero-second-header">Rooster Grin</h2>
					<Button variant="contained" style={style}>
						Learn More
					</Button>
				</div>
			</header>
			<div className="body-content">
				<div className="body-text">
					<h2>LOREM IPSUM</h2>
					<p>lorem ipsum jdjdjdjd</p>
				</div>
				<img className="img-1" alt="climbing" />
			</div>
		</>
	);
}

export default App;
