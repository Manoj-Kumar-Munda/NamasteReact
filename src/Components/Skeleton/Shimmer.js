import './skeleton.css';

const Shimmer = (props) => {
    const {type} = props;
    const classes = `skeleton ${type}`;
    return(
        <div className={classes}>
        </div>
    )
}

export default Shimmer;