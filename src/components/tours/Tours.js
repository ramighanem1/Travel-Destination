import Tour from "./tour/Tour"

import "./Tours.css"


function Tours(props) {
    let data = props.tours;

    return (
        <>
            <div className="tours-container">
                {data.map((item) => {
                    return (
                        <Tour key={item.id.toString()} tour={item} />
                    )
                })}
            </div>
        </>
    );
}

export default Tours;