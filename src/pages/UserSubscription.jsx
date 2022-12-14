import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import supabase from "../config/SupabaseClient";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

function UserSubscription() {
	const params = useParams();
	let navigate = useNavigate();

	const id = params.id;
	const [batch, setBatch] = useState("6-7AM");
	const [fee, setFees] = useState();
	const [formError, setFormError] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!id || !batch || !fee) {
			setFormError("Please Fill All the details");
			return;
		}

		const { data, error } = await supabase.from("subscription").upsert([
			{
				id: id,
				is_enrolled: true,
				batch: batch,
				fee: fee,
			},
		]);

		if (error) {
			console.log(error);
			setFormError(error.message);
		}

		navigate(`/payment-details/${id}/${fee}/${batch}/`);
	};

	return (
		<div className="container-fluid w-50 card shadow-lg p-4 m-5 mx-auto">
			<Form onSubmit={handleSubmit}>
				<p>Batch</p>
				<select
					class="form-control mb-2"
					value={batch}
					placeholder="Batch"
					onChange={(e) => {
						setBatch(e.target.value);
					}}>
					<option>6-7AM</option>
					<option>7-8AM</option>
					<option>8-9AM</option>
					<option>5-6PM</option>
				</select>

				<Form.Group className="mb-3" controlId="last_name">
					<Form.Label>Fees</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Fees"
						value={fee}
						onChange={(event) => {
							setFees(event.target.value);
						}}
					/>
				</Form.Group>

				{formError && <p>{formError}</p>}

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default UserSubscription;
