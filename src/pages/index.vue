<template>
    <div>
        <v-row>
            <v-col cols="12" md="9" class="pr-lg-8">
                <section-title>
                    Professional Experience
                </section-title>
                <resume-item job="cincinnati-incorporated" />
                <resume-item job="new-valence-robotics" />

                <section-title>
                    Personal Projects
                </section-title>
                <resume-item job="worldly" />
                <resume-item job="freelance-web" />
            </v-col>

            <v-col cols="12" md="3">
                <section-title>Technical Skills</section-title>
                <div v-for="skill in skills" :key="skill.type" class="mb-6">
                    <skills-card :skills="skill.list" :type="skill.type" />
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { languages, services, frameworks } from '@/content/skills.yml';
import SkillsCard from '@/components/SkillsCard';
import SectionTitle from '@/components/SectionTitle';
import ResumeItem from '@/components/ResumeItem';

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
        ResumeItem,
    },
    data() {
        return {
            skills,
        };
    },
};
</script>

<style lang="scss"></style>
