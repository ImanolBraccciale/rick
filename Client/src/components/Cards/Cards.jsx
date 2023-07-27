import Card from "../Card/Card";
import styles from "./Cards.module.css"

export default function Cards({ characters, onClose }) {

  return (
    /* se recibe characters y se destrucutra para extraer las propiedades generales de cada carta, cuando extraigo todo quiero enviar los propiedades que tienen adentro los parametros hacia el componente Card lo cual imprimira cada carta  */
    <div className={styles.contenedorCartas}>
      {characters.map(({ id, name, status, species, gender, origin, image }) => {

        return (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            image={image}
            origin={origin.name}
            onClose={onClose}
          />
        )
      })}
    </div>
  )

}