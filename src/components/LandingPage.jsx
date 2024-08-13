import styles from './LandingPage.module.css'
import PageOne from './PageOne';


function LandingPage(props){
    let {intro} = props.pData;
return(
    <>
    <div className={styles["main-container"]}>
        <div className={styles["internal-container"]}>
          
        <div className={styles["pfp-container"]}>
            <img src={props.pData.pImage.url} alt={props.pData.pImage.alt} />
           
        </div>
        <div className={styles["name-container"]  }>
            <h1 >{props.pData.name}</h1>
            <div className={styles["onname-div"]}>
                <h3><span className={styles["dot-span"]}>&nbsp;&nbsp;&nbsp;</span>{props.pData.role}<span className={styles["dot-span"]}>&nbsp;&nbsp;&nbsp;&lt;/&gt;  </span></h3>
            </div>
            </div>


        </div>
       <div className={styles.content}>
        <PageOne sdata={intro} cstmclass={props.pg1} />
        <PageOne sdata={<List />} cstmclass={props.pg2} />
        </div>
        
        
    </div>
   
    </>
);

};

export default LandingPage ;


function List(){
   return(<>
   <h2>Skills:</h2>
   <li>
    <ol>React Js</ol>
      <ol>JavaScript</ol>
      <ol>C++</ol>
      <ol>Python</ol>

     </li>
     </>);
}