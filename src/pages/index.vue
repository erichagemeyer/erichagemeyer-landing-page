<template>
    <v-container>
        <h1 class="text-h3 my-6">Professional Experience</h1>
        <!-- eslint-disable-next-line vue/require-component-is -->
        <component v-for="(job, i) in jobs" :key="`job-${i}`" v-bind:is="job" />
    </v-container>
</template>

<script>
import ci from '@/jobs/ci';
import nvbots from '@/jobs/nvbots';

const jobs = {
    ci,
    nvbots,
};

export default {
    data() {
        return {
            jobs,
        };
    },
};
</script>

<style lang="scss"></style>
