<script lang="ts">
  import type { ImageMetadata } from 'astro';
  const images = import.meta.glob<{ default: ImageMetadata }>(`/src/assets/pokemon-tcg/Supporter/*.png`, { eager: true });

  const supporterUsedList = [
    {
        name: 'Acerola',
        image: '/src/assets/pokemon-tcg/Supporter/Supporter Used - Acerola.png'
    }
];

</script>

<!-- ...existing code... -->

{#each supporterUsedList as { name, image }, path}
  <img src={images[image].default.src} alt={name} />
{/each}

<!-- ...existing code... -->