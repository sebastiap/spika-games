import { useParams } from "react-router-dom";
import classes from './BlogForm.module.css';
import Card from '../ui/contentWrapper';


const BlogDetails = (props) => {
  const { id } = useParams();

  return (
    
    <Card className={classes.container}>
      <h2>Blog details - { id }</h2>
      <h2>Titulo- { props.title }</h2>
      <img srcSet="{ props.img }"/>
      <h2>Contenido- { props.content }</h2>
    </Card>
  );
}
 
export default BlogDetails;