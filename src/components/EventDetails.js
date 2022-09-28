import React from "react";
import birthdayCake from "../images/Birthday cake.png";
import { MdOutlineDateRange } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { IoMdArrowDropright } from "react-icons/io";

const EventDetails = () => {
	return (
		<div className=" flex justify-center items-center mt-72">
			{/* <div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img src={wedding} className="max-w-sm " />
					<div>
						<h1 className="text-3xl font-bold">Wedding ceremony</h1>
						<p className="text-right">Hosted by Psyche</p>
						<button className="btn btn-primary mt-12">Get Started</button>
					</div>
				</div>
			</div> */}
			<div className="card flex-col lg:flex-row-reverse bg-base-100 ">
				<figure>
					<img src={birthdayCake} className="w-72 lg:ml-28" alt="Album" />
				</figure>
				<div className="">
					<h1 className="text-4xl font-bold text-start text-indigo-900">
						Birthday bash
					</h1>
					<p className="text-left text-xs text-slate-400	">
						Hosted by <span className=" font-bold ">Psyche</span>
					</p>
					<div className="mt-16">
						<div className="flex">
							<div className=" p-3 border-x-stone-600 text-purple-600	">
								<MdOutlineDateRange />
							</div>
							<h1 className="text-justify ml-6 ">
								<span className="font-bold">18 Aug,6PM</span> <br />
								to 19 Aug, 4AM
							</h1>
							<div className="p-3 ml-24 mt-1 ">
								<IoMdArrowDropright />
							</div>
						</div>
						<div className="flex mt-8">
							<div className=" p-3 border-x-stone-400 text-purple-600	mt-2">
								<GoLocation />
							</div>
							<h1 className="text-justify	p-3 ml-6">
								<span className=" font-bold">Street Name</span> <br />
								10 road,Dhanmondi
							</h1>
							<div className="p-3 ml-14 mt-1">
								<IoMdArrowDropright />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventDetails;
