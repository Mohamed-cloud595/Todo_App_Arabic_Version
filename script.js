import {
  AppElement,
  darkThemeToggleElement,
  getCheckboxElements,
  getDeleteIcons,
  inputElement,
  TaskListElement,
  TaskListLink,
  TaskSearchBarButton,
} from "./scripts/elements";
import { initlisteners, initTaskListeners } from "./scripts/eventListeners";
import { initDataOnStartup } from "./scripts/utils";

initDataOnStartup();
initlisteners();
