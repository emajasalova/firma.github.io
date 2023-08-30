document.addEventListener("DOMContentLoaded", function() {
  const jobForm = document.getElementById("jobForm");
  const jobList = document.querySelector(".job-list");
  const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];

  function updateJobList() {
    jobList.innerHTML = "";
    savedJobs.forEach(function(job) {
      const jobItem = document.createElement("div");
      jobItem.classList.add("job-item");
      jobItem.innerHTML = `
        <h3>${job.jobTitle}</h3>
        <p>${job.jobDescription}</p>
        <p>Názov firmy: ${job.companyName}</p>
        <p>Telefónne číslo: ${job.phoneNumber}</p>
      `;
      jobList.appendChild(jobItem);
    });
  }

  jobForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const jobTitle = document.getElementById("jobTitle").value;
    const jobDescription = document.getElementById("jobDescription").value;
    const companyName = document.getElementById("companyName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    const newJob = {
      jobTitle: jobTitle,
      jobDescription: jobDescription,
      companyName: companyName,
      phoneNumber: phoneNumber
    };

    savedJobs.push(newJob);
    localStorage.setItem("jobs", JSON.stringify(savedJobs));
    updateJobList();
    jobForm.reset();
  });

  updateJobList();
});
