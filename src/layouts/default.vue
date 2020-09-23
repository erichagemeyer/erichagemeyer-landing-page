<template>
    <v-app>
        <v-app-bar fixed class="app-header">
            <nuxt-link to="/" class="v-toolbar__content pa-0">
                <img class="app-header__logo" src="/logo-primary.svg" />
                <img class="app-header__logotype ml-4 " src="/logotype.svg" />
            </nuxt-link>
            <v-spacer />
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" app temporary right>
            <navigation-list />
            <navigation-footer />
        </v-navigation-drawer>
        <v-main>
            <div class="app-sidebar elevation-1">
                <img class="app-sidebar__logo" src="/logo-primary.svg" />
                <h1 class="app-sidebar__title text-h4 mt-8 font-weight-bold">
                    <img src="/logotype.svg" />
                </h1>
                <navigation-list class="mt-6" />
                <navigation-footer />
            </div>
            <div class="app-content">
                <v-container>
                    <nuxt />
                </v-container>
            </div>
        </v-main>
    </v-app>
</template>

<script>
import NavigationList from '@/components/NavigationList';
import NavigationFooter from '@/components/NavigationFooter';

export default {
    components: {
        NavigationList,
        NavigationFooter,
    },
    data() {
        return {
            drawer: null,
        };
    },
};
</script>

<style lang="scss">
.theme--light.v-application {
    background-color: #f5f5f5;
}
.app-header {
    display: flex;
    align-items: center;
}

.app-header__logo {
    height: 36px;
}

.app-header__logotype {
    height: 16px;

    @media screen and (min-width: 315px) {
        height: 20px;
    }
}

.app-sidebar__title {
    width: 100%;
    padding: 0 $spacer * 8;
    img {
        max-width: 100%;
    }
}

.app-sidebar {
    display: none;
    width: $app-sidebar-width;
    height: 100%;
    background-color: white;
    position: fixed;
    text-align: center;
    padding: $spacer * 6 $spacer * 3;

    @include media-breakpoint-up('lg') {
        display: block;
    }
}

.app-content {
    margin-top: $app-header-small-height;

    @include media-breakpoint-up('md') {
        margin-top: $app-header-height;
    }

    @include media-breakpoint-up('lg') {
        margin-top: 0px;
        margin-left: $app-sidebar-width;
    }

    & > .v-container {
        min-height: 100%;
    }
}

.app-header {
    @include media-breakpoint-up('lg') {
        display: none;
    }
}
.app-sidebar__logo {
    height: 86px;
    @media screen and (min-height: 700px) {
        height: 128px;
    }
}
</style>
