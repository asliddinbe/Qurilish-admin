import { Box, Link, Typography } from "@mui/material";
import React from "react";

export default () => {
	return (
		<>
			<Box
				sx={{
					width: "100%",
					background: "#FDBE33",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					padding: "100px 0px 100px 0px ",
				}}
			>
				<Typography variant="h2" sx={{ fontWeight: 800, color: "#030F27" }}>
					Our Project
				</Typography>
				<span
					style={{
						width: "10%",
						borderBottom: "3px solid #030F27",
						paddingTop: "10px",
					}}
				></span>
				<Box sx={{ fontSize: "30px", pt: "20px" }}>
					<Link
						href="#"
						color="inherit"
						sx={{
							textDecoration: "none",
							color: "#030F27",
							":hover": { color: "white" },
						}}
					>
						Home
					</Link>
					<span style={{ fontSize: "35px" }}> / </span>
					<Link
						href="#"
						color="inherit"
						sx={{
							textDecoration: "none",
							color: "#030F27",
							":hover": { color: "white" },
						}}
					>
						Our Project
					</Link>
				</Box>
			</Box>

			<Box
				sx={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					padding: "100px 0px 100px 0px ",
				}}
			>
				<Typography
					variant="h6"
					sx={{ fontFamily: "sans-serif", fontWeight: 600, color: "#FDBE33" }}
				>
					Our Team
				</Typography>
				<Box
					sx={{
						fontFamily: "sans-serif",
						fontSize: "340%",
						fontWeight: "600",
						pt: "5px",
					}}
				>
					<Link
						href="#"
						color="inherit"
						sx={{ textDecoration: "none", color: "#030F27" }}
					>
						Visit Our Project
					</Link>
				</Box>
			</Box>
		</>
	);
};
