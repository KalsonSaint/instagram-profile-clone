import TopNav from "./modules/TopNav.js";

const App = () => {
  return `
    <div class="container">
      ${TopNav()}
    </div>
  `;
};

document.getElementById("root").innerHTML = App();
