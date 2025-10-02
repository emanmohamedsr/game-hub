interface IGetCroppedImageUrlProps {
	url: string;
	target?: string;
	width?: number;
	height?: number;
}

export const getCroppedImageUrl = ({
	url,
	target = "media/",
	width = 600,
	height = 400,
}: IGetCroppedImageUrlProps) => {
	if (!url) return undefined;

	const index = url.indexOf(target);
	if (index === -1) return url;
	if (!url || index === -1) return url;
	return (
		url.slice(0, index + target.length) +
		`crop/${width}/${height}/` +
		url.slice(index + target.length)
	);
};

interface IGetCroppedGameTitleProps {
	title: string;
	length?: number;
}

export const getCroppedText = ({
	title,
	length = 15,
}: IGetCroppedGameTitleProps) => {
	return title.length > length ? title.slice(0, length) + "..." : title;
};
