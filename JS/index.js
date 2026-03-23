






function outfostuff() {
  alert("Sorry but this product is out of stock");
}



var jupanQ = 0;


function jupanY() {
  jupanQ = 1;
}


function jupanN() {
  jupanQ = 0;
  alert("This position is on-site role and we at FromSoftware, dont take applion's from outside of the contry of jupan");
}




var jupanQ = 0;


function jupanY() {
  jupanQ = 1;
}


function jupanN() {
  jupanQ = 0;
  alert("This position is on-site role and we at FromSoftware, dont take applion's from outside of the contry of jupan");
}







  var cvfilenum = 0;

function cvfind() {
  const uploadBtn = document.getElementById('upload-Btn');
  const fileInput = document.getElementById('file-Input');
  const filename = document.getElementById('file-name');
 


  uploadBtn.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
      filename.textContent = fileInput.files[0].name;
      filename.style.color = "black" ;
      uploadBtn.style.color = "#e4e8ed";
      uploadBtn.style.backgroundColor = "green";
      cvfilenum = 1;  
    }
  });


}





  

function divdisaper() {

const butcolor = document.getElementById('buttoncolor');

  let foundText = true;
  

  const prstext = document.getElementsByClassName('infotext');
  const cvtext = document.getElementsByClassName('infotextcv');


  if (prstext.length < 2 ) {
    return;
  }
 
  
  for (let i = 0; i < prstext.length; i++) {
    
    if (prstext[i].value.trim() === "") {
      foundText = false;
      break;
    }
  }
  if (foundText) {
    butcolor.style.backgroundColor = "green";
    butcolor.style.color = "#e4e8ed";
    console.log("hhhhhhhhhh");
    
  } 
  else {
    console.log("rrrrr");
    butcolor.style.backgroundColor = "#e4e8ed";
    butcolor.style.color = "gray";
  }



}
setInterval(divdisaper, 1000)

function divgone() {
  const butcolor = document.getElementById('buttoncolor');
  const divgooo = document.getElementById('dih-box-one');
  const divcome = document.getElementById('dih-box-two');
  

  if (butcolor.style.backgroundColor === "green") {
      
      divcome.style.display = "inline-block";
      cvfilenum = 0;
      console.log("aaaaaaaa");
  } else { console.log("jfjfjfj")}
}















function divdisaper2() {

  const butcolor2 = document.getElementById('buttoncolor2');

  let foundText = true;
  
  const cvtext = document.getElementsByClassName('infotextcv');

  const linkonoff = document.getElementById('linkoffon');

  if (cvtext.length < 2) {
    return;
  }
 
  
  for (let i = 0; i < cvtext.length; i++) {
    
    if (cvtext[i].value.trim() === "" ) {
      foundText = false;
      break;
    }
  }
  if (cvfilenum === 0) {
      foundText = false;
  }
  if (jupanQ === 0) {
      foundText = false;
  }
  if (foundText) {
    butcolor2.style.backgroundColor = "green";
    butcolor2.style.color = "#e4e8ed";
    butcolor2.href = "index.html";
    
  } 
  else {
    butcolor2.style.backgroundColor = "#e4e8ed";
    butcolor2.style.color = "gray";
    butcolor2.href = "#";
  }



}
setInterval(divdisaper2, 1000)

function divgone2() {
  
  const butcolor2 = document.getElementById('buttoncolor2');
  

  if (butcolor2.style.backgroundColor === "green") {
      alert("Submission successful. Your CV is now under review — we’ll notify you with next steps soon.");
      console.log("aaaaaaaa");
  } else { console.log("jfjfjfj")}
}





let eldenimgIndex = 0;
const eldenimages = ["img/eldenring/elpnring.png","img/eldenring/elden-con-2.jpg","img/eldenring/elden-con-1.jpg"];
const img = document.getElementById("er-js-img-change");

function eldenimgnext() {

    eldenimgIndex = (eldenimgIndex + 1) % eldenimages.length;

    img.style.backgroundImage = `url("${eldenimages[eldenimgIndex]}")`;

}

function eldenimgperv() {

    eldenimgIndex = (eldenimgIndex - 1 + eldenimages.length) % eldenimages.length;

    img.style.backgroundImage = `url("${eldenimages[eldenimgIndex]}")`;

}

let bloodimgIndex = 0;
const bloodimages = ["img/bloodborn/bb-img.jpg","img/bloodborn/bloodborn-con-2.jpg","img/bloodborn/bloodborn-con-3.jpg"];
const bdimg = document.getElementById("bd-js-img-change");

function bloodimgnext() {

    bloodimgIndex = (bloodimgIndex + 1) % bloodimages.length;

    bdimg.style.backgroundImage = `url("${bloodimages[bloodimgIndex]}")`;

}

function bloodimgperv() {

    bloodimgIndex = (bloodimgIndex - 1 + bloodimages.length) % bloodimages.length;

    bdimg.style.backgroundImage = `url("${bloodimages[bloodimgIndex]}")`;

}

let armimgIndex = 0;
const armimages = ["img/ArmoredCoreVIFR/con-top.png","img/ArmoredCoreVIFR/armored-core-6-hands-on-preview_kcyt.jpg","img/ArmoredCoreVIFR/1_2FzLqI1gv5xVXiUje4MUKw.jpg"];
const armimg = document.getElementById("arm-js-img-change");

function armimgnext() {

    armimgIndex = (armimgIndex + 1) % armimages.length;

    armimg.style.backgroundImage = `url("${armimages[armimgIndex]}")`;

}

function armimgperv() {

    armimgIndex = (armimgIndex - 1 + armimages.length) % armimages.length;

    armimg.style.backgroundImage = `url("${armimages[armimgIndex]}")`;

}

let darkimgIndex = 0;
const darkimages = ["img/darksolus3/capsule_616x353.jpg","img/darksolus3/DSIII_Oct152015_06.jpg","img/darksolus3/8ae0d33a-d238-11ed-8a36-0210609a3fe2.jpg"];
const darkimg = document.getElementById("dark-js-img-change");

function darkimgnext() {

    darkimgIndex = (darkimgIndex + 1) % darkimages.length;

    darkimg.style.backgroundImage = `url("${darkimages[darkimgIndex]}")`;

}

function darkimgperv() {

    darkimgIndex = (darkimgIndex - 1 + darkimages.length) % darkimages.length;

    darkimg.style.backgroundImage = `url("${darkimages[darkimgIndex]}")`;

}



let ssdtimgIndex = 0;
const ssdtimages = ["img/SSDT/capsule_616x353.jpg","img/SSDT/sekiro_01-2000-fc072f5f600347f4b2233e4da7926fed.jpg","img/SSDT/sekiro-shadowsdietwice-2.jpg"];
const ssdtimg = document.getElementById("ssdt-js-img-change");

function ssdtimgnext() {

    ssdtimgIndex = (ssdtimgIndex + 1) % ssdtimages.length;

    ssdtimg.style.backgroundImage = `url("${ssdtimages[ssdtimgIndex]}")`;

}

function ssdtimgperv() {

    ssdtimgIndex = (ssdtimgIndex - 1 + ssdtimages.length) % ssdtimages.length;

    ssdtimg.style.backgroundImage = `url("${ssdtimages[ssdtimgIndex]}")`;

}













function contextSent() {

  const textcon0 = document.getElementById('context0');
  const textcon1 = document.getElementById('context1');
  const textcon2 = document.getElementById('context2');

  textcon0.value = " ";
  textcon1.value = " ";
  textcon2.value = " ";

  alert("thank you for sending us a message we will try to contact you soon.");
}
