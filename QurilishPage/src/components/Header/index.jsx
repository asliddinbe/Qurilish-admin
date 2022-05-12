import { Box, Breadcrumbs, Divider, Link, Typography } from "@mui/material";
import React from "react";

export default ({ title }) => {
	return (
		<Box>
			<Box
				sx={{
					backgroundColor: "#FDBE33FF",
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					pt: "1%",
					pb: "1%",
				}}
			>
				<Typography
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
					<Typography
						sx={{
							fontWeight: "bold",
							pt: "13%",
						}}
						fontSize="85px"
					>
						{title}
					</Typography>

					<hr
						style={{
							width: "35%",
							height: "3px",
							backgroundColor: "black",
							opacity: 1,
							border: 0,
						}}
					/>

					<Breadcrumbs
						aria-label="breadcrumb"
						sx={{
							mt: "5%",
							mb: "15%",
							fontSize: "32px",
							// fontWeight: "bold",
						}}
					>
						<Link
							color="inherit"
							sx={{
								":hover": {
									color: "white",
								},
								textDecoration: "none",
							}}
						>
							Home
						</Link>
						<Link
							color="inherit"
							sx={{
								":hover": {
									color: "white",
								},
								textDecoration: "none",
							}}
						>
							{title}
						</Link>
					</Breadcrumbs>
				</Typography>
			</Box>
		</Box>
	);
};
