document.addEventListener("DOMContentLoaded", function () {
  const includes = document.querySelectorAll("[data-include]");

  includes.forEach(el => {
    const file = `partials/${el.getAttribute("data-include")}.html`;
    fetch(file)
      .then(res => res.text())
      .then(html => el.innerHTML = html)
      .catch(err => console.warn("Couldn't load include:", file));
  });
});
