<template>
    <job-summary
        title="Software Developer"
        company="New Valence Robotics"
        location="Boston, MA"
        start-date="July 2014"
        end-date="December 2017"
    >
        <job-duty-list>
            <job-duty>
                I worked with our software team consisting of 3 people total to establish agile
                development workflows and processes for issue tracking, version control, and project
                planning. We used JIRA and Github to maintain our projects.
            </job-duty>
            <job-duty>
                I designed, developed, and maintained a frontend web app primarily using Django’s
                built-in templating engine, jQuery, KnockoutJS, and UnderscoreJS. Over 3,500 people
                used the app to create over 100,000 3D print jobs, remotely monitor and control
                their printers, manage permissions, watch print timelapses, and review usage
                reporting statistics.
            </job-duty>
            <job-duty>
                I developed an in-browser 3D print preview using ThreeJS allowing users to
                manipulate the scale, rotation, and layer height of prints using range sliders and
                show a visualization before printing. I also integrated it with a third-party gcode
                viewer using web workers.
            </job-duty>
            <job-duty>
                I developed custom user interface components for the webapp using KnockoutJS and
                jQuery. These components included a touch-enabled drag-and-drop queue for managing
                the order of print jobs which synced with a remote database in real-time, a circular
                range slider using SVG that is compatible with touch devices, and many other form
                inputs.
            </job-duty>
            <job-duty>
                Using KnockoutJS and Ajax, I built a real-time dashboard for 3D printers displaying
                a live video feed, printer status, job queue, and sensor data. The dashboard also
                allows users to send commands to the printer such as stop, start, and skip.
            </job-duty>
            <job-duty>
                I designed, developed and improved many backend Django apps including the data
                models, database queries, and presentation views. These apps included user
                organization and permission management, a public library for staff to publish 3D
                models and collections, and a CMS for managing support articles.
            </job-duty>
            <job-duty>
                I helped design and develop printer maintenance routines that coordinated user
                interface prompts from the webapp with GCODE commands on a RaspberryPi controlling
                the 3D printer.
            </job-duty>
            <job-duty>
                I configured build and deployment processes to compile, bundle, and minify static
                files for production and development using gulp.
            </job-duty>
            <job-duty>
                I launched and maintained a wordpress landing page. I built custom shortcodes,
                integrated analytics services, and developed command line tools for deployment.
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
