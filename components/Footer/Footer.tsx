import { Container, Group, ActionIcon, Title } from '@mantine/core';
import { IconBrandTwitter, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import classes from './Footer.module.css'

export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Title order={1}>Juan Portillo</Title>
        <Group className={classes.links}>
          <a href="https://www.linkedin.com/in/juanportillo/" target="_blank" rel="noreferrer">
            <ActionIcon size="lg">
              <IconBrandLinkedin size={18} stroke={1.5} />
            </ActionIcon>
          </a>
          <a href="https://github.com/juanp83" target="_blank" rel="noreferrer">
          <ActionIcon size="lg">
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
          </a>
        </Group>
      </Container>
    </div>
  );
}