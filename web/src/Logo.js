import React from "react";
import { logoUrl } from './Assets';

export function Logo(props) {
    return (
        <div>
            <img src={logoUrl} alt="logo"/>
            <h1>FBernardi</h1>
        </div>
    );
}
