function switchOrder() {
  const parentBlock = document.getElementById("parentBlock");
  const childBlock = document.getElementById("childBlock");
  const navbarBlock = document.getElementById("navbarBlock");
  const reqfinBlock = document.getElementById("reqfinBlock");
  const tipsBlock = document.getElementById("tipsBlock");

  parentBlock.insertBefore(navbarBlock, childBlock);
  childBlock.insertBefore(reqfinBlock, tipsBlock);
}

// if (window.matchMedia("(max-width: 768px)").matches) {
//   switchOrder();
// }

/*owl carousel*/
$(document).ready(function () {
  $(".bloglist .owl-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    autoplayTimeout: 3000,
  });
});
