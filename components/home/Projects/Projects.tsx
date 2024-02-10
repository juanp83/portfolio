import {
    Button,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    Image,
  } from '@mantine/core';
import Link from 'next/link';
import classes from './Projects.module.css'
  
  const projects = {
        professional: [
            {
              title: 'Discovery Genie App',
              url: 'https://app.discoverygenie.com',
              description: 'Discovery Genie is a cloud-native SaaS platform aimed at lawyers and paralegals involved in litigation. The web application allows litigation professionals to produce and index electronic documents and email archives for discovery with maximum efficiency and minimum expense.',
              technologies: 'Typescript, React, React Router, Material UI, Emotion, React Hook Form, React Testing Library, Stripe',
              // image: {src: '/icons/js-icon.png', alt: 'Javascript Icon'},
            },
            {
              title: 'Support Genie App',
              url: null,
              description: "Support Genie is an app designed to streamline administrative and support tasks as well as provide useful analytics for Discovery Genie. Whether it's managing user permissions, tracking case progress, or troubleshooting support tickets, Support Genie simplifies the process.",
              technologies: 'React, React Router, Material UI, Styled Components, Stripe, React Testing Library',
              // image: {src: '/icons/js-icon.png', alt: 'Javascript Icon'},
            },
            {
              title: 'Discovery Genie Website',
              url: 'https://www.discoverygenie.com',
              description: 'The Discovery Genie website is the entry point for users. This website is where all Discovery Genie marketing efforts point. Within the website users are able to schedule a demo of the app, sign up, and learn everything they need to know to decide whether Discovery Genie is a good fit for their practice.',
              // image: {src: '/icons/js-icon.png', alt: 'Javascript Icon'},
            },
        ],
        personal: [
            {
              title: 'Personal Website',
              url: 'https://www.juanportillo.dev',
              description: 'Discovery Genie is a cloud-native SaaS platform aimed at lawyers and paralegals involved in litigation. The web application allows litigation professionals to produce and index electronic documents and email archives for discovery with maximum efficiency and minimum expense.',
              technologies: 'Next.js, React, Typescript, Mantine, Emotion',
              // image: {src: '/icons/js-icon.png', alt: 'Javascript Icon'},
            }, 
        ]
    }
  
  export default function Projects() {
    const professionalProjects = projects.professional.map((project) => (
      <Card key={project.title} shadow="md" radius="md" className={classes.card} p="xl">
        <div>
          <Text size="lg"  className={classes.cardTitle} mt="md">
            {project.title}
          </Text>
          <Text size="sm" mt="sm">
            {project.description}
          </Text>
        </div>
        {/* <Link
          href={`/resume`}
          passHref
        >
          <Button radius="xl" size="md" mt={25}>
            Learn More
          </Button>
        </Link> */}
      </Card>
    ));
    const personalProjects = projects.personal.map((project) => (
      <Card key={project.title} shadow="md" radius="md" className={classes.card} p="xl">
        <Text size="lg" className={classes.cardTitle} mt="md">
          {project.title}
        </Text>
        <Text size="sm" mt="sm">
          {project.description}
        </Text>
      </Card>
    ));
    return (
      <Container size="lg" py="xl" className={classes.container}>
  
        <Title order={2} className={classes.title} mt="sm">
          Projects
        </Title>

        <Title order={2} className={classes.subTitle} mt="sm">
          Professional
        </Title>
  
        <SimpleGrid cols={3} spacing="xl" mt={25} mb={50}>
          {professionalProjects}
        </SimpleGrid>
        {/* <Title order={2} className={classes.subTitle} align="left" mt="sm">
          Personal & Learning
        </Title>
        <SimpleGrid cols={3} spacing="xl" mt={25} breakpoints={[{ maxWidth: 'sm', cols: 1 }, { maxWidth: 'md', cols: 2 }]}>
          {personalProjects}
        </SimpleGrid> */}
      </Container>
    );
  }