import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css"

export default function Profile() {

    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="http://github.com/EricoBruner.png" alt="Erico Bruner"/>
            <div>
                <strong>Erico Bruner</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level};
                </p>
            </div>
        </div>
    );
}