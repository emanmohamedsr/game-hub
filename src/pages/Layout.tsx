import NavBar from "@/components/layout/NavBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
};

export default RootLayout;
