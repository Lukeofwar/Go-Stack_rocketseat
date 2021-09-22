import React, { useState } from 'react';

import Header from './components/Header'

function App() {
    const [projects, setProjects] = useState(['Desenvolvimentode app', 'Front-end web']);
       
     function handleAddProject() {
          //projects.push(`Novo projeto ${Date.now()}`);

          setProjects([...projects, `Novo projeto ${Date.now()}`])

     }

     return (
          <>      
       <Header title="project devtools" />

         <ul>
           {projects.map(project => <li key={project}>{project}</li>)}   
         </ul>

         <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
       </>  
     );
}

export default App;