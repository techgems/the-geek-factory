<script lang="ts">
  import type { ImageMetadata } from 'astro';
  import type { PokemonTcgImage } from '../svelteState/PokemonTcg.svelte';

  import { wishlistState } from '../svelteState/PokemonTcg.svelte';

  interface Props {
    imageList: Record<string, { default: ImageMetadata }>;
    assetList: PokemonTcgImage[];
    isVStar: boolean;
  }

  let { imageList, assetList, isVStar = false }: Props = $props();

  const onImageClick = (token: PokemonTcgImage) => {
    const imageIndex = wishlistState.findIndex((item) => item.image === token.image);

    if(imageIndex === -1) {
      wishlistState.push(token);
      return;
    }

    wishlistState.splice(imageIndex, 1);    
  };

</script>

<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
  {#each assetList as asset}
    {@const imageToken = { name: asset.name, image: imageList[asset.image].default.src }}
    {@const isSelected = wishlistState.some((item) => item.image === imageToken.image)}
    <button class="relative" onclick={() => onImageClick(imageToken)}>
      <img 
        src={imageList[asset.image].default.src} 
        height={imageList[asset.image].default.height}
        width={imageList[asset.image].default.width}
        alt={asset.name} 
        class={`h-auto max-w-full rounded-lg object-cover`}
      />
      <div class={`${!isSelected && 'hidden'} absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center ${!isVStar ? 'rounded-full' : 'mask-vstar'}`}>
        <p>
          <img src="/checkmark.svg" alt="Selected" class="h-32 md:h-24"  />
        </p>
      </div>
    </button>
  {/each}
</div>

<style>
  .mask-vstar {
    mask-image: url('/vstar-mask.png');
    -webkit-mask-image: url('/vstar-mask.png');
    mask-size: cover;
    -webkit-mask-size: cover;
  }
</style>