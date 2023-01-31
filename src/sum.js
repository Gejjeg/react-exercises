import React from "react";

const sum = (a, b) => {
    return <h2>{a + b}</h2>
}

export class Sum extends React.Component {
    render() {
        return sum(2, 8);
    }
}