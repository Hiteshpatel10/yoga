import React from "react";
import supabase from "../config/SupabaseClient";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ClientDetailsPage() {
	const params = useParams();
	const [fetchError, setFetchError] = useState(null);
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	let navigate = useNavigate();

	function navigateToSubscription() {
		navigate("/user-subscription");
	}

	useEffect(() => {
		const fetchData = async () => {
			const { data, error } = await supabase
				.from("user")
				.select("*, subscription(*)")
				.eq("id", params.id);

			if (error) {
				setFetchError("Error 404");
				console.log(error);
				setData(null);
				setIsLoading(false);
			}

			if (data) {
				setData(data[0]);
				setFetchError(null);
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);

	console.log(data);

	return (
		<div className="container-fluid card shadow-sm w-25 py-2 mt-5 mb-2 mx-auto">
			{fetchError && <div>{fetchError}</div>}
			{isLoading && <div>Loading..</div>}

			{!isLoading && (
				<div>
					<div class="row p-2">
						<div class="col-sm text-dark">Name :</div>
						<div class="col-sm text-muted">
							{data.first_name} {data.last_name}
						</div>
					</div>
					<div class="row p-2">
						<div class="col-sm text-dark">contact No :</div>
						<div class="col-sm text-muted">{data.contact_no}</div>
					</div>
					<div class="row p-2">
						<div class="col-sm text-dark">Date of birth :</div>
						<div class="col-sm text-muted">{data.date_of_birth}</div>
					</div>
					<div class="row p-2">
						<div class="col-sm text-dark">Batch :</div>

						{data.subscription && (
							<div class="col-sm text-muted">
								<button className="btn btn-success">Active</button>
							</div>
						)}
						{!data.subscription && (
							<div class="col-sm text-muted">
								<button
									className="btn btn-danger"
									onClick={navigateToSubscription}>
									Enroll
								</button>
							</div>
						)}
					</div>
                    <div class="row p-2">
						<div class="col-sm text-dark">Created At :</div>
						<div class="col-sm text-muted">{data.created_at}</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default ClientDetailsPage;
