import React from 'react';
import {
  Container,
  Title,
  Button,
  Group,
  Text,
} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import classes from './Hero.module.css';

export default function Hero() {
  return (
    <Container>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
              Creative <span className={classes.highlight}>Front-End</span> <br />Software Engineer
          </Title>
          <Text mt="md">
              My interests in science and technology have always influenced my hobbies in tinkering, building, exploring and learning about emerging discoveries.
          </Text> 
          <Text mt="md">
              Ironically, I started my career in recruiting and HR. <span style={{ fontSize: 26 }}>🤦‍♂️</span>
          </Text> 
          <Text mt="md">
              Learning to code made me realize that I could merge my people focused work with my interest in tech.
              I enjoy working in a team, designing simple, elegant, responsive, and user friendly interfaces that bridge the gap between people and technology.
          </Text> 

          <Group mt={30}>
            <Link
              href={`/resume`}
              passHref
            >
              <Button radius="xl" size="md" className={classes.control}>
                Resume
              </Button>
            </Link>
          </Group>
        </div>
          <Image 
            src={'/juan.webp'}
            width={300}
            height={537}
            priority
            className={classes.image}
            alt="Juan Portillo, Front-End Software Engineer"
          />
      </div>
    </Container>
  )
}
