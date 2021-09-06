const { request } = require('express');
const express = require('express');
const { uuid, isUuid } = require('uuidv4')

const app = express();

app.use(express.json());

const projects = [];

function logRequests(request, response, next) {
   const { method, url } = request;

   const logLabel = `[${method.toUpperCase()}] ${url}`;

   console.time(logLabel);

     next(); 
     
   console.timeEnd(logLabel);
}

function validateProjectId(request, response, next) {
    const { id } = request.params;

    if (! isUuid(id)) {
       return response.status(400).json({ error: 'invalid project ID.' }); 
    }

    return next();
}

app.use(logRequests);
app.use('/projects/:id', validateProjectId);

app.get('/', (request, response) => {
   
   const { title } = request.query;
    
     const results = title
     ? projects.filter(project => project.title.includes(title))
     : projects;
   
   return response.json(results);        
});

app.post('/projects', (request, response) => {
        const { title, owner } = request.body;

            const project = { id: uuid(), title, owner };

            projects.push(project);
        //console.log("teste>>>>>>>>>>>>" + JSON.stringify(request.body)) 
   return response.json(project);        
});

app.put('/projects/:id',  (request, response) => {
     const { id } = request.params;
     const { title, owner } = request.body;

      const projectIndex = projects.findIndex(project => project.id === id)

      if (projectIndex < 0) {
         return response.status(400).json({ Error: 'Project not found.' })
      }

      const project = {
        id,
        title,
        owner,
      };

      projects[projectIndex] = project;

   return response.json(project );        
});

app.delete('/projects/:id',  (request, response) => {
        const { id } = request.params;

        const projectIndex = projects.findIndex(project => project.id === id)

        if (projectIndex < 0) {
           return response.status(400).json({ Error: 'Project not found.' })
        }

        projects.splice(projectIndex, 1)

   return response.status(204).send();        
});

app.listen(3333, () => {
       console.log('🚀  Back-end started!');       
});
