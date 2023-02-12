import "./App.css";
import { Button } from "@material-ui/core";
import "animate.css";
import { useState } from "react";
import Carasaul from "./components/Carasaul";
import ScrollAnimation from "react-animate-on-scroll";

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
			<div className="body-content">
				<div className="body-text">
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
				<img className="img-1" alt="climbing" />
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
					<svg
						className="lab"
						id="5dfaa03d-44bc-4b53-817f-a629b72c7d01"
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 50 50"
					>
						<title>home-lab</title>
						<path
							d="M25,14.31c-13.42,0-24.3,3.5-24.3,7.81V16.9C.72,12.59,11.59,9.1,25,9.1s24.3,3.5,24.3,7.81v5.21C49.31,17.81,38.43,14.31,25,14.31Z"
							fill="#9964aa"
						/>
						<path
							d="M25,24.44c-13.42,0-24.3-3.5-24.3-7.81v5.21c0,4.31,10.88,7.81,24.3,7.81s24.3-3.5,24.3-7.81V16.63C49.31,20.94,38.43,24.44,25,24.44Z"
							fill="#6b427a"
						/>
						<path
							d="M41.18,19.38l-2.49.43a79.74,79.74,0,0,1-27.35,0l-2.49-.43a2.22,2.22,0,0,0-2.6,2.19v9.51H43.78V21.57A2.22,2.22,0,0,0,41.18,19.38Z"
							fill="#6b437b"
						/>
						<path
							d="M41.18,20.37l-2.49.43a79.74,79.74,0,0,1-27.35,0l-2.49-.43a2.22,2.22,0,0,0-2.6,2.19v9.51H43.78V22.56A2.22,2.22,0,0,0,41.18,20.37Z"
							fill="#fdd140"
						/>
						<path
							d="M39.61,25.77H10.41a4.17,4.17,0,0,0-4.16,4.16V34a7.13,7.13,0,0,0,7.12,7.12h3.69A7.13,7.13,0,0,0,24.18,34a.83.83,0,1,1,1.66,0A7.13,7.13,0,0,0,33,41.17h3.69A7.13,7.13,0,0,0,43.78,34V29.94A4.17,4.17,0,0,0,39.61,25.77Z"
							fill="#6b437b"
						/>
						<path
							d="M39.61,27.08H10.41a2.86,2.86,0,0,0-2.86,2.86V34a5.82,5.82,0,0,0,5.81,5.81h3.69A5.82,5.82,0,0,0,22.88,34a2.14,2.14,0,1,1,4.27,0A5.83,5.83,0,0,0,33,39.86h3.69A5.82,5.82,0,0,0,42.47,34V29.94A2.86,2.86,0,0,0,39.61,27.08Z"
							fill="#fee499"
						/>
						<path
							d="M33,39.86h3.69a5.82,5.82,0,0,0,5.78-5.22l-.2,0a95.06,95.06,0,0,1-14.66,1.54A5.81,5.81,0,0,0,33,39.86Z"
							fill="#ffd45c"
						/>
						<path
							d="M22.45,36.22A95.06,95.06,0,0,1,7.79,34.68l-.2,0a5.82,5.82,0,0,0,5.78,5.22h3.69A5.82,5.82,0,0,0,22.45,36.22Z"
							fill="#ffd45c"
						/>
						<path
							d="M27.85,15H22.17a.65.65,0,0,1-.65-.65V9a.65.65,0,0,1,.65-.65h5.68a.65.65,0,0,1,.65.65v5.37A.65.65,0,0,1,27.85,15Zm-5-1.31H27.2V9.65H22.83Z"
							fill="#fdd140"
						/>
						<path
							d="M19.46,39.34V27.08h-2V39.84A5.76,5.76,0,0,0,19.46,39.34Z"
							fill="#fee9ad"
						/>
						<path
							d="M16.37,39.86V27.08H11.62V39.59a5.79,5.79,0,0,0,1.75.27Z"
							fill="#fee9ad"
						/>
						<path
							d="M35.91,39.86h.74A5.77,5.77,0,0,0,39.71,39V27.09h-3.8Z"
							fill="#fdd140"
						/>
						<path
							d="M37.56,39.78A5.76,5.76,0,0,0,39,39.36h0a5.91,5.91,0,0,0,.69-.36V35.1q-1.89.3-3.8.52v4.25h.74a5.73,5.73,0,0,0,.75-.05Z"
							fill="#fdd140"
						/>
					</svg>
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
