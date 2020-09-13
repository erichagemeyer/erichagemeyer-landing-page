<template>
    <div class="job-summary">
        <div class="job-summary__info d-flex justify-space-between mb-3">
            <div class="job-summary__company-info">
                <div class="job-summary__title font-weight-bold">{{ title }}</div>
                <div class="job-summary__company">
                    {{ company }}, <span class="font-italic">{{ location }}</span>
                </div>
            </div>
            <div class="job-summary__dates font-weight-bold">
                {{ startDate }} &mdash; {{ endDate }}
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

<style lang="scss">
@import '~@/assets/variables.scss';

.job-summary:not(:last-of-type) {
    margin-bottom: $spacer * 8;
}
</style>
