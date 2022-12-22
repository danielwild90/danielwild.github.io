const myImage = document.querySelector("img.haunted-mansion");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/gos-haunted-mansion.jpg") {
    myImage.setAttribute("src", "images/giant-weasles.jpg");
  } else {
    myImage.setAttribute("src", "images/giant-snakes.jpg")
  }
  if (mySrc === "images/giant-snakes.jpg") {
    myImage.setAttribute("src", "images/snake-handler.jpg")
  }
  if (mySrc === "images/snake-handler.jpg") {
    myImage.setAttribute("src", "images/gos-haunted-mansion.jpg")
  }
  }