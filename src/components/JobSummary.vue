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

<style lang="scss">
// .job-summary {
//     font-family: $serif-font-family;
// }

.job-summary__info {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-direction: column;
    margin-bottom: $spacer * 3;

    @include media-breakpoint-up('sm') {
        flex-direction: row;
        .job-summary__title {
            margin-top: 0;
        }
    }
}

.job-summary__title {
    margin-top: $spacer * 2;
    @include media-breakpoint-up('sm') {
        margin-top: 0;
    }
}

.job-summary__dates {
    text-transform: uppercase;
    letter-spacing: 0.02em;
    font-size: 0.8333em;
}

.job-summary {
    margin-bottom: $spacer * 8;
}
</style>
