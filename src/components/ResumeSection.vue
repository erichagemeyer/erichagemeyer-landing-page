<template>
    <div class="resume-section">
        <section-title>{{ title }}</section-title>
        <resume-item v-for="job in jobs" :key="`job-${job.path}`" :job="job" />
    </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';
import ResumeItem from './ResumeItem';

export default {
    components: {
        SectionTitle,
        ResumeItem,
    },
    props: {
        jobs: {
            type: Array,
            default: () => [],
        },
        title: {
            type: String,
            default: '',
        },
    },
};
</script>
