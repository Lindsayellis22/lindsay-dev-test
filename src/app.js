import "./App.css";
import { Button } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import "animate.css";
import { useState } from "react";
import Carasaul from "./components/Carasaul";
import ScrollAnimation from "react-animate-on-scroll";
import Lab from "./svgIcons/Lab";
import Hygeine from "./svgIcons/Hygeine";
import Expertise from "./svgIcons/Expertise";
import Retention from "./svgIcons/Retention";
import LogoWhite from "./svgIcons/LogoWhite";
import Instagram from "./svgIcons/Instagram";
import Facebook from "./svgIcons/Facebook";

function App(props) {
	const [showMore, setShowMore] = useState(false);
	const [value, setValue] = useState(5);

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
		<body className="wrapper">
			<header>
				<div className="hero-image">
					<div className="white-logo">
						<LogoWhite />
					</div>
					<div className="hero-button">
						<h1 className="animate__animated animate__fadeIn animate__slower">
							WELCOME TO
						</h1>
						<h2 className="hero-h2">Rooster Grin</h2>
						<Button variant="contained" style={style}>
							Learn More
						</Button>
					</div>
				</div>
			</header>
			<section className="section1">
				<div className="section-text1">
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
			</section>
			<div className="section2">
				<div className="section2-text">
					<ScrollAnimation animateIn="animate__animated animate__fadeInDown">
						<h2>LOREM IPSUM</h2>
					</ScrollAnimation>
					<Button style={style1} variant="contained">
						BUTTON BUTTON
					</Button>
				</div>
			</div>
			<div className="section3">
				<div className="section3-text">
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
					<div className="icon animate__bounceIn">
						<div className="inner-icon">
							<Lab />
						</div>
						<h5>HELLO</h5>
					</div>
					<div className="icon animate__bounceIn">
						<div className="inner-icon">
							<Hygeine />
						</div>
						<h5>Hello</h5>
					</div>
					<div className="icon animate__bounceIn">
						<div className="inner-icon">
							<Expertise />
						</div>
						<h5>hello</h5>
					</div>
					<div className="icon animate__bounceIn">
						<div className="inner-icon">
							<Retention />
						</div>
						<h5>hello</h5>
					</div>
				</div>
			</div>
			<div className="section4">
				<div className="section4-text">
					<div>
						<ScrollAnimation animateIn="animate__animated animate__fadeInDown">
							<h2>LOREM IPSUM</h2>
						</ScrollAnimation>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Magnis
							dis parturient montes nascetur ridiculus mus mauris. Ullamcorper
							morbi tincidunt ornare massa eget egestas purus.
						</p>
						<Button style={style1} variant="contained">
							BUTTON BUTTON
						</Button>
					</div>
				</div>
			</div>
			<div className="section5">
				<div className="section5-text">
					<ScrollAnimation animateIn="animate__animated animate__fadeInDown">
						<h2 className="h1-black">
							LOREM IPSUM
							<br />
							dolor sit amet
						</h2>
					</ScrollAnimation>
					<Box component="fieldset" mb={3} borderColor="transparent">
						<Rating name="read-only" value={value} readOnly />
					</Box>
				</div>
				<div className="carousel-container">
					<Carasaul />
				</div>
			</div>
			<footer>
				<h5>Follow Us:</h5>
				<div className="footer-icon-container">
					<Instagram />
					<Facebook />
				</div>
			</footer>
		</body>
	);
}

export default App;
