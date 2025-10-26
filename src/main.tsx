import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "./components/ui/toaster.tsx";
import ChakraClientProvider from "./providers/Chakra.tsx";
import NetworkProvider from "./providers/Network.tsx";
import router from "./routes";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ChakraClientProvider>
				<NetworkProvider>
					<RouterProvider router={router} />
					<Toaster />
				</NetworkProvider>
			</ChakraClientProvider>
		</QueryClientProvider>
	</StrictMode>,
);
