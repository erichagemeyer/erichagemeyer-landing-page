<template>
    <v-app>
        <v-app-bar fixed class="app-navbar">
            <img class="app-title__logo" src="/logo-primary.svg" />
            <img class="app-title__logotype ml-4 " src="/logotype.svg" />
            <v-spacer />
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" app temporary right>
            <navigation-list />
        </v-navigation-drawer>
        <v-main>
            <div class="app-sidebar elevation-1">
                <img class="app-sidebar__logo" src="/logo-primary.svg" />
                <h1 class="app-sidebar__title text-h4 mt-8 font-weight-bold">
                    <img src="/logotype.svg" />
                </h1>
                <navigation-list class="mt-6" />
                <v-footer absolute paddless class="white text-center">
                    <v-card flat tile width="100%" class="text-center">
                        <v-card-text>
                            <v-btn
                                icon
                                target="_blank"
                                href="https://www.linkedin.com/in/eric-hagemeyer-1720539a/"
                            >
                                <v-icon>mdi-linkedin</v-icon>
                            </v-btn>
                            <v-btn icon target="_blank" href="https://github.com/erichagemeyer">
                                <v-icon>mdi-github</v-icon>
                            </v-btn>
                        </v-card-text>
                        <v-divider />
                        <v-card-text class="pa-1">&copy; 2020</v-card-text>
                    </v-card>
                </v-footer>
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

export default {
    components: {
        NavigationList,
    },
    data() {
        return {
            drawer: null,
        };
    },
};
</script>

<style lang="scss">
$app-sidebar-width: 320px;
$max-app-sidebar-width: 375px;

$max-screensize-sidebar: (100% / $app-sidebar-width) * $max-app-sidebar-width;

.theme--light.v-application {
    background-color: #f5f5f5;
}
.app-title {
    display: flex;
    align-items: center;
}

.app-title__logo {
    height: 36px;
}

.app-title__logotype {
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
    margin-top: 56px;

    @include media-breakpoint-up('md') {
        margin-top: 64px;
    }

    @include media-breakpoint-up('lg') {
        margin-top: 0px;
        margin-left: $app-sidebar-width;
    }
}

.app-navbar {
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
