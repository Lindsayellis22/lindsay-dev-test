import "./App.css";
import { Button } from "@material-ui/core";
import "animate.css";
import { useState } from "react";
import Carasaul from "./components/Carasaul";
import ScrollAnimation from "react-animate-on-scroll";
import Lab from "./svgIcons/Lab";
import Hygeine from "./svgIcons/Hygeine";
import Expertise from "./svgIcons/Expertise";
import Retention from "./svgIcons/Retention";

function App(props) {
	const [showMore, setShowMore] = useState(false);

	const style = {
		backgroundColor: "purple",
		color: "white",
		fontWeight: "bold",
	};

	const style1 = {
		backgroundColor: "#FF5E0E",
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
			<div className="body-content1">
				<div className="body-text1">
					<ScrollAnimation className="animate__animated animate__fadeInDown">
						<h2>LOREM IPSUM</h2>
					</ScrollAnimation>
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
					<Button className="more" onClick={() => setShowMore(!showMore)}>
						> Learn More
					</Button>
				</div>
				{/* <img className="img-1" alt="climbing" /> */}
			</div>
			<div className="banner-1">
				<div className="banner1-text">
					<ScrollAnimation animateIn="animate__animated animate__fadeInDown">
						<h2>LOREM IPSUM</h2>
					</ScrollAnimation>
					<Button style={style1} variant="contained">
						BUTTON
					</Button>
				</div>
			</div>
			<div className="body-content-2">
				<div className="body-text">
					<ScrollAnimation animateIn="animate__animated animate__fadeInDown">
						<h2>LOREM IPSUM</h2>
					</ScrollAnimation>
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
					<Button className="more" onClick={() => setShowMore(!showMore)}>
						> Learn More
					</Button>
				</div>
				<div className="icon-container">
					<div className="icon-row">
						<div className="icon">
							<Lab />
							<h5>HELLO</h5>
						</div>
						<div className="icon">
							<Hygeine />
							<h5>Hello</h5>
						</div>
					</div>
					<div className="icon-row">
						<div className="icon">
							<Expertise />
							<h5>hello</h5>
						</div>
						<div className="icon">
							<Retention />
							<h5>hello</h5>
						</div>
					</div>
				</div>
			</div>

			<div className="banner-2">
				<div className="banner-2-text">
					<div className="texttext">
						<h2 className="animate__animated animate__fadeInDown">
							LOREM IPSUM
						</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Magnis
							dis parturient montes nascetur ridiculus mus mauris. Ullamcorper
							morbi tincidunt ornare massa eget egestas purus.
						</p>
						<Button style={style1} variant="contained">
							BUTTON
						</Button>
					</div>
				</div>
			</div>

			<div className="body-content">
				<div className="body-text">
					<ScrollAnimation animateIn="animate__animated animate__fadeInDown">
						<h2 className="h1-black">
							LOREM IPSUM
							<br />
							dolor sit amet
						</h2>
					</ScrollAnimation>
				</div>
				<div className="cara">
					<Carasaul />
				</div>
			</div>
			<footer>.</footer>
		</>
	);
}

export default App;
