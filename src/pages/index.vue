<template>
    <v-container>
        <section-title>Technical Skills</section-title>
        <v-row>
            <v-col cols="12">
                <skills-card :skills="languages" type="Programming and Markup Languages" />
            </v-col>

            <v-col cols="12">
                <skills-card :skills="frameworks" type="Frameworks and Libraries" />
            </v-col>

            <v-col cols="12">
                <skills-card :skills="services" type="Software and Services" />
            </v-col>
        </v-row>
        <section-title>
            Professional Experience
        </section-title>
        <!-- eslint-disable-next-line vue/require-component-is -->
        <component v-for="(job, i) in jobs" :key="`job-${i}`" v-bind:is="job" />
    </v-container>
</template>

<script>
import ci from '@/jobs/ci';
import nvbots from '@/jobs/nvbots';
import { languages, services, frameworks } from '@/content/skills';
import SkillsCard from '@/components/SkillsCard';
import SectionTitle from '@/components/SectionTitle';

const jobs = {
    ci,
    nvbots,
};

export default {
    components: {
        SkillsCard,
        SectionTitle,
    },
    data() {
        return {
            jobs,
            languages,
            services,
            frameworks,
        };
    },
};
</script>

<style lang="scss"></style>
