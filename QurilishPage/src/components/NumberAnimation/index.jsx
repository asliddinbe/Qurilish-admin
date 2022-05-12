import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Counter from "./Counter";

export default () => {
	useEffect(() => {
		Aos.init({ duration: 3000 });
	});

	const data = {
		image: [
			{
				img: require("../../assets/img/1.PNG"),
				text: "EXPERT WORKERS",
			},
			{
				img: require("../../assets/img/2.PNG"),
				text: "HAPPY CLIENTS",
			},
		],
		image1: [
			{
				img: require("../../assets/img/3.PNG"),
				text: "COMPLETED PROJECT",
			},
			{
				img: require("../../assets/img/4.PNG"),
				text: "RUNNING PROJECTS",
			},
		],
	};

	return (
		<>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					bgcolor: "white",
				}}
			>
				<Grid container sx={{ mt: "5%", mb: "5%" }}>
					<Grid
						data-aos="zoom-in-right"
						sx={{
							display: "flex",
							justifyContent: "space-around",
							backgroundColor: "#030F27",
						}}
						md={6}
						sm={12}
						xs={12}
					>
						{data.image.map((value) => (
							<Grid key={value}>
								<Box
									sx={{
										mt: "15%",
										mb: "15%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center   ",
									}}
								>
									<img src={value.img} alt="" />
									<Box
										sx={{
											color: "#FDBE33",
											// border: 1,
											mx: "2px",
										}}
									>
										<Typography
											variant="h4"
											sx={{
												fontWeight: "600",
											}}
										>
											<Counter number={890} title="Posts" />
										</Typography>
										<Typography
											fontSize="130%"
											sx={{
												fontWeight: "600",
											}}
										>
											{value.text}
										</Typography>
									</Box>
								</Box>
							</Grid>
						))}
					</Grid>

					<Grid
						data-aos="zoom-in-left"
						sx={{
							flexGrow: 1,
							display: "flex",
							justifyContent: "space-around",
							backgroundColor: "#FDBE33",
						}}
						spacing={2}
						md={6}
						sm={12}
						xs={12}
					>
						{data.image1.map((value) => (
							<Grid key={value} item>
								<Box
									sx={{
										mt: "15%",
										mb: "15%",
										display: "flex",
										justifyContent: "space-around",
										alignItems: "center",
									}}
								>
									<img src={value.img} alt="" />
									<Box sx={{}}>
										<Typography
											variant="h4"
											sx={{
												fontWeight: "600",
											}}
										>
											<Counter number={890} title="Posts" />
										</Typography>
										<Typography
											fontSize="120%"
											sx={{
												fontWeight: "600",
											}}
										>
											{value.text}
										</Typography>
									</Box>
								</Box>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Box>
		</>
	);
};
