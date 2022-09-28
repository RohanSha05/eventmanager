import React from "react";
import { Link } from "react-router-dom";
import app from "../images//Landing page image.png";
import "../components/Home.css";

const Home = () => {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row">
				<div className="card w-96 shadow-xl">
					<figure>
						<img className="app" src={app} alt="Shoes" />
					</figure>
				</div>
				<div>
					<div className=" text-right ">
						<p className="text-5xl font-bold">
							<span className=" text-indigo-900">Imagine, If</span> <br />{" "}
							<span className="text-color">Snapchat</span> <br />{" "}
							<span className="text-indigo-900">had events.</span>
						</p>
						<p className="">
							Easily host and share events with your friends across any social
							media
						</p>
					</div>
					<Link to="/createevent">
						<button className="homeButton mt-12 font-semibold text-white">
							Create My Event
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
