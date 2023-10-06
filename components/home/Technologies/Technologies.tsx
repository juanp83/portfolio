import {
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    Image,
  } from '@mantine/core';
import classes from './Technologies.module.css'
  
  const technologies = [
    {
        title: 'Javascript & TypeScript',
        description:
            '7 years of experience in Javascript and 1 year of experience in typescript.',
        icon: {src: '/icons/js-icon.png', alt: 'Javascript Icon'},
        icon2: {src: '/icons/ts-icon.png', alt: 'Typescript Icon'},
    },
    {
        title: 'React & Redux',
        description:
            '6 years of experience in React and 4 years of experience in Redux.',
        icon: {src: '/icons/react-icon.png', alt: 'React Icon'},
        icon2: {src: '/icons/redux-icon.png', alt: 'Redux Icon'},
    },
    {
        title: 'Styled Components & Emotion',
        description:
            '3 years of experience in Styled Components and 1 year of experience in Emotion.',
        icon: {src: '/icons/sc-icon.png', alt: 'Styled Components Icon'},
        icon2: {src: '/icons/emotion-icon.png', alt: 'Emotion Icon'}
    },
    {
        title: 'Material-UI & Bootstrap',
        description:
            '6 years of experience in Material-UI and 3 years of experience in Bootstrap.',
        icon: {src: '/icons/mui-icon.png', alt: "Material UI Icon"},
        icon2: {src: '/icons/bootstrap-icon.png', alt: 'Bootstrap Icon'},
    },
    {
        title: 'Jira & Github',
        description:
            '3 years of experience using Jira and 7 years of experience using Github.',
        icon: {src: '/icons/jira-icon.png', alt: 'Jira Icon'},
        icon2: {src: '/icons/github-icon.png', alt: 'Github Icon'}
    },
    {
        title: 'Figma & Photoshop',
        description:
            'I have used photoshop for decades, and figma for three years.',
        icon: {src: '/icons/figma-icon.png', alt: 'Figma Icon'},
        icon2: {src: '/icons/ps-icon.png', alt: 'Photoshop'},
    },
  ];
  
  export default function Technologies() {
    const features = technologies.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} p="xl">
        <div style={{ display: 'flex' }}>
            <Image className={classes.icon} src={feature.icon.src} style={{marginRight: '.5em'}} alt={feature.icon.alt} />
            <Image className={classes.icon} src={feature.icon2.src} alt={feature.icon.alt} />
        </div>
        <Text size="lg" className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
      </Card>
    ));
    return (
      <Container size="lg" py="xl" className={classes.container}>
  
        <Title order={2} className={classes.title} mt="sm">
          My bread and butter
        </Title>
  
        <Text className={classes.description} mt="md">
           I have expertise in (and lots of love for) the following technologies.
        </Text>
  
        <SimpleGrid cols={3} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }