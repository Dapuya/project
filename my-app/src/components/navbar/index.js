import menu from "../../assets/menu.png";
import rules from "../../assets/rules.png";
import React from "react";
import './style.css';


export const Navbar = () => {
    return (
        <div className={'container'}>
            <div className={"content"}>
                <div className="buttons">
                    <button className={"button"} id={"categories"}><img id={'categories'} src={menu} alt={'categories'}
                                                                        width={'30px'}/></button>
                    <button className={'button'} id={'rules'}><img id={'rules'} src={rules} alt={'rules'}
                                                                   width={'30px'}/></button>
                </div>
            </div>
        </div>
    )
}
