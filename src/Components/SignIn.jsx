import styles from './signIn.module.css';

export default function SignIn() {
  return (
    <main className={styles.content}>
      <form className={styles.loginContainer}>
        <h1 className={styles.loginTitle}>Entrar</h1>
        <label className={styles.loginLabel}> Você tem uma conta da HBO Max? </label>
        <input
          className={styles.loginField}
          type="email"
          name="email"
          id="email"
          placeholder="Endereço de e-mail"
        />
        <input
          className={styles.loginField}
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
          minlength="8"
        />

        <div className={styles.loginActions}>
          <button type="submit" className="button button-gradient">Entrar</button>
          <a href="#" className={styles.loginLink}> Esqueceu a senha? </a>
        </div>
      </form>
    </main>
  )
}