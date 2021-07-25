import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { withStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Paper,
  TableSortLabel,
  TextField,
} from '@material-ui/core'

import Title from './Title'

const styles = (theme) => ({
  root: {
    maxWidth: 700,
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    margin: 'auto',
  },
  table: {
    minWidth: 700,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minWidth: 300,
  },
})

const GET_FILM = gql`
  query usersPaginateQuery(
    $first: Int
    $offset: Int
    $orderBy: [FilmSort]
    $filter: FilmWhere
  ) {
    films(
      options: { limit: $first, skip: $offset, sort: $orderBy }
      where: $filter
    ) {
      id: ID
      ProductionYear
      TitleSales
      TitleDE
      TitleFR
      TitleAR
    }
  }
`

function FilmList(props) {
  const { classes } = props
  const [order, setOrder] = React.useState('ASC')
  const [orderBy, setOrderBy] = React.useState('ID')
  const [page] = React.useState(0)
  const [rowsPerPage] = React.useState(10)
  const [filterState, setFilterState] = React.useState({ filmidFilter: '' })

  const getFilter = () => {
    return filterState.filmidFilter.length > 0
      ? { ID_CONTAINS: filterState.filmidFilter }
      : {}
  }

  const { loading, data, error } = useQuery(GET_FILM, {
    variables: {
      first: rowsPerPage,
      offset: rowsPerPage * page,
      orderBy: { [orderBy]: order },
      filter: getFilter(),
    },
  })

  const handleSortRequest = (property) => {
    const newOrderBy = property
    let newOrder = 'DESC'

    if (orderBy === property && order === 'DESC') {
      newOrder = 'ASC'
    }

    setOrder(newOrder)
    setOrderBy(newOrderBy)
  }

  const handleFilterChange = (filterName) => (event) => {
    const val = event.target.value

    setFilterState((oldFilterState) => ({
      ...oldFilterState,
      [filterName]: val,
    }))
  }

  return (
    <Paper className={classes.root}>
      <Title>Film List</Title>
      <TextField
        id="search"
        label="Film ID Contains"
        className={classes.textField}
        value={filterState.filmidFilter}
        onChange={handleFilterChange('filmidFilter')}
        margin="normal"
        variant="outlined"
        type="text"
        InputProps={{
          className: classes.input,
        }}
      />
      {loading && !error && <p>Loading...</p>}
      {error && !loading && <p>Error</p>}
      {data && !loading && !error && (
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell
                key="ID"
                sortDirection={orderBy === 'ID' ? order.toLowerCase() : false}
              >
                <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                  <TableSortLabel
                    active={orderBy === 'ID'}
                    direction={order.toLowerCase()}
                    onClick={() => handleSortRequest('ID')}
                  >
                    Id
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell key="ProductionYear">Production Year</TableCell>
              <TableCell key="TitleSales">Title Sales</TableCell>
              <TableCell key="TitleDE">German Title</TableCell>
              <TableCell key="TitleFR">French Title</TableCell>
              <TableCell key="TitleAR">Arabic Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.films.map((n) => {
              return (
                <TableRow key={n.id}>
                  <TableCell component="th" scope="row">
                    {n.id}
                  </TableCell>
                  <TableCell>{n.ProductionYear}</TableCell>
                  <TableCell>{n.TitleSales}</TableCell>
                  <TableCell>{n.TitleDE}</TableCell>
                  <TableCell>{n.TitleFR}</TableCell>
                  <TableCell>{n.TitleAR}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      )}
    </Paper>
  )
}

export default withStyles(styles)(FilmList)
