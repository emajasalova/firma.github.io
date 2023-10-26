const password = 'jamamleto';
let participants = ['Thomas Tayler', 'Volné Miesto']; // Tu sú príklady existujúcich mená účastníkov

// Pridanie ďalších účastníkov
participants.push('Meno6');
participants.push('Meno7');
participants.push('Meno8');
// Môžete pridať ďalšie mená účastníkov podľa potreby






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
