'use client';
import React from 'react';
import {useRouter} from "next/navigation";

const cars = [
	{id: 1, title: 'BMW 6-series gran coupe', price: 89395, img: 'assets/images/featured-cars/fc1.png'},
	{id: 2, title: 'chevrolet camaro za100', price: 66575, img: 'assets/images/featured-cars/fc2.png'},
	{id: 3, title: 'lamborghini v520', price: 125250, img: 'assets/images/featured-cars/fc3.png'},
	{id: 4, title: 'audi a3 sedan', price: 95500, img: 'assets/images/featured-cars/fc4.png'},
	{id: 5, title: 'infiniti z5', price: 36850, img: 'assets/images/featured-cars/fc5.png'},
	{id: 6, title: 'porsche 718 cayman', price: 48500, img: 'assets/images/featured-cars/fc6.png'},
];

function Cars() {
	const router = useRouter();
	return (
		<div>
			<section id="new-cars" className="new-cars">
				<div className="container">
					<div className="section-header">
						<p>checkout <span>the</span> latest cars</p>
						<h2>newest cars</h2>
					</div>
					<div className="new-cars-content">
						<div className="owl-carousel owl-theme" id="new-cars-carousel">
							<div className="new-cars-item">
								<div className="single-new-cars-item">
									<div className="row">
										<div className="col-md-7 col-sm-12">
											<div className="new-cars-img">
												<img src="/assets/images/new-cars-model/ncm1.png" alt="img"/>
											</div>
										</div>
										<div className="col-md-5 col-sm-12">
											<div className="new-cars-txt">
												<h2><a href="#">chevrolet camaro <span> za100</span></a></h2>
												<p>
													Duis aute irure dolor in reprehenderit in voluptate velit esse
													cillum dolore eu
													fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
													proident, sunt in
													culpa qui officia deserunt mollit anim id est laborum.
												</p>
												<p className="new-cars-para2">
													Sed ut pers unde omnis iste natus error sit voluptatem accusantium
													doloremque
													laudantium.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="featured-cars" className="featured-cars">
				<div className="container">
					<div className="section-header">
						<p>checkout <span>the</span> featured cars</p>
						<h2>featured cars</h2>
					</div>
					<div className="featured-cars-content">
						<div className="row">
							{cars.map(car => (
								<div onClick={() => router.push(`/cars/${car.id}`)} key={car.id}
									 className="col-lg-3 col-md-4 col-sm-6">
									<div className="single-featured-cars">
										<div className="featured-img-box">
											<div className="featured-cars-img">
												<img src={car.img} alt="cars"/>
											</div>
											<div className="featured-model-info">
												<p>
													model: 2017
													<span className="featured-mi-span"> 3100 mi</span>
													<span className="featured-hp-span"> 240HP</span>
													automatic
												</p>
											</div>
										</div>
										<div className="featured-cars-txt">
											<h2><a href="#">{car.title}</a></h2>
											<h3>{car.price}</h3>
											<p>
												Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
												consectetur, adipisci
												velit, sed quia non.
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Cars;