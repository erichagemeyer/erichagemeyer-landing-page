<template>
    <v-container>
        <v-container class="text-center py-16">
            <v-icon v-if="errorIcon" class="error-icon mb-6 grey--text text--lighten-1">{{
                errorIcon
            }}</v-icon>
            <h1 class="text-h3 mb-4">
                {{ errorTitle }}
            </h1>
            <h3 class="text-h6 mb-12">{{ errorDescription }}</h3>
            <v-btn color="primary" to="/">Home Page</v-btn>
        </v-container>
    </v-container>
</template>

<script>
export default {
    props: {
        error: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        errorIcon() {
            switch (this.error.statusCode) {
                case 404:
                    return 'mdi-feature-search';
                default:
                    return '';
            }
        },
        errorTitle() {
            switch (this.error.statusCode) {
                case 404:
                    return `404: Page Not Found`;
                default:
                    return `Oops`;
            }
        },
        errorDescription() {
            switch (this.error.statusCode) {
                case 404:
                    return `The page you were looking for appears to have been moved deleted or does not exist.`;
                default:
                    return `Something went wrong. Please check and try again. Error ${this.error.statusCode}`;
            }
        },
    },
};
</script>

<style lang="scss">
.error-icon.v-icon {
    font-size: 128px;
}
</style>
