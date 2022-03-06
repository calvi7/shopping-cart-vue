<template>
    <NavBar></NavBar>
    <router-view />
</template>

<script>
import NavBar from "./components/NavBar.vue"

export default {
    data() {
        return {
            value: 'Juan'
        }
    },
    components: { NavBar },
    methods: {
        changeName() {
            this.value = 'Chorizo'
        }
    }
}
</script>