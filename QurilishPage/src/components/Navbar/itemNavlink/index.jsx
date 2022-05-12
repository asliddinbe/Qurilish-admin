import React from "react";
import Container from "@mui/material/Container";
import { Box, Button, Grid, Menu, MenuItem, Typography } from "@mui/material";
import Mobil from "../Mobil";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "../index.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

// const data = [
// 	{ name: "HOME" },
// 	{ name: "ABOUT" },
// 	{ name: "SERVICE" },
// 	{ name: "TEAM" },
// 	{ name: "PROJECT" },
// 	{ name: "PAGES" },
// 	{ name: "CONTACT" },
// ];

// const Nav = data.map((item) => (
// 	<Box>
// 		<Typography variant="h6">
// 			<Link href="#" underline="none" sx={{ color: "white" }}>
// 				{item.name}
// 			</Link>
// 		</Typography>
// 	</Box>
// ));
const style = {
	color: "white",
	textDecoration: "none",
};
export default () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [navbar, setNavbar] = React.useState(false);
	function handleClick(event) {
		if (anchorEl !== event.currentTarget) {
			setAnchorEl(event.currentTarget);
		}
	}

	function handleClose() {
		setAnchorEl(null);
	}
	const changeWihd = () => {
		if (window.scrollY >= 150) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};
	window.addEventListener("scroll", changeWihd);

	return (
		<div
			style={{
				background: "#FDBE33",
				margin: 0,
				padding: 0,
				position: "relative",
				zIndex: 1,
			}}
		>
			<nav>
				<Box className={navbar ? "navbar activ" : "navbar"}>
					<Grid container spacing={0}>
						<Grid item lg={6} xs={6} sm={6} md={6} container spacing={0}>
							<Box
								sx={{
									display: { md: "none", sm: "flex", xs: "flex" },
									flexDirection: "row",
									justifyContent: "start",
								}}
							>
								<Typography sx={{ color: "white" }}>MENU</Typography>
							</Box>
							<Box
								sx={{
									// position: "fixed",
									width: "100%",
									justifyContent: "space-between",

									// gap: 2,
									display: { md: "flex", sm: "none", xs: "none" },

									// ":hover ": { marginX: 0 },
								}}
							>
								<Link to="/" style={style}>
									<Typography variant="h6" id="text">
										HOME
									</Typography>
								</Link>
								<Link to="/about" style={style}>
									<Typography variant="h6" id="text">
										ABOUT
									</Typography>
								</Link>

								<Link to="/service" style={style}>
									<Typography variant="h6" id="text">
										SERVICE
									</Typography>
								</Link>
								<Link to="/team" style={style}>
									<Typography variant="h6" id="text">
										TEAM
									</Typography>
								</Link>
								<Link to="/project" style={style}>
									<Typography variant="h6" id="text">
										PROJECT
									</Typography>
								</Link>
								<Link to="/" style={style} id="text">
									<Typography
										id="text"
										variant="h6"
										sx={{
											color: "white",
											display: "flex",
											alignItems: "center",
											":hover": { color: "#FDBE33" },
										}}
										onClick={handleClick}
										// onChange={handleClick}
										onMouseOver={handleClick}
									>
										PAGES
										<ArrowDropDownIcon />
									</Typography>
								</Link>
								<Menu
									id="simple-menu"
									anchorEl={anchorEl}
									open={Boolean(anchorEl)}
									onClose={handleClose}
									MenuListProps={{ onMouseLeave: handleClose }}
								>
									<MenuItem onClick={handleClose}>
										<Link
											to="/blogpage"
											style={{ textDecoration: "none", color: "black" }}
										>
											BLOG PAGE
										</Link>
									</MenuItem>
									<Link
										to="/single"
										style={{ textDecoration: "none", color: "black" }}
									>
										{" "}
										<MenuItem onClick={handleClose}>SINGLE PAGE</MenuItem>
									</Link>
								</Menu>
								<Link to="/contact" style={style}>
									<Typography variant="h6" id="text">
										CONTACT
									</Typography>
								</Link>
							</Box>
						</Grid>
						<Grid
							item
							lg={6}
							xs={6}
							sm={6}
							md={6}
							container
							spacing={0}
							// className="border-2"
							sx={{ display: "flex", justifyContent: "end" }}
						>
							<Box
								sx={{
									display: "flex",
									justifyContent: "end",
									width: "100%",
									position: "relative",
								}}
								// className="border-2"
							>
								<Box>
									<Box>
										<Button
											variant="text"
											sx={{
												display: { md: "flex", sm: "none", xs: "none" },
												border: 3,
												borderColor: "white",
												borderRadius: 0,
												paddingY: "4%",
												paddingX: 2,
												color: "white",
												fontSize: "17px",
												":hover ": {
													color: "black",
													bgcolor: "#FDBE33",
													borderColor: "#FDBE33",
												},
											}}
										>
											Get A Quote
										</Button>
									</Box>
								</Box>
							</Box>
							<Box
								sx={{
									display: { md: "none", sm: "flex", xs: "flex" },
									justifyContent: "end",
									color: "white",
								}}
							>
								<MenuIcon />
								{/* <Mobil /> */}
							</Box>
						</Grid>
					</Grid>
				</Box>
			</nav>
		</div>
	);
};
