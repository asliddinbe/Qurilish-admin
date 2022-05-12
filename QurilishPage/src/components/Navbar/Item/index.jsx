import React from "react";
import Container from "@mui/material/Container";
import { Box, Typography, Grid } from "@mui/material";
import icon1 from "../../../assets/img/icon1.png";
import icon2 from "../../../assets/img/icon2.png";
import icon3 from "../../../assets/img/icon3.png";

const data = [
	{
		img: icon1,
		textTop: "Opening Hour",
		textBottom: "Mon - Fri, 8:00 -",
	},
	{
		img: icon2,
		textTop: "Call Us",
		textBottom: "+012 345 6789",
	},
	{
		img: icon3,
		textTop: "Email Us ",
		textBottom: "info@example.com",
	},
];
const Icon = data.map((item) => (
	<Grid
		item
		lg={4}
		xs={0}
		sm={2}
		md={4}
		container
		spacing={0}
		sx={{ display: "flex", justifyContent: "center" }}
	>
		<Box
			sx={{
				display: "flex",
				justifyContent: "end",
				display: { md: "flex", sm: "none", xs: "none" },
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<img src={item.img} alt="" width="80%" />
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 1,
					justifyContent: "center",
				}}
			>
				<Typography variant="h6">{item.textTop}</Typography>
				<Typography>{item.textBottom}</Typography>
			</Box>
		</Box>
	</Grid>
));
export default () => {
	return (
		<div style={{ background: "#FDBE33", margin: 0, padding: 0 }}>
			<Container maxWidth="xl">
				<Box
					sx={{
						marginX: "5%",
						// paddingY: "0.5%",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Grid container spacing={0} sx={{ display: "flex" }}>
						<Grid
							item
							lg={3}
							xs={12}
							sm={12}
							md={3}
							container
							spacing={0}
							sx={{
								display: "flex",
								justifyContent: "center",
								// width: "120px",
								// border: "2px solid red",
							}}
						>
							<Box>
								<Typography
									// variant="h2"
									fontSize="75px"
									fontFamily="sans-serif"
									fontWeight="750"
								>
									Builderz
								</Typography>
							</Box>
						</Grid>
						<Grid
							item
							lg={1}
							xs={0}
							sm={0}
							md={1}
							container
							spacing={0}
							sx={{
								display: "flex",
								justifyContent: "end",
								// width: "120px",
								// border: "2px solid red",
							}}
						></Grid>
						<Grid
							item
							lg={8}
							xs={12}
							sm={12}
							md={8}
							container
							spacing={0}
							sx={{
								display: "flex",
								justifyContent: "end",
								// width: "120px",
								// border: "2px solid red",
							}}
						>
							{Icon}
						</Grid>
					</Grid>
				</Box>
			</Container>
		</div>
	);
};
