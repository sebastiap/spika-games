import classes from './contentWrapper.module.css';

function ContentWrapper(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default ContentWrapper;