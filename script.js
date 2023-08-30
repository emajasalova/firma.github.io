document.addEventListener("DOMContentLoaded", function() {
  const jobForm = document.getElementById("jobForm");
  const jobList = document.querySelector(".job-list");

  const firebaseConfig = {
    apiKey: "AIzaSyAQ3b6fw8GqTOkrkOYgoOHuYIh4Ke4H_kw",
    authDomain: "githubproject-6def0.firebaseapp.com",
    projectId: "githubproject-6def0",
    storageBucket: "githubproject-6def0.appspot.com",
    messagingSenderId: "621024229301",
    appId: "1:621024229301:web:e7f960f8c5d008c518cbfc",
    measurementId: "G-H2Z2HGLQK5"
  };
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  function updateJobList() {
    jobList.innerHTML = "";
    database.ref("ponuky").once("value")
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          const ponuka = childSnapshot.val();
          const jobItem = document.createElement("div");
          jobItem.classList.add("job-item");
          jobItem.innerHTML = `
            <h3>${ponuka.nadpis}</h3>
            <p>${ponuka.popis}</p>
            <p>Názov firmy: ${ponuka.firma}</p>
            <p>Telefónne číslo: ${ponuka.telefon}</p>
          `;
          jobList.appendChild(jobItem);
        });
      });
  }

  jobForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nadpis = document.getElementById("jobTitle").value;
    const popis = document.getElementById("jobDescription").value;
    const firma = document.getElementById("companyName").value;
    const telefon = document.getElementById("phoneNumber").value;

    const novaPonuka = {
      nadpis: nadpis,
      popis: popis,
      firma: firma,
      telefon: telefon
    };

    // Ukladanie do Firebase
    database.ref("ponuky").push(novaPonuka);
    updateJobList();
    jobForm.reset();
  });

  updateJobList();
});
</script>

