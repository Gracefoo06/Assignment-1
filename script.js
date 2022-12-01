var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

document.getElementById("myAnchor").addEventListener("click", function(event){
  event.preventDefault()
});

function myFunction(x) {
  x.classList.toggle("change");
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
        entry.target.classList.add('show');
    } else {
        entry.target.classList.remove('show');
    }  
  });

});

const hiddenElements= document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));

