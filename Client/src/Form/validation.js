 export const validation = (datos) => {
   
  const emailRegex= new RegExp(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)

  const passwordRegex= new RegExp(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)

  let errors={}

  if(!emailRegex.test(datos.email)) {errors.email ="Debes ingresar un email valido";}

  if (!datos.email) {
    errors.emailVacio = "Debes un ingresar un email"
  }

  if (datos.email.length > 35) {
     errors.caracteres = " Debe ser un email menor a 35 caracteres"
  }
    
  if(!passwordRegex.test(datos.password)) {errors.password ="Debes ingresar una contraseña valida";}

  if (!datos.password) {
      errors.passwordVacio ="Debes una ingresar una contraseña"
    }
    if (datos.password.length < 3) {
      errors.passwordSize= "debe ser mayor de 3"
    }
  
    return errors;
 }

