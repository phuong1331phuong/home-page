import {Box, Image, Button, Text, useColorModeValue} from '@chakra-ui/react'
import Link from 'next/link'

const ImageAchievement = ({link, src, linkButton, title, children, ...props}) => {
  const colorButton = useColorModeValue('gray.600', 'gray.200')
  return (
		<Box display='block' w={{ base: "250px", md: "200px" }} m={3} props>
            <Link href={link}>
			<Image
				maxW={{ base: "250px", md: "200px" }}
				borderRadius='4px'
				border='3px solid black'
				src={src}
				alt={title}
				{...props}
				mt='26px'
			/>
                </Link>
			<Text alignItems='center'>{children}</Text>
			<Link href={linkButton}>
				<Button colorScheme='blue' bg={colorButton} variant='solid'>
					More
				</Button>
			</Link>
		</Box>
  );
}

export default ImageAchievement
