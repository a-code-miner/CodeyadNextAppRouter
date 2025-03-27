'use client';
import React from 'react';

function Page({params, searchParams}) {
	console.log(params);
	return (
		<section id="featured-cars" className="featured-cars">
			<div className="container">
				<div className="featured-cars-content">
					<div className="row">
						Car ID: {params.carID}
						<div className="col-lg-3 col-md-4 col-sm-6">
							<div className="single-featured-cars">
								<div className="featured-img-box">
									<div className="featured-cars-img">
										<img onClick={() => {
											console.log(params)
										}} src={`/assets/images/featured-cars/fc${params.carID}.png`} alt="cars"/>
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
									<h2><a href="#">BMW 6-series gran coupe</a></h2>
									<h3>$89,395</h3>
									<p>
										Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
										consectetur, adipisci
										velit, sed quia non.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Page;