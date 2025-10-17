import ErrorBoundary from "@/components/error/ErrorBoundary";
import GameHub from "@/pages";
import RootLayout from "@/pages/Layout";
import PageNotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				index: true,
				element: <GameHub />,
			},
			{
				path: "*",
				element: <PageNotFound />,
			},
		],
	},
]);

export default router;
