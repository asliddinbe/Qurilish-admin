import { Box } from "@mui/material";
import React from "react";
import ButtonGroup from "../../components/ButtonGroup";
import Card from "../../components/Card";
import Header from "../../components/Header";

export default () => {
	return (
		<Box>
			<Header title="Our Blog" />
			<Card />
			<ButtonGroup />
		</Box>
	);
};
