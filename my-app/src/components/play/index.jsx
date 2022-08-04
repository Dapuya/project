import React, {useState} from "react";
import './style.css'
import rules from '../../rules.json'
import loveImage from '../../assets/love.png'
import moneyWorkImage from '../../assets/moneyWork.png'
import personalityExperienceImage from '../../assets/personalityExperience.png'
import relationshipImage from '../../assets/relationship.png'
import sexImage from '../../assets/sex.png'
import questionSign from '../../assets/question.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


import loveQ from '../../love.json'
import moneyWorkQ from '../../moneyWork.json'
import personalityExperienceQ from '../../personalityExperience.json'
import sexQ from '../../sex.json'
import relationshipQ from '../../relationship.json'
import categories from "../../category.json";


// Q - questions

const cards = [
    {
        id: "1",
        variant: "moneyWork",
        front: {moneyWorkImage},
        back: {},
        flip: false
    },
    {
        id: "2",
        variant: "love",
        front: {loveImage},
        back: {},
        flip: false
    },
    {
        id: "3",
        variant: "personalityExperience",
        front: {personalityExperienceImage},
        back: {},
        flip: false
    },
    {
        id: "4",
        variant: "relationship",
        front: {relationshipImage},
        back: {},
        flip: false
    },
    {
        id: "5",
        variant: "sex",
        front: {sexImage},
        back: {},
        flip: false
    }
];


export const Play = () => {
    const [random, setRandom] = useState(<img src={questionSign} width={'100px'}/>)

    const [ flip, setFlip] = useState( () => cards)

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
            const randomNum = Math.random()*5 - 1
            const randomQuestion = loveQ[randomNum].question
            return (
                <div className={'question'}> {randomQuestion} </div>
            )
        }

        else if (randomImage === personalityExperienceImage){
            const randomNum = Math.random()*5 - 1
            const randomQuestion = personalityExperienceQ[randomNum]
            return (
                <div className={'question'}> {randomQuestion} </div>
            )
        }

        else if (randomImage === moneyWorkImage){
            const randomNum = Math.random()*5 - 1
            const randomQuestion = moneyWorkQ[randomNum].question
            return (
                <div className={'question'}> {randomQuestion} </div>
            )
        }

        else if (randomImage === relationshipImage){
            if (randomImage === relationshipImage){
                const randomNum = Math.random()*5 - 1
                const randomQuestion = relationshipQ[randomNum].question
                return (
                    <div className={'question'}> {randomQuestion} </div>
                )
            }
        }

        else if (randomImage === sexImage){
            if (randomImage === sexImage){
                const randomNum = Math.random()*5-1
                const randomQuestion = sexQ[randomNum].question
                return (
                    <div className={'question'}> {randomQuestion} </div>
                )
            }
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
