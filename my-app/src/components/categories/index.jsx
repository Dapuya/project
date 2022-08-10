import React, {useEffect, useState} from "react";
import './style.css'
import categories from '../../data/category.json' ;
import { useNavigate } from "react-router-dom";

export const Categories = () => {
    const navigate = useNavigate();

    const [isActive, setIsActive] = useState(false);

    const handleItemIsActive = ( category ) => {
        const tappedItem = categories.findIndex((item) => item.name === category.name);
        categories[tappedItem].chosen = !category.chosen

        setIsActive(current => !current);
        console.log(tappedItem, categories[tappedItem].chosen)
    };


    return (
        <div className="categoryCard">
            <h3>Выберите категории</h3>
            <ul id={'categoriesUnorderedList'}>
                {categories.map((category) => (
                    <li
                        style={{
                            backgroundColor: category.chosen ? '#80addc' : '#eeeeee'
                        }}
                        className={
                        // isActive ? 'categoriesListItemAfter' :
                            'categoriesListItemBefore'}
                        onClick={() => handleItemIsActive(category)}
                        key={category.id}
                    >{category.name} </li>
                ))}
            </ul>
            <p id={'continue'} onClick={() => navigate('/play')}>Продолжить</p>
        </div>
    )
}


export default Categories;
