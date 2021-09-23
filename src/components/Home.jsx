import { Box, Button, Link, Text } from "@chakra-ui/react";
import { Link as productsLink, Link as inventoryLink } from 'react-router-dom'

export default function Home() {
    return (
        <Box d = 'flex' flexDir='column' justifyContent = 'center' alignItems='center' minH = '100vh'>
            <Text fontSize="4xl" fontWeight = 'semibold' mb = '1rem' textTransform = 'uppercase'>
                Dashboard
            </Text>
            <Box d= 'flex' justifyContent='center' alignItems = 'center' >
                <Link as={productsLink} to='/products' style = {{textDecoration:'none'}}><Button colorScheme = 'whatsapp' mr = '2rem'>Products</Button></Link>
                <Link as={inventoryLink} to='/inventory' style = {{textDecoration:'none'}}><Button colorScheme ='telegram'>Inventory</Button></Link>
            </Box>
        </Box>
    )
}