<template>
    <div>
        <section-title class="mt-3">Websites</section-title>
        <v-row>
            <v-col v-for="site in sites" :key="site.url" cols="12" md="6">
                <v-card :href="site.url" target="_blank" class="portfolio-card">
                    <v-img
                        :src="site.image"
                        :aspect-ratio="1.68"
                        position="top center"
                        class="portfolio-card__image"
                    ></v-img>
                    <v-card-title>{{ site.name }}</v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';

export default {
    components: {
        SectionTitle,
    },
    head: {
        title: 'Portfolio',
    },
    data() {
        return {
            sites: [
                {
                    url: 'https://growcleangroup.com/',
                    name: 'Grow Clean Group',
                    image: require('@/static/portfolio/grow-clean-cropped@0.5x.jpg?vuetify-preload'),
                },
                {
                    url: 'https://industrialml.com/',
                    name: 'IndustrialML',
                    image: require('@/static/portfolio/industrialml-home-cropped@0.5x.jpg?vuetify-preload'),
                },
                {
                    url: 'http://monogramwindows.com/',
                    name: 'Monogram Windows & Doors',
                    image: require('@/static/portfolio/monogram-home-cropped@0.5x.jpg?vuetify-preload'),
                },
            ],
        };
    },
};
</script>

<style lang="scss">
.portfolio-card__image {
    // height: 250px;
    object-fit: cover;
}
</style>
