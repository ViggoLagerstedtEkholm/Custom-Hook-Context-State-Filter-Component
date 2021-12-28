import {useState} from "react";
import FilterOptions from "./FilterOptions";
import FilterInfo from "./FilterInfo";

function FilterConfigurationBox() {
    const [showFilterBoxState, setShowFilterBoxState] = useState(false);

    const toggle = () => {
        if (showFilterBoxState) {
            setShowFilterBoxState(false);
        } else {
            setShowFilterBoxState(true);
        }
    }

    return (
        <div>
            <button className="button-style-4" onClick={toggle}> Toggle filtering.</button>
            {showFilterBoxState ? <FilterOptions/> : <FilterInfo/>}
        </div>
    );
}

export default FilterConfigurationBox;