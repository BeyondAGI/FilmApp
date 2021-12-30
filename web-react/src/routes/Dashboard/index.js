import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

// import RatingsChart from './RatingsChart'
import FilmCount from './FilmCount'
import FilmFestivalCount from './FilmFestivalCount'
import OrganisationCount from './OrganisationCount'
import PersonCount from './PersonCount'
import PersonProfessionCount from './PersonProfessionCount'

import Image1 from '../../assets/img/tent.png' // Import using relative path
import Image2 from '../../assets/img/clapperboard.png'
import Image3 from '../../assets/img/office-building.png'
import Image4 from '../../assets/img/scientist.png'
import Image5 from '../../assets/img/bag.png'
//D8D8D8
const styles1 = {
  paperContainer: {
    backgroundImage: `url(${Image1})`,
    backgroundSize: '20%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
}
const styles2 = {
  paperContainer: {
    backgroundImage: `url(${Image2})`,
    backgroundSize: '20%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
}

const styles3 = {
  paperContainer: {
    backgroundImage: `url(${Image3})`,
    backgroundSize: '35%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
}

const styles4 = {
  paperContainer: {
    backgroundImage: `url(${Image4})`,
    backgroundSize: '35%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
}

const styles5 = {
  paperContainer: {
    backgroundImage: `url(${Image5})`,
    backgroundSize: '35%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
}

// import RecentReviews from './RecentReviews'
export default function Dashboard() {
  const theme = useTheme()

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      elevation: 3,
    },
    fixedHeight: {
      height: 340,
    },
  }))
  const classes = useStyles(theme)
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} lg={7}>
          <Paper className={fixedHeightPaper} elevation={5} style={styles1.paperContainer}>
            <FilmFestivalCount />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={5}>
          <Paper className={fixedHeightPaper} elevation={5} style={styles2.paperContainer}>
            <FilmCount />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} lg={4}>
          <Paper className={fixedHeightPaper} elevation={5} style={styles3.paperContainer}>
            <OrganisationCount />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper className={fixedHeightPaper} elevation={5} style={styles4.paperContainer}>
            <PersonCount />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper className={fixedHeightPaper} elevation={5} style={styles5.paperContainer}>
            <PersonProfessionCount />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
