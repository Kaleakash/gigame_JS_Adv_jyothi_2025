import { useSelector } from "react-redux";

function FirstComponent() {

    let name = useSelector(gs=>gs.counter.name);
    let value = useSelector(gs=>gs.counter.value);

    return(
        <div>
            <h2>First Component</h2>
            <p>Global State variable is {name} and value is {value}</p>
        </div>
    )
}

export default FirstComponent;