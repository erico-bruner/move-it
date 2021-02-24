import { type } from 'os';
import { useState } from 'react';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const [ experience, setExperience ] = useState(0);

    function CreateCurrentExperience(value: number) {
        if (value > 0 && value < 600) {
            return <span className={styles.currentExperience} style={{ left: (experience*100)/600+"%"}}>{experience} xp</span>
        }
    };

    function addExperience() {
        setExperience(experience +30);
    };

    function removeExperience() {
        setExperience(experience -30);
    };

    return (
        <>
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div className={styles.experienceBarEmpty}>
                <div style={{ width: (experience*100)/600+"%" }} />
                {CreateCurrentExperience(experience)}
            </div>
            <span>600 xp</span>
            <div className={styles.btns}>
                <button className={styles.btn} type="button" onClick={removeExperience}>- 30</button>
                <button className={styles.btn} type="button" onClick={addExperience}>+ 30</button>
            </div>
        </header>   
     
        </>
    );
}