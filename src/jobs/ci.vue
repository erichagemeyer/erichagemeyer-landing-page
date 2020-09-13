<template>
    <job-summary
        title="Software Developer"
        company="Cincinnati Incorporated"
        location="Boston, MA"
        start-date="December 2017"
    >
        <job-duty-list>
            <job-duty>
                As the sole software developer for the CI Boston business unit, I worked with our
                General Manager to plan software projects for 2018, 2019, and 2020. All major
                projects were executed on schedule.
            </job-duty>
            <job-duty>
                Maintained and managed 75+ cloud-connected 3D printers in the field. Worked with
                customer support to remotely diagnose network configuration problems, detect
                hardware malfunctions, and debug software issues.
            </job-duty>
            <job-duty>
                Maintained and managed our cloud software stack which includes 10 Linux servers and
                4 MySQL databases. I was responsible for updating the cloud software running on the
                servers and performing data and schema migrations on the database.
            </job-duty>
            <job-duty>
                Designed, developed, tested, and implemented a battery backup circuit and a python
                service to gracefully shutdown the printer after abrupt power loss to prevent SD
                card corruption.
            </job-duty>
            <job-duty>
                Researched, designed, and implemented the electronics and wiring for a built-in
                touchscreen control panel.
            </job-duty>
            <job-duty>
                Using Vue and Vuetify, I designed and developed a web application allowing users to
                view and control the printer, manage the printer filesystem, drag-and-drop jobs in a
                print queue, and update printer configuration. The web application was mobile
                friendly and was bundled into an Electron application to run on a touchscreen.
            </job-duty>
            <job-duty>
                I created an OctoPrint plugin in python to control the printer’s part removal
                system. I later added the ability to manage a persistent queue of print jobs,
                automatically removing each print after it’s finished and starting the next job.
            </job-duty>
            <job-duty>
                Developed a more flexible print configuration management system to allow for merging
                configuration settings provided by the printer, user, and material.
            </job-duty>
        </job-duty-list>
    </job-summary>
</template>

<script>
import jobMixin from './job-mixin';

export default {
    mixins: [jobMixin],
};
</script>
