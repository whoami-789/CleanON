function dropbtn_Func1() {
    document.getElementById("menu_drop1").classList.toggle("show");
    document.getElementById("menu_drop2").classList.remove("show");
  }

function dropbtn_Func2() {
  document.getElementById("menu_drop2").classList.toggle("show");
  document.getElementById("menu_drop1").classList.remove("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn1')) {
  var menu_drop1 = document.getElementById("menu_drop1");
    if (menu_drop1.classList.contains('show')) {
      menu_drop1.classList.remove('show');
    }
  }

  if (!e.target.matches('.dropbtn2')) {
    var menu_drop2 = document.getElementById("menu_drop2");
      if (menu_drop2.classList.contains('show')) {
          menu_drop2.classList.remove('show');
      }
    }
}