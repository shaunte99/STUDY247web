document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.getElementById("study-cards");
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.querySelector(".close");
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  // Responsive nav toggle
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // Load JSON data and create cards
  fetch("data/data.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <img src="${item.image}" alt="${item.title}" style="width:100%; border-radius: 8px;">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        `;
        card.addEventListener("click", () => {
          showModal(item);
          increaseViewCount(item.title);
        });
        cardContainer.appendChild(card);
      });
    })
    .catch((err) => {
      console.error("Error loading JSON:", err);
      cardContainer.innerHTML = "<p>Failed to load content.</p>";
    });

  // Show Modal with content
  function showModal(item) {
    modalBody.innerHTML = `
      <h2>${item.title}</h2>
      <p>${item.description}</p>
      <p><strong>Views:</strong> ${getViewCount(item.title)}</p>
    `;
    modal.classList.remove("hidden");
  }

  // Close modal when clicking close button or outside
  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });

  // View count using localStorage
  function getViewCount(title) {
    const count = localStorage.getItem(`view_${title}`);
    return count ? parseInt(count) : 0;
  }

  function increaseViewCount(title) {
    let count = getViewCount(title);
    localStorage.setItem(`view_${title}`, count + 1);
  }
});

  