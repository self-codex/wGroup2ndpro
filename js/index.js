let sIcon = document.getElementById("searchIcon");
let sBox = document.getElementById("searchBox");

sIcon.addEventListener("click", function() {
    if (sBox.style.display == "none") {
        sBox.style.display = "block";
    } else {
        sBox.style.display = "none";
    }
});

// const topNav = document.getElementById('top-nav');
// const bar = document.getElementById('bar');

function openNav() {
    document.getElementById("nav-toggle").style.width = "500px";
}


function videoURL(next) {
    document.getElementById('videoUrl').src = next;
}


let tab1 = document.getElementById('tab1');
let tab2 = document.getElementById('tab2');
let tab3 = document.getElementById('tab3');

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

function openTab1() {
    tab1.style.transform = 'translateX(0)';
    tab2.style.transform = 'translateX(100%)';
    tab3.style.transform = 'translateX(100%)';
    btn1.style.color = 'rgb(100, 98, 98)';
    btn2.style.color = '#000';
    btn3.style.color = '#000';
}

function openTab2() {
    console.log('sucv');
    tab1.style.transform = "translateX(100%)";
    console.log('sucv');
    tab2.style.transform = "translateX(0)";
    tab3.style.transform = "translateX(100%)";
    btn2.style.color = "rgb(100, 98, 98)";
    btn1.style.color = '#000';
    btn3.style.color = '#000';
}


function openTab3() {
    tab1.style.transform = 'translateX(100%)';
    tab2.style.transform = 'translateX(100%)';
    tab3.style.transform = 'translateX(0)';
    btn3.style.color = 'rgb(100, 98, 98)';
    btn2.style.color = '#000';
    btn1.style.color = '#000';
}







// function closeNav() {
//     document.getElementById("top-nav").style.width = "0";
// }