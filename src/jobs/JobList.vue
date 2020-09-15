<template>
    <div class="resume">
        <!-- eslint-disable-next-line vue/require-component-is -->
        <component v-for="(job, i) in jobs" :key="`job-${i}`" v-bind:is="job" />
    </div>
</template>

<script>
import ci from '@/jobs/ci';
import nvbots from '@/jobs/nvbots';

export default {
    data() {
        return {
            jobs: {
                ci,
                nvbots,
            },
        };
    },
};
</script>
