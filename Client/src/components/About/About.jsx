import styles from "./About.module.css";
export default function About(params) {
  

  return (
    <>
   <div className={styles.fondo}>
      <div className={`${styles.container} `}>
       <div className={styles.portal}>


      <div className={styles.elements}>

    <h1 className={styles.titulo}>Sobre mi</h1>    
    <div className={styles.perfil} />
    <p className={styles.parrafo}>
      Soy Imanol Bracciale, mago intergalactico de la dimensión 40B-C3. <br/>Me encuentro e una misiion en la cual tengo que aprender los conceptos informativos de esta dimensión extraña, al parecer estos seres aman un idioma que se confunde en sumar una letra con un numero.<br/>
      Trabajé con rick en el diseño de su base por medio de React, el cual ando descifrando su funcionamiento y planeamos estrategias lógicas de como engañar a mas seres con el idioma Js. Espero terminar la misión a tiempo para Octubre, sino se irá alargando la y mi salud mental cobrará su costo.
    </p>
      </div>

            </div>
         </div>
        </div>
    </>
  )
}