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
							<h5>test</h5>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<Carousel.Caption>
							<h5>Second slide label</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
