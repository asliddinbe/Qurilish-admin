import React, { useEffect } from "react";
import "./style.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import Card from "../../components/CardContact";
import Input from "../../components/Input";
import Aos from "aos";
import "aos/dist/aos.css";

export default () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<Box>
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
				<Typography variant="h2" sx={{ fontWeight: "800", color: "#030F27" }}>
					Contact Us
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
						Conatct
					</Link>
				</Box>
			</Box>

			<Box
				data-aos="fade-up"
				sx={{
					display: "flex",
					overflow: "hidden",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					padding: "100px 0px 100px 0px",
				}}
			>
				<Typography variant="h6" sx={{ fontWeight: "700", color: "#FDBE33" }}>
					Get In Touch
				</Typography>
				<Typography variant="h2" sx={{ fontWeight: "800", color: "#030F27" }}>
					For Any Query
				</Typography>

				<Grid container spacing={2} sx={{ width: "90%", mt: "40px" }}>
					<Grid
						item
						xs={12}
						md={6}
						sx={{
							height: "100%",
							background: "#030F27",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							padding: "30px 0px 30px 0px",
						}}
					>
						<Card />
					</Grid>

					<Grid
						item
						xs={12}
						md={6}
						sx={{
							background: "#FDBE33",
							padding: "100px 0px 130px 0px",
							textAlign: "center",
						}}
					>
						<Input />
						<TextareaAutosize
							aria-label="empty textarea"
							placeholder="Message"
							style={{
								width: "88%",
								height: "35%",
								padding: "10px 0px 0px 10px",
								fontSize: "20px",
								background: "none",
							}}
						/>
						<Button
							color="inherit"
							sx={{
								width: "200px",
								background: "#030F27",
								color: "#FDBE33",
								":hover": {
									background: "white",
									color: "#030F27",
								},
								padding: "20px 0px 20px 0px",
								fontSize: "18px",
								borderRadius: "0px",
								float: "left",
								ml: "35px",
								mt: "10px",
							}}
						>
							SEND MESSAGE
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};
