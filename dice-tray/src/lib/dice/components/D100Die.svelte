<script lang="ts">
  /**
   * Blackbox Protocol: one 100-sided die. Dice Box has no single d100 (it
   * throws a tens die and a ones die), so a lone d100 roll is drawn here: one
   * round, faceted die that tumbles onto the mat, its face flickering, and
   * lands showing the rolled value. The value itself comes from the tray's
   * unbiased random source; this component only presents it.
   */
  import { onDestroy } from "svelte";
  import { D100_ROLL_MS, DICE_COLORS, DICE_SIZES, ROLL_SPEEDS, diceTray } from "../stores/diceTray.svelte";

  let { roll }: { roll: { id: number; value: number; settled: boolean } } = $props();

  const color = $derived(DICE_COLORS[diceTray.settings.diceColor].value);
  const size = $derived(DICE_SIZES[diceTray.settings.diceSize] * 12);
  const duration = $derived(Math.round(D100_ROLL_MS / ROLL_SPEEDS[diceTray.settings.speed]));
  const ink = $derived(luminance(color) > 0.55 ? "#1b1b1d" : "#f4f2ec");

  // Face shown while tumbling: a new random number every few frames.
  let flicker = $state(1);
  let timer: ReturnType<typeof setInterval> | null = null;
  $effect(() => {
    if (timer) clearInterval(timer);
    timer = null;
    if (!roll.settled) {
      timer = setInterval(() => (flicker = 1 + Math.floor(Math.random() * 100)), 70);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  });
  onDestroy(() => timer && clearInterval(timer));

  const face = $derived(roll.settled ? roll.value : flicker);

  function luminance(hex: string): number {
    const n = parseInt(hex.slice(1), 16);
    const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  }
</script>

{#key roll.id}
  <div
    class="d100-die"
    class:d100-die--settled={roll.settled}
    style:--d100-size="{size}px"
    style:--d100-duration="{duration}ms"
    data-testid="d100-die"
    data-settled={roll.settled}
    aria-hidden="true"
  >
    <div class="d100-die__body">
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <defs>
          <radialGradient id="d100-shade-{roll.id}" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stop-color="#fff" stop-opacity="0.45" />
            <stop offset="45%" stop-color="#fff" stop-opacity="0" />
            <stop offset="100%" stop-color="#000" stop-opacity="0.45" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="48" fill={color} />
        <!-- Facets: the many small faces of a 100-sided die. -->
        <g fill="none" stroke={ink} stroke-opacity="0.18" stroke-width="0.8">
          <ellipse cx="50" cy="50" rx="48" ry="16" />
          <ellipse cx="50" cy="50" rx="48" ry="34" />
          <ellipse cx="50" cy="50" rx="16" ry="48" />
          <ellipse cx="50" cy="50" rx="34" ry="48" />
        </g>
        <circle cx="50" cy="50" r="48" fill="url(#d100-shade-{roll.id})" />
        <circle cx="50" cy="50" r="23" fill="#000" fill-opacity="0.12" />
        <text
          x="50"
          y="51"
          text-anchor="middle"
          dominant-baseline="middle"
          fill={ink}
          font-size={face === 100 ? 22 : 28}
          font-weight="800">{face}</text
        >
      </svg>
    </div>
  </div>
{/key}

<style>
  .d100-die {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    width: var(--d100-size);
    height: var(--d100-size);
    margin: calc(var(--d100-size) / -2) 0 0 calc(var(--d100-size) / -2);
    pointer-events: none;
    animation: d100-travel var(--d100-duration) cubic-bezier(0.2, 0.7, 0.3, 1) both;
  }
  .d100-die__body {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.55);
    animation: d100-tumble var(--d100-duration) cubic-bezier(0.15, 0.6, 0.3, 1) both;
    font-family: var(--font-ui, system-ui, sans-serif);
  }
  .d100-die--settled .d100-die__body {
    animation: none;
  }
  .d100-die--settled {
    animation: none;
  }

  /* Thrown in from the right, two bounces, then comes to rest on the mat. */
  @keyframes d100-travel {
    0% {
      transform: translate(260%, -140%) scale(1.15);
    }
    35% {
      transform: translate(90%, 30%) scale(1);
    }
    55% {
      transform: translate(-40%, -35%) scale(1.04);
    }
    75% {
      transform: translate(-10%, 12%) scale(1);
    }
    90% {
      transform: translate(4%, -3%);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  @keyframes d100-tumble {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-1080deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .d100-die,
    .d100-die__body {
      animation-duration: 1ms;
    }
  }
</style>
