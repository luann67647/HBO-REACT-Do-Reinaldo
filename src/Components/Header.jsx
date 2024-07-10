import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerChannels}>
          <img className={styles.headerChannel} src="src\assets\img\hbo.png" alt="HBO" />
          <img className={styles.headerChannel} src="src\assets\img\dc.png" alt="DC" />
          <img
            className={styles.headerChannel}
            src="src\assets\img\wb.png"
            alt="Warner Bross"
          />
          <img
            className={styles.headerChannel}
            src="src\assets\img\cartoon-network_neutral.png"
            alt="Cartoon Network"
          />
          <img
            className={styles.headerChannel}
            src="src\assets\img\max_originals.png"
            alt="Max Originals"
          />
        </div>
        <h1 class="header-title">
          <span className={styles.headerTitleLight}>Curta as melhores histórias</span>
          Para todo mundo
        </h1>
        <div className={styles.divider}></div>
        <div className={styles.offer}>
          <p>Assinaturas a partir de</p>
          <p className={styles.offerPrice}>
            R$14,15 <span className={styles.offerPriceSmall}>/mês*</span>
          </p>
        </div>
        <a href="#subscription" class="button button-gradient header-button">
          Assine agora
        </a>
        <p className={styles.textSmall}>
          *aplicável ao plano anual com o pagamento antecipado.
        </p>
      </div>
    </header>
  )
}