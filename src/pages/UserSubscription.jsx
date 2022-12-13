import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import supabase from "../config/SupabaseClient";
import { useEffect, useState } from "react";


function UserSubscription() {
	const [batch, setBatch] = useState("6-7AM");
	const [fee, setFees] = useState();
	const [lastName, setLastName] = useState();
	const [contactNo, setContactNo] = useState();
	const [dob, setDob] = useState();
	const [formError, setFormError] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

    
		// if (!firstName || !lastName || !contactNo || !dob) {
		// 	setFormError("Please Fill All the details");
		// 	return;
		// }

		// const { data, error } = await supabase.from("user").insert([
		// 	{
		// 		first_name: firstName,
		// 		last_name: lastName,
		// 		contact_no: contactNo,
		// 		date_of_birth: dob,
		// 	},);

		// if (error) {
		// 	console.log(error);
		// 	setFormError(error.message);
		// }

		// if (data) {
		// 	console.log(data);
		// 	setFormError(null);
		// }
	};


	return (
		<div className="container-fluid w-50 card shadow-lg p-4 m-5 mx-auto">
			<Form onSubmit={handleSubmit}>

        <p>Batch</p>
				<select class="form-control mb-2" value={batch} placeholder="Batch" onChange={(e) => {setBatch(e.target.value)}} >
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
