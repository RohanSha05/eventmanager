import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import "../components/Home.css";

const CreateEvent = () => {
	const [date, setDate] = useState(new Date());
	return (
		<div className=" bg-base-200 text-indigo-900">
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row">
					<div>
						<h1 className="text-3xl font-bold">Pick The Date!</h1>
						<DayPicker
							mode="single"
							selected={date}
							onSelect={setDate}
						></DayPicker>
					</div>
					<div>
						<div>
							<div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold text-indigo-900">
											Event name
										</span>
									</label>
									<input
										type="text"
										placeholder="event name"
										className="input input-bordered"
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold text-indigo-900">
											Host Name
										</span>
									</label>
									<input
										type="text"
										placeholder="your name"
										className="input input-bordered"
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold text-indigo-900">
											Date
										</span>
									</label>
									<input
										type="text"
										placeholder="password"
										className="input input-bordered"
										value={format(date, "PP")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold text-indigo-900">
											Location
										</span>
									</label>
									<input
										type="text"
										placeholder="location"
										className="input input-bordered"
									/>
								</div>
								<div className="form-control mt-6">
									<Link to="/eventdetails">
										<button className=" text-white homeButton w-full">
											Create
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateEvent;
