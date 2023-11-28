<template>
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="input form-control"
        :disabled="prop.disabled"
        :style="prop.style"
    />
</template>

<script setup>
let prop = defineProps({
    style: String,
    modelValue: Object,
    disabled: Boolean
});
defineEmits(["update:modelValue"]);
</script>
<script>
export default {
    name: "tabler-input"
};
</script>
<style scoped>
/*  */
</style>
