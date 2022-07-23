import React, {useState} from "react";
import './style.css'
import rules from '../../rules.json'
import love from '../../assets/love.png'
import moneyWork from '../../assets/moneyAndWork.png'
import personalityExperience from '../../assets/personalityExperience.png'
import relationship from '../../assets/relationship.png'
import sex from '../../assets/sex.png'
import question from '../../assets/question.png'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import loveQ from '../../love.json'
import moneyWorkQ from '../../moneyWork.json'
import personalityExperienceQ from '../../personalityExperience.json'
import sexQ from '../../sex.json'
import relationshipQ from '../../relationship.json'



export const Play = () => {
    const [items, setItems] = useState(() => rules);
    const [random, setRandom] = useState(<img src={question} width={'100px'}/>)

    const categoryArray = [love, personalityExperience, moneyWork, sex, relationship]
    const index = Math.floor(Math.random() * categoryArray.length);


    const handleRandomImage = () => {
        const randomImage = categoryArray[index]
        setRandom(<img src={randomImage} width={'80px'}/>)
    }



    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return(
        <div className={'container'}>
            <div className="game">
                <div className="cards">
                    <div className={"card"} id={'moneyWork'}><img src={moneyWork}/></div>
                    <div className={"card"} id={'love'}><img src={love}/></div>
                    <div className={"card"} id={'personalityExperience'}><img src={personalityExperience}/></div>
                    <div className={"card"} id={'relationship'}><img src={relationship}/></div>
                    <div className={"card"} id={'sex'}><img src={sex}/></div>
                </div>

                <div className="random">
                    <div onClick={handleRandomImage}>{random}</div>
                </div>


                <div>
                    <Button variant="outlined" onClick={handleClickOpen}>
                        Open responsive dialog
                    </Button>
                    <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <DialogTitle id="responsive-dialog-title">
                            {"Use Google's location service?"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Let Google help apps determine location. This means sending anonymous
                                location data to Google, even when no apps are running.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={handleClose}>
                                Disagree
                            </Button>
                            <Button onClick={handleClose} autoFocus>
                                Agree
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>



            </div>
        </div>
    )
}



export default Play;
