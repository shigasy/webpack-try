import { returnHello } from "./myutil";
import pic from './images/test.png'
import "./style.css";
import "./font.css"

const say = (value) => console.log(value);

say(returnHello());
window.onload = () => {
  const body = document.getElementsByTagName("body")[0];
  say(body);
  body.classList.add("sky");
  const img = new Image()
  img.src = pic
  document.body.appendChild(img)
};
if (process.env.NODE_ENV === "development") console.log("developだよ");
process.env.NODE_ENV === "production" ? say("production") : say("development")