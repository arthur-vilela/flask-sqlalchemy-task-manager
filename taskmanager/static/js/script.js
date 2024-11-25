
document.addEventListener('DOMContentLoaded', function () {
  // sidenav initialization
  let sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);
});

document.addEventListener('DOMContentLoaded', function () {
  // modal trigger
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});