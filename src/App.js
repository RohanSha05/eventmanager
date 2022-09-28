import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import CreateEvent from "./components/CreateEvent";
import NotFound from "./components/NotFound";
import EventDetails from "./components/EventDetails";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route
					path="/createevent"
					element={<CreateEvent></CreateEvent>}
				></Route>
				<Route
					path="/eventdetails"
					element={<EventDetails></EventDetails>}
				></Route>
				<Route path="*" element={<NotFound></NotFound>}></Route>
			</Routes>
		</div>
	);
}

export default App;
