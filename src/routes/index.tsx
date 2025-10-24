import ErrorBoundary from "@/components/error/ErrorBoundary";
import GameHub from "@/pages";
import GameHubLayout from "@/pages/GameHubLayout";
import RootLayout from "@/pages/Layout";
import PageNotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "../pages/GameDetail";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />, // navbar layout
		errorElement: <ErrorBoundary />,
		children: [
			{
				element: <GameHubLayout />, // navbar and sidebar layout
				children: [
					{
						index: true,
						element: <GameHub />,
					},
				],
			},
			{
				path: "games/:slug",
				element: <GameDetailPage />,
			},
			{
				path: "*",
				element: <PageNotFound />,
			},
		],
	},
]);

export default router;
