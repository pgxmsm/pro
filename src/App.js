import './App.css';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import styles from './components/PageOne.module.css'


function App() {
  let data = {name:"Muhammad Soban Muslim" ,role: "Web developer", pImage : {url : "pfp.jpg",
  alt : "pfp"} , intro: "Hi! I am Muhammad Soban Muslim Frontend Web Developer and currently I am learnig some different and popular technologies.Currently I am Learning React.jS, also Looking for Internship where I can upscale my skills and experience. By solving Real World Problems and making Projects with Team.",
para: "Hello G dfksdkjfl ;lsdkslkjfklds sldkfjkldsjfkl kdsjfdskj " };
  
  
  return (
    <>
    <NavBar />
    <LandingPage  pData={data} pg1={styles["content-container"]} pg2={styles["content-container2"]} />

    
    </>
  );
}

export default App;
