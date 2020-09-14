<template>
    <div>
        <v-form ref="form" v-model="valid" @submit.prevent="submitForm()" lazy-validation>
            <v-text-field
                v-model="name"
                :rules="nameRules"
                color="primary lighten-2"
                label="Name"
                filled
                required
            ></v-text-field>
            <v-text-field
                v-model="email"
                :rules="emailRules"
                color="primary lighten-2"
                type="email"
                required
                label="Email"
                filled
            ></v-text-field>
            <v-textarea
                v-model="message"
                :rules="messageRules"
                color="primary lighten-2"
                label="Message"
                filled
            ></v-textarea>
            <div class="text-right">
                <v-btn @click="resetForm()" large text>Reset</v-btn>
                <v-btn :loading="loading" light large color="primary" type="submit">
                    Submit
                </v-btn>
            </div>
        </v-form>
        <alert-dialog v-model="errorDialog" icon="mdi-alert" color="error" title="Oops">
            There were some issues with your form. Please fix the issues and resubmit the form
        </alert-dialog>
        <alert-dialog v-model="successDialog" icon="mdi-check" color="success" title="Thank You">
            We will respond as soon as possible.
        </alert-dialog>
    </div>
</template>

<script>
import AlertDialog from '@/components/AlertDialog.vue';
import { isValidEmail, isRequired } from '@/utils/form';
import EmailForm from '@/utils/email-form-mixin';

export default {
    components: {
        AlertDialog,
    },
    mixins: [EmailForm],
    data() {
        return {
            name: '',
            nameRules: [isRequired()],
            email: '',
            emailRules: [isRequired(), isValidEmail()],
            company: '',
            companyRules: [],
            message: '',
            messageRules: [],
            purpose: '',
            purposeRules: [],
            purposeOptions: ['Media', 'Job Application', 'Farmer', 'Other'],
            formEmail: 'erichagemeyer@gmail.com',
        };
    },
    methods: {
        getFormOptions() {
            return {
                subject: 'Website Contact Form Submission',
            };
        },
        getFormData() {
            return {
                name: this.name,
                email: this.email,
                company: this.company,
            };
        },
    },
};
</script>
