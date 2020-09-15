<template>
    <v-container>
        <section-title class="mt-3">Contact Form</section-title>
        <v-row class="flex-row-reverse">
            <v-col cols="12" sm="5">
                <p class="text--body-1">
                    If you would like more information about me or my work please complete the form
                    below and I'll get back to you as soon as possible.
                </p>
                <v-list color="transparent">
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-email</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <a :href="emailHref" target="_blank">{{ email }}</a>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-col>
            <v-spacer />
            <v-col cols="12" sm="7">
                <contact-form></contact-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue';
import ContactForm from '@/components/ContactForm.vue';

export default {
    components: {
        SectionTitle,
        ContactForm,
    },
    data() {
        return {
            email: 'erichagemeyer@gmail.com',
            address: [''],
        };
    },
    computed: {
        addressHTML() {
            return this.address.join('<br>');
        },
        emailHref() {
            return `mailto:${this.email}`;
        },
    },
};
</script>
