<template>
    <div class="home-hero">
        <img class="home-hero__avatar" src="images/erichagemeyer-profile.png" />
        <h1 class="home-hero__headline mt-4 mt-sm-8">
            <slot />
        </h1>
        <div class="mt-8 mt-sm-8 mt-lg-8">
            <v-btn text x-large color="primary" to="/resume">Read My Resume</v-btn>
            <v-btn text x-large color="primary" to="/portfolio">View My Portfolio</v-btn>
            <v-btn text x-large color="primary" to="/contact">Get In Touch</v-btn>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@mixin avatar($size) {
    height: $size;
    width: $size;
    border-radius: $size;
}

@function hero-height($header-size) {
    @return calc(100vh - #{$container-padding-x * 2} - #{$header-size});
}

.home-hero {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    min-height: hero-height($app-header-small-height);

    @include media-breakpoint-up('md') {
        min-height: hero-height($app-header-height);
    }

    @include media-breakpoint-up('lg') {
        min-height: hero-height(0);
    }
}

.home-hero__headline {
    font-weight: 400;
    letter-spacing: -0.015625em;
    font-size: 2.125rem;
    line-height: (2.5 / 2.125);

    @media screen and (min-width: #{map-get($grid-breakpoints, 'sm')}) and (min-height: 580px) {
        font-size: 3rem;
    }

    @media screen and (min-width: #{map-get($grid-breakpoints, 'lg')}) and (min-height: 500px) {
        font-size: 3rem;
    }

    @media screen and (min-width: #{map-get($grid-breakpoints, 'lg')}) and (min-height: 640px) {
        font-size: 4.5rem;
    }
    @media screen and (min-width: #{map-get($grid-breakpoints, 'xl')}) {
        font-size: 6rem;
    }
}

.home-hero__avatar {
    display: block;
    object-fit: cover;
    margin-left: auto;
    margin-right: auto;
    float: none;
    background-color: rgba(0, 0, 0, 0.15);
    @include avatar(84px);
    @include media-breakpoint-up('sm') {
        @include avatar(128px);
    }
}
</style>
