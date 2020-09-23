<template>
    <div>
        <v-row>
            <v-col cols="12" md="9" class="pr-lg-8">
                <resume-section :jobs="jobs" title="Professional Experience" />
                <resume-section :jobs="projects" title="Personal Projects" />
            </v-col>

            <v-col cols="12" md="3">
                <section-title>Technical Skills</section-title>
                <skills-list />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import SkillsList from '@/components/SkillsList';
import SectionTitle from '@/components/SectionTitle';
import ResumeSection from '@/components/ResumeSection';

export default {
    components: {
        SkillsList,
        SectionTitle,
        ResumeSection,
    },
    async asyncData({ $content }) {
        const allJobs = await $content('jobs')
            .sortBy('startDate', 'desc')
            .sortBy('endDate', 'desc')
            .fetch();

        const jobs = allJobs.filter((job) => !job.personal);
        const projects = allJobs.filter((job) => job.personal);

        return {
            jobs,
            projects,
        };
    },
};
</script>

<style lang="scss"></style>
