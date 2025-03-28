'use client';
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

function Navbar(props) {
	const activeLink = usePathname();
	return (
		<div>
			<div className="top-area">
				<div className="header-area">
					<nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"
						 data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

						<div className="container">
							<div className="navbar-header">
								<button type="button" className="navbar-toggle" data-toggle="collapse"
										data-target="#navbar-menu">
									<i className="fa fa-bars"></i>
								</button>
								<a className="navbar-brand" href="index.html">carvilla<span></span></a>

							</div>
							<div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
								<ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
									<li className="scroll"><Link style={{color: activeLink === '/' && 'blue'}}
																 href='/'>Home</Link></li>
									<li className="scroll"><Link
										style={{color: activeLink.startsWith('/services') && 'blue'}}
										href='/services'>Services</Link></li>
									<li className="scroll"><Link
										style={{color: activeLink.startsWith('/cars') && 'blue'}}
										href='/cars'>Cars</Link></li>
									{/*<li className="scroll"><a href="#new-cars">new cars</a></li>*/}
									{/*<li className="scroll"><a href="#brand">brands</a></li>*/}
									{/*<li className="scroll"><a href="#contact">contact</a></li>*/}
								</ul>
							</div>
						</div>
					</nav>
				</div>
				<div className="clearfix"></div>

			</div>
		</div>
	);
}

export default Navbar;