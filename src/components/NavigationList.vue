<template>
    <v-list rounded width="auto" class="navigation-list">
        <v-list-item v-for="item in items" :key="`navitem-${item}`" :to="item.to" exact>
            <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
const items = [
    {
        title: 'Home',
        to: '/',
    },
    {
        title: 'Resume',
        to: '/resume',
    },
    {
        title: 'Portfolio',
        to: '/portfolio',
    },
    {
        title: 'Contact',
        to: '/contact',
    },
];

export default {
    data() {
        return { items };
    },
};
</script>

<style lang="scss">
.navigation-list {
    font-family: $heading-font-family;
}
</style>
