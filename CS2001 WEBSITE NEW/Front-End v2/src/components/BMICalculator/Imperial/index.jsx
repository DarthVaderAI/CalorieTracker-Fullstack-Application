import React from "react";

export const Imperial = ({imperial, setImperialValue}) => {
	return <>
		<div className="form-group row mb-2">
			<div className="col"><label htmlFor="height" className="m-0 p-0">Height</label></div>
		</div>
		<div className="form-group row">
			<div className="col-6">
				<div className="input-group mb-3">
					<input type="number" className="form-control" id="ft" min={1} max={8}
					       value={imperial?.ft}
					       onChange={e => setImperialValue({
						       ...imperial,
						       ft: e?.target?.value
					       })}/>
					<span className="input-group-text units-text">ft</span>
				</div>
			</div>
			<div className="col-6">
				<div className="input-group mb-3">
					<input type="number" className="form-control" id="in" min={1} max={11}
					       value={imperial?.in}
					       onChange={e => setImperialValue({
						       ...imperial,
						       in: e?.target?.value
					       })}/>
					<span className="input-group-text units-text">in</span>
				</div>
			</div>
		</div>
		<div className="form-group row mb-2">
			<div className="col"><label htmlFor="weight" className="m-0 p-0">Weight</label></div>
		</div>
		<div className="form-group row">
			<div className="col-6">
				<div className="input-group mb-3">
					<input type="number" className="form-control" id="lbs" min={1} max={1400}
					       value={imperial?.lbs}
					       onChange={e => setImperialValue({
						       ...imperial,
						       lbs: e?.target?.value
					       })}/>
					<span className="input-group-text units-text">lbs</span>
				</div>
			</div>
		</div>
	</>;
};