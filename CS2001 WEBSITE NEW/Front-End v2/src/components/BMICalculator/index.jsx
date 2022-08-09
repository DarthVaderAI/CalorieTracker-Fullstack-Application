import React, {useState} from "react";
import "./Styles.css";
import {Imperial} from "./Imperial";
import {Metric} from "./Metric";

export const BMICalculator = () => {
	const [selectedType, setSelectedType] = useState("metric");
	const [bmiResult, setBmiResult] = useState(null);
	const [imperial, setImperialValue] = useState({ft: "", in: "", lbs: ""});
	const [metric, setMetricValue] = useState({cm: "", kg: ""});

	const weightRange = bmiResult => {
		if (bmiResult < 18.5) return "Underweight";
		if (bmiResult > 18.5 && bmiResult < 24.9) return "Healthy Weight";
		if (bmiResult > 25 && bmiResult < 29.9) return "Overweight";
		if (bmiResult > 30) return "Obese";
	};

	return (
		<div className="container bmiCalculator">
			<p className="h2">BMI Calculator</p>
			<p className="h5">BMI (Body Mass Index) is a measure of whether you're at healthy weight based on your
				height. Use the BMI calculator below to check if you're at a healthy weight.</p>
			<div className="row">
				<div className="col-lg-6 col-md-8 col-sm-12 m-auto">
					<div className="card card-calculator mt-10">
						<div className="card-body p-2">
							<div className="mb-4 d-flex align-items-center justify-content-center">
								<div className="btn-group" role="group" aria-label="Type">
									<button type="button"
									        className={`btn ${selectedType === "metric" ? "btn-primary" : "btn-outline-primary"}`}
									        onClick={() => {
										        setSelectedType("metric");
									        }}>
										Metric
									</button>
									<button type="button"
									        className={`btn ${selectedType === "imperial" ? "btn-primary" : "btn-outline-primary"}`}
									        onClick={() => {
										        setSelectedType("imperial");
									        }}>
										Imperial
									</button>
								</div>
								{
								}
							</div>
							<form className="mb-0" onSubmit={e => {
								e.preventDefault();
								if (selectedType === "imperial") {
									const inches = (Number(imperial?.ft) * 12) + Number(imperial?.in);
									const bmi = (Number(imperial?.lbs) / (inches * inches)) * 703;
									setBmiResult(bmi);
								} else {
									const heightInMeters = (Number(metric?.cm) * .01);
									const bmi = Number(metric?.kg) / (heightInMeters * heightInMeters);
									setBmiResult(bmi);
								}
							}}>
								{selectedType === "imperial" ?
									<Imperial imperial={imperial} setImperialValue={setImperialValue}/> :
									<Metric metric={metric} setMetricValue={setMetricValue}/>}
								<div className="d-flex justify-content-center">
									<button type="submit" className="btn btn-primary mr-3">Calculate</button>
									<button type="reset" className="btn btn-outline-danger"
									        onClick={(e) => {
										        setImperialValue({});
										        setMetricValue({});
									        }}>Reset
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-6 col-md-8 col-sm-12 m-auto">
					<div className="card mt-0">
						<div className="card-body p-2">
							{bmiResult ? <div className="text-center">
								<p className="h2 mt-0 mb-0 bmiResult">BMI
									= {bmiResult && bmiResult.toFixed(2)}</p>
								<p className="h5 mb-4">You are in
									the <span className="text-primary">{weightRange(bmiResult)}</span> range.
								</p>
							</div> : null}

							<p className="h5 mb-3 mt-0">BMI weight ranges:</p>
							<ul>
								<li><p>Less than 18.5 = Underweight</p></li>
								<li><p>Between 18.5 - 24.9 = Healthy Weight</p></li>
								<li><p>Between 25 - 29.9 = Overweight</p></li>
								<li><p>Over 30 = Obese</p></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};