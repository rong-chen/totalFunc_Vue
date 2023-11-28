<template>
    <button class="btn" :class="'btn-' + prop.type" :style="prop.style">
        <slot></slot>
    </button>
</template>
<script setup>
//
import { ref, onMounted } from "vue";

// btn-secondary btn-success btn-warning

let prop = defineProps({
    type: String,
    style: String
});
</script>
<script>
export default {
    name: "tabler-button"
};
</script>
