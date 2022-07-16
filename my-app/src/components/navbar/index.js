import menu from "../../assets/menu.png";
import rules from "../../assets/rules.png";
import React from "react";
import './style.css';
import {useNavigate} from "react-router-dom";



export const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className={'container'}>
            <div className={"content"}>
                <div className="buttons">
                    <button className={"button"} id={"categories"} onClick={() => navigate("/categories")}><img id={'categories'} src={menu} alt={'categories'}
                                                                        width={'30px'}/></button>
                    <button className={'button'} id={'rules'} onClick={() => navigate("/rules")}><img id={'rules'} src={rules} alt={'rules'}
                                                                   width={'30px'}/></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
