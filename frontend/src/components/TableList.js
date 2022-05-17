import { Td, textDecoration, Tr } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const TableList = ({ name, price, type, id }) => {
    return (
        <>
            <Tr fontWeight="bold">
                <Td _hover={{
                    color: '#000',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                }}>
                    <Link to={{
                        pathname: `${id}`,
                        state: {
                            stateParam: true
                        }
                    }} className="border-none">
                        {name}
                    </Link>
                </Td>
                <Td>{price}</Td>
                <Td isNumeric>{type}</Td>
            </Tr>
        </>
    );
};


export default TableList;