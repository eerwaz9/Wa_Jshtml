const meu = document.getElementById("bi-list")
const nav_mu = document.querySelector(".nav_mu")
meu.addEventListener("click", (eo) => { 
    
        nav_mu.classList.toggle("tog") 
    
 })

let counter = 1;

const autoWriting = () => {
  const title = `Welcome In Our School`;
  website.innerHTML = title.slice(0, counter);

  counter++;

  if (title.length < counter) {
    counter = 1;
  }
};

const stopAutoFun = setInterval(autoWriting, 300);
