import { Box, Button, Link, Text } from "@chakra-ui/react";
import { Link as channelLink, Link as warehouseLink } from 'react-router-dom'

export default function Home() {
    return (
        <Box d = 'flex' flexDir='column' justifyContent = 'center' alignItems='center' minH = '100vh'>
            <Text fontSize="4xl" fontWeight = 'semibold' mb = '1rem' textTransform = 'uppercase'>
                Dashboard
            </Text>
            <Box d= 'flex' justifyContent='center' alignItems = 'center' >
                <Link as={channelLink} to='/channels' style = {{textDecoration:'none'}}><Button colorScheme = 'whatsapp' mr = '2rem'>Channels</Button></Link>
                <Link as={warehouseLink} to='/warehouses' style = {{textDecoration:'none'}}><Button colorScheme ='telegram'>Warehouses</Button></Link>
            </Box>
        </Box>
    )
}