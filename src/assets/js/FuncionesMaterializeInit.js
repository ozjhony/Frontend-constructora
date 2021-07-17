document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems,{});
});


  document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    let instancia_sidenav = M.Sidenav.init(sidenav,{});    
    let dropdowns = document.querySelectorAll('.dropdown-trigger');
    let instancia_dropwdown = M.Dropdown.init(dropdowns, {
    hover:false});
  });



 

 


  