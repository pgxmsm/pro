// import styles from './PageOne.module.css';

function PageOne(props){
    return(
<>
<div className={props.cstmclass }>
    {console.log(props.cstmclass)}
          <p>
            {props.sdata}
          </p>
        </div>
</>
    );
};

export default PageOne ;