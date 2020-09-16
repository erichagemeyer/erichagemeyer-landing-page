<template>
    <div>
        <v-row class="flex-row-reverse">
            <v-col cols="12" lg="3">
                <section-title>Technical Skills</section-title>
                <div v-for="skill in skills" :key="skill.type" class="mb-6">
                    <skills-card :skills="skill.list" :type="skill.type" />
                </div>
            </v-col>

            <v-col cols="12" lg="9" class="pr-lg-8">
                <section-title>
                    Professional Experience
                </section-title>
                <job-list />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { languages, services, frameworks } from '@/content/skills';
import SkillsCard from '@/components/SkillsCard';
import SectionTitle from '@/components/SectionTitle';

import JobList from '@/jobs/JobList';

const skills = [
    {
        type: 'Programming and Markup Languages',
        list: languages,
    },
    {
        type: 'Frameworks and Libraries',
        list: frameworks,
    },
    {
        type: 'Software and Services',
        list: services,
    },
];

export default {
    components: {
        SkillsCard,
        SectionTitle,
        JobList,
    },
    data() {
        return {
            skills,
        };
    },
};
</script>

<style lang="scss"></style>
