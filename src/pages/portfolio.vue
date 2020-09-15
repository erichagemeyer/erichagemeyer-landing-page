<template>
    <v-container>
        <section-title>Websites</section-title>
        <v-row>
            <v-col v-for="site in sites" :key="site.url" cols="12" lg="6">
                <v-card :href="site.url" target="_blank" class="portfolio-card">
                    <v-img :src="site.image" class="portfolio-card__image"></v-img>
                    <v-card-title>{{ site.name }}</v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';

export default {
    components: {
        SectionTitle,
    },
    data() {
        return {
            sites: [
                {
                    url: 'https://growcleangroup.com/',
                    name: 'Grow Clean Group',
                    image: '/portfolio/grow-clean-full.png',
                },
                {
                    url: 'https://industrialml.com/',
                    name: 'IndustrialML',
                    image: '/portfolio/industrialml-home-full.png',
                },
                {
                    url: 'http://monogramwindows.com/',
                    name: 'Monogram Windows & Doors',
                    image: '/portfolio/monogram-home-full.png',
                },
            ],
        };
    },
};
</script>

<style lang="scss">
.portfolio-card__image {
    height: 250px;
    object-fit: cover;
}
</style>
