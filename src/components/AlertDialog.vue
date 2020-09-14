<template>
    <v-dialog :value="value" @input="$emit('input', $event)" :width="width">
        <v-card>
            <v-card-text class="pa-8 text-center">
                <v-avatar :size="64" :color="color" class="mb-3">
                    <v-icon x-large>{{ icon }}</v-icon>
                </v-avatar>
                <h3 class="headline mb-3">{{ title }}</h3>
                <p class="subtitle-1 mb-0">
                    <slot></slot>
                </p>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="close()" text>Okay</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: '',
        },
        value: {
            type: Boolean,
            required: true,
        },
        width: {
            type: Number,
            default: 400,
        },
    },
    methods: {
        close() {
            this.$emit('input', false);
        },
    },
};
</script>
