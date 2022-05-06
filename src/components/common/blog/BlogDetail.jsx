import { useParams,Link } from "react-router-dom";
import classes from './BlogForm.module.css';
import Card from '../ui/contentWrapper';
import {useLocation} from "react-router-dom";


const BlogDetails = (props) => {
  const { id } = useParams();
  const data = useLocation()
  console.log(data)

  return (
    <div className={classes.container}>
    <Card >
      <h2> { data.state.title  }</h2>
      <img height="300"  srcSet={ data.state.img }/>
      <p>{ data.state.content }</p>
<Link to="/spika-games/" > <p className={classes.link}>Volver al Home</p></Link>
    </Card>
    </div>
  );
}
 
export default BlogDetails;