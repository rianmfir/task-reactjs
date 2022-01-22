import React from "react";
import Login from "./login";
import Biodata from "./biodata";

export default function index() {
    return (
        <div>
            <Login title="Login" />
            <Biodata title="Biodata" />
        </div>
    )
}