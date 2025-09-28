interface IGetCropedImageUrlProps {
	url: string;
	target?: string;
	width?: number;
	height?: number;
}

export const getCropedImageUrl = ({
	url,
	target = "media/",
	width = 600,
	height = 400,
}: IGetCropedImageUrlProps) => {
	const index = url.indexOf(target);
	if (!url || index === -1) return url;
	return (
		url.slice(0, index + target.length) +
		`crop/${width}/${height}/` +
		url.slice(index + target.length)
	);
};
