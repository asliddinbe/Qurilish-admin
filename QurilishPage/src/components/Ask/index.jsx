import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Component from "./component";

export default () => {
	return (
		<Box sx={{ width: "100%", bgcolor: "white" }}>
			<Box sx={{ my: "3%" }}>
				<Container>
					<Box sx={{ textAlign: "center" }}>
						<Typography sx={{ color: "#FDBE33" }}>
							Frequently Asked Question
						</Typography>
						<Typography variant="h3">You May Ask</Typography>
					</Box>
					<Grid container columns={12}>
						<Grid md={6} xs={12}>
							<Component />
							<Component />
							<Component />
							<Component />
							<Component />
						</Grid>
						<Grid md={6} xs={12}>
							<Component />
							<Component />
							<Component />
							<Component />
							<Component />
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Box>
	);
};
