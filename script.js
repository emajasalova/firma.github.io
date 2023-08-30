document.addEventListener("DOMContentLoaded", function() {
    const jobForm = document.getElementById("jobForm");
    const jobList = document.querySelector(".job-list");
  
    jobForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const jobTitle = document.getElementById("jobTitle").value;
      const jobDescription = document.getElementById("jobDescription").value;
      const companyName = document.getElementById("companyName").value;
      const phoneNumber = document.getElementById("phoneNumber").value;
  
      const jobItem = document.createElement("div");
      jobItem.classList.add("job-item");
      jobItem.innerHTML = `
        <h3>${jobTitle}</h3>
        <p>${jobDescription}</p>
        <p>Názov firmy: ${companyName}</p>
        <p>Telefónne číslo: ${phoneNumber}</p>
      `;
  
      jobList.appendChild(jobItem);
  
      jobForm.reset();
    });
  });
  