import './style.css'
import React from 'react';
import {Play} from "../play";
import {Footer} from "../footer";
import {Outlet} from "react-router-dom";



import rules from '../../assets/rules.png'
import menu from '../../assets/menu.png'

export const Main = () => {
    return(
        <div className={'container'}>
            <div className={"content"}>
                <h3 id={'text'}> Каждый из нас - это кладезь красоты и бесценного жизненного опыта: побед и вдохновения, страхов и неуверенности в себе. <br/> <br/> Эта увлекательная игра приведет вам к глубоким разговорам, которые позволят открыться самому и вдохновиться открытиями других людей. <br/> <br/> Все мы такие разные, но вы удивитесь, сколько у нас общего. </h3>
            </div>



            <div className="box-1">
                <div className="btn btn-one">
                    {/* eslint-disable-next-line no-restricted-globals */}
                    <span to='/play'>Начать</span>
                </div>
            </div>

            <Outlet />

        </div>

    )

}

export default Main;
