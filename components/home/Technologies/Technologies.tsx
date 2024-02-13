import {
    Title,
    Text,
    Container,
    Image,
    List,
    ListItem,
    Paper,
    Grid,
    ThemeIcon,
    rem,
  } from '@mantine/core';
import classes from './Technologies.module.css'
import { IconCircleCheck } from '@tabler/icons-react';

const breadAndButter = [
  {
    name: "Next.js",
    source: '/icons/nextjs-icon.png'
  },
  {
    name: "React",
    source: '/icons/react-icon.png'
  },
  {
    name: "TypeScript",
    source: '/icons/ts-icon.png'
  },
  {
    name: "CSS",
    source: '/icons/css3-icon.png'
  },
]
  
  
  export default function Technologies() {
    return (
      <Container size="lg" py="xl" className={classes.container}>
  
        <Title order={2} className={classes.title} mt="sm">
          My bread and butter
        </Title>
        <Text className={classes.description} mt="md">
           I have expertise in (and lots of love for) the following technologies:
        </Text>

        <div className={classes.card}>
          {breadAndButter.map((t) => (
            <figure key={t.name} className={classes.figure}>
              <Image 
                className={classes.icon}
                src={t.source}
                alt={t.name}
                fit="contain"
              />
              <figcaption className={classes.figcaption}>{t.name}</figcaption>
            </figure>
          ))}
        </div>
        <Text className={classes.description} mt="xl" mb="xl">
           Other experience:
        </Text>
        <Paper p='xl' style={{ maxWidth: '788px', margin: '0 auto' }}>
          <Grid>
            <Grid.Col span={{ xs: 6, sm: 4 }}>
              State Management 
                <List 
                  spacing="xs"
                  size="sm"
                  mt={10}
                  icon={
                    <ThemeIcon color="#228be6" size={22} radius="xl">
                      <IconCircleCheck style={{ width: rem(14), height: rem(14) }} />
                    </ThemeIcon>
                  }
                  withPadding 
                >
                  <ListItem>Redux</ListItem>
                  <ListItem>Thunks</ListItem>
                  <ListItem>Sagas</ListItem>
                </List>
            </Grid.Col>
            <Grid.Col span={{ xs: 6, sm: 4 }}>
              Styling 
                <List
                  spacing="xs"
                  size="sm"
                  mt={10}
                  icon={
                    <ThemeIcon color="#228be6" size={22} radius="xl">
                      <IconCircleCheck style={{ width: rem(14), height: rem(14) }} />
                    </ThemeIcon>
                  }
                  withPadding
                >
                  <ListItem>Styled Components</ListItem>
                  <ListItem>Emotion</ListItem>
                  <ListItem>SASS</ListItem>
                </List>
            </Grid.Col>
            <Grid.Col span={{ xs: 6, sm: 4 }}>
              UI Libraries 
                <List 
                  spacing="xs"
                  size="sm"
                  mt={10}
                  icon={
                    <ThemeIcon color="#228be6" size={22} radius="xl">
                      <IconCircleCheck style={{ width: rem(14), height: rem(14) }} />
                    </ThemeIcon>
                  }
                  withPadding
                >
                  <ListItem>Material UI</ListItem>
                  <ListItem>Bootstrap</ListItem>
                  <ListItem>Mantine</ListItem>
                </List>
            </Grid.Col>
            <Grid.Col span={{ xs: 6, sm: 4 }}>
              Project Management 
                <List 
                  spacing="xs"
                  size="sm"
                  mt={10}
                  icon={
                    <ThemeIcon color="#228be6" size={22} radius="xl">
                      <IconCircleCheck style={{ width: rem(14), height: rem(14) }} />
                    </ThemeIcon>
                  }
                  withPadding
                >
                  <ListItem>Toggl</ListItem>
                  <ListItem>Jira</ListItem>
                  <ListItem>Github</ListItem>
                </List>
            </Grid.Col>
            <Grid.Col span={{ xs: 6, sm: 4 }}>
              Design 
                <List 
                   spacing="xs"
                   size="sm"
                   mt={10}
                   icon={
                    <ThemeIcon color="#228be6" size={22} radius="xl">
                      <IconCircleCheck style={{ width: rem(14), height: rem(14) }} />
                    </ThemeIcon>
                  }
                   withPadding
                >
                  <ListItem>Figma</ListItem>
                  <ListItem>Sketch</ListItem>
                  <ListItem>Photoshop</ListItem>
                </List>
            </Grid.Col>
            <Grid.Col span={{ xs: 6, sm: 4 }}>
                Testing 
                  <List
                    spacing="xs"
                    size="sm"
                    mt={10}
                    icon={
                      <ThemeIcon color="#228be6" size={22} radius="xl">
                        <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
                      </ThemeIcon>
                    }
                    withPadding
                  >
                    <ListItem>React Testing Library</ListItem>
                    <ListItem>Jest</ListItem>
                  </List>
            </Grid.Col>
          </Grid>
        </Paper>
      </Container>
    );
  }