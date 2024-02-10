import React, { useEffect, useState } from 'react';
import { 
  Container, 
  Group, 
  Burger, 
  Title, 
  Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classes from './SimpleHeader.module.css';

interface SimpleHeaderProps {
    links: { link: string; label: string }[];
}

export default function SimpleHeader({ links }: SimpleHeaderProps) {
  const { pathname } = useRouter()
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  useEffect(() => {
    setActive(pathname)
  }, [pathname])

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
    >
        {link.label}
    </Link>
  ));

  return (
    <header 
      className={classes.header}
      >
      <Container 
        size="md"
        className={classes.inner}
      >
        <Title order={1}>Juan Portillo</Title>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Menu shadow="md" width={200} opened={opened}>
          <Menu.Target>
            <Burger 
              opened={opened} 
              onClick={toggle} 
              className={classes.burger} 
              size="sm"
              hiddenFrom="xs"
              />
          </Menu.Target>

          <Menu.Dropdown>
            {items}
          </Menu.Dropdown>
        </Menu>
        
      </Container>
    </header>
  );
}