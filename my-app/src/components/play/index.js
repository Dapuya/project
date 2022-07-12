import React, {useState} from "react";
import './style.css'
import rules from '../../rules.json'
import category from '../../category.json'
import love from '../../assets/love.png'
import moneyWork from '../../assets/moneyAndWork.png'
import personalityExperience from '../../assets/personalityExperience.png'
import relationship from '../../assets/relationship.png'
import sex from '../../assets/sex.png'
import question from '../../assets/question.png'



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
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [random, setRandom] = useState(<img src={question} width={'100px'}/>)

        const categoryArray = [love, personalityExperience, moneyWork, sex, relationship]

        const handleRandomImage = () => {
          setRandom(<img src={categoryArray[0]} width={'100px'}/>)
        }

      return (
          <div className="game">
              <div className="cards">
                  <div className={"card"} id={'moneyWork'}><img src={moneyWork}/></div>
                  <div className={"card"} id={'love'}><img src={love}/></div>
                  <div className={"card"} id={'personalityExperience'}><img src={personalityExperience}/></div>
                  <div className={"card"} id={'relationship'}><img src={relationship}/></div>
                  <div className={"card"} id={'sex'}><img src={sex}/></div>
              </div>

              <div className="random">
                  <a onClick={handleRandomImage}>{random}</a>
              </div>
          </div>
      )
    }

    return(
        <div className={'container'}>
            {game()}
        </div>
    )
}

export default Play;
