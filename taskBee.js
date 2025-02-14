const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.querySelector(".sidebar");

function toggleSidebar() {
  sidebar.classList.toggle("close");
  toggleButton.classList.toggle("rotate");
}

const taskCreateModal = document.querySelector(".task-create-modal");

function openTaskCreateModal() {
  taskCreateModal.classList.toggle("hidden");
}
