import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  const color = useColorModeValue('#231f20', '#fff')
  return (
		<chakra.svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width || 76}
			height={props.height || 76}
			viewBox="0 0 50 50"
			{...props}
		>
			<linearGradient
				id="a"
				gradientUnits="userSpaceOnUse"
				x1="7.99876"
				x2="27.6203"
				y1="7.84785"
				y2="27.4693"
			>
				<stop offset="0" stopColor="#4a6cf7" />
				<stop offset="1" stopColor="#4a6cf7" stopOpacity="0" />
			</linearGradient>
			<linearGradient
				id="b"
				gradientUnits="userSpaceOnUse"
				x1="7.99878"
				x2="27.6203"
				y1="21.9268"
				y2="41.5483"
			>
				<stop offset="0" stopColor="#4a6cf7" stopOpacity="0" />
				<stop offset="1" stopColor="#4a6cf7" />
			</linearGradient>
			<path
				d="m15.8259.884154c1.1789-1.178872 3.0902-1.178872 4.2691.000001l14.9418 14.941745c1.1788 1.1789 1.1788 3.0902 0 4.2691l-14.9418 14.9418c-1.1789 1.1788-3.0902 1.1788-4.2691 0l-14.941746-14.9418c-1.178872-1.1789-1.178872-3.0902.000001-4.2691z"
				fill="url(#a)"
			/>
			<path
				d="m15.8259 14.9632c1.1789-1.1789 3.0902-1.1789 4.2691 0l14.9418 14.9417c1.1788 1.1789 1.1788 3.0902 0 4.2691l-14.9418 14.9418c-1.1789 1.1788-3.0902 1.1788-4.2691 0l-14.941746-14.9418c-1.178872-1.1789-1.178872-3.0902.000001-4.2691z"
				fill="url(#b)"
			/>
		</chakra.svg>
	);
}
