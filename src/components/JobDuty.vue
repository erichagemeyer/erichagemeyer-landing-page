<template>
    <li class="job-duty__item">
        <slot />
    </li>
</template>

<script>
export default {};
</script>

<style lang="scss">
.job-duty__item:not(:last-of-type) {
    margin-bottom: $spacer * 3;
}

.job-duty__item {
    font-family: $serif-font-family;
    line-height: 1.75;
}
</style>
