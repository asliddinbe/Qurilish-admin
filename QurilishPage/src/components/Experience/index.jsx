import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import build from "../../assets/img/about.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
export default () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	});

	return (
		<>
			<Container sx={{ bgcolor: "white" }}>
				<Box data-aos="fade-up">
					<Grid container spacing={2} sx={{ mt: "5%" }}>
						<Grid item md={5} xs={12} sm={12}>
							<Box sx={{ display: "flex", justifyContent: "center" }}>
								<img src={build} style={{ width: "90%", height: "100%" }} />
							</Box>
						</Grid>
						<Grid item md={7} xs={12} sm={12}>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									flexDirection: "column",
								}}
							>
								<Typography
									sx={{
										width: "100%",
										fontWeight: "700",
										color: "#FDBE33",
										fontSize: "19px",
									}}
								>
									Welcome to Builderz
								</Typography>
								<Typography
									variant="h3"
									sx={{
										width: "100%",
										fontWeight: "700",
									}}
								>
									25 Years Experience
								</Typography>
								<br />
								<Typography
									sx={{
										width: "100%",
										color: "#666666",
									}}
								>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Phasellus nec pretium mi. Curabitur facilisis ornare velit non
									vulputate. Aliquam metus tortor, auctor id gravida
									condimentum, viverra quis sem. <br />
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Phasellus nec pretium mi. Curabitur facilisis ornare velit non
									vulputate. Aliquam metus tortor, auctor id gravida
									condimentum, viverra quis sem. Curabitur non nisl nec nisi
									scelerisque maximus. Aenean consectetur convallis porttitor.
									Aliquam interdum at lacus non blandit.
								</Typography>
								<br />
								<br />
								<Typography
									sx={{
										width: "100%",
									}}
								>
									<Button
										sx={{
											backgroundColor: "#FDBE33",
											borderRadius: "0px",
											fontSize: "12px",
											pl: "4%",
											pt: "2%",
											pr: "4%",
											pb: "2%",
											fontWeight: "600",
											color: "black",
											transition: "1s",
											":hover": {
												backgroundColor: "black",
												borderRadius: "0px",
												fontSize: "12px",
												pl: "4%",
												pt: "2%",
												pr: "4%",
												pb: "2%",
												fontWeight: "600",
												color: "#FDBE33",
											},
										}}
									>
										Learn More
									</Button>
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</>
	);
};
