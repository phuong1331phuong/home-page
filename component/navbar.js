import { Box, Menu, MenuButton, MenuList,MenuItem, Button, useColorModeValue, Link} from "@chakra-ui/react"
import Logo from './logo'
import NextLink from 'next/link'
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import {useState} from 'react'


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
    const color = useColorModeValue('gray.100', 'gray.700')
    return (
        <Box display="flex" alignItems="center" p={2} maxW="container.md" mx="auto" justifyContent="space-between">
            <Logo/>
            <Box display={{base:'none', md: 'flex'}} justifyContent="space-around">
                <LinkItem href="/target" style={{ fontSize:'24', margin: 12}}>
                    Target
                </LinkItem>
                <LinkItem href="/study" style={{ fontSize:'24', margin: 12}}>
                    Study
                </LinkItem>
                <LinkItem href="/works" style={{ fontSize:'24', margin: 12}}>
                    Works
                </LinkItem>
            </Box>
            <Menu>
            <MenuButton as={Button} display={{base:'flex', md: 'none'}} justifyContent="right" colorScheme={color} color="white" onClick={handleClick}  >{active ? <HamburgerIcon fontSize={24}/> : <CloseIcon fontSize={18}/>}</MenuButton>
                <MenuList >
                    <MenuItem>
                        <LinkItem href="/target" style={{ fontSize:'24', margin: 12}} display={{base:'flex', md: 'none'}}>
                            Target
                        </LinkItem>
                    </MenuItem>
                    <MenuItem>
                        <LinkItem href="/study" style={{ fontSize:'24', margin: 12}} display={{base:'flex', md: 'none'}}>
                            Study
                        </LinkItem>
                    </MenuItem>
                    <MenuItem>
                        <LinkItem href="/works" style={{ fontSize:'24', margin: 12}} display={{base:'flex', md: 'none'}}>
                            Works
                        </LinkItem>
                    </MenuItem>
                    <MenuItem>
                        <LinkItem href="/" style={{ fontSize:'24', margin: 12}} display={{base:'flex', md: 'none'}}>
                            Social
                        </LinkItem>
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}

export default Navbar