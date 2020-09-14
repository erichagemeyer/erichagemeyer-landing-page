<template>
    <ul class="job-duty__list">
        <slot />
    </ul>
</template>

<script>
export default {};
</script>

<style lang="scss">
@include media-breakpoint-up('md') {
    ul.job-duty__list {
        padding-left: $spacer * 16;
    }
}
</style>
