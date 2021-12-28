import React, {ReactNode, useEffect} from "react";
import FilterConfigurationBox from "./Main/FilterConfigurationBox";
import Pagination from "./Pagination/Pagination";
import {FilterProvider, Order} from "../../Context/InputValueContext";

export interface APIResponse{
    id: number;
    brand: string;
    buzzword: string;
    cannabinoid: string;
    cannabinoid_abbreviation: string;
    category: string
    health_benefit: string;
    medical_use: string;
    strain: string;
    terpene: string;
    type: string;
    uid: string;
}

interface Props{
    page: number;
    order: Order;
    search:string
    resultsPerPage: number;
    options: string[];
    APIEndpoint: string;
    children: ReactNode;
    result: (result : APIResponse[]) => void;
}

function FilterBox(filter: Props) {

    useEffect(  () => {
        const search = async () => {
            const data = await fetch(filter.APIEndpoint);
            return data.json();
        }

        search().then(response => filter.result(response)).catch(error => console.log(error));
    }, [])

    return (
        <FilterProvider startFilter={filter}>
            <FilterConfigurationBox/>
                <div className="display-result-box">
                    {filter.children}
                </div>
            <Pagination/>
        </FilterProvider>
    )
}

export default FilterBox;
