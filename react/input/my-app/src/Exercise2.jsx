import { useState } from "react";

const Exercise2 = () => {
    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");

    const handleFruitChange = (e) => {
        setFruit(e.target.value);
        console.log(`${name} selected ${e.target.value}`);
    };

    return (
        <div>
            <input
                id="name-input"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <select
                id="select-input"
                onChange={handleFruitChange}
                value={fruit}
            >
                <option value="apple">Apple</option>
                <option value="pear">Pear</option>
                <option value="grapes">Grapes</option>
            </select>

        </div>
    );
};
export default Exercise2;
