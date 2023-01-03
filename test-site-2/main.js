const myImage = document.querySelector("img.haunted-mansion1");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/gos-haunted-mansion1.jpg") {
    myImage.setAttribute("src", "images/giant-weasles.jpg");
  } else {
    myImage.setAttribute("src", "images/giant-snakes.jpg")
  }
  if (mySrc === "images/giant-snakes.jpg") {
    myImage.setAttribute("src", "images/snake-handler.jpg")
  }
  if (mySrc === "images/snake-handler.jpg") {
    myImage.setAttribute("src", "images/gos-haunted-mansion1.jpg")
  }
  }

const myImage2 = document.querySelector("img.signaling-lantern");

myImage2.onclick = () => {
  const mySrc = myImage2.getAttribute("src");
  if (mySrc === "images/signaling-lantern.jpg") {
    myImage2.setAttribute("src", "images/ned-tied.jpg");
  } else {
    myImage2.setAttribute("src", "images/magic-mouth.jpg");
  }
  if (mySrc === "images/magic-mouth.jpg") {
    myImage2.setAttribute("src", "images/back-stab.jpg")
  }
  if (mySrc === "images/back-stab.jpg") {
    myImage2.setAttribute("src", "images/cellar.jpg")
  }
  if (mySrc === "images/cellar.jpg") {
    myImage2.setAttribute("src", "images/rot-grub.jpg")
  }
  if (mySrc === "images/rot-grub.jpg") {
    myImage2.setAttribute("src", "images/bandit.jpg")
  }
  if (mySrc === "images/bandit.jpg") {
    myImage2.setAttribute("src", "images/ear-to-ear.jpg")
  }
  if (mySrc === "images/ear-to-ear.jpg")
    myImage2.setAttribute("src", "images/signaling-lantern.jpg")
};