/** @format */

import { Box, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Link from "next/link";
import styled from "@emotion/styled";

const Span = styled.span`
	color: #f900bf;
	font-size: 36px;
	font-family: "Pacifico", cursive;
	&:hover {
		opacity: 0.8;
	}
`;

const Logo = (props) => {
	return (
		<Box
			ml='4px'
			cursor='pointer'
			display='flex'
			alignItems='center'
			justifyItems='center'
			{...props}>
			<Link href='/'>
				<Text fontFamily=' cursive' fontSize='28px'>
					<Span>Phuong</Span> Nguyen
				</Text>
			</Link>
		</Box>
	);
};

export default Logo;
