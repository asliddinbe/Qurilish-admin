import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import play from "../../assets/img/SS.mp4";

export default () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<>
			<Box
				sx={{
					width: "100%",
					backgroundColor: "rgba(1, 4, 13, 0.893)",
					height: "100vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Button
					onClick={handleOpen}
					sx={{
						backgroundColor: "#FDBE33",
						borderRadius: "50px",
						color: "#030F27",
					}}
				>
					<PlayArrowIcon
						sx={{
							fontSize: "75px",
						}}
					/>
				</Button>
				<Modal
					// keepMounted
					open={open}
					onClose={handleClose}
					aria-labelledby="keep-mounted-modal-title"
					aria-describedby="keep-mounted-modal-description"
				>
					<Box>
						<Modal
							keepMounted
							open={open}
							onClose={handleClose}
							aria-labelledby="keep-mounted-modal-title"
							aria-describedby="keep-mounted-modal-description"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Box
								sx={{
									width: "600px",
								}}
							>
								<Button
									onClick={handleClose}
									sx={{
										position: "relative",
										color: "white",
										bottom: "75%",
										left: "90%",
									}}
								>
									<CloseIcon />
								</Button>
								<video
									src={play}
									muted
									loop
									autoPlay
									style={{ width: "100%" }}
								></video>
							</Box>
						</Modal>
					</Box>
				</Modal>
			</Box>
		</>
	);
};
