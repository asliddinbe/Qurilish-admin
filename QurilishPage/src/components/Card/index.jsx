import { Box, Container, Grid, Link, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import Aos from "aos";
import "aos/dist/aos.css";
export default () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	});

	const data = [
		{
			img: require("../../assets/img/blog-1.jpg"),
		},
		{
			img: require("../../assets/img/blog-2.jpg"),
		},
		{
			img: require("../../assets/img/blog-3.jpg"),
		},
		{
			img: require("../../assets/img/blog-1.jpg"),
		},
		{
			img: require("../../assets/img/blog-2.jpg"),
		},
		{
			img: require("../../assets/img/blog-3.jpg"),
		},
	];
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Container>
				<Box
					sx={{
						mt: "7%",
						mb: "5%",
						width: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Typography sx={{ textAlign: "center" }}>
						<Typography
							sx={{ color: "#FDBE33FF", fontWeight: "700", fontSize: "20px" }}
						>
							Latest Blog
						</Typography>
						<Typography
							sx={{ color: "#030F27FF", fontWeight: "800", fontSize: "50px" }}
						>
							Latest From Our Blog
						</Typography>
					</Typography>
				</Box>
				<Grid sx={{ flexGrow: 1 }} data-aos="fade-up" container spacing={2}>
					<Grid item xs={12}>
						<Grid container justifyContent="center" spacing={5}>
							{data.map((value) => (
								<Grid
									key={value}
									item
									xs={12}
									md={4}
									sm={6}
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<Box
										sx={{
											width: "95%",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											flexDirection: "column",
											":hover": {
												color: "white",
											},
										}}
									>
										<img src={value.img} width={"100%"} />
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												width: "100%",
											}}
										>
											<Typography
												sx={{
													width: "80%",
													backgroundColor: "#030F27FF",
													color: "#FDBE33FF",
													pt: "6%",
													pl: "5%",
													pb: "5%",
													fontSize: "18px",
												}}
											>
												Lorem ipsum dolor sit
											</Typography>
											<Typography
												sx={{
													width: "20%",
													pt: "2%",
													pb: "2%",
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													// color: "#030F27FF",
													backgroundColor: "#FDBE33FF",
												}}
											>
												<AddIcon
													sx={{
														fontSize: "50px",
														fontWeight: "1",
													}}
												/>
											</Typography>
										</Box>
										<Box
											sx={{
												width: "100%",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												backgroundColor: "#F3F6FFFF",
											}}
										>
											<br />
											<Typography
												sx={{
													mb: "5%",
													textAlign: "center",
													color: "#666666FF",
													display: "flex",
													alignItems: "center",
													flexDirection: "column",
												}}
											>
												<Typography sx={{ mt: "10%", mb: "5%" }}>
													By{" "}
													<Link
														sx={{
															textDecoration: "none",
															color: "#666666FF",
															":hover": {
																color: "red",
															},
														}}
													>
														Admin
													</Link>{" "}
													In{" "}
													<Link
														sx={{
															textDecoration: "none",
															color: "#666666FF",
															":hover": {
																color: "red",
															},
														}}
													>
														Construction
													</Link>
												</Typography>
												<Typography
													sx={{
														borderBottom: "1px solid red",
														width: "40%",
														mb: "5%",
													}}
												></Typography>
												<Typography>
													Lorem ipsum dolor sit amet elit. <br /> Phasellus nec
													pretium mi. Curabitur <br /> facilisis ornare velit
													non vulputate. <br />
													Aliquam metus tortor
												</Typography>
											</Typography>
										</Box>
									</Box>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
