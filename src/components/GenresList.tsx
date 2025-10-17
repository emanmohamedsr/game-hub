import { useColorMode } from "@/hooks/useColorMode";
import useGenres from "@/hooks/useGenres";
import { getCroppedImageUrl } from "@/utils";
import { HStack, Image, Text } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";
import allGenres from "../assets/all-genres.webp";
import useGameQueryStore from "@/store";
import GameErrorState from "./error";

const GenresList = () => {
	const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
	const setGenreId = useGameQueryStore((s) => s.setGenreId);

	const { colorMode } = useColorMode();
	const { data: genres, isLoading, error } = useGenres();

	const isActive = (clickedGenreId?: number) =>
		genreId === clickedGenreId || (!genreId && !clickedGenreId);

	const handleGenreSelection = (clickedGenreId?: number) => {
		setGenreId(clickedGenreId);
	};

	if (error) return <GameErrorState error={error} />;
	return (
		<>
			{isLoading &&
				Array.from({ length: 6 }).map((_, index) => (
					<GenreSkeleton key={index} />
				))}
			{!isLoading && genres && genres.results.length > 0 && (
				<HStack
					bgGradient={
						isActive()
							? colorMode === "light"
								? "linear-gradient(to right, #fbb6ce, #d6bcfa)"
								: "linear-gradient(to right, #97266d, #6b46c1)"
							: undefined
					}
					onClick={() => handleGenreSelection()}
					w={"100%"}
					borderRadius={"md"}
					cursor='pointer'
					p={2}
					_hover={{
						backgroundColor: colorMode === "light" ? "gray.200" : "gray.700",
					}}
					gap={4}
					alignItems='center'>
					<Image
						src={getCroppedImageUrl({ url: allGenres })}
						alt={"All Genres"}
						boxSize='32px'
						objectFit='cover'
						borderRadius={"md"}
					/>
					<Text fontSize='lg'>All</Text>
				</HStack>
			)}
			{genres && genres.results.length > 0 ? (
				genres?.results.map((genre) => (
					<HStack
						bgGradient={
							isActive(genre.id)
								? colorMode === "light"
									? "linear-gradient(to right, #fbb6ce, #d6bcfa)"
									: "linear-gradient(to right, #97266d, #6b46c1)"
								: undefined
						}
						onClick={() => handleGenreSelection(genre.id)}
						w={"100%"}
						borderRadius={"md"}
						cursor='pointer'
						p={2}
						_hover={{
							backgroundColor: colorMode === "light" ? "gray.200" : "gray.700",
						}}
						key={genre.id}
						gap={4}
						alignItems='center'>
						<Image
							src={getCroppedImageUrl({ url: genre.image_background })}
							alt={genre.name}
							boxSize='32px'
							objectFit='cover'
							borderRadius={"md"}
						/>
						<Text fontSize='lg'>{genre.name}</Text>
					</HStack>
				))
			) : (
				<Text>No genres found.</Text>
			)}
		</>
	);
};

export default GenresList;
