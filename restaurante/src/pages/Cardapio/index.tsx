
import Logo from 'assets/logo.svg'
import styles from './Cardapio.module.scss'
export default function Cardapio(){

    return(

<main>
  <nav className={styles.menu}>
<img src={Logo} alt="Logo restaurante" />

  </nav>
<header className={styles.header}>
<div className={styles.header__text}>
  "a casa do codigo e da massa"
</div>
</header>
<section>
  <h3>cardapio</h3>
</section>


</main>


    );
}
