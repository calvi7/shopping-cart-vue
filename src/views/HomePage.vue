<template>
    <section class="pt-20 lg:pt-[30px] pb-10 lg:pb-20 bg-[#F3F4F6]" v-show="post">
        <div class="container mx-auto">
            <div class="flex flex-wrap -mx-4">
                <CartItem v-for="item in post" :key="item.id" :product="item" />
            </div>
        </div>
    </section>
</template>

<script>
import CartItem from "../components/CartItem.vue";

export default {
    components: {
        CartItem
    },

    data() {
        return {
            post: null
        }
    },

    created() {
        this.fetchData();
    },

    watch: {
        $route: "fetchData",
    },

    methods: {
        loadItem() {
            console.log("AAA");
        },

        async fetchData() {
            this.loading = true;
            const response = await fetch("https://fakestoreapi.com/products")
                .then((res) => res.json())
            this.post = response;
        },
    },
}
</script>