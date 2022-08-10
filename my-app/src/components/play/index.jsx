import React, {useState} from "react";
import './style.css'
import rules from '../../data/rules.json'
import loveImage from '../../assets/love.png'
import moneyWorkImage from '../../assets/moneyWork.png'
import personalityExperienceImage from '../../assets/personalityExperience.png'
import relationshipImage from '../../assets/relationship.png'
import sexImage from '../../assets/sex.png'
import questionSign from '../../assets/question.png';
import {motion} from "framer-motion";


import love from '../../data/love.json'
import moneyWork from '../../data/moneyWork.json'
import personalityExperience from '../../data/personalityExperience.json'
import sex from '../../data/sex.json'
import relationship from '../../data/relationship.json'
import categories from "../../data/category.json";


// Q - questions


export const Play = () => {
    const [random, setRandom] = useState(<img src={questionSign} width={'100px'}/>)

    const [isOpen, setIsOpen] = useState(false)

    const randomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    const [question , setQuestion] = useState('')

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
        setRandom(<img src={randomImage} width={'60px'}/>)
        setIsOpen(!isOpen)


        if (randomImage === loveImage) {
            const randomNumber = randomInt(0, 17)
            setQuestion(love[randomNumber].question)
        }
        if (randomImage === personalityExperienceImage) {
            const randomNumber = randomInt(0, 19)
            setQuestion(personalityExperience[randomNumber].question)
        }
        if (randomImage === moneyWorkImage) {
            const randomNumber = randomInt(0, 22)
            setQuestion(moneyWork[randomNumber].question)
        }
        if (randomImage === relationshipImage) {
            const randomNumber = randomInt(0, 23)
            setQuestion(relationship[randomNumber].question)
        }
        if (randomImage === sexImage) {
            const randomNumber = randomInt(0, 23)
            setQuestion(sex[randomNumber].question)
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
                             key={category.name}>{chosenCategories(category)}
                        </div>))}
                </div>

                <motion.div
                    transition={{layout : {duration: 1, type: "spring"}}}
                    layout
                    className="random">
                    <motion.div layout={"position"} onClick={handleRandomImage} className={'image'}>{random}</motion.div>
                    {isOpen && (
                        <>
                            <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            className={'question'}>{question}</motion.div>
                            {/*<p id={'next'} onClick={handleRandomImage}>Cледующий вопрос</p>*/}
                        </>
                    )}

                </motion.div>
            </div>
        </div>
    )
}



export default Play;
