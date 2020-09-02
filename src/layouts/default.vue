<template>
    <v-app>
        <v-app-bar app fixed>
            <div class="app-title">
                <img class="app-title__logo" src="/logo-primary.svg" />
                <span class="app-title__text ml-6 text-h6 font-weight-bold">Eric Hagemeyer</span>
            </div>
        </v-app-bar>
        <v-main>
            <nuxt />
        </v-main>
        <v-footer>
            <span>&copy; 2020</span>
        </v-footer>
    </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss">
.app-title {
    display: flex;
    align-items: center;
}

.app-title__logo {
    height: 48px;
}
</style>
