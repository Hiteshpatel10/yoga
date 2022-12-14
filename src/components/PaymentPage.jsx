import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ReactDialogBox } from "react-js-dialog-box";
import "react-js-dialog-box/dist/index.css";


function PaymentPage({ visibilityHandler, paymentStatus}) {
	let navigate = useNavigate();
	
	const handlePayment = async () => {
		paymentStatus();
	};

	return (
		<ReactDialogBox
			closeBox={visibilityHandler}
			modalWidth="auto"
			headerBackgroundColor="DodgerBlue"
			headerTextColor="white"
			headerHeight="65"
			closeButtonColor="white"
			bodyBackgroundColor="white"
			bodyTextColor="black"
			bodyHeight="auto"
			headerText="Enroll in Yoga Class">
			<div class="container d-flex justify-content-center mt-5 mb-5">
				<div class="row g-3">
					<div class="col-md-6">
						<span>Payment Method</span>
						<div class="card">
							<div class="accordion" id="accordionExample">
								<div class="card">
									<div class="card-header p-0" id="headingTwo">
										<h2 class="mb-0">
											<button
												class="btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom"
												type="button"
												data-toggle="collapse"
												data-target="#collapseTwo"
												aria-expanded="false"
												aria-controls="collapseTwo">
												<div class="d-flex align-items-center justify-content-between">
													<span>Paypal</span>
													<img
														src="https://i.imgur.com/7kQEsHU.png"
														width="30"
													/>
												</div>
											</button>
										</h2>
									</div>
									<div
										id="collapseTwo"
										class="collapse"
										aria-labelledby="headingTwo"
										data-parent="#accordionExample">
										<div class="card-body">
											<input
												type="text"
												class="form-control"
												placeholder="Paypal email"
											/>
										</div>
									</div>
								</div>

								<div class="card">
									<div class="card-header p-0">
										<h2 class="mb-0">
											<button
												class="btn btn-light btn-block text-left p-3 rounded-0"
												data-toggle="collapse"
												data-target="#collapseOne"
												aria-expanded="true"
												aria-controls="collapseOne">
												<div class="d-flex align-items-center justify-content-between">
													<span>Credit card</span>
													<div class="icons">
														<img
															src="https://i.imgur.com/2ISgYja.png"
															width="30"
														/>
														<img
															src="https://i.imgur.com/W1vtnOV.png"
															width="30"
														/>
														<img
															src="https://i.imgur.com/35tC99g.png"
															width="30"
														/>
														<img
															src="https://i.imgur.com/2ISgYja.png"
															width="30"
														/>
													</div>
												</div>
											</button>
										</h2>
									</div>

									<div
										id="collapseOne"
										class="collapse show"
										aria-labelledby="headingOne"
										data-parent="#accordionExample">
										<div class="card-body payment-card-body">
											<span class="font-weight-normal card-text">
												Card Number
											</span>
											<div class="input">
												<i class="fa fa-credit-card"></i>
												<input
													type="text"
													class="form-control"
													placeholder="0000 0000 0000 0000"
												/>
											</div>

											<div class="row mt-3 mb-3">
												<div class="col-md-6">
													<span class="font-weight-normal card-text">
														Expiry Date
													</span>
													<div class="input">
														<i class="fa fa-calendar"></i>
														<input
															type="text"
															class="form-control"
															placeholder="MM/YY"
														/>
													</div>
												</div>

												<div class="col-md-6">
													<span class="font-weight-normal card-text">
														CVC/CVV
													</span>
													<div class="input">
														<i class="fa fa-lock"></i>
														<input
															type="text"
															class="form-control"
															placeholder="000"
														/>
													</div>
												</div>
											</div>

											<span class="text-muted certificate-text">
												<i class="fa fa-lock"></i> Your transaction is secured
												with ssl certificate
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col-md-6">
						<span>Summary</span>

						<div class="card">
							<div class="d-flex justify-content-between p-3">
								<div class="d-flex flex-column">
									<span>
										Pro(Billed Monthly) <i class="fa fa-caret-down"></i>
									</span>
								</div>

								<div class="mt-1">
									<sup class="super-price">INR 500</sup>
									<span class="super-month">/Month</span>
								</div>
							</div>

							<hr class="mt-0 line" />

							<div class="p-3">
								<div class="d-flex justify-content-between mb-2">
									<span>Discount</span>
									<span>0</span>
								</div>

								<div class="d-flex justify-content-between">
									<span>
										Tax <i class="fa fa-clock-o"></i>
									</span>
									<span>0</span>
								</div>
							</div>

							<hr class="mt-0 line" />

							<div class="p-3 d-flex justify-content-between">
								<div class="d-flex flex-column">
									<span>Today you pay (INR)</span>
									<small>After 30 days 500 INR</small>
								</div>
								<span>500 INR</span>
							</div>

							<div class="p-3">
								<button
									class="btn btn-primary btn-block free-button"
									onClick={handlePayment}>
									Enroll in class
								</button>
								<div class="text-center">
									<a href="#">Have a promo code?</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ReactDialogBox>
	);
}

export default PaymentPage;
