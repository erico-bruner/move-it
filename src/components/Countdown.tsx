import { clear } from "console";
import { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Countdown.module.css"

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [ time, setTime ] = useState(0.1 * 60); // trasnform context
    const [ isActive, setIsActive ] = useState(false); // trasnform context
    const [ hasFiniched, setHasFinished ] = useState(false);

    const minutes = Math.floor( time/60 );
    const seconds = time % 60;
    
    const [ minuteLeft, minuteRight ] = String(minutes).padStart(2, '0').split('');
    const [ secondLeft, secondRight ] = String(seconds).padStart(2, '0').split('')

    function startContdown() {
        setIsActive(true);
    }

    function resetContdown() {  
        clearTimeout(countdownTimeout);
        setIsActive(false); 
        setTime(0.1 * 60) 
    }

    useEffect(() => {
        if(isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time -1);
            }, 1000);
        } else if ( isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

    return (
        <div>
            <div className ={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            
            { hasFiniched ? (
                <button 
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado!
                </button>
            ) : (
                    isActive ? (
                        <button 
                            type="button" 
                            onClick={resetContdown} 
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                        >
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button 
                        type="button" 
                        onClick={startContdown} 
                        className={styles.countdownButton}
                        >
                            Iniciar um ciclo ▶
                        </button>
                    )
                ) 
            }
        </div>
    );
};