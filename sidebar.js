// Get sidebar and buttons by ID
let sidebarButton = document.getElementById("sidebarButton");
let sidebar = document.getElementById("sidebar");
let closeSidebar = document.getElementById("back-arrow");


sidebarButton.onclick = function () {
    sidebar.classList.add("active");
};

closeSidebar.onclick = function () {
    sidebar.classList.remove("active");
};