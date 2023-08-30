
import Logo from 'assets/logo.svg'
import styles from './Cardapio.module.scss'
import Buscador from './buscador/index';
import { useState } from 'react';
export default function Cardapio(){

    return(
const [busca,setBusca]=useState("");
<main>
  <nav className={styles.menu}>
<img src={Logo} alt="Logo restaurante" />

  </nav>
<header className={styles.header}>
<div className={styles.header__text}>
  "a casa do codigo e da massa"
</div>
</header>
<section className={styles.cardapio}>
  <h3 className={styles.cardapio__titulo}>cardapio</h3>
<buscador busca={busca} setBusca={setBusca}
</section>


</main>


    );
}
