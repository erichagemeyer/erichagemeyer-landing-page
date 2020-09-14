<template>
    <v-app>
        <v-app-bar fixed class="app-navbar">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <div class="app-title">
                <img class="app-title__logo" src="/logo-primary.svg" />
                <h1 class="app-title__text text-h6 ml-4 font-weight-bold">
                    Eric Hagemeyer
                </h1>
            </div>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" app temporary>
            <navigation-list />
        </v-navigation-drawer>
        <v-main>
            <div class="app-sidebar elevation-1">
                <img class="app-sidebar__logo" src="/logo-primary.svg" />
                <h1 class="app-sidebar__title text-h4 mt-8 font-weight-bold">
                    Eric Hagemeyer
                </h1>
                <navigation-list class="mt-6" />
                <v-footer absolute paddless class="white text-center">
                    <v-card flat tile width="100%" class="text-center">
                        <v-card-text>
                            <v-btn icon><v-icon>mdi-linkedin</v-icon></v-btn>
                            <v-btn icon><v-icon>mdi-github</v-icon></v-btn>
                        </v-card-text>
                        <v-divider />
                        <v-card-text>&copy; 2020</v-card-text>
                    </v-card>
                </v-footer>
            </div>
            <div class="app-content">
                <nuxt />
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
    height: 128px;
}
</style>
