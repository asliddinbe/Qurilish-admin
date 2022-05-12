import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import img from "../../assets/img/team-1.jpg";
import img2 from "../../assets/img/team-2.jpg";
import img3 from "../../assets/img/team-3.jpg";
import img4 from "../../assets/img/team-4.jpg";

const data = [
	{
		h1: "Website Templates",
		img: img,
		text: "Adam Phillips",
		text1: "Ceo & Founder",
	},
	{
		h1: "Internet Marketing",
		img: img2,
		text: "Dylan Adams",
		text1: "Civil Enginer",
	},
	{
		h1: "Social Services",
		img: img3,
		text: "Jhon Doe",
		text1: "Interior Designer",
	},
	{
		h1: "Graphic Designs",
		img: img4,
		text: "Josh Dunn",
		text1: "Painter",
	},
];

const Card = data.map((value) => (
	<Grid key={value} item width={"23%"} md={3} sm={6} xs={12}>
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				background: "#030F27",
				color: "#FDBE33",
				":hover": { color: "black", background: "#FDBE33", transition: "0.7s" },
			}}
		>
			<img src={value.img} />

			<Typography sx={{ padding: "20px" }}>
				<Typography
					sx={{ textAlign: "center", fontWeight: "600", fontSize: "20px" }}
				>
					{value.text}
				</Typography>

				<Typography
					sx={{
						textAlign: "center",
						fontWeight: "500",
						fontSize: "17px",
						color: "white",
					}}
				>
					{value.text1}
				</Typography>
			</Typography>
		</Box>
	</Grid>
));
const Cardd = () => (
	<Box
		sx={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column",
		}}
	>
		<Box
			sx={{
				width: "80%",
			}}
		>
			<Grid sx={{ flexGrow: 1 }} container spacing={2}>
				<Grid item xs={12}>
					<Grid
						container
						justifyContent="center"
						spacing={3}
						sx={{ marginBottom: "5%" }}
					>
						{Card}
					</Grid>
				</Grid>
			</Grid>
		</Box>
	</Box>
);

export default () => {
	return (
		<>
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
						Meet Our Engineer
					</Link>
				</Box>
			</Box>

			<Box
				sx={{
					mt: "2%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Cardd />
			</Box>
			<Box
				sx={{
					mt: "2%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Cardd />
			</Box>
		</>
	);
};
