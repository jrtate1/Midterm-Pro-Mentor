function loadComponent(id, path) {
    fetch(path)
      .then(res => res.text())
      .then(html => {
        document.getElementById(id).innerHTML = html;
      });
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar", "components/navbar.html");
  });
  