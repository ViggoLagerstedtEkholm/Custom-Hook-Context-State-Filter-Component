import React, {ReactNode} from "react";

function Card(children: ReactNode){
    return(
        <div className="card-info">
            {children}
        </div>
    )
}

export default Card;