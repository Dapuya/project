import React, {useState} from "react";
import './style.css'
import category from '../../category.json' ;
import {useNavigate} from "react-router-dom";



export const Categories = () => {
    const navigate = useNavigate();

    const [items, setItems] = useState(() => category);

    const handleItemIsActive = ({key}) => {
        const itemIndex = items.findIndex((item) => item.id === key)
        
        console.log(itemIndex)
    }

    return (
        <div className="categoryCard">
            <h3>Выберите категории</h3>
            <ul id={'categoriesUnorderedList'}>
                {category.map((category) => (
                    <li
                        className={'categoriesListItem'}
                        onClick={() => handleItemIsActive(category)}
                        key={category.id}
                    >{category.name} </li>
                ))}
            </ul>
            <button id={'continue'} onClick={() => navigate('/play')}>Продолжить</button>
        </div>
    )
}


export default Categories;
