import { useParams } from "react-router-dom";
import classes from './BlogForm.module.css';
import Card from '../ui/contentWrapper';
import {useLocation} from "react-router-dom";


const BlogDetails = (props) => {
  const { id } = useParams();
  const data = useLocation()
  console.log(data)

  return (
    
    <Card className={classes.container}>
      <h2>Blog details - { id }</h2>
      <h2>Titulo- { data.state.title  }</h2>
      <img srcSet={ data.state.img }/>
      <h2>Contenido- { data.state.content }</h2>
    </Card>
  );
}
 
export default BlogDetails;