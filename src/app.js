import "./App.css";
import { Button } from "@material-ui/core";
import "animate.css";
import { useState } from "react";

function App(props) {
	const [showMore, setShowMore] = useState(false);
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
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Magnis
						dis parturient montes nascetur ridiculus mus mauris. Ullamcorper
						morbi tincidunt ornare massa eget egestas purus. Quis eleifend quam
						adipiscing vitae proin. Diam donec adipiscing tristique risus nec
						feugiat. Ipsum dolor sit amet consectetur adipiscing. Ornare aenean
						euismod elementum nisi. Nunc scelerisque viverra mauris in aliquam
						sem.
					</p>
					{showMore ? (
						<p>
							Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt.
							Habitasse platea dictumst quisque sagittis. Vulputate eu
							scelerisque felis imperdiet proin fermentum leo. Turpis egestas
							maecenas pharetra convallis posuere morbi leo urna. Eu consequat
							ac felis donec et odio. Integer malesuada nunc vel risus commodo
							viverra maecenas.
						</p>
					) : null}
					<Button onClick={() => setShowMore(!showMore)}>> Learn More</Button>
				</div>
				<img className="img-1" alt="climbing" />
			</div>
			<div>
				<img className="banner-2" alt="computer" />
			</div>
		</>
	);
}

export default App;
