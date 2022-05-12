import React, { useEffect } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import img1 from "../../assets/img/portfolio-1.jpg";
import img2 from "../../assets/img/portfolio-2.jpg";
import img3 from "../../assets/img/portfolio-3.jpg";
import img4 from "../../assets/img/portfolio-4.jpg";
import img5 from "../../assets/img/portfolio-5.jpg";
import img6 from "../../assets/img/portfolio-6.jpg";
import { Container, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Aos from "aos";
import "aos/dist/aos.css";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	const data = [
		{
			h1: "Project Name",
			img: img1,
			text: "Adam Phillips",
			text1: "Ceo & Founder",
		},
		{
			h1: "Project Name",
			img: img2,
			text: "Dylan Adams",
			text1: "Civil Enginer",
		},
		{
			h1: "Project Name",
			img: img3,
			text: "Jhon Doe",
			text1: "Interior Designer",
		},
		{
			h1: "Project Name",
			img: img4,
			text: "Josh Dunn",
			text1: "Painter",
		},
		{
			h1: "Project Name",
			img: img5,
			text: "Josh Dunn",
			text1: "Painter",
		},
		{
			h1: "Project Name",
			img: img6,
			text: "Josh Dunn",
			text1: "Painter",
		},
	];

	return (
		<Box data-aos="fade-up" sx={{ overflow: "hidden", flexGrow: 1 }}>
			<Container>
				<Grid container spacing={1}>
					<Grid item xs={12} sm={12} md={2}></Grid>
					<Grid item xs={6} sm={6} md={4}>
						<Typography sx={{ display: "flex", width: "200%" }}>
							<Typography
								sx={{
									":hover": { background: "#030F27", color: "#FDBE33" },
									background: "#FDBE33",
									width: "120%",
									textAlign: "center",
									height: "40px",
									pt: "8px",
								}}
							>
								<Typography>ALL</Typography>
							</Typography>
							<Typography
								sx={{
									":hover": { background: "#030F27", color: "#FDBE33" },
									background: "#FDBE33",
									width: "100%",
									ml: "20px",
									textAlign: "center",
									height: "40px",
									pt: "8px",
								}}
							>
								<Typography>COMPLETE</Typography>
							</Typography>
							<Typography
								sx={{
									":hover": { background: "#030F27", color: "#FDBE33" },
									background: "#FDBE33",
									width: "100%",
									ml: "20px",
									textAlign: "center",
									height: "40px",
									pt: "8px",
								}}
							>
								<Typography>RUNNING</Typography>
							</Typography>
							<Typography
								sx={{
									":hover": { background: "#030F27", color: "#FDBE33" },
									background: "#FDBE33",
									width: "100%",
									ml: "20px",
									textAlign: "center",
									height: "40px",
									pt: "8px",
								}}
							>
								<Typography>UPCOMING</Typography>
							</Typography>
						</Typography>
					</Grid>
					<Grid item xs={12} sm={12} md={2}></Grid>
				</Grid>
				<br />
				<Grid container spacing={2}>
					{data.map((value) => (
						<Grid item xs={12} sm={6} md={4}>
							<Typography
								sx={{
									":hover": {
										background: "#FDBE33",
										color: "white",
										transition: "0.5s",
									},
									color: "#676E7D",
								}}
							>
								<Typography>
									<img
										src={value.img}
										style={{
											":hover": { background: "rgba(3, 15, 39, 7)" },
											width: "100%",
										}}
									/>
								</Typography>
								<Typography sx={{ display: "flex" }}>
									<Typography
										variant="h5"
										sx={{
											width: "90%",
											mt: "-7px",
											pt: "10px",
											fontWeight: "700",
											textAlign: "center",
											background: "#030F27",
											color: "#FDBE33",
											height: "60px",
										}}
									>
										{value.h1}
									</Typography>
									<Typography
										sx={{
											":hover": { background: "#FDBE33" },
											mt: "-7px",
											width: "15%",
											textAlign: "center",
											justifyContent: "center",
											alignItems: "center",
											display: "flex",
											height: "60px",
										}}
									>
										<AddIcon />
									</Typography>
								</Typography>
							</Typography>
						</Grid>
					))}
				</Grid>
				<br />
				<br />
				<Typography
					sx={{
						width: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						textAlign: "center",
					}}
				>
					<Typography
						sx={{
							":hover": { background: "#030F27", color: "#FDBE33" },
							background: "#FDBE33",
							width: "25%",
							height: "40px",
							pt: "8px",
						}}
					>
						Load More
					</Typography>
				</Typography>
			</Container>
			<br />
			<br />
			<br />
			<br />
		</Box>
	);
};
