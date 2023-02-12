import React from "react";
import "./Carasaul.css";
import Carousel from "react-bootstrap/Carousel";

function Carasaul(props) {
	return (
		<div>
			<section className="cara">
				<Carousel variant="dark" className="d-block w-100">
					<Carousel.Item>
						<h2>hiiii</h2>

						<Carousel.Caption>
							<h5>test</h5>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<h5>hello</h5>
						<Carousel.Caption>
							<h5>Second slide label</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<h2>hi</h2>
						<Carousel.Caption>
							<h2>Third slide label</h2>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</section>
		</div>
	);
}

export default Carasaul;
