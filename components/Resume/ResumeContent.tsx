import { ActionIcon, Box, Container, Divider, Flex, List, Paper, Text, Title } from '@mantine/core'
import { IconPrinter } from '@tabler/icons-react';
import classes from './ResumeContent.module.css'

const jobs = [
    {
        company: "Discovery Genie",
        title: "Frontend Software Engineer",
        dates: "December 2017 - Present",
        technologies: "Typescript, React, Redux, Material UI, Emotion, React Testing Library, Stripe",
        duties: [
            "Developed the front-end for Discovery Genie v2, utilizing React, GraphQL, and Typescript to enhance user experience, improve performance, and ensure codebase scalability.",
            "Collaborated with Product manager, DevOps and Backend Developers to bring wireframes, designs, and user stories to life.",
            "Met with the development team on a weekly basis to discuss and troubleshoot features in the previous sprint and plan for future sprints.",
            "Designed, developed, tested, implemented and wrote documentation for new and existing features.",
            "Translated complex back-end functionality into user-friendly front-end interfaces for a seamless user experience",
            "Developed, modified and maintained new and existing 3rd party API integrations, including Stripe, Clio, FastCase, and others.",
            "Investigated and resolved bugs or deficiencies in codebases.",
            "Executed marketing efforts including the development of the Discovery genie marketing website, landing pages, email newsletters, blogs, and social media accounts.",
            "Managed on-page Search Engine Optimization efforts including maintenance of website meta-tags, alt-tags, headers, and copy.",
            "Reduced customer support effort and time by building Support Genie, a support platform for monitoring and managing Discovery Genie user activity, accounts, and settings.",
        ]
    },
    {
        company: "gooWee",
        title: "Co-Owner, Frontend Software Engineer",
        dates: "October 2016 - January 2022",
        technologies: "JQuery, React, Redux, Bootstrap, SASS, Styled Components, Wordpress",
        duties: [
            "Managed all aspects of business operations including marketing, sales, accounting, vendor and client agreements.",
            "Interfaced and effectively built rapport with clients.",
            "Created and effectively arranged graphics, images and all other content into creative, cohesive, functional, and visually-pleasing websites and apps.",
            "Ensured the technical feasibility and the use of best practices in UI/UX designs.",
            "Built responsive websites and apps from the ground up using UI Development technologies such as HTML, CSS, Javascript, and libraries including jQuery and React.",
            "Built reusable code and libraries for future use.",
            "Participated in an agile environment for solution design, development, deployment and production support of publicly facing apps and websites.",
            "Identified vendor and freelancer support and managed those relationships as needed.",
            "Managed project timelines, scope, budget, and resources using software including Jira, Toggl, Github, and Postman.",
            "Researched and learned new technologies and solutions."

        ]
    },
]

const Schools = [
    {
        school: "University of Maryland University College",
        degree: "M.S. in H.R. Management",
        date: "December 2009"
    },
    {
        school: "University of Maryland",
        degree: "B.A. in Psychology and Sociology",
        date: "May 2006"
    },
]

const volunteerJobs = [
    {
        job: "Boulder React Meetup",
        title: "Co-Organizer",
        dates: "October 2017 - Match 2020",
        duties: "Coordinated event locations, speakers, coding night projects, sponsorships, and marketing"
    },
    {
        job: "Free Code Camp Boulder Meetup",
        title: "Co-Organizer",
        dates: "January 2018 - June 2018",
        duties: "Coordinated event locations and times, assist new developers with coding problems."
    },
    {
        job: "Rocky Mountain Rescue Group",
        title: "Support Member",
        dates: "May 2014 - July 2018",
        duties: "First responder for mountain rescue emergencies in Boulder County, CO."
    },
]

export default function ResumeContent() {
    return (
        <Container className={classes.container}>
            <Paper shadow="md" p="md" className={classes.paper}>
            <ActionIcon
                size="lg"
                className={classes.print}
                variant="transparent"
                onClick={() => window.open('/Juan Portillo Resume.pdf')}
            >
                <IconPrinter size={26} />
            </ActionIcon>
                <Box className={classes.contentContainer}>
                    <Flex align="center" direction="column">
                        <Title order={1}>Juan Portillo</Title>
                        <Title order={2} size="h4">Frontend Software Engineer</Title>
                        <Text>Erie, CO | www.juanportillo.dev | contact@juanportillo.dev</Text>
                    </Flex>
                    <Divider my="sm" />
                    <Title order={3} size="h4" className={classes.section}>Work Experience</Title>
                    {jobs.map(job => (
                        <Box key={job.company}>
                            <Flex direction="column" className={classes.indent}>
                                <Text>{job.company}</Text>
                                <Text><strong>{job.title}</strong> | {job.dates}</Text>
                                <Text>Technologies: {job.technologies}</Text>
                                <List className={classes.jobList}>
                                    {job.duties.map(duty => <List.Item key={duty}>{duty}</List.Item>)}
                                </List>
                            </Flex>
                        </Box>
                    ))}
                    <Title order={3} size="h4" className={classes.section}>Education</Title>
                    {Schools.map(school => (
                        <Text key={school.school} className={classes.indent}>
                            <strong>{school.school}</strong> - {school.degree} - Graduated {school.date}
                        </Text>
                    ))}
                    <Title order={3} size="h4" className={classes.section}>Volunteer work</Title>
                    {volunteerJobs.map(job => (
                        <div key={job.job} className={classes.indent}>
                            <Text>
                                <strong>{job.job}</strong><br/>
                                {job.title} | {job.dates}<br />
                                {job.duties}
                            </Text>
                        </div>
                    ))}
                </Box>
            </Paper>
        </Container>
    )
}
