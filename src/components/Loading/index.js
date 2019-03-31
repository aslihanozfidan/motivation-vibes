import React from "react";
import "./style.css";
import loading from "../../../src/assets/loading.svg";

const Loading = () => (
	<div className="loading-container">
		<img src={loading} alt="Loading" />
	</div>
);

export default Loading;
