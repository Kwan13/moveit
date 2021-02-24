import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

  const hasAcitiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasAcitiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" />
            <strong>Novo desafio</strong>
            <p>Levande e faça um caminhada de 3 minutos.</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailButton}
            >Falhei</button>

            <button
              type="button"
              className={styles.challengeSucceededButton}
            >Completei</button>
          </footer>
        </div>
      ) : (
          <div className={styles.challengeNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
          Avance de level completando desafios.
        </p>
          </div>
        )}
    </div>
  )
}
