import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

const CardBase = ({ title, description, photo, onClick }) => {
  return (
    <Card sx={{ minWidth: 175 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={photo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onClick} size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

CardBase.propTypes = {
  title      : PropTypes.string,
  description: PropTypes.string,
  photo      : PropTypes.string,
  onClick    : PropTypes.func
}

export default CardBase