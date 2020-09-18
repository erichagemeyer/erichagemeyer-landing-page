<template>
    <div class="skills-list">
        <skills-card
            v-for="skill in skills"
            :key="skill.type"
            :skills="skill.list"
            :type="skill.type"
            class="mb-6"
        />
    </div>
</template>

<script>
import { languages, services, frameworks } from '@/content/skills.yml';
import SkillsCard from '@/components/SkillsCard';

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
    },
    data() {
        return {
            skills,
        };
    },
};
</script>
