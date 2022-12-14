import React from "react";
import { ReactDialogBox } from "react-js-dialog-box";
import "react-js-dialog-box/dist/index.css";
import { useNavigate } from 'react-router-dom';

function SubscriptionDialogBox({ visibilityHandler, id }) {
    let navigate = useNavigate();

    function handleLater(){
        navigate('/')
    }

    function handleEnroll(){
        navigate('/user-subscription/' + id)
    }

	return (
		<div className="container">
			<ReactDialogBox
				closeBox={visibilityHandler}
				modalWidth="40%"
				headerBackgroundColor="DodgerBlue"
				headerTextColor="white"
				headerHeight="65"
				closeButtonColor="white"
				bodyBackgroundColor="white"
				bodyTextColor="black"
				bodyHeight="200px"
				headerText="Enroll in Yoga Class">
				<div>
					<h3 className="p-2 text-info">Click enroll to enroll in the yoga class</h3>
                    <div class="row p-2">
						<div class="col text-dark">
                        <button className='btn btn-danger' onClick={handleLater}>Later</button>
                        </div>
						<div class="col-sm text-muted">
                        <button className='btn btn-primary' onClick={handleEnroll}>Enroll</button>
						</div>
					</div>
				</div>
			</ReactDialogBox>
		</div>
	);
}

export default SubscriptionDialogBox;
