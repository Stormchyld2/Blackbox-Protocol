<script lang="ts">
  /**
   * Blackbox Protocol Dice Tray: the Catalyst dice tray on its own.
   *
   * In Catalyst the tray floats over a workspace. Here the window is the
   * workspace: the tray opens at launch, and if it is closed a launcher brings
   * it back, so the window is never left empty.
   */
  import { Dices } from "lucide-svelte";
  import { onMount } from "svelte";
  import DiceTray from "./lib/dice/components/DiceTray.svelte";
  import { diceTray } from "./lib/dice";

  onMount(() => {
    diceTray.open();
  });
</script>

<main class="app-backdrop" aria-label="Blackbox Protocol Dice Tray">
  {#if !diceTray.isOpen}
    <div class="app-launcher">
      <h1 class="app-launcher__title">Blackbox Protocol Dice Tray</h1>
      <button type="button" class="app-launcher__open" data-testid="open-dice-tray" onclick={() => diceTray.open()}>
        <Dices size={22} aria-hidden="true" />
        <span>Open dice tray</span>
      </button>
    </div>
  {/if}
</main>

{#if diceTray.isOpen}
  <DiceTray />
{/if}

<style>
  .app-backdrop {
    position: fixed;
    inset: 0;
    display: grid;
    place-items: center;
    background: var(--cat-bg, #111214);
    color: var(--cat-text, #f0f1f3);
  }

  .app-launcher {
    display: grid;
    justify-items: center;
    gap: 16px;
    padding: 16px;
    text-align: center;
  }

  .app-launcher__title {
    font-family: var(--font-ui);
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--cat-silver, #bcc2cc);
  }

  .app-launcher__open {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 44px;
    padding: 0 20px;
    border: 1px solid var(--cat-accent, #6ea9cf);
    border-radius: 8px;
    background: var(--cat-accent, #6ea9cf);
    color: var(--cat-on-accent, #111214);
    font-weight: 600;
    cursor: pointer;
  }

  .app-launcher__open:hover {
    background: var(--cat-accent-hover, #8cc0e1);
  }
</style>
