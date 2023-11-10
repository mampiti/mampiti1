const display = document.querySelector("#display");
const btn1 = document.querySelector("#btn1");

function downloadData() {
  display.textContent = "Loading...";
  fetch("https://lesotho-orphanages.vercel.app/01")
    .then((response) => response.json())
    .then((data) => {
      //clear all content inside display div
      display.textContent = "";

      const img = document.createElement("img");
      img.setAttribute("src", data.image);
      display.append(img);

      const p1 = document.createElement("p");
      p1.textContent = "Name: " + data.name;
      display.append(p1);

      const p2 = document.createElement("p");
      p2.textContent = "Location: " + data.location;
      display.append(p2);

      const p3 = document.createElement("p");
      p3.textContent = "id: " + data.id;
      display.append(p3);

      const p4 = document.createElement("p");
      p4.textContent = "amount donated: " + data.donated;
      display.append(p4);

      const p5 = document.createElement("p");
      p5.textContent = "target Amount: " + data.target;
      display.append(p5);
    });
}

btn1.addEventListener("click", downloadData);

const display2 = document.querySelector("#display2");
const btn2 = document.querySelector("#btn2");

function loaddata() {
  display.textContent = "Loading...";
  fetch("https://lesotho-orphanages.vercel.app/02")
    .then((response) => response.json())
    .then((data) => {
      //clear all content inside display div
      display.textContent = "";

      const img = document.createElement("img");
      img.setAttribute("src", data.image);
      display.append(img);

      const p1 = document.createElement("p");
      p1.textContent = "Name: " + data.name;
      display.append(p1);

      const p2 = document.createElement("p");
      p2.textContent = "Location: " + data.location;
      display.append(p2);

      const p3 = document.createElement("p");
      p3.textContent = "id: " + data.id;
      display.append(p3);

      const p4 = document.createElement("p");
      p4.textContent = "amount donated: " + data.donated;
      display.append(p4);

      const p5 = document.createElement("p");
      p5.textContent = "target Amount: " + data.target;
      display.append(p5);
    });
}

btn2.addEventListener("click", loaddata);

const display3 = document.querySelector("#display3");
const btn3 = document.querySelector("#btn3");

function datalink() {
  display.textContent = "Loading...";
  fetch("https://lesotho-orphanages.vercel.app/03")
    .then((response) => response.json())
    .then((data) => {
      //clear all content inside display div
      display.textContent = "";

      const img = document.createElement("img");
      img.setAttribute("src", data.image);
      display.append(img);

      const p1 = document.createElement("p");
      p1.textContent = "Name: " + data.name;
      display.append(p1);

      const p2 = document.createElement("p");
      p2.textContent = "Location: " + data.location;
      display.append(p2);

      const p3 = document.createElement("p");
      p3.textContent = "id: " + data.id;
      display.append(p3);

      const p4 = document.createElement("p");
      p4.textContent = "amount donated: " + data.donated;
      display.append(p4);

      const p5 = document.createElement("p");
      p5.textContent = "target Amount: " + data.target;
      display.append(p5);
    });
}

btn3.addEventListener("click", datalink);

const display4 = document.querySelector("#display4");
const btn4 = document.querySelector("#btn4");

function dataserver() {
  display.textContent = "Loading...";
  fetch("https://lesotho-orphanages.vercel.app/04")
    .then((response) => response.json())
    .then((data) => {
      //clear all content inside display div
      display.textContent = "";

      const img = document.createElement("img");
      img.setAttribute("src", data.image);
      display.append(img);

      const p1 = document.createElement("p");
      p1.textContent = "Name: " + data.name;
      display.append(p1);

      const p2 = document.createElement("p");
      p2.textContent = "Location: " + data.location;
      display.append(p2);

      const p3 = document.createElement("p");
      p3.textContent = "id: " + data.id;
      display.append(p3);

      const p4 = document.createElement("p");
      p4.textContent = "amount donated: " + data.donated;
      display.append(p4);

      const p5 = document.createElement("p");
      p5.textContent = "target Amount: " + data.target;
      display.append(p5);
    });
}

btn4.addEventListener("click", dataserver);

const display5 = document.querySelector("#display5");
const btn5 = document.querySelector("#btn5");

function serverdata() {
  display.textContent = "Loading...";
  fetch("https://lesotho-orphanages.vercel.app/05")
    .then((response) => response.json())
    .then((data) => {
      //clear all content inside display div
      display.textContent = "";

      const img = document.createElement("img");
      img.setAttribute("src", data.image);
      display.append(img);

      const p1 = document.createElement("p");
      p1.textContent = "Name: " + data.name;
      display.append(p1);

      const p2 = document.createElement("p");
      p2.textContent = "Location: " + data.location;
      display.append(p2);

      const p3 = document.createElement("p");
      p3.textContent = "id: " + data.id;
      display.append(p3);

      const p4 = document.createElement("p");
      p4.textContent = "amount donated: " + data.donated;
      display.append(p4);

      const p5 = document.createElement("p");
      p5.textContent = "target Amount: " + data.target;
      display.append(p5);
    });
}

btn5.addEventListener("click", serverdata);

const display6 = document.querySelector("#display6");
const btn6 = document.querySelector("#btn6");

function orphansdata() {
  display.textContent = "Loading...";
  fetch("https://lesotho-orphanages.vercel.app/06")
    .then((response) => response.json())
    .then((data) => {
      //clear all content inside display div
      display.textContent = "";

      const img = document.createElement("img");
      img.setAttribute("src", data.image);
      display.append(img);

      const p1 = document.createElement("p");
      p1.textContent = "Name: " + data.name;
      display.append(p1);

      const p2 = document.createElement("p");
      p2.textContent = "Location: " + data.location;
      display.append(p2);

      const p3 = document.createElement("p");
      p3.textContent = "id: " + data.id;
      display.append(p3);

      const p4 = document.createElement("p");
      p4.textContent = "amount donated: " + data.donated;
      display.append(p4);

      const p5 = document.createElement("p");
      p5.textContent = "target Amount: " + data.target;
      display.append(p5);
    });
}

btn6.addEventListener("click", orphansdata);
