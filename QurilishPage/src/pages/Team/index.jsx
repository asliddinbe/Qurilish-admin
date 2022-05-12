import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Card from "../../components/CardTeam";

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
					Our Team
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
						Our Team
					</Link>
				</Box>
			</Box>

			<Card />
		</>
	);
};
