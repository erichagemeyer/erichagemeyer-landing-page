<template>
    <div class="job-summary">
        <div class="job-summary__info">
            <div class="job-summary__company-info">
                <div class="job-summary__company font-weight-bold text-h6">{{ name }}</div>
                <div class="job-summary__dates">{{ startDate }} &mdash; {{ endDate }}</div>
            </div>
            <div class="job-summary__title font-weight-bold">
                {{ title }}
            </div>
        </div>
        <div v-html="description" class="job-summary__description"></div>
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
        };
    },
    created() {
        const markdown = require(`@/content/jobs/${this.job}.md`);
        console.log(`Loading ${this.job}`, markdown);
        this.name = markdown.attributes.name;
        this.startDate = markdown.attributes.startDate ?? '';
        this.endDate = markdown.attributes.endDate ?? 'Present';
        this.title = markdown.attributes.title ?? '';
        this.description = markdown.html ?? '';
    },
};
</script>

<style lang="scss">
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
.job-summary__description {
    @include media-breakpoint-up('sm') {
        ul {
            padding-left: $spacer * 16;
        }
    }

    li:not(:last-of-type) {
        margin-bottom: $spacer * 3;
    }

    li {
        font-family: $serif-font-family;
        line-height: 1.75;
    }
}
</style>
