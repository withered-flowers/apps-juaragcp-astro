<script>
  // Modified from
  // https://tailwindcomponents.com/component/countdown-timer
  import dayjs from "dayjs";

  import { onMount, onDestroy } from "svelte";
  import { eventTimeEnd } from "../../configs/config";
  // import {
  //   eventUrl,
  //   countdown_event_string1_start,
  //   countdown_event_string2_further1,
  //   countdown_event_string2_further2,
  //   countdown_event_string3_notif,
  //   countdown_event_string4_video_introduction1,
  //   countdown_event_string4_video_introduction2,
  //   countdown_event_string4_video_introduction3,
  //   countdown_event_string5_faq1,
  //   countdown_event_string5_faq2,
  //   countdown_event_string5_faq3,
  //   countdown_event_string6_excel1,
  //   countdown_event_string6_excel2,
  //   countdown_event_string6_excel3,
  //   countdown_event_string6_excel_url,
  //   countdown_event_string7_notif1,
  //   countdown_event_string7_notif2,
  //   countdown_event_string7_notif3,
  //   countdown_event_string8_validator1,
  //   countdown_event_string8_validator2,
  //   countdown_event_string8_validator3,
  //   countdown_event_string8_validator_url,
  //   countdown_event_string9_notif1,
  //   countdown_event_string9_notif2,
  //   countdown_event_string9_notif3,
  //   countdown_event_string10_group1,
  //   countdown_event_string10_group2,
  //   countdown_event_string10_group3,
  //   countdown_event_string10_url,
  // } from "$lib/strings/id";
  import { checkEventEnded } from "../../utils/helper";

  // import TextHeader from "$lib/components/TextHeader.svelte";
  // import TextLine from "$lib/components/TextLine.svelte";
  // import TextLineSmall from "$lib/components/TextLineSmall.svelte";

  // const stripEventUrl = eventUrl.replace(/(^\w+:|^)\/\//, "");
  const endTime = eventTimeEnd;

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

      if (checkEventEnded()) {
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

<!-- <TextHeader>
  {countdown_event_string1_start}
</TextHeader> -->

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

<!-- <TextLine>
  {countdown_event_string2_further1}
  <a href={eventUrl} class="text-[#1aa260] hover:text-[#4285f4] hover:underline"
    >{stripEventUrl}</a
  >
  {countdown_event_string2_further2}
</TextLine>

<TextLineSmall>
  ({countdown_event_string3_notif})
</TextLineSmall>

<TextLine>
  {countdown_event_string4_video_introduction1}
  <a
    href="/video-introduction"
    class="text-[#1aa260] hover:text-[#4285f4] hover:underline"
    >{countdown_event_string4_video_introduction2}</a
  >
  {countdown_event_string4_video_introduction3}
</TextLine>

<TextLine>
  {countdown_event_string5_faq1}
  <a href="/faq" class="text-[#1aa260] hover:text-[#4285f4] hover:underline">
    {countdown_event_string5_faq2}
  </a>
  {countdown_event_string5_faq3}
</TextLine>

<TextLine>
  {countdown_event_string6_excel1}
  <a
    href={countdown_event_string6_excel_url}
    class="text-[#1aa260] hover:text-[#4285f4] hover:underline"
    >{countdown_event_string6_excel2}</a
  >
  {countdown_event_string6_excel3}
</TextLine>

<TextLineSmall>
  ({countdown_event_string7_notif1}
  <span class="font-bold">{countdown_event_string7_notif2}</span
  >{countdown_event_string7_notif3})
</TextLineSmall>

<TextLine>
  {countdown_event_string8_validator1}<a
    href={countdown_event_string8_validator_url}
    class="text-[#1aa260] hover:text-[#4285f4] hover:underline"
    >{countdown_event_string8_validator2}</a
  >{countdown_event_string8_validator3}
</TextLine>

<TextLineSmall>
  ({countdown_event_string9_notif1}<span class="font-bold"
    >{countdown_event_string9_notif2}</span
  >{countdown_event_string9_notif3})
</TextLineSmall>

<TextLine>
  {countdown_event_string10_group1}<a
    href={countdown_event_string10_url}
    class="text-[#1aa260] hover:text-[#4285f4] hover:underline"
    >{countdown_event_string10_group2}</a
  >{countdown_event_string10_group3}
</TextLine> -->
