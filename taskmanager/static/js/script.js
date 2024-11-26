document.addEventListener("DOMContentLoaded", function () {
  // sidenav initialization
  let sidenav = document.querySelectorAll(".sidenav");
  M.Sidenav.init(sidenav);

  // datepicker initialization
  let datepicker = document.querySelectorAll(".datepicker");
  M.Datepicker.init(datepicker, {
    format: "dd mmmm, yyyy",
    i18n: { done: "Select" }
  });

  // select initialization
  let selects = document.querySelectorAll("select");
  M.FormSelect.init(selects);

  // modal trigger
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);

  let collapsibles = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsibles);
});