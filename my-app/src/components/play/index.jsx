import React, {useState} from "react";
import './style.css'
import rules from '../../data/rules.json'
import loveImage from '../../assets/love.png'
import moneyWorkImage from '../../assets/moneyWork.png'
import personalityExperienceImage from '../../assets/personalityExperience.png'
import relationshipImage from '../../assets/relationship.png'
import sexImage from '../../assets/sex.png'
import questionSign from '../../assets/question.png';



import love from '../../data/love.json'
import moneyWork from '../../data/moneyWork.json'
import personalityExperience from '../../data/personalityExperience.json'
import sex from '../../data/sex.json'
import relationship from '../../data/relationship.json'
import categories from "../../data/category.json";


// Q - questions


export const Play = () => {
    const [random, setRandom] = useState(<img src={questionSign} width={'100px'}/>)

    const randomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;


    // const [ flip, setFlip] = useState( () => cards)

    const handleRandomImage = () => {
        const chosenCategories = []

        for (let i =0; i < 5; i += 1){
            if (categories[i].chosen ){
                if (categories[i].photo === 'love.png') {
                    chosenCategories.push(loveImage)
                }
                if (categories[i].photo === 'moneyWork.png') {
                    chosenCategories.push(moneyWorkImage)
                }
                if (categories[i].photo === 'relationship.png') {
                    chosenCategories.push(relationshipImage)
                }
                if (categories[i].photo === 'sex.png') {
                    chosenCategories.push(sexImage)
                }
                if (categories[i].photo === 'personalityExperience.png') {
                    chosenCategories.push(personalityExperienceImage)
                }
            }
        }

        const index = Math.floor(Math.random() * chosenCategories.length);
        const randomImage = chosenCategories[index]
        setRandom(<img src={randomImage} width={'80px'}/>)

        if (randomImage === loveImage){
            const randomQuestion = love[randomInt(0, 6)]
            return (
                console.log(randomQuestion)
            )
        }
        else if (randomImage === personalityExperienceImage){
            const randomQuestion = personalityExperience[1].question
            return (
                console.log(randomQuestion)
            )
        }
        else if (randomImage === moneyWorkImage){
            const randomQuestion = moneyWork[1].question
            return (
                console.log(randomQuestion)
            )
        }
        else if (randomImage === relationshipImage){
            const randomQuestion = relationship[1].question
            return (
                console.log(randomQuestion)
            )

        }
        else if (randomImage === sexImage){
            const randomNum = Math.floor(Math.random() * (6))
            const randomQuestion = sex[1].question
            return (
                console.log(randomQuestion)
            )
        }
    }


    const chosenCategories = (category) => {
        const tempCategory = categories.findIndex((item) => item.name === category.name);
        const image = () => {
            if (category.name === 'Любовь'){
                return loveImage
            }
            if (category.name === 'Личность и опыт'){
                return personalityExperienceImage
            }
            if (category.name === 'Отношения с людьми'){
                return relationshipImage
            }
            if (category.name === 'Работа и деньги'){
                return moneyWorkImage
            }
            if (category.name === 'Секс'){
                return sexImage
            }
        }

        if (categories[tempCategory].chosen) {
            return (
                <div className={"card"} ><img src={image()} alt={'categoryImage'}/></div>
            )
        }
    }

    return(
        <div className={'container'}>
            <div className="game">
                <div className="cards">
                    {categories.map((category) => (
                        <div className={'front'}
                        key={category.name}>{chosenCategories(category)}</div>
                    ))}
                </div>

                <div className="random">
                    <div onClick={handleRandomImage}>{random}</div>
                </div>
            </div>
        </div>
    )
}



export default Play;
