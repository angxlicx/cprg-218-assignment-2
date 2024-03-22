//accordion
var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      
      this.classList.toggle("active");
  
      
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
        this.querySelector('i').classList.remove('fa-minus');
        this.querySelector('i').classList.add('fa-plus');
      } else {
        panel.style.display = "block";
        this.querySelector('i').classList.remove('fa-plus');
        this.querySelector('i').classList.add('fa-minus');
      }
    });
  }

//footer copyright
document.addEventListener('DOMContentLoaded', function() {
  var currentYear = new Date().getFullYear();
  document.getElementById('copyright').innerHTML = '&copy; ' + currentYear + ' Lavender Vault Stationery. All rights reserved.';
});
