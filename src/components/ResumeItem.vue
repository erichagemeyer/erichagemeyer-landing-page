<template>
    <div :class="classes">
        <div class="resume-item__header">
            <div class="resume-item__company-info">
                <div class="resume-item__company font-weight-bold text-h6">{{ job.name }}</div>
                <div class="resume-item__dates">
                    {{ job.startDate | formatDate }} &mdash; {{ job.endDate | formatDate }}
                </div>
            </div>
            <div class="resume-item__title font-weight-bold">
                {{ job.title }}
            </div>
        </div>
        <v-btn
            @click="toggleExpanded()"
            class="resume-item__expand-button d-md-none px-0 d-print-none"
            color="primary"
            text
        >
            <v-icon left>{{ isExpanded ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            {{ isExpanded ? 'Hide' : 'Show' }} Description
        </v-btn>
        <div class="resume-item__description d-print-block">
            <nuxt-content :document="job" />
        </div>
        <v-divider class="d-md-none mt-4 d-print-none" />
    </div>
</template>

<script>
import { format } from 'date-fns';

export default {
    filters: {
        formatDate(date) {
            if (!date) {
                return 'Present';
            } else {
                return format(new Date(date.replace(/Z$/, '')), 'MMMM yyyy');
            }
        },
    },
    props: {
        job: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            isExpanded: false,
        };
    },
    computed: {
        classes() {
            return {
                'resume-item': true,
                'resume-item--expanded': this.isExpanded,
            };
        },
        endDate() {
            return this.job.endDate || 'Present';
        },
    },
    methods: {
        toggleExpanded() {
            this.isExpanded = !this.isExpanded;
        },
    },
};
</script>

<style lang="scss">
.resume-item__header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: $spacer * 2;
    @media screen {
        flex-direction: column;
    }

    @include media-breakpoint-up('sm') {
        flex-direction: row;
        .resume-item__title {
            margin-top: 0;
        }
    }
}

.resume-item__title {
    margin-top: $spacer * 2;
    @include media-breakpoint-up('sm') {
        margin-top: 0;
    }
}

.resume-item__dates {
    text-transform: uppercase;
    letter-spacing: 0.02em;
    font-size: 0.8333em;
    line-height: 1rem;
}

.resume-item__expand-button .v-btn__content {
    justify-content: space-between;
}

.resume-item {
    margin-bottom: $spacer * 8;
    @media print {
        margin-bottom: $spacer * 2;
    }
}
.resume-item__description {
    font-family: $serif-font-family;
    line-height: 1.75;
    display: none;
    margin-top: $spacer * 4;

    .resume-item--expanded & {
        display: block;
    }

    @media print {
        margin-top: $spacer;
    }

    a {
        font-weight: bold;
    }

    @include media-breakpoint-up('sm') {
        padding-left: $spacer * 10;
    }

    @include media-breakpoint-up('md') {
        display: block;
    }

    li {
        margin-bottom: $spacer * 3;

        @media print {
            margin-bottom: $spacer;
        }
    }
}
</style>
