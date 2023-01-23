import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/material'
import CardBasic from './CardBase'

const CardsBasic = ({ pokemons, onClickItem }) => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      {
        pokemons.map((item, index) => (
          <CardBasic
            key={`MainCard-${index}`}
            title={item.name}
            url={item.url}
            photo={item.photo}
            onClick={() => onClickItem(item)} />
        ))
      }
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    width        : '100%',
    display      : 'flex',
    flexDirection: 'row',
    flexWrap     : 'wrap',
    gap          : theme.spacing(1)
  }
}), { name: 'CardsBasic' })

CardsBasic.propTypes = {
  pokemons   : PropTypes.array,
  onClickItem: PropTypes.func
}

export default CardsBasic