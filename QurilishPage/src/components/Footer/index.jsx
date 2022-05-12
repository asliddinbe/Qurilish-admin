import {
	Box,
	Button,
	ButtonGroup,
	Container,
	Divider,
	Grid,
	InputBase,
	Paper,
	Typography,
} from "@mui/material";
import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
import "./index.css";
const dataicon = [
	{ icon: <TwitterIcon /> },
	{ icon: <FacebookIcon /> },
	{ icon: <YouTubeIcon /> },
	{ icon: <InstagramIcon /> },
	{ icon: <GoogleIcon /> },
];
const datatext = [
	{ text1: "Building Construction", text2: "About Us" },
	{ text1: "House Renovation", text2: "Contact Us" },
	{ text1: "Architecture Design", text2: "Our Team" },
	{ text1: " Interior Design", text2: "Projects" },
	{ text1: "Painting", text2: "Testimonial" },
];
const Text1 = datatext.map((item) => (
	<Typography
		fontSize="20px"
		sx={{ display: "flex", alignItems: "center", marginY: "3%" }}
		className="texthover"
	>
		<ChevronRightIcon /> {item.text1}
	</Typography>
));
const Text2 = datatext.map((item) => (
	<Typography
		fontSize="20px"
		sx={{ display: "flex", alignItems: "center", marginY: "2%" }}
		className="texthover"
	>
		<ChevronRightIcon /> {item.text2}
	</Typography>
));
const Icon = dataicon.map((item) => (
	<Box className="iconhover">{item.icon}</Box>
));
const Footer = () => {
	return (
		<div>
			<Box sx={{ bgcolor: "black", paddingTop: "8%" }}>
				<Container maxWidth="xl">
					<Grid
						container
						spacing={0}
						sx={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-around",
							// gap: 1,
						}}
					>
						<Grid
							lg={3}
							xs={12}
							sm={6}
							md={3}
							container
							spacing={0}
							sx={{ color: "white", width: "100%", padding: "1%" }}
						>
							<Typography
								sx={{ display: "flex", gap: 2, flexDirection: "column" }}
							>
								<Typography
									sx={{
										display: "flex",
										gap: 2,
										flexDirection: "column",
									}}
								>
									<Typography
										variant="h5"
										fontWeight="bold"
										sx={{ color: "#FDBE33" }}
									>
										Office Contact
										<hr id="hr" />
									</Typography>
									<Typography
										fontSize="17px"
										sx={{ display: "flex", alignItems: "center", gap: 1 }}
									>
										<PlaceIcon />
										0123 Street, New York, USA
									</Typography>
									<Typography
										fontSize="17px"
										sx={{ display: "flex", alignItems: "center", gap: 1 }}
									>
										<PhoneIcon />
										+012 345 67890
									</Typography>
									<Typography
										fontSize="17px"
										sx={{ display: "flex", alignItems: "center", gap: 1 }}
									>
										<MailIcon />
										info@example.com
									</Typography>
									<Box sx={{ display: "flex", gap: 1 }}>{Icon}</Box>
								</Typography>
							</Typography>
						</Grid>
						<Grid
							lg={3}
							xs={12}
							sm={6}
							md={3}
							container
							spacing={0}
							sx={{ color: "white", width: "100%", paddingX: "2%" }}
							// id="border"
						>
							<Typography
								variant="h5"
								fontWeight="bold"
								sx={{ color: "#FDBE33" }}
							>
								Services Areas
								<hr id="hr" />
							</Typography>
							<Typography
								sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
							>
								<Link to="/" className="linktext">
									{Text1}
								</Link>
							</Typography>
						</Grid>
						<Grid
							lg={3}
							xs={12}
							sm={6}
							md={3}
							container
							spacing={0}
							sx={{
								color: "white",
								paddingX: "2%",
								display: "flex",
								flexDirection: "column",
							}}
							// id="border"
						>
							<Typography
								variant="h5"
								fontWeight="bold"
								sx={{ color: "#FDBE33" }}
							>
								Useful Pages
								<hr id="hr" />
							</Typography>
							<Typography
								sx={{
									display: "flex",
									flexDirection: "column",
									gap: 1,
									paddingBottom: "9%",
								}}
							>
								<Link to="/" className="linktext">
									{Text2}
								</Link>
							</Typography>
						</Grid>
						<Grid
							lg={3}
							xs={12}
							sm={6}
							md={3}
							container
							spacing={0}
							sx={{ color: "white", paddingX: "2%", paddingBottom: "5%" }}
							// id="border"
						>
							<Typography
								variant="h5"
								fontWeight="bold"
								sx={{ color: "#FDBE33" }}
							>
								Newsletter
								<hr id="hr" />
							</Typography>
							<Typography fontSize="18px">
								Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
								Curabitur facilisis ornare velit non vulpu
							</Typography>
							<Paper
								component="form"
								sx={{
									p: "2px 4px",
									display: "flex",
									alignItems: "center",
									width: "100%",
								}}
							>
								<InputBase
									id="input"
									placeholder="Email here"
									inputProps={{ "aria-label": "search google maps" }}
								/>

								<Button variant="text" id="btn">
									SUBMIT
								</Button>
							</Paper>
						</Grid>
						<Grid
							lg={12}
							xs={12}
							sm={12}
							md={12}
							container
							spacing={0}
							sx={{ color: "white", marginY: "3px" }}
						>
							<Box sx={{ width: "100%" }}>
								{/* <hr /> */}
								<Divider
									sx={{
										bgcolor: "white",
										marginX: "5%",
										marginY: "2%",
										height: "0.2px",
									}}
									orientation="horizontal"
								/>
								<Box
									sx={{
										display: "flex",
										justifyContent: "center",
										gap: 3,
										flexWrap: "wrap",
									}}
								>
									<Typography id="text" variant="h6">
										Terms of use{" "}
									</Typography>
									<Typography id="text" variant="h6">
										Privacy policy{" "}
									</Typography>
									<Typography id="text" variant="h6">
										Cookies{" "}
									</Typography>
									<Typography id="text" variant="h6">
										Help{" "}
									</Typography>
									<Typography id="text" variant="h6">
										FQAS{" "}
									</Typography>
								</Box>

								<Divider
									sx={{ bgcolor: "white", marginX: "5%", marginY: "2%" }}
									orientation="horizontal"
								/>
							</Box>
						</Grid>
						<Grid
							lg={12}
							xs={12}
							sm={12}
							md={12}
							container
							spacing={0}
							sx={{
								color: "white",
								display: "flex",
								justifyContent: "space-between",
								marginX: "3%",
								marginY: "1%",
							}}
						>
							<Box sx={{ display: "flex" }}>
								<Typography id="text0" variant="h6">
									© Your Site Name
								</Typography>
								<Typography variant="h6">,All Right Reserved.</Typography>
							</Box>
							<Box sx={{ display: "flex" }}>
								<Typography id="text0" variant="h6">
									Designed By
								</Typography>
								<Typography variant="h6">HTML Code A</Typography>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</div>
	);
};

export default Footer;
