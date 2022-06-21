const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

const front = document.getElementById("front");
const mountains = document.getElementById("mountains");
const sun = document.getElementById("sun");
const cloudsLeft = document.getElementById("clouds_left");
const cloudsRight = document.getElementById("clouds_right");

let imgViewer = document.getElementById("img-viewer");
let img = document.getElementById("card-heart");
let imgViewerContent = document.getElementById("img-viewer__content");
let imgViewerClose = document.getElementById("img-viewer__close");

let portfolioImg = document.querySelectorAll(".portfolio-img");

// const portfolioTitle = document.querySelector("#portfolio-title-text");
// const portfolioTitleText = portfolioTitle.textContent;
// const splitPortfolioTitle = portfolioTitleText.split("");
// portfolioTitle.textContent = "";
// for (let i = 0; i < splitPortfolioTitle.length; i++) {
//   portfolioTitle.innerHTML += "<span>" + splitPortfolioTitle[i] + "</span>";
// }
// const portfolioSpan = [];
// for (let i = 0; i < splitPortfolioTitle.length; i++) {
//   portfolioSpan[i] = portfolioTitle.querySelectorAll("span")[i];
//   portfolioSpan[i].style.visibility = "hidden";
// }

//------RIVER---------------------------------------------------
// const river = document.getElementById("river__container");
// const riverPath = document.querySelector("#river path");
// //Length of the river path
// const riverPathLength = riverPath.getTotalLength();
// //first the offset equals the leght to hide the river
// river.style.strokeDasharray = riverPathLength;
// river.style.strokeDashoffset = riverPathLength;
//-------------------------------------------------------------

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})

window.addEventListener("scroll", () => {
  //Parallax scrolling
  let scroll = window.scrollY;

  front.style.top = -scroll * 0.2 + "px";
  mountains.style.top = -scroll * 0.05 + "px";
  sun.style.top = scroll + "px";
  cloudsLeft.style.left = -scroll + "px";
  cloudsRight.style.left = scroll + "px";
  cloudsLeft.style.top = scroll * 0.5 + "px";

  //river.style.top = front.height * 0.57 - scroll * 0.2 + "px";

  //creating the horizon event
  // const horizon = new CustomEvent("horizon");
  // let isHorizon = false;

  //Top Y position and height ratio for which sun and front meet
  // const sunRatio = sun.style.top.slice(0, -2) / sun.height;
  // const frontRatio = -front.style.top.slice(0, -2) / front.height;
  // //Ratio should be 0.36 for the sun and 0.007 for front => dispatch event
  // if ((sunRatio > 0.35) & (frontRatio > 0.07)) {
  //   riverPath.dispatchEvent(horizon);
  //   isHorizon = true;
  // }

  //Listening for the horizon
  // riverPath.addEventListener("horizon", function (e) {
  //   //drawing the river
  //   if (sunRatio < 0.7011) {
  //     let percentage = (sunRatio - 0.36) / (0.7 - 0.36);
  //     let draw = (riverPathLength * percentage) / 2;
  //     river.style.strokeDashoffset = riverPathLength - draw;
  //   } else {
  //     //stop at the title
  //     let percentage = (0.7011 - 0.36) / (0.7 - 0.36);
  //     let draw = (riverPathLength * percentage) / 2;
  //     river.style.strokeDashoffset = riverPathLength - draw;
  //   }
  // });

  //making sure the river is not visible if the sun is above the horizon
  // if (!isHorizon) {
  //   river.style.strokeDasharray = riverPathLength;
  //   river.style.strokeDashoffset = riverPathLength;
  // }

  //------------------ANIMATING THE PORTFOLIO TITLE------------------------
  //creating an event of the river touching the portfolio title
  //const riverTitleStart = new CustomEvent("riverTitleStart");
  // let isRiverTitleStart = false;

  // if (sunRatio > 0.7011) {
  //   portfolioTitle.dispatchEvent(riverTitleStart);
  //   isRiverTitleStart = true;
  // }

  // portfolioTitle.addEventListener("riverTitleStart", function (e) {
  //   let percentage = (sunRatio - 0.7015) / (0.7215 - 0.7015);
  //   if (percentage > 0.1) {
  //     portfolioSpan[5].style.visibility = "visible";
  //   }
  //   if (percentage > 0.3) {
  //     portfolioSpan[4].style.visibility = "visible";
  //     portfolioSpan[6].style.visibility = "visible";
  //   }
  //   if (percentage > 0.5) {
  //     portfolioSpan[3].style.visibility = "visible";
  //     portfolioSpan[7].style.visibility = "visible";
  //   }
  //   if (percentage > 0.7) {
  //     portfolioSpan[2].style.visibility = "visible";
  //     portfolioSpan[8].style.visibility = "visible";
  //   }
  //   if (percentage > 0.9) {
  //     portfolioSpan[1].style.visibility = "visible";
  //   }
  //   if (percentage > 1) {
  //     portfolioSpan[0].style.visibility = "visible";
  //   }
  // });

  // if (!isRiverTitleStart) {
  //   for (let i = 0; i < splitPortfolioTitle.length; i++) {
  //     portfolioSpan[i] = portfolioTitle.querySelectorAll("span")[i];
  //     portfolioSpan[i].style.visibility = "hidden";
  //   }
  // }
});

//-------------------IMAGE LIGHTBOX VIEWER--------------------------------

imgViewer.onclick = function () {
  imgViewer.style.display = "none";
};

portfolioImg.forEach((item) => {
  item.onclick = function () {
    imgViewer.style.display = "block";
    imgViewerContent.src = this.src;
  };
});
