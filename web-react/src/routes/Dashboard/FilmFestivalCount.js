import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from '../../components/Title'
import { useQuery, gql } from '@apollo/client'

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  navLink: {
    textDecoration: 'none',
  },
})

const GET_COUNT_QUERY = gql`
  query {
    aggregateFilmFestival {
      count
    }
  }
`

export default function Deposits() {
  const classes = useStyles()

  const { loading, error, data } = useQuery(GET_COUNT_QUERY)
  if (error) return <p>Error</p>
  return (
    <React.Fragment>
      <Title>Total Film Festivals</Title>
      <Typography component="p" variant="h4">
        {loading ? 'Loading...' : data.aggregateFilmFestival.count}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Film festivals found
      </Typography>
      <div>
        <Link to="/filmfestivals" className={classes.navLink}>
          View film festivals
        </Link>
      </div>
    </React.Fragment>
  )
}
