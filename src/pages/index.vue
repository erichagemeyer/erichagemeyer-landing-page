<template>
    <div>
        <v-row>
            <v-col cols="12" md="9" class="pr-lg-8">
                <section-title>
                    Professional Experience
                </section-title>
                <resume-item v-for="job in jobs" :key="`job-${job.path}`" :job="job" />

                <section-title>
                    Personal Projects
                </section-title>
                <resume-item
                    v-for="project in projects"
                    :key="`project-${project.path}`"
                    :job="project"
                />
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
import ResumeItem from '@/components/ResumeItem';
import { orderBy } from 'lodash';

export default {
    components: {
        SkillsList,
        SectionTitle,
        ResumeItem,
    },
    async asyncData({ $content }) {
        const allJobs = orderBy(
            await $content('jobs').fetch(),
            ['endDate', 'startDate'],
            ['desc', 'desc'],
        );

        const jobs = allJobs.filter((job) => !job.personal);
        const projects = allJobs.filter((job) => job.personal);

        return {
            jobs,
            projects,
        };
    },
    created() {
        console.log(this);
    },
};
</script>

<style lang="scss"></style>
