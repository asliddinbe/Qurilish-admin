import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";
import { useRoutes } from "react-router-dom";
import { routes } from "../../routes/routes";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function ScrollTop(props) {
	const { children, window } = props;

	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 150,
	});

	const handleClick = (event) => {
		const anchor = (event.target.ownerDocument || document).querySelector(
			"#back-to-top-anchor"
		);

		if (anchor) {
			anchor.scrollIntoView({
				behavior: "smooth",
				block: "center",
			});
		}
	};

	return (
		<Zoom in={trigger}>
			<Box
				onClick={handleClick}
				role="presentation"
				sx={{ position: "fixed", bottom: 16, right: 16 }}
			>
				{children}
			</Box>
		</Zoom>
	);
}

ScrollTop.propTypes = {
	children: PropTypes.element.isRequired,

	window: PropTypes.func,
};

export default (props) => {
	const content = useRoutes(routes);

	return (
		<React.Fragment>
			<Toolbar sx={{ mt: "-70px", width: "0%" }} id="back-to-top-anchor" />

			<Box>
				<Navbar />
				{content}
				<Footer />
			</Box>

			<ScrollTop>
				<Fab
					sx={{
						background: "#FDBE33",
						color: "black",
						borderRadius: "1px",

						":hover": { background: "black", color: "#FDBE33" },
					}}
					size="large"
					aria-label="scroll back to top"
				>
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
		</React.Fragment>
	);
};
