import {
	Box,
	Button,
	ButtonGroup,
	Container,
	Grid,
	IconButton,
	Input,
	InputBase,
	TextareaAutosize,
	TextField,
	Typography,
} from "@mui/material";
import "./index.css";
import React from "react";
import single from "../../assets/img/single.jpg";
import avatar from "../../assets/img/user.jpg";
import post1 from "../../assets/img/post-1.jpg";
import post2 from "../../assets/img/post-2.jpg";
import post3 from "../../assets/img/post-3.jpg";
import post4 from "../../assets/img/post-4.jpg";
import post5 from "../../assets/img/post-5.jpg";
import blog1 from "../../assets/img/blog-1.jpg";
import blog2 from "../../assets/img/blog-2.jpg";
import blog3 from "../../assets/img/blog-3.jpg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SearchIcon from "@mui/icons-material/Search";
const Lorem = () => (
	<Typography fontSize="255%">Lorem ipsum dolor sit amet</Typography>
);
const Coment = () => (
	<Box
		sx={{
			// p: "4%",
			display: "flex",
			// my: "3%",
		}}
	>
		<Box>
			<img src={avatar} alt="" width="80vh" />
		</Box>
		<Box sx={{ px: "2%" }}>
			<Typography fontWeight="bold" fontSize="150%">
				Josh Dunn
				<Typography>01 Jan 2045 at 12:00pm</Typography>
			</Typography>
			<Typography sx={{ my: "3%" }}>
				Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis
				sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel
				justo. In hac platea dictumst.
			</Typography>
			<Button
				variant="text"
				sx={{
					border: "1px solid #DDDDDD",
					// borderRadius: 0,
					color: "black",
					bgcolor: "#DDDDDD",

					p: "1%",
					px: "2.5%",
					":hover": { bgcolor: "#F4CA16" },
				}}
			>
				Replay
			</Button>
		</Box>
	</Box>
);
const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 8000, min: 7000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 7000, min: 4000 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 4000, min: 500 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 500, min: 0 },
		items: 1,
	},
};
const data = [
	{ rasm: post1 },
	{ rasm: post2 },
	{ rasm: post3 },
	{ rasm: post4 },
	{ rasm: post5 },
];
const Mencard = data.map((item) => (
	<Box sx={{ width: "100%", display: "flex" }}>
		<Box sx={{ p: "1%" }}>
			<img src={item.rasm} alt="" />
		</Box>
		<Box sx={{ mx: "3%" }}>
			<Typography fontSize="100%" sx={{ ":hover": { color: "#FDBE33" } }}>
				Lorem ipsum, dolor sit amet <br /> conses adipis elit
				<br />
			</Typography>
			<Typography
				sx={{
					mt: "5%",

					":hover": { color: "#FDBE33" },
				}}
			>
				By Admin in Desing
			</Typography>
		</Box>
	</Box>
));

const Text = () => (
	<Box>
		<Typography fontSize="22px">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie,
			lorem eu eleifend bibendum, augue purus mollis sapien, non rhoncus eros
			leo in nunc. Donec a nulla vel turpis consectetur tempor ac vel justo. In
			hac habitasse platea dictumst. Cras nec sollicitudin eros. Nunc eu enim
			non turpis sagittis rhoncus consectetur id augue. Mauris dignissim neque
			felis. Phasellus mollis mi a pharetra cursus. Maecenas vulputate augue
			placerat lacus mattis, nec ornare risus sollicitudin.
		</Typography>
		<br />
	</Box>
);
const cdata = [
	{ text: "National", num: "98" },
	{ text: "International", num: "87" },
	{ text: "Economics", num: "76" },
	{ text: "Politics", num: "65" },
	{ text: "Lifestyle", num: "54" },
	{ text: "Technology", num: "43" },
	{ text: "Trades", num: "32" },
];
const catigories = cdata.map((item) => (
	<Box
		sx={{
			display: "flex",
			justifyContent: "space-between",
			my: "3%",
		}}
	>
		<Typography
			sx={{
				":hover": { color: "#FDBE33" },
				display: "flex",
				gap: 2,
			}}
		>
			<ArrowForwardIosIcon
				sx={{ color: "#FDBE33", mt: "3%" }}
				fontSize="small"
			/>
			<Typography fontSize="120%">{item.text}</Typography>
		</Typography>
		<Typography fontSize="120%">({item.num})</Typography>
	</Box>
));
export default () => {
	return (
		<>
			<Container maxWidth="xl" sx={{}}>
				<Box sx={{ mx: "3%", my: "8%" }}>
					<Grid container spacing={0}>
						<Grid item lg={8} xs={12} sm={12} md={8} container spacing={0}>
							<Box sx={{ width: "97%" }}>
								<Box>
									<img src={single} alt="" width="99%" />
								</Box>
								<Box sx={{ my: "2%" }}>
									<Grid
										item
										lg={12}
										xs={12}
										sm={12}
										md={12}
										container
										spacing={0}
									>
										<Lorem />
										<Text />

										<Text />
										<br />
										<Typography fontSize="22px">
											Quisque arcu nulla, convallis nec orci vel, suscipit
											elementum odio. Curabitur volutpat velit non diam
											tincidunt sodales. Nullam sapien libero, bibendum nec
											viverra in, iaculis ut eros.
										</Typography>

										<Lorem />
										<Text />
										<Text />
										<Lorem />
										<Typography fontSize="22px">
											Praesent ultricies, mauris eget vestibulum viverra, neque
											lorem malesuada mauris, eget rhoncus lectus enim a lorem.
											Vivamus at vehicula risus, eget facilisis massa. Lorem
											ipsum dolor sit amet, consectetur adipiscing elit. Cras et
											posuere sapien. Fusce bibendum lorem sem, quis tincidunt
											felis mattis nec.
										</Typography>
										<br />
										<Text />
										<Text />
									</Grid>
									<Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
										{[
											"National",
											" International",
											"Economics",
											"Politics",
											"Lifestyle",
											"Technology",
											"Trades",
										].map((value) => {
											return (
												<Button
													variant="text"
													sx={{
														border: "1px solid #DDDDDD",
														borderRadius: 0,
														color: "black",

														p: "1%",
														px: "2.5%",
														":hover": { color: "#FDBE33", bgcolor: "black" },
													}}
												>
													{value}
												</Button>
											);
										})}
									</Box>
									<Box
										sx={{
											bgcolor: "#F3F6FF",
											p: "4%",
											display: "flex",
											my: "3%",
										}}
									>
										<Box>
											<img src={avatar} alt="" />
										</Box>
										<Box sx={{ px: "4%" }}>
											<Typography fontWeight="bold" variant="h5">
												Author Name
											</Typography>
											<Typography variant="h6">
												Lorem ipsum dolor sit amet elit. Integer lorem augue
												purus mollis sapien, non eros leo in nunc. Donec a nulla
												vel turpis tempor ac vel justo. In hac platea dictumst.
											</Typography>
										</Box>
									</Box>
								</Box>
								<Box
									sx={{
										display: "flex",
										flexWrap: "wrap",
										justifyContent: "space-between",
										mt: "5%",
										mb: "3%",
										pr: "1%",
									}}
								>
									<Typography
										fontWeight="bold"
										variant="h4"
										sx={{ width: "300px" }}
									>
										Related Post
									</Typography>
									<Box
										sx={{
											display: "flex",
										}}
									>
										<Button
											variant="text"
											size="small"
											sx={{
												borderRadius: 0,
												color: "black",
												bgcolor: "#FDBE33",
												mx: "2%",
												py: "1%",
												width: "30px",
												":hover": { color: "#FDBE33", bgcolor: "black" },
											}}
										>
											<ArrowBackIosNewIcon fontWeight="bold" />
										</Button>
										<Button
											variant="text"
											size="small"
											sx={{
												borderRadius: 0,
												color: "black",
												bgcolor: "#FDBE33",
												mx: "2%",
												py: "1%",
												width: "30px",
												":hover": { color: "#FDBE33", bgcolor: "black" },
											}}
										>
											<ArrowForwardIosIcon fontWeight="bold" />
										</Button>
									</Box>
								</Box>
								<Box sx={{ paddingY: "5px" }}>
									<Carousel responsive={responsive}>{Mencard}</Carousel>
								</Box>
								<Box>
									<Typography fontWeight="bold" variant="h4" sx={{ my: "5%" }}>
										3 Comments
									</Typography>
									<Coment />
									<Box sx={{ my: "3%" }}>
										<Coment />
									</Box>
									<Box sx={{ my: "3%", px: "7%" }}>
										<Coment />
									</Box>
								</Box>
								<Box>
									<Typography fontWeight="bold" variant="h4" sx={{ my: "5%" }}>
										Leave a comment
									</Typography>
									<Box sx={{ width: "100%", bgcolor: "#F3F6FF", p: "5%" }}>
										<Typography variant="h6">Name *</Typography>
										<TextField
											id="outlined-basic"
											variant="outlined"
											sx={{
												width: "100%",
												bgcolor: "white",
												borderRadius: 0,
												my: "2%",
											}}
										/>
										<Typography variant="h6">Email *</Typography>
										<TextField
											id="outlined-basic"
											variant="outlined"
											sx={{
												width: "100%",
												bgcolor: "white",
												borderRadius: 0,
												my: "2%",
											}}
										/>
										<Typography variant="h6">Website</Typography>
										<TextField
											id="outlined-basic"
											variant="outlined"
											sx={{
												width: "100%",
												bgcolor: "white",
												borderRadius: 0,
												my: "2%",
											}}
										/>
										<Typography variant="h6">Message *</Typography>
										<TextareaAutosize
											aria-label="empty textarea"
											style={{
												width: "100%",
												backgroundColor: "white",
												borderRadius: 0,
												marginTop: "2%",
												height: "25vh",
											}}
										/>
										<Button
											variant="text"
											sx={{
												borderRadius: 0,
												color: "black",
												bgcolor: "#FDBE33",
												my: "2%",

												py: "2%",
												px: "4%",

												":hover": { color: "#FDBE33", bgcolor: "black" },
											}}
										>
											Post Coment
										</Button>
									</Box>
								</Box>
							</Box>
						</Grid>
						<Grid item lg={4} xs={12} sm={12} md={4} container spacing={0}>
							<Box sx={{ width: "97%" }}>
								<Box>
									<Box
										component="form"
										sx={{
											p: "2px 4px",
											display: "flex",
											alignItems: "center",
											width: "97%",
											border: "1px solid #ccc",
										}}
									>
										<InputBase
											sx={{ ml: 1, flex: 1, p: "3%" }}
											placeholder="Search Google Maps"
											inputProps={{ "aria-label": "Search google" }}
										/>
										<IconButton
											type="submit"
											sx={{ p: "1px" }}
											aria-label="search"
										>
											<SearchIcon
												sx={{
													width: "40px",
													height: "40px",
													color: "black",
													":hover": { color: "#FDBE33" },
												}}
											/>
										</IconButton>
									</Box>
									<Box>
										<Typography
											fontSize="220%"
											fontWeight="950"
											sx={{ my: "3%" }}
										>
											Recent Post
											<hr
												style={{
													width: "15%",
													backgroundColor: "#FDBE33",
													opacity: 2,
													border: 0,
													height: "3px",
												}}
											/>
										</Typography>
										<Box sx={{ my: "10%" }}>{Mencard}</Box>
									</Box>
									<Box
										sx={{
											width: "100%",
											display: "block",
											cursor: "pointer",
										}}
									>
										<figure>
											<img src={blog1} alt="" className="img" />
										</figure>
									</Box>
									<Box>
										<ButtonGroup
											variant="outlined"
											aria-label="outlined button group"
											sx={{ width: "100%", my: "5%" }}
										>
											<Button
												variant="text"
												sx={{
													borderRadius: 0,
													color: "black",
													bgcolor: "#FDBE33",

													px: "15%",
													":hover": { bgcolor: "#FDBE33", color: "black" },
													":active": { bgcolor: "black", color: "#FDBE33" },
												}}
											>
												Featured
											</Button>
											<Button
												variant="text"
												size="small"
												sx={{
													borderRadius: 0,
													bgcolor: "black",
													color: "#FDBE33",
													px: "15%",

													":hover": { bgcolor: "#FDBE33", color: "black" },
													":active": { bgcolor: "black", color: "#FDBE33" },
												}}
											>
												Popular
											</Button>
											<Button
												variant="text"
												size="small"
												sx={{
													borderRadius: 0,
													bgcolor: "black",
													color: "#FDBE33",
													px: "15%",
													py: "3%",

													":hover": { bgcolor: "#FDBE33", color: "black" },
													":active": { bgcolor: "black", color: "#FDBE33" },
												}}
											>
												Latest
											</Button>
										</ButtonGroup>
										<Box>
											<Box sx={{ my: "10%" }}>{Mencard}</Box>
										</Box>
										<Box
											sx={{
												width: "100%",
												display: "block",
												cursor: "pointer",
											}}
										>
											<figure>
												<img src={blog2} alt="" className="img" />
											</figure>
										</Box>
										<Box>
											<Typography
												fontSize="220%"
												fontWeight="950"
												sx={{ my: "8%" }}
											>
												Categories
												<hr
													style={{
														width: "15%",
														backgroundColor: "#FDBE33",
														opacity: 2,
														border: 0,
														height: "3px",
													}}
												/>
											</Typography>
											{catigories}
										</Box>
										<Box
											sx={{
												width: "100%",
												display: "block",
												cursor: "pointer",
												my: "12%",
											}}
										>
											<figure>
												<img src={blog3} alt="" className="img" />
											</figure>
										</Box>
										<Box>
											<Typography
												fontSize="220%"
												fontWeight="950"
												sx={{ my: "10%" }}
											>
												Tags Cloud
												<hr
													style={{
														width: "15%",
														backgroundColor: "#FDBE33",
														opacity: 2,
														border: 0,
														height: "3px",
													}}
												/>
											</Typography>
											<Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
												{[
													"National",
													" International",
													"Economics",
													"Politics",
													"Lifestyle",
													"Technology",
													"Trades",
												].map((value) => {
													return (
														<Button
															variant="text"
															sx={{
																border: "1px solid #DDDDDD",
																borderRadius: 0,
																color: "black",

																p: "2%",
																px: "3.5%",
																":hover": {
																	color: "#FDBE33",
																	bgcolor: "black",
																},
															}}
														>
															{value}
														</Button>
													);
												})}
											</Box>
											<Box>
												<Typography
													fontSize="220%"
													fontWeight="950"
													sx={{ my: "10%" }}
												>
													Text Widget
													<hr
														style={{
															width: "15%",
															backgroundColor: "#FDBE33",
															opacity: 2,
															border: 0,
															height: "3px",
														}}
													/>
												</Typography>
												<Typography fontSize="150%">
													Lorem ipsum dolor sit amet elit. Integer lorem augue
													purus mollis sapien, non eros leo in nunc. Donec a
													nulla vel turpis tempor ac vel justo. In hac platea
													nec eros. Nunc eu enim non turpis id augue.
												</Typography>
											</Box>
										</Box>
									</Box>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</>
	);
};
