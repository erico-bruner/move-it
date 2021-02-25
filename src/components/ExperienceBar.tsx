import { type } from 'os';
import { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {

    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentForNextLevel = ( currentExperience * 100 ) / experienceToNextLevel; // Caso ocorra quebra no percentual da linha subistituir por ** const percentForNextLevel = Math.round( currentExperience * 100 ) / experienceToNextLevel; **

    function CreateCurrentExperience(value: number) {
        if (value > 0 && value < experienceToNextLevel) {
            return <span className={styles.currentExperience} style={{ left: percentForNextLevel+"%"}}>{currentExperience} xp</span>
        }
    };

    return (
        <>
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div className={styles.experienceBarEmpty}>
                <div style={{ width: percentForNextLevel+"%" }} />
                {CreateCurrentExperience(currentExperience)}
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>   
        </>
    );
}