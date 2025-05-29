async function fetchMatches() {
  try {
    const res = await fetch('https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/en.1.json');
    const data = await res.json();
    console.log(data); // View full structure in console

    const matches = data.matches.slice(0, 10); // Just the first 10 for demo
    const container = document.getElementById('matches');

    matches.forEach(match => {
      const div = document.createElement('div');
      div.className = 'match';
      div.innerHTML = `
        <div class="teams">${match.team1} vs ${match.team2}</div>
        <div class="date">${new Date(match.date).toLocaleDateString()}</div>
      `;
      container.appendChild(div);
    });
  } catch(error) {
    console.error('Error fetching matches:', error);
  }
}

fetchMatches();
