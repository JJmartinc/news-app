import React, { Component } from 'react';

class Form extends Component {
  handleSubmit = (event) => {
    event.preventDefault(); // previene el comportamiento por defecto del formulario

    // Aquí puedes realizar cualquier acción que desees con los datos del formulario

    // Limpia los campos del formulario después de enviarlo
    event.target.reset();
  };
  render() {
    return (
      <form>
        <h1>Formulario de noticias</h1>
        <label>
          Titular:
          <input type="text" name="Titular" />
        </label>
        <br />
        <label>
          Autor:
          <input type="text" name="Author" />
        </label>
        <br />
        <label>
          Foto:
          <input type="text" name="Foto" />
        </label>
        <br />
        <label>
          Noticia:
          <input type="text" name="Noticia" />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default Form;