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
		<header className="hero-image">
			<div className="hero-text">
				<h1 className="animate__animated animate__fadeIn animate__slower">
					WELCOME TO
				</h1>
				<h2>Rooster Grin</h2>
				<Button variant="contained" style={style}>
					Learn More
				</Button>
			</div>
		</header>
	);
}

export default App;
