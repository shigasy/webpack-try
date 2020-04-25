import { returnHello } from "./myutil";
import "./style.css";
import "./font.css"

const say = (value) => console.log(value);

say(returnHello());
say("webpack");
window.onload = () => {
  const body = document.getElementsByTagName("body")[0];
  say(body);
  body.classList.add("sky");
};
if (process.env.NODE_ENV === "development") console.log("developだよ");
