import { useState } from "react";
import Card from "../UI/Card";
import CostList from "./CostList";
import "./Costs.css";
import CostsDiagram from "./CostsDiagram";
import CostsFilter from "./CostsFilter";

const Costs = (props) => {
    const [selectedYear, setSelectedYear] = useState("2022");

    const changeYearHandler = (year) => {
        setSelectedYear(year);
    };
    const filteredCosts = props.costs.filter(
        (cost) => cost.date.getFullYear().toString() === selectedYear
    );

    return (
        <div>
            <Card className="costs">
                <CostsFilter
                    selectedYear={selectedYear}
                    onChangeYear={changeYearHandler}
                />
                <CostsDiagram costs={filteredCosts} />
                <CostList costs={filteredCosts} />
            </Card>
        </div>
    );
};

export default Costs;
