import {useFilterContext} from "../../../Context/InputValueContext";

function FilterInfo() {
    const {search, order, resultsPerPage, selectedOption} = useFilterContext();
    return (
        <div className="search-terms-container">
            <h1>Search terms</h1>
            <ul>
                <li>Search - {search}</li>
            </ul>
            <ul>
                <li>order - {order}</li>
            </ul>
            <ul>
                <li>Results Per Page - {resultsPerPage}</li>
            </ul>
            <ul>
                <li>Selected Option - {selectedOption}</li>
            </ul>
        </div>
    )
}

export default FilterInfo;