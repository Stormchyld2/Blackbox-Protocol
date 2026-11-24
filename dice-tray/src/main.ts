import "./app.css";
import "./styles/standalone.css";
import App from "./App.svelte";
import { mount } from "svelte";

mount(App, { target: document.getElementById("app")! });
