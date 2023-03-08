import data from "../../data/db.json"


function Tours() {
    return (
        <>
            {data.map((item) => {
                return (
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <img src={item.image} alt={item.name}></img>
                    </div>
                )
            })}
        </>
    );
}

export default Tours;