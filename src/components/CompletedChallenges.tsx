import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/CompleteChallenges.module.css"

export default function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <div className={styles.CompleteChallengesContainer}>
            <span>Desafio completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}