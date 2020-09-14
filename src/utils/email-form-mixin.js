import AlertDialog from '@/components/AlertDialog.vue';
import { sendEmail } from '@/utils/email';

export default {
    components: {
        AlertDialog,
    },
    data() {
        return {
            loading: false,
            valid: true,
            errorDialog: false,
            successDialog: false,
            formEmail: '',
        };
    },
    methods: {
        async submitForm() {
            if (this.$refs.form.validate()) {
                this.loading = true;
                try {
                    await this.sendFormData();
                    this.afterFormSubmit();
                } finally {
                    this.loading = false;
                }
            } else {
                this.errorDialog = true;
            }
        },
        getFormData() {
            return {};
        },
        getFormOptions() {
            return {};
        },
        afterFormSubmit() {
            this.successDialog = true;
            this.resetForm();
        },
        async sendFormData() {
            const response = await sendEmail(
                this.formEmail,
                this.getFormData(),
                this.getFormOptions(),
            );

            if (!response.ok) {
                console.error(response);
                throw new Error(response);
            } else {
                return response;
            }
        },
        resetForm() {
            this.$refs.form.reset();
        },
    },
};
