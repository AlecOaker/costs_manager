import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import { INITIAL_COSTS } from "./components/data";
import NewCost from "./components/NewCost/NewCost";

const App = () => {
    const [costs, setCosts] = useState(INITIAL_COSTS);

    const addCostHandler = (cost) => {
        setCosts((prev) => {
            return [cost, ...prev];
        });
    };

    return (
        <div>
            <NewCost onAddCost={addCostHandler} />
            <Costs costs={costs} />
        </div>
    );
};

export default App;
