const DEFAULT_EMAIL_OPTIONS = {
    replyTo: true,
};

export function sendEmail(to, data, options = {}) {
    const form = new FormData();
    options = Object.assign({}, DEFAULT_EMAIL_OPTIONS, options);

    const url = options.override ? to : `https://formsubmit.co/ajax/${to}`;

    for (const [key, value] of Object.entries(data)) {
        form.set(key, value);
    }

    if (options.subject) {
        form.set('_subject', options.subject);
    }

    if (options.replyTo && data.email) {
        form.set('_replyto', '');
    }

    return fetch(url, {
        method: 'POST',
        body: form,
    });
}
