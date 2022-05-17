import { Box, Spinner, Stack, Text } from "@chakra-ui/react"

const Loading = () => {
    return (
        <>
            <Stack
                direction='column'
                m="100px auto"
                justifyContent="center"
                align="center"
                maxWidth="500px"
                borderRadius="25px"
                height="300px"
                bg="#fff"
                color="#000"
                fontFamily="Averia Serif Libre, cursive"
                fontWeight="bold"
                fontSize="20"
                boxShadow="0px 0px 3px 5px rgb(0 0 0 / 32%)"
            >
                <Box>
                    <Text align="center">Wait while loading data</Text>
                </Box>
                <Spinner
                    size='xl'
                    m="0 auto"
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='#2b2d42' />
                <Box>
                    <Text>Loading ...</Text>
                </Box>
            </Stack>
        </>
    )
}

export default Loading