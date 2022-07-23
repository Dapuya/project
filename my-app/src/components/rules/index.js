import rules from "../../rules.json";
import React from "react";
import './style.css'
import {useNavigate} from "react-router-dom";


export const Rules = () => {
    const navigate = useNavigate();


    return (
        <div className="ruleCard">
            <h3>Правила</h3>
            <ul id={'rulesOrderList'}>
                <li classname={'categoriesListItem'}>{rules[0].text}</li>
                <li classname={'categoriesListItem'}>{rules[1].text}</li>
            </ul>
            <p onClick={() => navigate("/categories")}>Коснитесь, чтобы продолжить</p>
        </div>
    )
}
