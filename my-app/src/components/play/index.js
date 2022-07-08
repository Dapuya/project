import React, {useState} from "react";
import './style.css'
import rules from '../../rules.json'
import category from '../../category.json'


export const Play = () => {
    function showRules() {
        return (
            <div className="ruleCard">
                <h3>Правила</h3>
                <ol id={'rulesOrderList'}>
                    <li classname={'categoriesListItem'}>{rules[0].text}</li>
                    <li classname={'categoriesListItem'}>{rules[1].text}</li>
                </ol>
                <p>Коснитесь, чтобы продолжить</p>
            </div>
        )
    }


    const [items, setItems] = useState(() => rules);

    const handleItemIsActive = (id) => {
        setItems((prevItems) =>
            prevItems.map((item) => {
                if (item.id === id) {
                    return { ...item, isActive: !item.isActive };
                } else return item;
            })
        );
    }


    function showCategories() {
        return (
            <div className="categoryCard">
                <h3>Выберите категории</h3>
                <ul id={'categoriesUnorderList'}>
                    <li className={'categoriesListItem'}>{category[0].name}</li>
                    <li className={'categoriesListItem'}>{category[1].name}</li>
                    <li className={'categoriesListItem'}>{category[2].name}</li>
                    <li className={'categoriesListItem'}>{category[3].name}</li>
                    <li className={'categoriesListItem'}>{category[4].name}</li>
                </ul>
            </div>
        )
    }


    const game = () => {
      return (
          <div className="game">

          </div>
      )
    }

    return(
        <div className={'container'}>
            {game()}
        </div>
    )
}
