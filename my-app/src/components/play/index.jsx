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
        back: {}
    },
    {
        id: "2",
        variant: "love",
        front: {loveImage},
        back: {}
    },
    {
        id: "3",
        variant: "personalityExperience",
        front: {personalityExperienceImage},
        back: {}
    },
    {
        id: "4",
        variant: "relationship",
        front: {relationshipImage},
        back: {}
    },
    {
        id: "5",
        variant: "sex",
        front: {sexImage},
        back: {}
    }
];

export const Play = () => {
    const [random, setRandom] = useState(<img src={questionSign} width={'100px'}/>)

    const categoryArray = [loveImage, personalityExperienceImage, moneyWorkImage, sexImage, relationshipImage]
    const index = Math.floor(Math.random() * categoryArray.length);


    const openCard = (randomImage) => {
        if (randomImage === loveImage){
            const randomNum = Math.random()*5 - 1
            const randomQuestion = loveQ[randomNum].question

            return (
                <div className={'question'}> {randomQuestion} </div>
            )
        }
        if (randomImage === personalityExperienceImage){

        }
        if (randomImage === moneyWorkImage){

        }
        if (randomImage === relationshipImage){

        }
        if (randomImage === sexImage){

        }



    }



    const handleRandomImage = () => {
        const randomImage = categoryArray[index]
        setRandom(<img src={randomImage} width={'80px'}/>)

        openCard(randomImage);
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
                        <div
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
