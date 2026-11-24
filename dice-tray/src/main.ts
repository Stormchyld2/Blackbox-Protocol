import "./app.css";
import "./styles/mobile.css";
import App from "./App.svelte";
import { mount } from "svelte";

mount(App, { target: document.getElementById("app")! });
