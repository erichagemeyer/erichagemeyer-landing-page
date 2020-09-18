<template>
    <div :class="classes">
        <div class="resume-item__header">
            <div class="resume-item__company-info">
                <div class="resume-item__company font-weight-bold text-h6">{{ name }}</div>
                <div class="resume-item__dates">{{ startDate }} &mdash; {{ endDate }}</div>
            </div>
            <div class="resume-item__title font-weight-bold">
                {{ title }}
            </div>
        </div>
        <v-btn
            @click="toggleExpanded()"
            class="resume-item__expand-button d-md-none"
            color="primary"
            text
            rounded
            block
        >
            {{ isExpanded ? 'Hide' : 'Show' }} Description
            <v-icon right>{{ isExpanded ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
        <div v-html="description" class="resume-item__description"></div>
    </div>
</template>

<script>
export default {
    props: {
        job: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            name: '',
            startDate: '',
            endDate: '',
            title: '',
            description: '',
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
    },
    created() {
        const markdown = require(`@/content/jobs/${this.job}.md`);
        this.name = markdown.attributes.name;
        this.startDate = markdown.attributes.startDate ?? '';
        this.endDate = markdown.attributes.endDate ?? 'Present';
        this.title = markdown.attributes.title ?? '';
        this.description = markdown.html ?? '';
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
    flex-direction: column;
    margin-bottom: $spacer * 2;

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
}
.resume-item__description {
    font-family: $serif-font-family;
    line-height: 1.75;
    display: none;
    margin-top: $spacer * 4;

    .resume-item--expanded & {
        display: block;
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
    }
}
</style>
