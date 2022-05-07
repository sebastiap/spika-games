import Card from '../ui/contentWrapper';
import classes from './BlogForm.module.css';

import {useRef} from 'react';

function NewBlogForm(props) {
const titleInputRef = useRef();
const titleImgRef = useRef();
const titleLinkRef = useRef();
const titleDescRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const title = titleInputRef.current.value;
    const img = titleImgRef.current.value;
    const link = "blogs/"+ titleLinkRef.current.value;
    const description = titleDescRef.current.value;

    const postObject = {
      title:title,
      img:img,
      link:link,
      description:description
    };

    // console.log(postObject)

    // Lo defino en la pagina blogs
    props.onAddNewLog(postObject)
  }

  return (
    <Card className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Titulo</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Imagen del Articulo</label>
          <input type='url' required id='image' ref={titleImgRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='link'>Link</label>
          <input type='text' required id='link' ref={titleLinkRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Descripcion</label>
          <textarea id='description' required rows='5' ref={titleDescRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className={classes.control}>Agregar Articulo</button>
        </div>
      </form>
    </Card>
  );
}

export default NewBlogForm;