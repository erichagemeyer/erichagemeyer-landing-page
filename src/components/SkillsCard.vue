<template>
    <v-card outlined>
        <v-card-title>{{ type }}</v-card-title>
        <v-card-text>
            <div class="v-chip-group">
                <v-chip v-for="skill in skills" :key="`skill-${skill}`" class="skill-chip">
                    {{ skill }}
                </v-chip>
            </div>
        </v-card-text>
    </v-card>
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
}
</style>
