<template>
    <div class="job-summary">
        <div class="job-summary__info">
            <div class="job-summary__company-info">
                <div class="job-summary__company font-weight-bold text-h6">{{ company }}</div>
                <div class="job-summary__dates">{{ startDate }} &mdash; {{ endDate }}</div>
            </div>
            <div class="job-summary__title font-weight-bold">
                {{ title }}
            </div>
        </div>
        <div class="job-summary__responsibilities">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        company: {
            type: String,
            default: '',
        },
        location: {
            type: String,
            default: '',
        },
        startDate: {
            type: String,
            default: '',
        },
        endDate: {
            type: String,
            default: 'Present',
        },
    },
};
</script>

<style lang="scss"></style>
