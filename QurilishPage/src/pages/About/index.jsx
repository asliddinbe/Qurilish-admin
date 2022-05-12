import React from "react";
import Experience from "../../components/Experience";
import Header from "../../components/Header";
import NumberAnimation from "../../components/NumberAnimation";
import Ask from "../../components/Ask";

export default () => {
	return (
		<>
			<Header title="About" />
			<Experience />
			<NumberAnimation />
			<Ask />
		</>
	);
};
