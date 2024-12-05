/*!
* Start Bootstrap - Shop Item v5.0.6 (https://startbootstrap.com/template/shop-item)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// import Swal from 'sweetalert2';
function showAlert() {
  Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: 'Your operation completed successfully.'
  });
}
let reservBtn = document.getElementById("reserve");
reservBtn.addEventListener("click", showAlert);