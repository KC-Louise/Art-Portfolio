//Variables for sliders
const nextbtn = document.querySelector("#next");
const prevbtn = document.querySelector("#prev");
const nextbtn2 = document.querySelector("#ani-next");
const prevbtn2 = document.querySelector("#ani-prev");
//MV video slider sources
const srcs = ["https://www.youtube.com/embed/qQeYHMB6GzI", "https://www.youtube.com/embed/7M06fJxiayo","https://www.youtube.com/embed/U52DCThE9DM"];
//Animation video slider sources
const aniSrcs = ["https://www.youtube.com/embed/D1sdN3Bda4U", "https://www.youtube.com/embed/gS9iIm2d-mY"];
const mv = document.querySelector("#resp-mv");
const ani = document.querySelector("#resp-ani");
//Variables for photo grid
const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;
let i = 0;


//Obtain Videography video sources
function nextItem() {
    i++; // increase i by one (next video)
    i = i % srcs.length;
    // if we've gone too high, start from 0 again
    return srcs[i];
}

function prevItem() {
    while (i === 0) { //the beginning of array
        i = srcs.length;
         //start at other end 
    }
    i--; // decrease by one
    return srcs[i]; // give us back the item of where we are now
}

// Obtain animation video sources
function nextItem2() {
    i++; // increase i by one (next video)
    i = i % aniSrcs.length;
    // if we've gone too high, start from 0 again
    return aniSrcs[i];
}

function prevItem2() {
    while (i === 0) { //the beginning of array
        i = aniSrcs.length;
         //start at other end 
    }
    i--; // decrease by one
    return aniSrcs[i]; // give us back the item of where we are now
}

//Embedded videography vids button functioning
mv.src = srcs[0];  //start value
prevbtn.addEventListener('click', () => {
    mv.src = prevItem();
        }
    );
nextbtn.addEventListener('click', () => {
    mv.src = nextItem();
        }
    );

//Embedded Animation vids button functioning
ani.src = aniSrcs[0]; //start value
prevbtn2.addEventListener('click', () => {
    ani.src = prevItem2();
        }
    );
nextbtn2.addEventListener('click', () => {
    ani.src = nextItem2();
        }
    );

//Photo Grid
imgs[0].style.opacity = opacity; //Set first img opacity

imgs.forEach(img =>
  img.addEventListener("click", imgClick)
);

function imgClick(e) {
  //Reset the opacity
  imgs.forEach(img => (img.style.opacity = 1));
  //Change current image to src of clicked image
  current.src = e.target.src;
  //Add fade in class
  current.classList.add("fade-in");

  // Remove fade-in class after 0.5s
  setTimeout(() => current.classList.remove("fade-in"), 500);
  //Change the opacity to opacity var
  e.target.style.opacity = opacity;
}

