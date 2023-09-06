
import Logo from 'assets/logo.svg'
import styles from './Cardapio.module.scss'
import buscador from './buscador/index';
import { useState } from 'react';
import Buscador from './buscador/index';
import Filtros from './filtros';
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
<section className={styles.cardapio}>
  <h3 className={styles.cardapio__titulo}>cardapio</h3>
<Buscador busca={busca} setBusca={setBusca}
<div className={styles.cardapio__filtros}>
  <Filtros/>
</div>
</section>


</main>


    );
}
