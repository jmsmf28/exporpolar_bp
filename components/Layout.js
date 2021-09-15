import React from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>BonsPreços</title>
      </Head>
      <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <Typography>
            <h2>BonsPreços</h2>
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>
          © BonsPreços 2021. Todos os direitos reservados.
        </Typography>
      </footer>
    </div>
  );
}
