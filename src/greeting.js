import React from "react";

function greeting(name) {
    return (
        <h1>Hello, {name}</h1>
    );
};

export class Greeting extends React.Component {
    render() {
        return greeting("Peter");
    }
}