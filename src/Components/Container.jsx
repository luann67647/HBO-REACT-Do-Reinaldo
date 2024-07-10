import styles from './container.module.css';

export default function Container() {
  return (
    <main>
      <section id="subscription" className={styles.subscription}>
        <div className={styles.container}>
          <h2 className={styles.title}>
            Conheça nossos planos e economize na assinatura trimestral ou anual
            com o pagamento antecipado.
          </h2>
          <div className={styles.subscriptionPlans}>
            <div className={styles.subscriptionCard}>
              <div>
                <div className={styles.subscriptionPlan}>
                  <h3>Mobile</h3>
                  <p className={styles.subscriptionPrice}>
                    R$ 19,90 <span className={styles.textSmall}>/mês</span>
                  </p>
                </div>

                <ul className={styles.subscriptionGoals}>
                  <li className={styles.subscriptionDescription}>
                    Aproveite em smartphones e tablets, onde quiser.
                  </li>
                  <li className={styles.subscriptionDescription}>
                    Assista em 1 tela por vez.
                  </li>
                  <li className={styles.subscriptionDescription}>
                    Tenha conteúdo em resolução adaptada para cada dispositivo.
                  </li>
                  <li className={styles.subscriptionDescription}>
                    Baixe suas séries e filmes favoritos, assista onde e quando
                    quiser.
                  </li>
                </ul>
              </div>
              <button class="button button-gradient">
                Escolher o Plano Mobile
              </button>
            </div>

            <div className={styles.subscriptionCard}>
              <div>
                <div className={styles.subscriptionPlan}>
                  <h3>Multitelas</h3>
                  <p className={styles.subscriptionPrice}>
                    R$ 27,90 <span className={styles.textSmall}>/mês</span>
                  </p>
                </div>

                <ul>
                  <li className={styles.subscriptionDescription}>
                    Aproveite em todos os seus dispositivos.
                  </li>
                  <li className={styles.subscriptionDescription}>
                    Chromecast e Airplay disponíveis.
                  </li>
                  <li className={styles.subscriptionDescription}>
                    Assista em até 3 telas ao mesmo tempo.
                  </li>
                  <li className={styles.subscriptionDescription}>
                    Tenha conteúdo em alta definição, com qualidade 4K.
                  </li>
                  <li className={styles.subscriptionDescription}>
                    Baixe suas séries e filmes favoritos, assista onde e quando
                    quiser.
                  </li>
                  <li className={styles.subscriptionDescription}>
                    Crie até 5 perfis diferentes.
                  </li>
                </ul>
              </div>
              <button class="button button-gradient">
                Escolher o Plano Multitelas
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contents" class="contents container">
        <h2 className={styles.title}>Descubra novos universos</h2>
        <div className={styles.contentsContainer}>
          <div className={styles.contentsCard}>
            <img
              className={styles.contentsImage}
              src="src\assets\img\hbo-default_0.webp"
              alt="HBO"
            />
          </div>
          <div className={styles.contentsCard}>
            <img
              className={styles.contentsImage}
              src="src\assets\img\MAX-Default.webp"
              alt="Max Originals"
            />
          </div>
          <div className={styles.contentsCard}>
            <img
              className={styles.contentsImage}
              src="src\assets\img\DC_Default.webp"
              alt="DC"
            />
          </div>
          <div className={styles.contentsCard}>
            <img
              className={styles.contentsImage}
              src="src\assets\img\WB-Default.webp"
              alt="Warner Bross"
            />
          </div>
          <div className={styles.contentsCard}>
            <img
              className={styles.contentsImage}
              src="src\assets\img\CN-Default.webp"
              alt="Cartoon Network"
            />
          </div>
          <div className={styles.contentsCard}>
            <img
              className={styles.contentsImage}
              src="src\assets\img\UCL-Default.webp"
              alt="UEFA Champions League"
            />
          </div>
        </div>
      </section>
    </main>
  )
}