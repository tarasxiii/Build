var panel = document.querySelector(".bannerplace");

// -----------------New script

panel.onclick = function(event) {
  var target = event.target;
  while (target != panel) {
    if (target.className == ".panel__headtext" || ".dash") {
      var parent = target.parentNode;
      var sibling = parent.nextElementSibling;
      sibling.classList.toggle("toggle__class");
      return;
    }
  }
};
