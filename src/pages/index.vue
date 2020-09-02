<template>
    <v-container>
        <h1 class="text-h3 my-6">Professional Experience</h1>
        <job-summary
            title="Software Developer"
            company="Cincinnati Incorporated"
            location="Boston, MA"
            start-date="December 2017"
        >
            <ul>
                <li>
                    As the sole software developer for the CI Boston business unit, I worked with
                    our General Manager to plan software projects for 2018, 2019, and 2020. All
                    major projects were executed on schedule.
                </li>
            </ul>
        </job-summary>
    </v-container>
</template>

<script>
import JobSummary from '@/components/JobSummary.vue';

export default {
    components: {
        JobSummary,
    },
};
</script>

<style lang="scss"></style>
