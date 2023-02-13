import React from "react";
import "./Carasaul.css";
import Carousel from "react-bootstrap/Carousel";

function Carasaul(props) {
	return (
		<div>
			<section className="cara">
				<Carousel variant="dark" className="d-block w-100">
					<Carousel.Item>
						<Carousel.Caption>
							<h5>John Doe 8/8/2019</h5>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<Carousel.Caption>
							<h5>Jane Doe 9/18/21</h5>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<Carousel.Caption>
							<h5>an actual rooster</h5>
							<p>
								BAWK BAWK BAWK BAWK BAWK BAWK BAWK BAWK Cockadoodledoo BAWK BAWK
								BAWK BAWK BAWK BAWK BAWK BAWK BAWK BAWK BAWK BAWK BAWK BAWK
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</section>
		</div>
	);
}

export default Carasaul;
