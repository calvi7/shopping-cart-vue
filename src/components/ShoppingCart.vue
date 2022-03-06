<template>
    <div>
        <router-link to="/cart">
            <button :class="className">🛒 Cart [{{ cartCount }}]</button>
        </router-link>
    </div>
</template>

<script>
import { useCartStore } from "../stores/cartProducts"

export default {
    props: {
        className: String
    },
    setup() {
        const cartStore = useCartStore()
        return { cartStore }
    },
    data() {
        return {
            count: 0,
        }
    },

    computed: {
        cartCount() {
            var sum = 0;
            for (var el in this.cartStore.items) {
                sum += parseInt(this.cartStore.items[el].count)
            }
            return sum
        }
    },
}
</script>