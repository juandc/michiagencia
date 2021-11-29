async function loadDirectorsData() {
  const directorsList = document.getElementById('directorsList');

  const res = await fetch('http://localhost:8080/api/directors')
  const { directors } = await res.json();
  
  directors.map(michiDirector => {
    console.log(michiDirector)

    const li = document.createElement('li');
    const text = document.createTextNode(michiDirector.name);

    li.appendChild(text);
    directorsList.appendChild(li);
  });
}

async function loadAgentsData() {
  const agentsList = document.getElementById('agentsList');

  const res = await fetch('http://localhost:8080/api/agents')
  const { agents } = await res.json();
  
  agents.map(michiAgent => {
    console.log(michiAgent)

    const li = document.createElement('li');
    const text = document.createTextNode(michiAgent.name);

    li.appendChild(text);
    agentsList.appendChild(li);
  });
}

async function createNewDirector() {
  const directorName = document.getElementById('newDirectorName');
  const name = directorName.value;

  const res = await fetch('http://localhost:8080/api/directors', {
    headers: {
      'Content-Type': 'application/json', // -- content type
    },
    method: 'POST',
    body: JSON.stringify({ name }),
  })
  const data = await res.json();
  console.log(data);

  const directorsList = document.getElementById('directorsList');
  
  const li = document.createElement('li');
  const text = document.createTextNode(data.director.name);

  li.appendChild(text);
  directorsList.appendChild(li);
}

async function createNewAgent() {
  const agentName = document.getElementById('newAgentName');
  const name = agentName.value;

  const res = await fetch('http://localhost:8080/api/directors', {
    headers: {
      'Content-Type': 'application/json', // -- content type
    },
    method: 'POST',
    body: JSON.stringify({ name }),
  })
  const data = await res.json();
  console.log(data);

  const agentsList = document.getElementById('agentsList');

  const li = document.createElement('li');
  const text = document.createTextNode(data.agent.name);

  li.appendChild(text);
  agentsList.appendChild(li);
}

loadDirectorsData();
loadAgentsData();


const directorBtn = document.getElementById('newDirectorBtn');

directorBtn.addEventListener('click', createNewDirector);
