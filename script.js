function getMessage() {
  const output = document.getElementById("output");

  output.innerHTML = '<p class="loading">Loading message...</p>';

  fetch("http://localhost:3000/api/message")
    .then(response => response.json())
    .then(data => {
      output.innerHTML = `
        <p><span class="label">Message:</span> <span class="value">${data.message}</span></p>
        <p><span class="label">Course:</span> <span class="value">${data.course}</span></p>
        <p><span class="label">Year:</span> <span class="value">${data.year}</span></p>
        <p><span class="label">Time:</span> <span class="value">${data.time}</span></p>
      `;
    })
    .catch(error => {
      output.innerHTML = '<div class="error">Error: Could not connect to backend.</div>';
      console.error("Error:", error);
    });
}

function getStudent() {
  const output = document.getElementById("output");

  output.innerHTML = '<p class="loading">Loading student data...</p>';

  fetch("http://localhost:3000/api/student")
    .then(response => response.json())
    .then(data => {
      output.innerHTML = `
        <p><span class="label">Name:</span> <span class="value">${data.name}</span></p>
        <p><span class="label">Role:</span> <span class="value">${data.role}</span></p>
      `;
    })
    .catch(error => {
      output.innerHTML = '<div class="error">Error: Could not connect to backend.</div>';
      console.error("Error:", error);
    });
}