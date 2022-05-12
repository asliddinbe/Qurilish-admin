import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import React from "react";

export default () => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				mt: "3%",
				mb: "3%",
			}}
		>
			<ButtonGroup
				variant="text"
				aria-label="text button group"
				sx={{
					border: "1px solid #FDBE33FF",
					borderRadius: "0px",
				}}
			>
				<Button
					sx={{
						color: "inherit",
					}}
				>
					Previous
				</Button>
				<Button
					sx={{
						color: "inherit",
						":hover": {
							backgroundColor: "#030F27FF",
							color: "white",
						},
					}}
				>
					1
				</Button>
				<Button
					sx={{
						color: "inherit",
						backgroundColor: "#030F27FF",
						color: "white",
						":hover": {
							backgroundColor: "#030F27FF",
							color: "white",
						},
					}}
				>
					2
				</Button>
				<Button
					sx={{
						color: "inherit",
						":hover": {
							backgroundColor: "#030F27FF",
							color: "white",
						},
					}}
				>
					3
				</Button>
				<Button
					sx={{
						color: "inherit",
						":hover": {
							backgroundColor: "#030F27FF",
							color: "white",
						},
					}}
				>
					Next
				</Button>
			</ButtonGroup>
		</Box>
	);
};
