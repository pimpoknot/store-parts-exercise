import React, { useContext, useEffect, useReducer, useState } from "react";
import axios from 'axios'
import reducer from "./reducer";
import { GET_JOBS_BEGIN, GET_JOBS_SUCCESS, PRICE_ORDER_BEGIN } from "./action";

const initialState = {
    isLoading: false
}

const AppContext = React.createContext()
const AppProvider = ({ children }) => {


    const [state, dispatch] = useReducer(reducer, initialState);

    const [parts, setParts] = useState([])
    const [singleParts, setSingleParts] = useState([])
    const [types, setTypes] = useState([]);
    const [isAscendingPrice, setIsAscendingPrice] = useState(true);
    const [typeValue, setTypeValue] = useState("Type");
    const [searchValue, setSearchValue] = useState("");

    const authFetch = axios.create({
        baseURL: "http://localhost:8081/store"
    })

    const getParts = async () => {
        let url = `/parts`
        dispatch({ type: GET_JOBS_BEGIN })
        try {
            const { data } = await authFetch(url)
            console.log(data)
            data.sort((a, b) =>
                +a.price.slice(0, -1) > +b.price.slice(0, -1) ? 1 : -1
            );
            setParts(data)
            dispatch({type: GET_JOBS_SUCCESS})
        } catch (err) {
            throw new Error(`Error => ${err}`)
        }
    }

    const getSingleParts = async (id) => {
        let url = `/products/${id}`

        try {
            const { data } = await authFetch(url)
            setSingleParts(data)

        } catch (err) {
            throw new Error(`Error => ${err}`)
        }
    }

    const callAPI = async () => {
        let url = '/part-types'
        try{
           const resp = await authFetch(url)
           setTypes(resp.data);
           console.log(types)
       } catch(err) {
           console.log('=>', err)
       }
    }
    const handlePriceOrder = (e) => {
        e.preventDefault();
        setParts(parts.reverse())
        setIsAscendingPrice(!isAscendingPrice);
    };

    
    const filter = (product) => {
        const checkType = typeValue === "Type" || product.type === typeValue;
        const checkSearch =
            !searchValue || product.name.toLowerCase().includes(searchValue);
        return checkSearch && checkType && product;
    };

    const mapTypes = types.map((type, index) => {
        return (
            <option key={index} value={type}>
                {type}
            </option>
        );
    });

    useEffect(() => {
        getParts()
    }, [])

    return (
        <AppContext.Provider value={{
            ...state,
            getParts,
            parts,
            getSingleParts,
            singleParts,
            types,
            handlePriceOrder,
            filter,
            isAscendingPrice,
            setTypeValue,
            searchValue,
            typeValue,
            setSearchValue,
            callAPI,
            mapTypes

        }} >
            {children}
        </AppContext.Provider >
    )
}

const useAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useAppContext }