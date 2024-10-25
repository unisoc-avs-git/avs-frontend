import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { e as eventStore } from "../../../chunks/events.js";
import { B as Background } from "../../../chunks/background.js";
import { N as Navbar } from "../../../chunks/navbar.js";
import { E as Event_form } from "../../../chunks/event_form.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_eventStore;
  $$unsubscribe_eventStore = subscribe(eventStore, (value) => value);
  $$unsubscribe_eventStore();
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="relative min-h-screen bg-white">${validate_component(Background, "Background").$$render($$result, {}, {}, {})} <div class="relative z-10 pt-16">${validate_component(Event_form, "EventForm").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
