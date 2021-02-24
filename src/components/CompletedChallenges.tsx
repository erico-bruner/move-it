import styles from "../styles/components/CompleteChallenges.module.css"

export default function CompletedChallenges() {
    return (
        <div className={styles.CompleteChallengesContainer}>
            <span>Desafio completos</span>
            <span>5</span>
        </div>
    );
}