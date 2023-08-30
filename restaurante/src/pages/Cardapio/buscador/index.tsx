import styles from './buscador.modules.scss';

interface Props{
  busca:string
  setBusca: React.Dispatch<React.SetStateAction<string>>
}


export default function Buscador({busca,setBusca}:Props){
  return(

    <div className={styles.buscador}>
      <input
      value={busca}
      onChange{(evento)=> setBusca(evento.target.value)}

      />
    </div>
  )
  }
