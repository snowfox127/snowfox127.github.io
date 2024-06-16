
import React from 'react';

import { PrimeReactProvider} from 'primereact/api';
import { Tag } from 'primereact/tag';
import { Menubar } from 'primereact/menubar';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import "primereact/resources/themes/mira/theme.css";

import kanbanImg from './kanban.webp';
import bookImg from './book.webp';
import musicImg from './music.webp';
import healthImg from './health1.png';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import myResume from "./AliceSchmidtResume.pdf"

import './App.css';

function AppHeader(){
  const items = []
  const end = (
    <> 
      <a href={myResume} download>
      <Button rounded text>Résumé</Button>
      </a>
      
      
    </>
  );
  return(
    <PrimeReactProvider>
      <div className="card">
      <Menubar model={items} end={end} style = {{display:'flex'}} />   
      </div> 
    </PrimeReactProvider>
  )
}  

function AppAbout(){
  return(
    <div>
      <h1 class = 'text-[100px] lg:text-[100px] font-black text-accent dark:text-darkAccent z-0 font-IBM'>Alice Schmidt</h1>
      <div className="summCon">
      <p className="summary">
      Full Stack Developer with experience in designing and developing innovative web applications. Expert in both front-end and back-end technologies, recognized for creating intuitive and efficient solutions that enhance user experience.
      </p>
      </div>
    </div>
  );

}

function AppProjects(){

const kanbanHeader = (
    <img alt='img' src={kanbanImg} />
);
const bookHeader = (
  <img alt= 'img'src={bookImg}/>
);

const musicHeader = (
  <img alt= 'img'src={musicImg}/>
);
const healthHeader = (
  <img alt= 'img'src={healthImg}/>
);


return (
  <>
  <h2 >Projects</h2>
    <div className='flex-container'>
        <a href="https://github.com/snowfox127/potential-disco" >
        <Card title="Taskr"  header={kanbanHeader}  >
            <p >
                An innovative fullstack Kanban app focused on increasing productivity, organization, and efficiency.
            </p>
        </Card>
        </a>
        
        <a href="https://github.com/snowfox127/mobile-devices-project">
        <Card title="Health App"  header={healthHeader}>
            <p >
                An all-in-one health app providing a variety of necessary services to users.
            </p>
        </Card>
        </a>
       
        <a href="https://github.com/snowfox127/CSCI3230-Final-Project">
        <Card title="MyMelody" header={musicHeader}>
            <p >
                A dynamic, user friendly music app that provides a seamless and convenient listening experience.
            </p>
        </Card>
        </a>
        <a href="https://github.com/snowfox127/studious-guacamole">
        <Card title="Book Rec"  header = {bookHeader}>
            <p >
                An app utilizing Machine Learning to provide accurate book recommendations based on user preference.
            </p>
        </Card>
        </a>
       
    </div>
    </>
    
)
  

}
function AppSkills(){
  const mappedSkills = ['Python','Java','HTML/CSS','Javascript','SQL','MySQL','MongoDB', 'AWS','SQLite','Jenkins','Git','JUnit','WordPress','NodeJS','JQuery','React']
  const listItems = mappedSkills.map((skills)  =>{ 
  return(
   <Tag style={{background:`${"#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);})}`,margin: '10px 2px'}  } >
     <div className="flex align-items-center ">
     <span className="text-base">{skills}</span>
     </div>
   </Tag >
  )});
return(
  <>
    <h2>Skills</h2>
      <div className = "skillsList">
        {listItems}
      </div>
  </>
);
}

function AppLinks(){
return(
  <div className='contacts'>
    <a href="https://github.com/snowfox127">
    <FaGithub className = "contactItem"  size={34} />
    </a>
    <a href="https://www.linkedin.com/in/aliceschmidt27/">
    <FaLinkedin className = "contactItem"  size={34}/>
    </a>
    
    
    </div>
);
}

function App({Component, pageProps}) {
  
  return (
   <PrimeReactProvider>
      <div className="App">
        <AppHeader/>
        <AppAbout/>
        <AppProjects/>
        <AppSkills/>
        <AppLinks/>
          
      </div>
  </PrimeReactProvider>
  );
  
  
}

export default App;
