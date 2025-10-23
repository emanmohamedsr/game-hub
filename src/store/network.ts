import { create } from "zustand";

interface INetwork {
	isOnline: boolean;
	setOnline: () => void;
	setOffline: () => void;
}

const useNetworkStore = create<INetwork>((set) => ({
	isOnline: navigator.onLine,
	setOnline: () => set(() => ({ isOnline: true })),
	setOffline: () => set(() => ({ isOnline: false })),
}));

export default useNetworkStore;
