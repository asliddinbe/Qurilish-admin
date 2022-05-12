import {
	Box,
	Container,
	Grid,
	Typography,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
} from "@mui/material";
import img1 from "../../assets/img/service-1.jpg";
import img2 from "../../assets/img/service-2.jpg";
import img3 from "../../assets/img/service-3.jpg";
import img4 from "../../assets/img/service-4.jpg";
import img5 from "../../assets/img/service-5.jpg";
import img6 from "../../assets/img/service-6.jpg";
import React from "react";

export default () => {
	return (
		<Box sx={{ bgcolor: "white", width: "100%" }}>
			<Box sx={{ py: "5%" }}>
				<Container>
					<Box sx={{ textAlign: "center" }}>
						<Typography sx={{ color: "#FDBE33" }}>Our Services</Typography>
						<Typography variant="h3">We Provide Services</Typography>
					</Box>
					<Grid container columns={12}>
						<Grid md={4} sm={6} xs={12}>
							<Card sx={{ maxWidth: 345 }}>
								<CardActionArea>
									<CardMedia
										component="img"
										height="380"
										image={img1}
										alt="###############"
									/>
									<CardContent>
										<Box
											sx={{
												display: "flex",
												backgroundColor: "#030F27",
												color: "#FDBE33",
											}}
										>
											<Box>
												<Typography variant="h5">
													Building Construction
												</Typography>
											</Box>
											<Box>
												<Typography
													variant="h3"
													sx={{ color: "#FDBE33", marginTop: "-10px" }}
												>
													+
												</Typography>
											</Box>
										</Box>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid md={4} sm={6} xs={12}>
							<Card sx={{ maxWidth: 345 }}>
								<CardActionArea>
									<CardMedia
										component="img"
										height="380"
										image={img2}
										alt="###############"
									/>
									<CardContent>
										<Box
											sx={{
												display: "flex",
												backgroundColor: "#030F27",
												color: "#FDBE33",
											}}
										>
											<Box>
												<Typography variant="h5">Hous Renovation</Typography>
											</Box>
											<Box>
												<Typography
													variant="h3"
													sx={{ color: "#FDBE33", marginTop: "-10px" }}
												>
													+
												</Typography>
											</Box>
										</Box>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid md={4} sm={6} xs={12}>
							<Card sx={{ maxWidth: 345 }}>
								<CardActionArea>
									<CardMedia
										component="img"
										height="380"
										image={img3}
										alt="###############"
									/>
									<CardContent>
										<Box
											sx={{
												display: "flex",
												backgroundColor: "#030F27",
												color: "#FDBE33",
											}}
										>
											<Box>
												<Typography variant="h5">
													Architecture Desing
												</Typography>
											</Box>
											<Box>
												<Typography
													variant="h3"
													sx={{ color: "#FDBE33", marginTop: "-10px" }}
												>
													+
												</Typography>
											</Box>
										</Box>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid md={4} sm={6} xs={12}>
							<Card sx={{ maxWidth: 345 }}>
								<CardActionArea>
									<CardMedia
										component="img"
										height="380"
										image={img4}
										alt="###############"
									/>
									<CardContent>
										<Box
											sx={{
												display: "flex",
												backgroundColor: "#030F27",
												color: "#FDBE33",
											}}
										>
											<Box>
												<Typography variant="h5">Interion Desinger</Typography>
											</Box>
											<Box>
												<Typography
													variant="h3"
													sx={{ color: "#FDBE33", marginTop: "-10px" }}
												>
													+
												</Typography>
											</Box>
										</Box>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid md={4} sm={6} xs={12}>
							<Card sx={{ maxWidth: 345 }}>
								<CardActionArea>
									<CardMedia
										component="img"
										height="380"
										image={img5}
										alt="###############"
									/>
									<CardContent>
										<Box
											sx={{
												display: "flex",
												backgroundColor: "#030F27",
												color: "#FDBE33",
											}}
										>
											<Box>
												<Typography variant="h5">Fixing & Support</Typography>
											</Box>
											<Box>
												<Typography
													variant="h3"
													sx={{ color: "#FDBE33", marginTop: "-10px" }}
												>
													+
												</Typography>
											</Box>
										</Box>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid md={4} sm={6} xs={12}>
							<Card sx={{ maxWidth: 345 }}>
								<CardActionArea>
									<CardMedia
										component="img"
										height="380"
										image={img6}
										alt="###############"
									/>
									<CardContent>
										<Box
											sx={{
												display: "flex",
												backgroundColor: "#030F27",
												color: "#FDBE33",
											}}
										>
											<Box>
												<Typography variant="h5">Painting</Typography>
											</Box>
											<Box>
												<Typography
													variant="h3"
													sx={{ color: "#FDBE33", marginTop: "-10px" }}
												>
													+
												</Typography>
											</Box>
										</Box>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Box>
	);
};

// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';

// export default function TitlebarImageList() {
//   return (
//     <Box>
//       <Container>
//         {/* <ImageList sx={{ width: 500, height: 450 }}> */}
//         <ImageList >
//           <ImageListItem key="Subheader" cols={3}>
//             <ListSubheader component="div">December</ListSubheader>
//           </ImageListItem>
//           {itemData.map((item) => (
//             <ImageListItem key={item.img}>
//               <img
//                 src={`${item.img}?w=248&fit=crop&auto=format`}
//                 srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//                 alt={item.title}
//                 loading="lazy"
//               />
//               <ImageListItemBar
//                 title={item.title}
//                 subtitle={item.author}
//                 actionIcon={
//                   <IconButton
//                     sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
//                     aria-label={`info about ${item.title}`}
//                   >
//                     <InfoIcon />
//                   </IconButton>
//                 }
//               />
//             </ImageListItem>
//           ))}
//         </ImageList>
//       </Container>
//     </Box>
//   );
// }

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Building Construction',
//     author: '@bkristastucchio',
//     rows: 2,
//     cols: 2,
//     featured: true,
//   },
//   {
//     img: "../../assets/service-6.jpg",
//     title: 'Building Construction',
//     author: '@rollelflex_graphy726',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Building Construction',
//     author: '@helloimnik',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Building Construction',
//     author: '@nolanissac',
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Building Construction',
//     author: '@hjrc33',
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Building Construction',
//     author: '@arwinneil',
//     rows: 2,
//     cols: 2,
//     featured: true,
//   },

// ];
