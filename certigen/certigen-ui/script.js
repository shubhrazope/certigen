let allCertificates = [];

onload = () => displayData();

function submitForm(event) {
  event.preventDefault();

  const studentName = document.getElementById("studentName").value.trim();
  const course = document.getElementById("course").value.trim();
  const achievement = document.getElementById("achievement").value.trim();
  const date = document.getElementById("date").value;
  const result = document.getElementById("result");

  if (!studentName || !course || !date) {
    result.classList.remove("hidden");
    result.textContent = "Please fill out all fields.";
    result.style.color = "red";
    return;
  }

  fetch("http://localhost:8080/api/certificates", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      studentName,
      course,
      achievement,
      date,
    }),
  })
    .then((data) => {
      result.classList.remove("hidden");
      result.textContent = "Student achievement recorded successfully!";
      result.style.color = "green";

      document.getElementById("studentName").value = "";
      document.getElementById("course").value = "";
      document.getElementById("achievement").value = "";
      document.getElementById("date").value = "";

      displayData();
    })
    .catch((error) => console.error(error));
}

function displayData() {
  fetch("http://localhost:8080/api/certificates")
    .then((response) => response.json())
    .then((certificates) => {
      allCertificates = certificates;
      renderData(certificates);
    })
    .catch((error) => console.error(error));
}

function deleteEntry(id) {
  fetch(`http://localhost:8080/api/certificates/${id}`, {
    method: "DELETE",
  })
    .then(() => {
      displayData();
    })
    .catch((error) => console.error(error));
}

function editEntry(id, studentName, course, achievement, date) {
  document.getElementById("studentName").value = studentName;
  document.getElementById("course").value = course;
  document.getElementById("achievement").value = achievement;
  document.getElementById("date").value = date;
  document.getElementById("submit-btn").textContent = "Update";

  document.getElementById("submit-btn").onclick = () => updateEntry(id);
}

function updateEntry(id) {
  const studentName = document.getElementById("studentName").value.trim();
  const course = document.getElementById("course").value.trim();
  const achievement = document.getElementById("achievement").value.trim();
  const date = document.getElementById("date").value;
  const result = document.getElementById("result");

  if (!studentName || !course || !date) {
    result.classList.remove("hidden");
    result.textContent = "Please fill out all required fields.";
    result.style.color = "red";
    return;
  }

  fetch(`http://localhost:8080/api/certificates/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      studentName,
      course,
      achievement,
      date,
    }),
  })
    .then(() => {
      result.classList.remove("hidden");
      result.textContent = "Student record updated successfully!";
      result.style.color = "green";

      displayData();

      document.getElementById("studentName").value = "";
      document.getElementById("course").value = "";
      document.getElementById("achievement").value = "";
      document.getElementById("date").value = "";

      document.getElementById("submit-btn").textContent = "Submit";
    })
    .catch((error) => {
      console.error("Error updating the data:", error);
    });
}

function searchData() {
  const search = document.getElementById("search").value.toLowerCase().trim();
  const filteredCertificates = allCertificates.filter(
    (certificate) =>
      certificate.studentName.toLowerCase().trim().includes(search) ||
      certificate.course.toLowerCase().trim().includes(search) ||
      certificate.date.toLowerCase().trim().includes(search)
  );

  renderData(filteredCertificates);
}

function clearSearch() {
  document.getElementById("search").value = "";
  displayData();
}

function generateCertificate(id) {
  const certificateData = allCertificates.find((c) => c.id === id);

  if (!certificateData) {
    alert("Certificate data not found.");
    return;
  }

  document.getElementById("cert-name").textContent =
    certificateData.studentName;
  document.getElementById("cert-course").textContent = certificateData.course;
  document.getElementById("cert-date").textContent = certificateData.date;

  const certificateContainer = document.getElementById("certificate-container");
  certificateContainer.classList.remove("hidden");

  certificateContainer.scrollIntoView({ behavior: "smooth" });
}

function closeCertificate() {
  document.getElementById("certificate-container").classList.add("hidden");
}

function renderData(certificates) {
  const studentTable = document.getElementById("studentTableBody");
  studentTable.innerHTML = "";

  certificates.forEach((certificate, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${certificate.studentName}</td>
        <td>${certificate.course}</td>
        <td>${certificate.achievement}</td>
        <td>${certificate.date}</td>
        <td>
            <button onclick="generateCertificate(${
              certificate.id
            })">📝 Generate Certificate</button>
            <button onclick="editEntry(${certificate.id}, '${
      certificate.studentName
    }', '${certificate.course}', '${certificate.achievement}', '${
      certificate.date
    }')">✏️ Edit</button>
            <button onclick="deleteEntry(${certificate.id})">🗑️ Delete</button>
        </td>
      `;
    studentTable.appendChild(row);
  });
}
