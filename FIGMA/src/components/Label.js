import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'

const Label = ({ label, value }) => (
  <Box display='flex' alignItems='center' justifyContent='space-between'>
    <Typography variant='caption'>{label}</Typography>
    <Typography variant='body1'>{value}</Typography>
  </Box>
)

Label.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string
}

export default Label