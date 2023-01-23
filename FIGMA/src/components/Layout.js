import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="sm">
          <Toolbar disableGutters>
            <Typography
              classes={{ root: classes.title }}
              variant="h6"
              noWrap
              component="a"
              href="/"
            >
              Mui-v5 (Demo)
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="sm">
        {children}
      </Container>
    </>
  )
}

const useStyles = makeStyles(() => ({
  title: {
    color         : 'inherit',
    textDecoration: 'none'
  }
}), { name: 'Layout' })

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout