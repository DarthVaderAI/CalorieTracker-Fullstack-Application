import React from "react";

export const Metric = ({metric, setMetricValue}) => {
	return <>
		<div className="form-group row mb-2">
			<div className="col"><label htmlFor="height" className="m-0 p-0">Height</label></div>
		</div>
		<div className="form-group row">
			<div className="col-6">
				<div className="input-group mb-3">
					<input type="number" className="form-control" id="cm" min={1} max={272}
					       value={metric?.cm}
					       onChange={e => setMetricValue({
						       ...metric,
						       cm: e?.target?.value
					       })}/>
					<span className="input-group-text units-text">cm</span>
				</div>
			</div>
		</div>
		<div className="form-group row mb-2">
			<div className="col"><label htmlFor="weight" className="m-0 p-0">Weight</label></div>
		</div>
		<div className="form-group row">
			<div className="col-6">
				<div className="input-group mb-3">
					<input type="number" className="form-control" id="kg" min={1} max={635}
					       value={metric?.kg}
					       onChange={e => setMetricValue({
						       ...metric,
						       kg: e?.target?.value
					       })}/>
					<span className="input-group-text units-text">kg</span>
				</div>
			</div>
		</div>
	</>;
};