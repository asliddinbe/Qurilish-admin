import React from "react";
import "./index.css";
import { Box, Typography, Grid } from "@mui/material";
import Experience from "../../components/Experience";
import NumberAnimation from "../../components/NumberAnimation";
import Ask from "../../components/Ask";
import Service from "../../components/Service";
import CardTeam from "../../components/CardTeam";
import Modalbutton from "../../components/Modalbutton";
import IconTextItem from "../../components/IconTextItem";
import Swiper from "../../pages/Swiper/Swiper";
import bg from "../../assets/img/carousel-1.jpg";

export default () => {
	return (
		<div className="home" style={{ backgroundColor: "white" }}>
			<Box sx={{ width: "100%", bgcolor: "white" }}>
				<Swiper />
				<IconTextItem />
				<Experience />
				<NumberAnimation />
				<Ask />
				<Service />
			</Box>
			<Modalbutton />
			<Box sx={{ width: "100%", bgcolor: "white" }}>
				<CardTeam />
			</Box>
		</div>
	);
};
