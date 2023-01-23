import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
import { Box, Dialog, DialogTitle, DialogContent, IconButton, CircularProgress, ButtonGroup, Button } from '@mui/material'
import {
  Close as CloseIcon
} from '@mui/icons-material'
import { useGetPokemon } from '../hook/pokemon/useGetPokemon'
import DetailBase from '../components/DetailBase'
import CardsBasic from '../components/CardsBase'
import ListBase from '../components/ListBase'

export const viewType = {
  list: 'list',
  card: 'card'
}

const Main = ({ viewInit = viewType.card }) => {
  const classes = useStyles()

  const [view, setView] = useState(viewInit)
  const [pokemonSelected, setPokemonSelected] = useState(null)

  const { loading, pokemons } = useGetPokemon()

  const handleClick = (pokemon) => {
    setPokemonSelected(pokemon)
  }

  const handleCloseDialog = () => {
    setPokemonSelected(null)
  }

  const handleChangeView = (viewCurrent) => {
    setView(viewCurrent)
  }

  return (
    <Box className={classes.root}>
      <ButtonGroup>
        <Button variant={view === viewType.card ? 'contained' : 'outlined'} onClick={() => handleChangeView(viewType.card)}>Card</Button>
        <Button variant={view === viewType.list ? 'contained' : 'outlined'} onClick={() => handleChangeView(viewType.list)}>List</Button>
      </ButtonGroup>
      <Box className={classes.container}>
        {
          loading && (
            <CircularProgress />
          )
        }
        {
          view === viewType.card && !loading && (
            <CardsBasic
              pokemons={pokemons}
              onClickItem={handleClick}/>
          )
        }
        {
          view === viewType.list && !loading && (
            <ListBase
              pokemons={pokemons}/>
          )
        }
      </Box>
      {
        Boolean(pokemonSelected) && (
          <Dialog open onClose={handleCloseDialog} maxWidth='md'>
            <DialogTitle classes={{root: classes.dialogTitle}}>
              {`Pokemon: ${pokemonSelected.name}`}
              <IconButton onClick={handleCloseDialog}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <DetailBase {...pokemonSelected} />
            </DialogContent>
          </Dialog>
        )
      }
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    display       : 'flex',
    justifyContent: 'space-between',
    alignItems    : 'center'
  },
  root: {
    display      : 'flex',
    flexDirection: 'column',
    gap          : theme.spacing(1),
    padding      : theme.spacing(1, 0)
  },
  container: {
    width        : '100%',
    display      : 'flex',
    flexDirection: 'row',
    flexWrap     : 'wrap',
    gap          : theme.spacing(1)
  }
}), { name: 'Main' })

Main.propTypes = {
  viewInit: PropTypes.string
}

export default Main