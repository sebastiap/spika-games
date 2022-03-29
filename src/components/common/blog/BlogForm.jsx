import Card from '../ui/contentWrapper';
import classes from './BlogForm.module.css';

function NewBlogForm() {
  function submitHandler(event) {
    event.preventDefault();

    
  }

  return (
    <Card className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Titulo</label>
          <input type='text' required id='title' />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Imagen del Articulo</label>
          <input type='url' required id='image' />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Descripcion</label>
          <textarea id='description' required rows='5'></textarea>
        </div>
        <div className={classes.actions}>
          <button>Agregar Articulo</button>
        </div>
      </form>
    </Card>
  );
}

export default NewBlogForm;