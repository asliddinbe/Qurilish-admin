import React from "react";
import { Navigate } from "react-router-dom";
import Users from "../views/Users/List";
import Home from "../pages/HomePage";
import Blog from "../pages/Blog";
import Team from "../pages/Team";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Servis from "../pages/Servis";
import Single from "../pages/Single";
import About from "../pages/About";

export const routes = [
	{
		// element: <Navbar />,

		children: [
			{ index: true, element: <Home /> },
			{ path: "/users", element: <Users /> },
			{ path: "/service", element: <Servis /> },
			{ path: "/blogpage", element: <Blog /> },
			{ path: "/team", element: <Team /> },
			{ path: "/project", element: <Projects /> },
			{ path: "/single", element: <Single /> },
			{ path: "/about", element: <About /> },
			{ path: "/contact", element: <Contact /> },
			{ path: "*", element: <Navigate to="/" /> },
		],
		// element: <Footer />,
	},
];
