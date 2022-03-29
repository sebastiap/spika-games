import classes from './layout.module.css';
import Header from '../../layout/header';
import Footer from '../../layout/footer';

function Layout(props) {
  return <div>
  <Header/>
  {props.children}
  <Footer/>
  </div>;
}

export default Layout;