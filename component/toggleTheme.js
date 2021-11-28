import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {Button, useColorMode, useColorModeValue} from '@chakra-ui/react'

const ToggleTheme = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue( 'gray.700', 'gray.300')
    const color = useColorModeValue( 'gray.100','gray.800')
    return (
        <>
            <Button size="sm" onClick={toggleColorMode} bg={bg} color={color} >
                {colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>}
            </Button>
        </>
    )
}

export default ToggleTheme