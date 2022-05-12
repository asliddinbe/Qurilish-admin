import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import rasm from "../../assets/img/carousel-1.jpg";
import rasm2 from "../../assets/img/carousel-2.jpg";
import rasm3 from "../../assets/img/carousel-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

const data = [
	{
		img: rasm,
		text: "We Are Professional",
		text2: "For Your Dream Project",
	},
	{
		img: rasm2,
		text: "Professional Builder",
		text2: "We Build Your Home",
	},
	{
		img: rasm3,
		text: "We Are Trusted",
		text2: "For Your Dream Home",
	},
];

export default () => {
	return (
		<>
			<Box>
				<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
					{data.map((item) => {
						return (
							<Box>
								<SwiperSlide>
									<Box
										sx={{
											width: "100%",
											backgroundImage: `url(${item.img})`,
											background: "linear-gradient(rgba(0,0,0,0.2 ))",
											backgroundSize: "cover",
										}}
									>
										<Typography sx={{ my: "15%", color: "white" }}>
											<Typography variant="h5">{item.text}</Typography>
											<Typography variant="h2" sx={{ fontWeight: "600" }}>
												{item.text2}
											</Typography>
											<Button
												sx={{
													border: "2px solid white",
													width: "13%",
													py: "1%",
													background: "none",
													borderRadius: "0px",
													color: "white",
												}}
											>
												Get A Quote
											</Button>
										</Typography>
									</Box>
								</SwiperSlide>
							</Box>
						);
					})}
				</Swiper>
			</Box>
		</>
	);
};
