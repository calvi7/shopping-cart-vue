<template>
    <button :class="className">
        <router-link to="/">{{ msg }}</router-link>
    </button>
</template>

<script>
export default {
    props: {
        msg: String,
        className: String
    }
}
</script>