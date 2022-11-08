<script>
  // Modified from
  // https://tailwindcomponents.com/component/countdown-timer
  import dayjs from "dayjs";

  import { onMount, onDestroy } from "svelte";
  import { eventTimeStart } from "../../configs/config";

  import { checkEventStarted } from "../../utils/helper";

  // const stripEventUrl = eventUrl.replace(/(^\w+:|^)\/\//, "");
  const endTime = eventTimeStart;

  let timer = null;
  let now = dayjs().valueOf();
  let end = dayjs(endTime).valueOf();

  export let dayVal = "hari";
  export let hourVal = "jam";
  export let minuteVal = "menit";
  export let secondVal = "detik";

  onMount(() => {
    timer = setInterval(() => {
      now = dayjs().valueOf();

      if (checkEventStarted()) {
        goto("/", { replaceState: true });
        clearInterval(timer);
      }
    }, 1000);
  });

  onDestroy(() => {
    clearInterval(timer);
  });

  $: count = Math.round((end - now) / 1000);
  $: d = Math.floor(count / (3600 * 24));
  $: h = Math.floor(count / 3600) % 24;
  $: m = Math.floor(count / 60) % 60;
  $: s = count % 60;
</script>

<div class="text-6xl text-center flex w-full items-center justify-center">
  <div class="w-24 mx-1 p-2 bg-white text-[#fbbc05] rounded-lg">
    <div class="font-mono leading-none" x-text="days">{d}</div>
    <div class="font-mono uppercase text-sm leading-none">{dayVal}</div>
  </div>
  <div class="w-24 mx-1 p-2 bg-white text-[#fbbc05] rounded-lg">
    <div class="font-mono leading-none" x-text="hours">{h}</div>
    <div class="font-mono uppercase text-sm leading-none">{hourVal}</div>
  </div>
  <div class="w-24 mx-1 p-2 bg-white text-[#fbbc05] rounded-lg">
    <div class="font-mono leading-none" x-text="minutes">{m}</div>
    <div class="font-mono uppercase text-sm leading-none">{minuteVal}</div>
  </div>
  <div class="text-2xl mx-1 font-extralight text-slate-500">dan</div>
  <div class="w-24 mx-1 p-2 bg-white text-[#fbbc05] rounded-lg">
    <div class="font-mono leading-none" x-text="seconds">{s}</div>
    <div class="font-mono uppercase text-sm leading-none">{secondVal}</div>
  </div>
</div>
