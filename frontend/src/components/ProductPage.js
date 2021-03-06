import { Box, Button, FormControl, FormLabel, Input, Select, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { ArrowLeftIcon, ArrowUpIcon } from '@chakra-ui/icons'

const ProductPage = ({ name, price, type }) => {

    const { userId } = useParams()
    const { getSingleParts, singleParts } = useAppContext()

    useEffect(() => {
        getSingleParts(userId)
    }, [userId])

    return (
        <Box padding="20px 15px" border="1px solid #000" m="16px auto" maxWidth="1120px">
            <Link to="/">
                <Text
                    as="h2"
                    fontSize="20px"
                    _hover={{
                        cursor: 'pointer',
                        textDecoration: 'underline'
                    }}
                ><ArrowLeftIcon h="6" w="6" mr="2px"/> BACK TO HOME</Text>
            </Link>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Price</Th>
                            <Th isNumeric>Type</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>{singleParts.name}</Td>
                            <Td>{singleParts.price}</Td>
                            <Td isNumeric>{singleParts.type}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
};


export default ProductPage;