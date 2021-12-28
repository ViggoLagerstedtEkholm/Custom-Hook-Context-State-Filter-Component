import React, {FormEvent, useState} from "react";
import { useFilterContext} from "../../../Context/InputValueContext";

function PaginationBox() {
    const {incrementPage, decrementPage, goToPage, page} = useFilterContext();
    const [goToPageNumber, setGoToPageNumber] = useState(1);

    const totalPages = 10;

    const onNextPage = (e: FormEvent) =>{
        e.preventDefault();
        incrementPage();
    }

    const onPreviousPage = (e: FormEvent) =>{
        e.preventDefault();
        decrementPage();
    }

    const onGoToPage = (e: FormEvent) =>{
        e.preventDefault();
        if(goToPageNumber > 1 && goToPageNumber <= totalPages){
            goToPage(goToPageNumber);
        }else{
            goToPage(1);
        }
    }

    return (
        <div className="content-pagination">
            <h2 id="page-count">{page} / {totalPages}</h2>
            {totalPages > 1 ?
                <div>
                    <div className="content-pagination-bar">
                        <div>
                            {page > 1 ?
                                <button type="submit" className="pagination-button" onClick={onPreviousPage}>🡸</button>
                            : null}

                        </div>
                        <div>
                            {page <= totalPages - 1 ?
                                <button type="submit" className="pagination-button" onClick={onNextPage}>🡺</button>
                            : null}

                        </div>
                    </div>

                    <form onSubmit={onGoToPage}>
                        <input className="user-input-text" placeholder="PAGE INDEX" required type="number"
                               value={goToPageNumber}
                               onChange={e => {
                                   const number = parseInt(e.target.value);
                                   setGoToPageNumber(number);
                               }}/>

                        <input className="button-style-4" type="submit" value="Go to page"/>
                    </form>

                </div>: null
            }
        </div>
    );
}

export default PaginationBox;
