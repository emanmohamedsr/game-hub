import { useColorMode } from "@/hooks/useColorMode";
import { Breadcrumb } from "@chakra-ui/react";
import { Fragment } from "react/jsx-runtime";

interface Iprops {
	order?: string[];
	onClickBreadcrumb?: (name: string, index: number) => void;
}

const BreadcrumbOrder = ({ order, onClickBreadcrumb }: Iprops) => {
	const { colorMode } = useColorMode();

	const renderBreadcrumbs = () =>
		order?.map((item, index) => (
			<Fragment key={item}>
				<Breadcrumb.Item
					cursor={"pointer"}
					fontWeight={"bold"}
					fontSize={{ base: "sm", sm: "md", md: "2xl", lg: "4xl" }}
					onClick={() => onClickBreadcrumb?.(item, index)}>
					{index === order.length - 1 ? (
						<Breadcrumb.CurrentLink
							_hover={{ opacity: 0.8 }}
							color={colorMode === "light" ? "purple.700" : "purple.300"}>
							{item}
						</Breadcrumb.CurrentLink>
					) : (
						<Breadcrumb.Link>{item}</Breadcrumb.Link>
					)}
				</Breadcrumb.Item>
				{index !== order.length - 1 && <Breadcrumb.Separator />}
			</Fragment>
		));

	return (
		<Breadcrumb.Root>
			<Breadcrumb.List mt={6} mb={{ base: 6, md: 8 }} flexWrap={"wrap"}>
				{renderBreadcrumbs()}
			</Breadcrumb.List>
		</Breadcrumb.Root>
	);
};

export default BreadcrumbOrder;
