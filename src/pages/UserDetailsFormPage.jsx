import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import supabase from "../config/SupabaseClient";
import { useEffect, useState } from "react";

function UserDetailsFormPage() {
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [contactNo, setContactNo] = useState();
	const [dob, setDob] = useState();
	const [formError, setFormError] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!firstName || !lastName || !contactNo || !dob) {
			setFormError("Please Fill All the details");
			return;
		}

		const { data, error } = await supabase
			.from("user")
			.insert([
				{
					first_name: firstName,
					last_name: lastName,
					contact_no: contactNo,
					date_of_birth: dob,
				},
			]);

		if (error) {
			console.log(error);
			setFormError(error.message);
		}

		if (data) {
			console.log(data);
			setFormError(null);
		}
	};

	return (
		<div className="container-fluid w-50 card shadow-lg p-4 m-5 mx-auto">
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="first_name">
					<Form.Label>First Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter First Name"
						onChange={(event) => {
							setFirstName(event.target.value);
						}}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="last_name">
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Last Name"
						onChange={(event) => {
							setLastName(event.target.value);
						}}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="contact_no">
					<Form.Label>Contact No</Form.Label>
					<Form.Control
						type="text"
						placeholder="Contact No"
						onChange={(event) => {
							setContactNo(event.target.value);
						}}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="dob">
					<Form.Label>Date Of Birth</Form.Label>
					<Form.Control
						type="date"
						placeholder="dd/mm/yyyy"
						onChange={(event) => {
							setDob(event.target.value);
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

export default UserDetailsFormPage;
