import React from 'react'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Film from './routes/Film'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import {
  CssBaseline,
  Drawer,
  Box,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Container,
  Link as MUILink,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import {
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
} from '@material-ui/icons'
import HdIcon from '@material-ui/icons/Hd';
import CakeIcon from '@material-ui/icons/Cake';
import PeopleIcon from '@material-ui/icons/People';
import TimelineIcon from '@material-ui/icons/Timeline';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import Dashboard from './routes/Dashboard'
import FilmFestival from './routes/FilmFestival'
import FilmApplicationFeature from './routes/FilmApplicationFeature'
import PublishIcon from '@material-ui/icons/Publish';
import DevTask from './routes/DevTask'
import { withAuthenticationRequired } from "@auth0/auth0-react";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import AuthenticationButton from './components/AuthenticationButton'
import Profile from './components/Profile'

import { Provider } from 'inversify-react'
import { container } from './inversify.config'
import OrganisationFeature from './routes/OrganisationFeature'

function Copyright() {
  return (
    <Typography variant = "body2" color = "textSecondary" align = "center">
      {'Copyright © '}
      <MUILink color = "inherit">
        Radiator IP Sales
      </MUILink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24,   // keep right padding when drawer closed
  },
  toolbarIcon: {
    display       : 'flex',
    alignItems    : 'center',
    justifyContent: 'flex-end',
    padding       : '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex    : theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing  : theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width     : `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing  : theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position  : 'relative',
    whiteSpace: 'nowrap',
    width     : drawerWidth,
    transition: theme.transitions.create('width', {
      easing  : theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX : 'hidden',
    transition: theme.transitions.create('width', {
      easing  : theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width                       : theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content     : {
    flexGrow: 1,
    // height  : '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop   : theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding      : theme.spacing(2),
    display      : 'flex',
    overflow     : 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  navLink: {
    textDecoration: 'none',
    color         : 'inherit',
  },
  appBarImage: {
    maxHeight   : '45px',
    paddingRight: '20px',
  },
}))

export default function App() {
  const classes          = useStyles()
  const [open, setOpen]  = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Provider container={container}>
    <Router>
      <div className = {classes.root}>
        <CssBaseline />
        <AppBar
          position  = "absolute"
          className = {clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className = {classes.toolbar}>
            <IconButton
              edge       = "start"
              color      = "inherit"
              aria-label = "open drawer"
              onClick    = {handleDrawerOpen}
              className  = {clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <img
              className = {classes.appBarImage}
              src       = "img/logo_radiator.svg"
              alt       = "Radiator logo"
            />
            <Typography
              component = "h1"
              variant   = "h6"
              color     = "inherit"
              noWrap
              className = {classes.title}
            >
              WebApp 2021
            </Typography>
            <AuthenticationButton></AuthenticationButton>
            <Profile></Profile>

          </Toolbar>
        </AppBar>
        <Drawer
          variant = "permanent"
          classes = {{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open = {open}
        >
          <div        className = {classes.toolbarIcon}>
          <IconButton onClick   = {handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link to = "/" className = {classes.navLink}>
              <ListItem button>
                <ListItemIcon>
                  <TimelineIcon />
                </ListItemIcon>
                <ListItemText primary = "Dashboard" />
              </ListItem>
            </Link>
            <Link to = "/OrganisationFeature" className = {classes.navLink}>
              <ListItem button>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary = "People and organisations" />
              </ListItem>
            </Link>
            <Link to = "/Films" className = {classes.navLink}>
              <ListItem button>
                <ListItemIcon>
                  <HdIcon />
                </ListItemIcon>
                <ListItemText primary = "Films" />
              </ListItem>
            </Link>
            <Link to = "/FilmFestivals" className = {classes.navLink}>
              <ListItem button>
                <ListItemIcon>
                  <CakeIcon />
                </ListItemIcon>
                <ListItemText primary = "Film festivals" />
              </ListItem>
            </Link>
            <Link to = "/FilmApplicationFeature" className = {classes.navLink}>
              <ListItem button>
                <ListItemIcon>
                  <PublishIcon />
                </ListItemIcon>
                <ListItemText primary = "Film submissions" />
              </ListItem>
            </Link>
            <Link to = "/DevTasks" className = {classes.navLink}>
              <ListItem button>
                <ListItemIcon>
                  <PlaylistAddCheckIcon />
                </ListItemIcon>
                <ListItemText primary = "Dev Tasks" />
              </ListItem>
            </Link>
          </List>
          <Divider />
        </Drawer>
        <main      className = {classes.content}>
        <div       className = {classes.appBarSpacer} />
        <Container maxWidth  = {false} className = {classes.container}>
            <Switch>
              <Route exact path = "/" component              = {withAuthenticationRequired(Dashboard)}/>
              <Route exact path = "/OrganisationFeature" component = {withAuthenticationRequired(OrganisationFeature)} />
              <Route exact path = "/Films" component         = {withAuthenticationRequired(Film)} />
              {/* <Route exact path = "/filmFestivals" component = {FilmFestivalList} />
              <Route exact path = "/demo" component = {DataTableCrudDemo} /> */}
              <Route exact path = "/FilmFestivals" component = {withAuthenticationRequired(FilmFestival)} />
              <Route exact path = "/DevTasks" component = {withAuthenticationRequired(DevTask)} />
              <Route exact path = "/FilmApplicationFeature" component = {withAuthenticationRequired(FilmApplicationFeature)} />
            </Switch>

            <Box pt = {4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    </Router>
    </Provider>
  )
}
