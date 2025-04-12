document.addEventListener("DOMContentLoaded", () => {
    const resourceContainer = document.getElementById("resource-cards");
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");
    const closeBtn = document.querySelector(".close");
  
    // Sample data (You can replace this with the actual JSON data)
    const resources = [
      {
        "title": "Past Papers",
        "description": "Download past exam papers to practice and prepare.",
        "image": "images/examp.webp"
      },
      {
        "title": "Study Tips",
        "description": "Effective techniques to help you retain more info.",
        "image": "images/study.webp"
      },
      {
        "title": "Planner Templates",
        "description": "Organize your study time with free printable planners.",
        "image": "images/planner.webp"
      },
      {
        "title": "Motivational Videos",
        "description": "Boost your mood with inspirational study clips.",
        "image": "images/motivation.webp"
      }
    ];
  
    // Create cards from JSON data
    resources.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      `;
      card.addEventListener("click", () => {
        showModal(item);
      });
      resourceContainer.appendChild(card);
    });
  
    // Show modal with resource details
    function showModal(item) {
      modalBody.innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.description}</p>
      `;
      modal.classList.remove("hidden");
    }
  
    // Close modal
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.add("hidden");
    });
  });
  