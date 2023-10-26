const password = 'jamamleto';
let participants = ['Meno1', 'Meno2', 'Meno3', 'Meno4', 'Meno5']; // Tu sú príklady existujúcich mená účastníkov

// Pridanie ďalších účastníkov
participants.push('Meno6');
participants.push('Meno7');
participants.push('Meno8');
// Môžete pridať ďalšie mená účastníkov podľa potreby

// Odpočet 16 dní
const endDate = new Date();
endDate.setDate(endDate.getDate() + 16);

const countdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = endDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('countdownText').innerHTML = `Odpočet: ${days}d ${hours}h ${minutes}m ${seconds}s`;

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

function renderParticipants() {
  const participantsDiv = document.getElementById('participants');
  participantsDiv.innerHTML = '';
  participants.forEach(participant => {
    const p = document.createElement('p');
    p.innerText = participant;
    participantsDiv.appendChild(p);
  });
}

renderParticipants(); // Zavolanie funkcie renderParticipants pre zobrazenie účastníkov na stránke
