import { useState } from "react";

const FilterTodo = () => {
    const [active, setActive] = useState("All");
    const handleClick = (filterStatus) => {
        setActive(filterStatus);
    }
}