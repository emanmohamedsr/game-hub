import { useColorMode } from "@/hooks/useColorMode";
import useGenres from "@/hooks/useGenres";
import { getCroppedImageUrl } from "@/utils";
import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";
import type { IGenre } from "@/interfaces";
import allGenres from "../assets/all-genres.webp";

interface IProps {
	setSelectedGenre: (genre: IGenre | null) => void;
}

const GenresList = ({ setSelectedGenre }: IProps) => {
	const { colorMode } = useColorMode();
	const { data: genres, isLoading, error } = useGenres();

	const handleGenreSelection = (genre: IGenre | null) => {
		setSelectedGenre(genre);
	};

	if (error) return null;
	return (
		<VStack w={"100%"} p={4} alignItems='flex-start' gap={4}>
			{isLoading &&
				Array.from({ length: 6 }).map((_, index) => (
					<GenreSkeleton key={index} />
				))}

			{!isLoading && genres && genres.length > 0 && (
				<HStack
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

			{genres && genres.length > 0 ? (
				genres?.map((genre) => (
					<HStack
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
