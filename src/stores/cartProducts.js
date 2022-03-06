import { defineStore } from "pinia";

export const useCartStore = defineStore('cartProducts', {
    state: () => {
        return {
            items: [],
        }
    },
    actions: {
        addProduct(x) {
            if (this.items.includes(x)) {
                for (var i = 0; i < this.items.length; i++) {
                    if (this.items[i].id == x.id) {
                        this.items[i].count++;
                    }
                }
            }
            else {
                x.count = 1
                this.items.push(x)
            }
            this.clearEmpty()
        },
        clear() {
            this.items = []
        },
        removeLast(x) {
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].id == x.id && this.items[i].count > 0) {
                    this.items[i].count--;
                }
            }
            this.clearEmpty()
        },
        clearEmpty() {
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].count == 0) {
                    this.items.splice(i, 1)
                }
            }
        }
    }
})

/* 
cartStore.items = {
    1: [{}]
}
*/