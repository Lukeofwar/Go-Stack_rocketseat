import React from 'react';

import Header from './components/Header'

function App() {
     return (
          <>      
       <Header title="Homepage" >
            <ul>
              <li>Homepage</li>   
              <li>project devSetings</li>   
            </ul>
       </Header>
       <Header title="project devtools" >
            <ul>
              <li>Homepage</li>   
              <li>project devSetings</li>   
              <li>Login</li>
            </ul>
       </Header>
       </>  
     );
}

export default App;