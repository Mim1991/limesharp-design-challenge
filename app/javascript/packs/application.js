import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "channels";

Rails.start();
Turbolinks.start();
ActiveStorage.start();

// External imports
import "bootstrap";

// Internal imports
import { initExpansion } from "../components/modal.js";

document.addEventListener("turbolinks:load", () => {
  initExpansion();
});
