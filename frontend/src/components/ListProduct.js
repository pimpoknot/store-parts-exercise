import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Stack,
    Spinner,
    Box,
    Text,
    FormControl,
    Input,
    Button,
    Select
} from '@chakra-ui/react';
import { useAppContext } from '../context/AppContext';
import "@fontsource/averia-serif-libre"
import TableList from './TableList';
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';
import Loading from './Loading';



const ListProduct = () => {
    const { 
        parts,
        isLoading,
        handlePriceOrder,
        filter, 
        isAscendingPrice,
        setTypeValue,
        searchValue,
        setSearchValue,
        callAPI,
        mapTypes
        } = useAppContext()

    const mapProducts = parts.filter(filter).map((product) => {
        return <TableList key={product.name} {...product} />
    });

    useEffect(() => {
        callAPI()
    }, [])
    
    return (
        <Box bg="#2b2d42" mW="1120px" m="15px auto" w="1120px"  borderRadius="40px" color="#fff">
            <Box padding="20px 15px">
                <Text as="h2" fontSize="30px" textAlign="center">Store Parts</Text>
                <FormControl m="20px 15px">
                    <FormControl display="flex" maxW="600px" gap="5px" m="0 auto">
                        <Input id='search' type='text' placeholder="Search..." maxW="200px" value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)} />
                        <Select onChange={(e) => setTypeValue(e.target.value)} color="#000">
                            <option value="Type">Type</option>
                            {mapTypes}
                        </Select>
                        <Stack direction='row' spacing={4} align='center'>
                            <Button colorScheme='teal' variant='solid' onClick={(e) => handlePriceOrder(e)} >
                                Price order {' '} {isAscendingPrice ? <ArrowUpIcon ml="2px" /> : <ArrowDownIcon ml="2px" />}
                            </Button>
                        </Stack>
                    </FormControl>
                </FormControl>
            </Box>
            {isLoading ? (
                <Loading />
            ) : (
                <TableContainer maxWidth="900px" m="0 auto" minH="500px">
                    <Table variant='simple'>
                        <TableCaption>Store parts Exercise</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Price</Th>
                                <Th isNumeric>Type</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {mapProducts}
                        </Tbody>
                    </Table>
                </TableContainer>
            )}

        </Box>
    )
}

export default ListProduct