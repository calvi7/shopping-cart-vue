<template>
    <!-- ====== Cards Section Start -->
    <div class="w-full md:w-1/2 xl:w-1/3 px-4 card-contain">
        <div class="bg-white rounded-lg overflow-hidden mb-10">
            <img :src="product.image" alt="image" class="w-full opacity-hover" />
            <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <h3 style="user-select: none;">
                    <a
                        class="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary"
                    >{{ product.title }}</a>
                </h3>
                <p class="text-base text-body-color leading-relaxed mb-7">${{ product.price }}</p>
                <a
                    href="javascript:void(0)"
                    @click="cartStore.addProduct(product)"
                    class="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white transition"
                >Add to Cart</a>
            </div>
        </div>
    </div>
    <!-- ====== Cards Section End -->
</template>

<script>
import { useCartStore } from "../stores/cartProducts"

export default {
    setup() {
        const cartStore = useCartStore()
        return { cartStore }
    },
    props: {
        product: Object
    }
}
</script>


<style scoped>
img {
    height: 40rem;
    max-width: 100%;
}

.card-contain {
    max-height: 1000px;
}

.opacity-hover:hover {
    opacity: 75%;
}
</style>