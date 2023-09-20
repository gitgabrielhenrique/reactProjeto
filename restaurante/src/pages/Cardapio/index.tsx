import styles from './Cardapio.module.scss'
import Logo from 'assets/logo.svg'
import Buscador from './buscador';
import React, { useState } from 'react';
import Filtros from './filtros';

export default function Cardapio(){
  const [buscar, setBusca] = useState("");
    return (
        <main>
            <nav className={ styles.menu }>
            <img src={Logo} alt="Logo do Restaurante"/>
            {/*cardapio restaurante*/}
            </nav>
            <header className={ styles.header }>
                <div className= { styles.header__text }>
                  "A casa da massa gostosa e saborosa e deliciosa!"
                </div>
            </header>
            <section className={styles.cardapio}>
              <h3 className={styles.cardapio__titulo} >cardapio</h3>
              <Buscador busca={buscar} setBusca={setBusca}/>
              <div className={styles.cardapio__filtros}>
                <Filtros/>
              </div>
            </section>
        </main>
    );
}
