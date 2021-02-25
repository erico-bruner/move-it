import { clear } from "console";
import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css"

export function Countdown() {
    
    const { 
        minutes, 
        seconds, 
        hasFiniched, 
        isActive, 
        startContdown, 
        resetContdown 
    } = useContext(CountdownContext);

    const [ minuteLeft, minuteRight ] = String(minutes).padStart(2, '0').split('');
    const [ secondLeft, secondRight ] = String(seconds).padStart(2, '0').split('')

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