import { useColorMode } from "@/hooks/useColorMode";
import useGenres from "@/hooks/useGenres";
import { getCroppedImageUrl } from "@/utils";
import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";
import type { IGenre } from "@/interfaces";
import allGenres from "../assets/all-genres.webp";
import Error from "./error/Error";

interface IProps {
	setSelectedGenre: (genre: IGenre | null) => void;
	selectedGenre: IGenre | null;
}

const GenresList = ({ setSelectedGenre, selectedGenre }: IProps) => {
	const { colorMode } = useColorMode();
	const { data: genres, isLoading, error } = useGenres();

	const isActive = (genre: IGenre | null) =>
		selectedGenre?.id === genre?.id ||
		(selectedGenre === null && genre === null);

	const handleGenreSelection = (genre: IGenre | null) => {
		setSelectedGenre(genre);
	};

	if (error)
		return <Error error={error} onRetry={() => window.location.reload()} />;
	return (
		<VStack w={"100%"} p={4} alignItems='flex-start' gap={4}>
			{isLoading &&
				Array.from({ length: 6 }).map((_, index) => (
					<GenreSkeleton key={index} />
				))}

			{!isLoading && genres && genres.results.length > 0 && (
				<HStack
					bgGradient={
						isActive(null)
							? colorMode === "light"
								? "linear-gradient(to right, #fbb6ce, #d6bcfa)"
								: "linear-gradient(to right, #97266d, #6b46c1)"
							: undefined
					}
					onClick={() => handleGenreSelection(null)}
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
							isActive(genre)
								? colorMode === "light"
									? "linear-gradient(to right, #fbb6ce, #d6bcfa)"
									: "linear-gradient(to right, #97266d, #6b46c1)"
								: undefined
						}
						onClick={() => handleGenreSelection(genre)}
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
		</VStack>
	);
};

export default GenresList;
