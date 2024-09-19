document.querySelectorAll(".dropdown").forEach(function (dropdown) {
    dropdown.addEventListener("click", function (e) {
      e.preventDefault();
      const dropdownMenu = this.querySelector(".dropdown-menu");
      dropdownMenu.style.display =
        dropdownMenu.style.display === "block" ? "none" : "block";
    });
  });
  
  // Close the dropdown if clicked outside
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-menu");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === "block") {
          openDropdown.style.display = "none";
        }
      }
    }
  };
  