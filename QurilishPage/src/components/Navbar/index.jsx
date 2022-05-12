import React from "react";
import { Box, Button, Grid, Menu, MenuItem, Typography } from "@mui/material";
import Item from "./Item";
import Navlik from "./itemNavlink/index";
import "./index.css";

// const data = [
// 	{ name: "HOME" },
// 	{ name: "ABOUT" },
// 	{ name: "SERVICE" },
// 	{ name: "TEAM" },
// 	{ name: "PROJECT" },
// 	{ name: "PAGES" },
// 	{ name: "CONTACT" },
// ];

// const Nav = data.map((item) => (
// 	<Box>
// 		<Typography variant="h6">
// 			<Link href="#" underline="none" sx={{ color: "white" }}>
// 				{item.name}
// 			</Link>
// 		</Typography>
// 	</Box>
// ));

export default () => {
	return (
		<div style={{ background: "#FDBE33", margin: 0, padding: 0 }}>
			<Item />
			<Navlik />
		</div>
	);
};
