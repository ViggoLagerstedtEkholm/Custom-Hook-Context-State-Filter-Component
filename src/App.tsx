import React, {useState} from 'react';
import {Order} from "./Context/InputValueContext";
import FilterBox, {APIResponse} from "./Components/Filter/FilterBox";

function App() {
    const [results, setResults] = useState<APIResponse[]>([]);

    return (
        <div className="container">
            <FilterBox order={Order.Descending}
                       page={5} search={"test"}
                       resultsPerPage={10}
                       options={['test1', 'test2', 'test3']}
                       result={(response) => setResults(response)}
                       APIEndpoint={'https://random-data-api.com/api/cannabis/random_cannabis?size=5'}>
                <h2>Results</h2>
                {
                    results.map((value, index) =>{
                        return <div className="card-info" key={index}>{value.id}</div>
                    })
                }
            </FilterBox>
        </div>
    );
}

export default App;
