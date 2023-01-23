import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
import { List } from '@mui/material'
import ListItemBase from './ListItemBase'

const ListBase = ({ pokemons }) => {
  const classes = useStyles()

  return (
    <List classes={{root: classes.root}}>
      {
        pokemons?.map((item, index) => (
          <ListItemBase
            key={`ListBase-${index}`}
            name={item?.name}
            url={item?.url}
            photo={item?.photo}
          />
        ))
      }
    </List>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    width          : '100%',
    backgroundColor: theme.palette.common.white
  }
}), { name: 'ListBase' })

ListBase.propTypes = {
  pokemons: PropTypes.array
}

export default ListBase