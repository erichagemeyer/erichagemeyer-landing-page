<template>
    <div>
        <h3 class="text-subtitle-1 mb-2">{{ type }}</h3>
        <div class="v-chip-group">
            <v-chip
                v-for="skill in skills"
                :key="`skill-${skill}`"
                :value="true"
                class="skill-chip"
            >
                {{ skill }}
            </v-chip>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        skills: {
            type: Array,
            required: true,
        },
        type: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="scss">
$skill-chip-gap: $spacer;
$skill-chip-margin: $skill-chip-gap / 2;

.skill-chip {
    margin: $skill-chip-margin $skill-chip-gap $skill-chip-margin 0;
    font-family: $heading-font-family;

    &.v-chip.v-size--default {
        @media print {
            font-size: 10px;
            height: auto;
            margin: 0;
            background: gray;
        }
    }
}
</style>
