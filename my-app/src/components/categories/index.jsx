import React, {useState} from "react";
import './style.css'
import categories from '../../category.json' ;
import { useNavigate } from "react-router-dom";

import moneyWorkImage from "../../assets/moneyWork.png";
import loveImage from "../../assets/love.png";
import personalityExperienceImage from "../../assets/personalityExperience.png";
import relationshipImage from "../../assets/relationship.png";
import sexImage from "../../assets/sex.png";


export const Categories = () => {
    const navigate = useNavigate();

    // const [item, setItem] = useState(() => categories.chosen);

    const handleItemIsActive = ( category ) => {
        const tappedItem = categories.findIndex((item) => item.name === category.name);
        categories[tappedItem].chosen = !category.chosen
        console.log(tappedItem, categories[tappedItem].chosen)
    };


    return (
        <div className="categoryCard">
            <h3>Выберите категории</h3>
            <ul id={'categoriesUnorderedList'}>
                {categories.map((category) => (
                    <li
                        className={'categoriesListItem'}
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
