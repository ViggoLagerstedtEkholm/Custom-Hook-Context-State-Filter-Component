import React, {useState} from "react";

export enum Order {
    Ascending,
    Descending
}

export interface Filter{
    page: number;
    search: string;
    order: Order;
    resultsPerPage?: number;
    options: string[];
    APIEndpoint: string;
    showFilter?: boolean;
}

const incrementPage = (page: number): number => page + 1;
const decrementPage = (page: number): number => page - 1;

// Custom hook implementation
const useFilter = (initialState: Filter) => {
    const [page, setPage] = useState(initialState.page);
    const [order, setOrder] = useState(initialState.order);
    const [search, setSearch] = useState(initialState.search);
    const [resultsPerPage, setResultsPerPage] = useState(initialState.resultsPerPage);
    const [selectedOption, setSelectedOption] = useState(initialState.options[0]);

    const options = initialState.options;

    return {
        page,
        order,
        options,
        selectedOption,
        search,
        resultsPerPage,
        incrementPage: () => setPage((page) => incrementPage(page)),
        decrementPage: () => setPage((page) => decrementPage(page)),
        goToPage: (newPage: number) => setPage(newPage),
        applySearch: (text: string) => setSearch(text),
        applyResultsPerPage: (perPage: number) => setResultsPerPage(perPage),
        applySelectedOption: (option: string) => setSelectedOption(option),
        orderByAscending: () => setOrder(Order.Ascending),
        orderByDescending: () => setOrder(Order.Descending),
    };
};

const TodoContext = React.createContext<ReturnType<typeof useFilter> | null>(
    null
);

export const useFilterContext = () => React.useContext(TodoContext)!;

export function FilterProvider({ startFilter, children }: { startFilter: Filter, children: React.ReactNode }) {
    return (
        <TodoContext.Provider value={useFilter(startFilter)}>
            {children}
        </TodoContext.Provider>
    );
}