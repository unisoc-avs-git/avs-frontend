import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import { p as page } from "../../../../chunks/stores.js";
import { e as eventStore } from "../../../../chunks/events.js";
import { B as Background } from "../../../../chunks/background.js";
import { N as Navbar } from "../../../../chunks/navbar.js";
import { E as Event_form } from "../../../../chunks/event_form.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let eventId;
  let currentEvent;
  let $eventStore, $$unsubscribe_eventStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_eventStore = subscribe(eventStore, (value) => $eventStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  eventId = $page.params.id;
  currentEvent = $eventStore.find((event) => event.metadata.createdAt === eventId);
  $$unsubscribe_eventStore();
  $$unsubscribe_page();
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="relative min-h-screen bg-white">${validate_component(Background, "Background").$$render($$result, {}, {}, {})} <div class="relative z-10 pt-16">${currentEvent ? `${validate_component(Event_form, "EventForm").$$render(
    $$result,
    {
      isEditMode: true,
      initialData: currentEvent
    },
    {},
    {}
  )}` : `<div class="text-center py-8" data-svelte-h="svelte-amjcn9"><p>イベントが見つかりません</p></div>`}</div></div>`;
});
export {
  Page as default
};
