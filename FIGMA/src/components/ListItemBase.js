import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { makeStyles } from '@mui/styles'

const ListItemBase = ({ name, url, photo }) => {
  const classes = useStyles()

  return (
    <>
      <ListItem classes={{ root: classes.root }}>
        <ListItemAvatar>
          <Avatar src={photo}>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={url} />
      </ListItem>
      <Divider />
    </>
  )
}

const useStyles = makeStyles(() => ({
  root: {

  }
}), { name: 'ListItemBase'})

ListItemBase.propTypes = {
  name : PropTypes.string,
  url  : PropTypes.string,
  photo: PropTypes.string
}

export default ListItemBase