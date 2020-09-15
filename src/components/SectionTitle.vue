<template>
    <h1 class="section-title primary--text">
        <slot />
    </h1>
</template>

<script>
export default {};
</script>

<style lang="scss">
.section-title {
    font-family: $heading-font-family;
    font-size: map-deep-get($headings, 'h6', 'size');
    margin-bottom: $spacer * 2;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    color: map-deep-get($colors, 'grey', 'base');
}

.section-title:not(:first-child) {
    margin-top: $spacer * 6;
}
</style>
