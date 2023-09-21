// populate the employment section
fetch("employment.json")
  .then(response => response.json())
  .then(data => {
    const items = document.getElementById("employment");
    data.forEach(item => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3><a href="${item.link}">${item.title}</a></h3>
        <p>${item.description}</p>
        <p>Date: ${item.years}</p>
        <p>${item.company}</p>
      `;
      items.appendChild(div);
    });
  })
  .catch(error => console.error(error));

fetch("education.json")
  .then(response => response.json())
  .then(data => {
    const items = document.getElementById("education");
    data.forEach(item => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3><a href="${item.website}">${item.institution}</a></h3>
        <p>${item.degree}</p>
        <p>Date: ${item.years}</p>
      `;
      items.appendChild(div);
    });
  })
  .catch(error => console.error(error));

