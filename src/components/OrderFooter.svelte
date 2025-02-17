<script lang="ts">
    import { wishlistState } from '../svelteState/PokemonTcg.svelte';

    const wishlistStateLength = $derived(wishlistState.length);

    const constructImageLink = (image: string) => {
        return `${window.location.origin}${image}`;
    }

    const constructWhatsappMessage = () => {
        let message = "Hola, me gustaria hacer una orden de productos de TCG. Los productos que me interesan son: \n\n";
        wishlistState.forEach((item, index) => {
            message += `${index + 1}. ${constructImageLink(item.image)}\n\n`;
        });

        return message;
    }

    const sendToWhatsapp = () => {
        const message = constructWhatsappMessage();
        const url = `https://wa.me/50660115102?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }
</script>


<footer class={`bg-black text-white p-4 sticky bottom-0 w-full flex justify-between`}>
    <div class="bg-red-600 px-3 rounded-lg text-white flex font-semibold">
        <span class="my-auto">
            Diseños Seleccionados: <i>{wishlistStateLength}</i>
        </span>
    </div>
    <button onclick={() => sendToWhatsapp()} class="bg-red-600 p-3 rounded-lg text-white hover:bg-red-700">
        <span class="my-auto font-semibold">Iniciar Pedido</span>
        <img class="mt-2 h-8 mx-auto" src="/whatsapp.svg" alt="Order Now">
    </button>
</footer>