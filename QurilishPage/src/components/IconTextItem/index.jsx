import React from "react";
import { Box, Typography, Grid } from "@mui/material";
export default () => {
	return (
		<div>
			<Box sx={{ display: "flex", textAlign: "center", bgcolor: "white" }}>
				<Grid container spacing={0}>
					<Grid lg={4} md={4} sm={12} xs={12} spacing={0}>
						<Box sx={{ bgcolor: "#030F27", color: "#FDBE2D", py: "5%" }}>
							<Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
								Expert Worker
							</Typography>
							<Typography sx={{ marginTop: 1, marginLeft: 3 }}>
								Lorem ipsum dolor sit amet <br />
								elit. Phasus nec pretim ornare <br />
								velit non
							</Typography>
						</Box>
					</Grid>
					<Grid lg={4} md={4} sm={12} xs={12} spacing={0}>
						<Box sx={{ bgcolor: "#FDBE2D", color: "#030F27", py: "5%" }}>
							<Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
								Quality Work
							</Typography>
							<Typography sx={{ marginTop: 1, marginLeft: 3 }}>
								Lorem ipsum dolor sit amet <br />
								elit. Phasus nec pretim ornare <br />
								velit non
							</Typography>
						</Box>
					</Grid>
					<Grid lg={4} md={4} sm={12} xs={12} spacing={0}>
						<Box sx={{ bgcolor: "#030F27", color: "#FDBE2D", py: "5%" }}>
							<Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
								24/7 Support
							</Typography>
							<Typography sx={{ marginTop: 1, marginLeft: 3 }}>
								Lorem ipsum dolor sit amet <br />
								elit. Phasus nec pretim ornare <br />
								velit non
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};
