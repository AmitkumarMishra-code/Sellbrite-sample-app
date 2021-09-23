import { Box, Button, Link, Progress, Text } from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
} from "@chakra-ui/react"
import { Link as homeLink } from 'react-router-dom'
import { useEffect, useState } from "react";
import { getInventory } from "../apiCalls/apiCalls";

export default function Inventory() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const fetchData = async () => {
        try {
            let response = await getInventory()
            setIsLoading(false)
            console.log(response)
            setData(response)
        }
        catch (error) {
            setErrorMessage(error.message)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Box d='flex' flexDir='column' justifyContent='center' alignItems='center' minH='100vh'>
            {
                isLoading && <Progress size="xs" isIndeterminate width='60%' />
            }
            {
                data.length > 0 && !isLoading && !errorMessage ?
                    <Box minW='40%' borderWidth="1px" borderRadius="lg" boxShadow='md' p='2rem'>
                        <Table variant="striped" borderWidth="1px" borderRadius='lg'>
                            <TableCaption>Detailed View of all Inventory</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Product Name</Th>
                                    <Th textAlign = 'center'>SKU</Th>
                                    <Th textAlign = 'center'>On Hand</Th>
                                    <Th textAlign = 'center'>Available</Th>
                                    <Th textAlign = 'center'>Cost</Th>
                                    <Th textAlign = 'center'>Bin Location</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    data.length > 0 && data.map((product, idx) =>
                                        <Tr key={idx}>
                                            <Td>{product.product_name}</Td>
                                            <Td textAlign = 'center'> {product.sku}</Td>
                                            <Td textAlign = 'center'>{product.on_hand}</Td>
                                            <Td textAlign = 'center'>{product.available}</Td>
                                            <Td textAlign = 'center'> {product.cost}</Td>
                                            <Td textAlign = 'center'> {product.bin_location}</Td>
                                        </Tr>
                                    )
                                }
                            </Tbody>
                        </Table>

                        {/*
                        "sku":"SBWATBOT"
                        "warehouse_uuid":"a6b9904c-33bd-4618-bd0a-39fcb40309e0"
                        "on_hand":10
                        "product_name":"Sample Product"
                        "available":10
                        "reserved":0
                        "package_length":12
                        "package_width":4
                        "package_height":4
                        "package_weight":7
                        "cost":2.99
                        "bin_location":"A1"
                        "fnsku":NULL
                        "upc":"012345-67790"
                        "ean":NULL
                        "isbn":NULL
                        "gtin":NULL
                        "gcid":NULL
                        "epid":NULL
                        "asin":NULL
                        */}
                        <Box d='flex' justifyContent='center' alignItems='center'>
                            <Link as={homeLink} to='/' style={{ textDecoration: 'none' }}><Button mt='1rem' colorScheme='whatsapp'>Home</Button></Link>
                        </Box>
                    </Box>
                    : errorMessage &&
                    <Box d='flex' flexDir='column' justifyContent='center' alignItems='center'>
                        <Text fontSize='3xl' mb='1rem'>{errorMessage}</Text>
                        <Link as={homeLink} to='/' style={{ textDecoration: 'none' }}><Button colorScheme='whatsapp'>Home</Button></Link>
                    </Box>
            }
        </Box>
    )
}