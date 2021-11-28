import { Box, Menu, MenuButton, MenuList,MenuItem, Button, useColorModeValue, Link} from "@chakra-ui/react"
import Logo from './logo'
import NextLink from 'next/link'
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import {useState} from 'react'
import ToggleTheme from './toggleTheme'


const LinkItem = ({children , href, ...props}) => {
    return(
        <NextLink href={href} passHref>
            <Link p={2}
            {...props}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = () => {
    const [active, setActive] = useState(true)
    const handleClick = () => {
        setActive(!active)
    }
    const color = useColorModeValue('gray.900', 'gray.50')
    return (
        <Box display="flex" alignItems="center" p={2} maxW="container.md" mx="auto" justifyContent="space-between">
            <Logo flex={1}/>
            <Box display={{base:'none', md: 'flex'}} justifyContent="space-around">
                <LinkItem href="/target" style={{ fontSize:'18', margin: 12}}>
                    Target
                </LinkItem>
                <LinkItem href="/study" style={{ fontSize:'18', margin: 12}}>
                    Study
                </LinkItem>
                <LinkItem href="/works" style={{ fontSize:'18', margin: 12}}>
                    Works
                </LinkItem>
            </Box>
            <Box display="flex" alignItems="center">
            <ToggleTheme/>
            <Menu>
            <MenuButton as={Button} display={{base:'flex', md: 'none'}} justifyContent="right" colorScheme={color} color="white" onClick={handleClick}  >{active ? <HamburgerIcon color={color} fontSize={24}/> : <CloseIcon color={color} fontSize={18}/>}</MenuButton>
                <MenuList >
                    <MenuItem>
                        <LinkItem href="/target" style={{ fontSize:'18', margin: 12}} display={{base:'flex', md: 'none'}}>
                            Target
                        </LinkItem>
                    </MenuItem>
                    <MenuItem>
                        <LinkItem href="/study" style={{ fontSize:'18', margin: 12}} display={{base:'flex', md: 'none'}}>
                            Study
                        </LinkItem>
                    </MenuItem>
                    <MenuItem>
                        <LinkItem href="/works" style={{ fontSize:'18', margin: 12}} display={{base:'flex', md: 'none'}}>
                            Works
                        </LinkItem>
                    </MenuItem>
                    <MenuItem>
                        <LinkItem href="/" style={{ fontSize:'18', margin: 12}} display={{base:'flex', md: 'none'}}>
                            Social
                        </LinkItem>
                    </MenuItem>
                </MenuList>
            </Menu>
            </Box>
        </Box>
    )
}

export default Navbar