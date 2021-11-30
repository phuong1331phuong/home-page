import { Box, Container, Menu, MenuButton, MenuList,MenuItem, Button, useColorModeValue, Link} from "@chakra-ui/react"
import Logo from './logo'
import NextLink from 'next/link'
import {  HamburgerIcon } from "@chakra-ui/icons"
import ToggleTheme from './toggleTheme'


const LinkItem = ({children , href, ...props}) => {
    return(
        <NextLink href={href} >
            <Link p={2}
            {...props}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = () => {
    const bgNavbar = useColorModeValue('#ffffff40', '#20202380')
    const color = useColorModeValue('gray.900', 'gray.50')
    return (
        <Box position="fixed" w="100%" bg={bgNavbar}>
        <Container display="flex" alignItems="center" p={2} maxW="container.xl" mx="auto" justifyContent="space-between">
            <Logo flex={1}/>
            <Box display={{base:'none', md: 'flex'}} justifyContent="space-around">
                <LinkItem href="/portfolio" style={{ fontSize:'22', margin: 12}}>
                    Portfolio
                </LinkItem>
                <LinkItem href="/document" style={{ fontSize:'22', margin: 12}}>
                    Document
                </LinkItem>
                <LinkItem href="/blog" style={{ fontSize:'22', margin: 12}}>
                    Blog
                </LinkItem>
            </Box>
            <Box display="flex" alignItems="center">
            <ToggleTheme/>
            <Menu isLazy id="navbar-menu">
            <MenuButton as={Button} display={{base:'flex', md: 'none'}} justifyContent="right" colorScheme={color} color="white"  ><HamburgerIcon color={color} fontSize={24}/></MenuButton>
                <MenuList >
                    <NextLink href="/"  >
                        <MenuItem as={Link}>
                            About
                        </MenuItem>
                    </NextLink>
                    <NextLink href="/portfolio"  >
                        <MenuItem as={Link}>
                            Portfolio
                        </MenuItem>
                    </NextLink>
                    <NextLink href="/document"  >
                    <MenuItem as={Link}>
                            Document
                    </MenuItem>
                    </NextLink>
                    <NextLink href="/blog"  >
                        <MenuItem as={Link}>
                            Blog
                        </MenuItem>
                    </NextLink>
                </MenuList>
            </Menu>
            </Box>
        </Container>
        </Box>
    )
}

export default Navbar