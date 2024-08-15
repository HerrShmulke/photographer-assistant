import { createApp } from 'vue';
import './css/global.css';
import './css/animations.css';
import App from './App.vue';

if ("serviceWorker" in navigator) {
  self.addEventListener("load", async () => {
    const container = navigator.serviceWorker;
    if (container.controller === null) {
      await container.register("sw.js");
    }
  });
}

createApp(App).mount('#app');

