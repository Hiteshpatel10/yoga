import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CustomerSubscription({ id, data }) {
	let navigate = useNavigate();

	function handleEnroll() {
		navigate("/user-subscription/" + id);
	}

	const handleActive = () => toast.info("Already Enrolled!", {position: toast.POSITION.BOTTOM_CENTER});

	if (data) {
		if (data.is_enrolled) {
			return (
				<div className="container-fluid">
					<button className="btn btn-success" onClick={handleActive}>
						Active
					</button>
					<ToastContainer />
				</div>
			);
		} else {
			return (
				<button className="btn btn-danger" onClick={handleEnroll}>
					Enroll
				</button>
			);
		}
	} else {
		return (
			<button className="btn btn-danger" onClick={handleEnroll}>
				Enroll
			</button>
		);
	}
}

export default CustomerSubscription;
