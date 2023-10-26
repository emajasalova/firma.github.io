const password = 'jamamleto';
let participants = [];

function showForm() {
  const input = document.getElementById('password').value;
  if (input === password) {
    document.getElementById('form').style.display = 'block';
  } else {
    alert('Nesprávne heslo!');
  }
}

function addParticipant() {
  const name = document.getElementById('participantName').value;
  if (name) {
    participants.push(name);
    renderParticipants();
    document.getElementById('participantName').value = '';
  } else {
    alert('Zadajte meno účastníka!');
  }
}

function removeParticipant() {
  const name = document.getElementById('participantName').value;
  const index = participants.indexOf(name);
  if (index > -1) {
    participants.splice(index, 1);
    renderParticipants();
  }
}

function renderParticipants() {
  const participantsDiv = document.getElementById('participants');
  participantsDiv.innerHTML = '';
  participants.forEach(participant => {
    const p = document.createElement('p');
    p.innerText = participant;
    participantsDiv.appendChild(p);
  });
}

// Odpočet 16 dní
const endDate = new Date();
endDate.setDate(endDate.getDate() + 16);

const countdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = endDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById('countdownText').innerHTML = `Odpočet: ${days} dní`;

  if (distance < 0) {
    clearInterval(countdown);
    if (participants.length > 0) {
      const winner = participants[Math.floor(Math.random() * participants.length)];
      document.getElementById('countdownText').innerHTML = `Víťaz: ${winner}`;
    } else {
      document.getElementById('countdownText').innerHTML = 'Nikto nevyhral, nikto sa neregistroval.';
    }
  }
}, 1000);
