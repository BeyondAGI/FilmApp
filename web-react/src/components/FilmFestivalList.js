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
  TablePagination,
  Paper,
  TableSortLabel,
  TextField,
  TableContainer,
} from '@material-ui/core'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Controls from "./controls/Controls";

import Title from './Title'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const styles = (theme) => ({
  root: {
    maxWidth: 2000,
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    margin: 'auto',
    width: '100%',
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

const ellipsisStyle = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  width: '220px',
  maxWidth: '220px'
}


const GET_FILMFESTIVAL = gql`
  query usersPaginateQuery(
    $first  : Int
    $offset : Int
    $orderBy: [FilmFestivalSort]
    $filter : FilmFestivalWhere
  ) {
    filmFestivals(
      options: { limit: $first, skip: $offset, sort: $orderBy }
      where  : $filter
    ) {
      radiatorID
      nameInternational
      address
      about
      email
      telephone
      level
      foundingYear
      locatedInCountry
      takesPlaceInCity
      acceptsFilmLenghts
      acceptsFilmGenre01
      rulesAndRegulations
      premiereRequirement
      filmAge
    }
    filmFestivalCount
  }
`


function FilmFestivalList(props) {
  const { classes } = props
  const [order, setOrder] = React.useState('ASC')
  const [orderBy, setOrderBy] = React.useState('radiatorID')
  const [page, setPage] = React.useState(0);
  const [filterState, setFilterState] = React.useState({ radiatorIDFilter: '' })
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const getFilter = () => {
    return filterState.radiatorIDFilter.length > 0
      ? { radiatorID_CONTAINS: filterState.radiatorIDFilter }
      : {}
  }

  const { loading, data, error } = useQuery(GET_FILMFESTIVAL, {
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

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const openInPopup = item => {
    console.log(item);
    // setRecordForEdit(item)
    // setOpenPopup(true)
  }


  return (
    <Paper style={{ padding: "1rem" }} className={classes.root} elevation={0}>
      <Title >Film Festivals</Title>
      <TextField
        id="search"
        label="RadiatorID Contains"
        className={classes.textField}
        value={filterState.radiatorIDFilter}
        onChange={handleFilterChange('radiatorIDFilter')}
        margin="normal"
        variant="outlined"
        size="small"
        type="text"
        InputProps={{
          className: classes.input,
        }}
      />
      {loading && !error && <p>Loading...</p>}
      {error && !loading && <p>Error</p>}
      {data && !loading && !error && (
        <Paper style={{ padding: "0rem" }}>
          <TableContainer component={Paper}>
            <Table stickyHeader className={classes.table} aria-label="a dense sticky table" size="small">
              <TableHead>
                <TableRow>
                  <StyledTableCell key="radiatorID" sortDirection={orderBy === 'radiatorID' ? order.toLowerCase() : false}>
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel active={orderBy === 'radiatorID'} direction={order.toLowerCase()} onClick={() => handleSortRequest('radiatorID')}>
                        Radiator Id
                      </TableSortLabel>
                    </Tooltip>
                  </StyledTableCell>
                  <StyledTableCell key="nameInternational">International Name</StyledTableCell>
                  <StyledTableCell key="address">Address</StyledTableCell>
                  <StyledTableCell key="email">Email</StyledTableCell>
                  <StyledTableCell key="telephone">Telephone</StyledTableCell>
                  <StyledTableCell key="level">Level</StyledTableCell>
                  <StyledTableCell key="foundingYear">Founding Year</StyledTableCell>
                  <StyledTableCell key="locatedInCountry">Located In Country</StyledTableCell>
                  <StyledTableCell key="takesPlaceInCity">Takes Place In City</StyledTableCell>
                  <StyledTableCell key="acceptsFilmLenghts">Film Lenghts</StyledTableCell>
                  <StyledTableCell key="acceptsFilmGenre01">Film Genre</StyledTableCell>
                  <StyledTableCell key="premiereRequirement">Premier Requirements</StyledTableCell>
                  <StyledTableCell key="filmAge">Film Age</StyledTableCell>
                  <StyledTableCell key="actions">Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.filmFestivals.map((n) => {
                  return (
                    <StyledTableRow key={n.radiatorID}>
                      <TableCell component="th" scope="row">{n.radiatorID}</TableCell>
                      <TableCell style={ellipsisStyle}>{n.nameInternational}</TableCell>
                      <TableCell style={ellipsisStyle}>{n.address}</TableCell>
                      <TableCell style={ellipsisStyle}>{n.email}</TableCell>
                      <TableCell style={ellipsisStyle}>{n.telephone}</TableCell>
                      <TableCell style={ellipsisStyle}>{n.level}</TableCell>
                      <TableCell style={ellipsisStyle}>{n.foundingYear}</TableCell>
                      <TableCell style={ellipsisStyle}>{n.locatedInCountry}</TableCell>
                      <TableCell style={ellipsisStyle}>{n.takesPlaceInCity}</TableCell>
                      <TableCell style={ellipsisStyle}>{n.acceptsFilmLenghts}</TableCell>
                      <TableCell style={ellipsisStyle}>{n.acceptsFilmGenre01}</TableCell>
                      <TableCell style={ellipsisStyle}>{n.premiereRequirement}</TableCell>
                      <TableCell style={ellipsisStyle}>{n.filmAge}</TableCell>
                      <TableCell>
                        <Controls.ActionButton
                          color="primary"
                          onClick={() => { openInPopup() }}>
                          <EditOutlinedIcon fontSize="small" />
                        </Controls.ActionButton>
                        <Controls.ActionButton
                          color="secondary">
                          <CloseIcon fontSize="small" />
                        </Controls.ActionButton>
                      </TableCell>
                    </StyledTableRow>
                  )
                })}
              </TableBody>

            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 20, 50, { label: 'All', value: -1 }]}
            colSpan={5}
            count={data.filmFestivalCount}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </Paper>
  )
}

export default withStyles(styles)(FilmFestivalList)
