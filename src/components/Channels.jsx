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
import { getChannels } from "../apiCalls/apiCalls";

export default function Channel() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const fetchData = async () => {
        try {
            let response = await getChannels()
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
                    <Box minW='40%' borderWidth="1px" borderRadius="lg" boxShadow='md' p = '2rem'>
                        <Table variant="striped" borderWidth="1px" borderRadius='lg'>
                            <TableCaption>Detailed View of all Channels</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Display Name</Th>
                                    <Th>Current State</Th>
                                    <Th>Region</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    data.length > 0 && data.map((channel, idx) =>
                                        <Tr key={idx}>
                                            <Td>{channel.channel_type_display_name}</Td>
                                            <Td>{channel.state}</Td>
                                            <Td> {channel.channel_site_region}</Td>
                                        </Tr>
                                    )
                                }
                            </Tbody>
                        </Table>
                        <Box d='flex'  justifyContent='center' alignItems='center'>
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