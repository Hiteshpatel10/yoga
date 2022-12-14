import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import supabase from "../config/SupabaseClient";
import { useState } from "react";
import SubscriptionDialogBox from "../components/SubscriptionDialogBox";

function UserDetailsFormPage() {
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [contactNo, setContactNo] = useState();
	const [dob, setDob] = useState();
	const [formError, setFormError] = useState(null);
	const [id, setId] = useState();
	const [isDialogBoxVisible, setIsDialogBoxVisible] = useState(false);

	function setDialogBoxVisibility() {
		setIsDialogBoxVisible(false);
	}

	const calculateAge = (dob) => {
		var today = new Date();
		var birthDate = new Date(dob); // create a date object directly from `dob1` argument
		var age_now = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age_now--;
		}
		console.log(age_now);
		return age_now;
	};

	const validateForm = async (event) => {
		event.preventDefault();
		if (!firstName || !lastName || !contactNo || !dob) {
			setFormError("Please Fill All the details");
			return;
		}

		var age = calculateAge(dob);

		if (age < 18 || age > 65) {
			setFormError("age limit of 18-65");
			return;
		}

		const { data, error } = await insertData();

		if (error) {
			setFormError(error.message);
		}

		if (data) {
			setIsDialogBoxVisible(true);
			setId(data[0].id);
			setFormError(null);
		}
	};

	const insertData = async () => {
		const result = await supabase
			.from("user")
			.insert([
				{
					first_name: firstName,
					last_name: lastName,
					contact_no: contactNo,
					date_of_birth: dob,
				},
			])
			.select();

		return result;
	};

	return (
		<div className="container-fluid w-50 card shadow-lg p-4 m-5 mx-auto">
			<Form onSubmit={validateForm}>
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

				{formError && <p className="text-danger">{formError}</p>}

				{isDialogBoxVisible && (
					<SubscriptionDialogBox
						visibilityHandler={setDialogBoxVisibility}
						id={id}
					/>
				)}
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default UserDetailsFormPage;
