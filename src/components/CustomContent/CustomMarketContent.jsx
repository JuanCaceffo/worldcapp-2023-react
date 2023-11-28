import { Box, CardContent, Typography } from "@mui/material"
import './CustomContent.css'
import '../CardBase/CardBase.css'

export const CustomMarketContent = (content) => {
  return (
    <CardContent className='card-content card-content--column'>
      <Box className="card-content__section">        
        <i className="card-content__icon fas fa-location-dot"/>
        <Typography className="card-content__text">
          {content.direccion}
        </Typography>
      </Box>      
      <Box className="card-content__section">
        <i className="card-content__icon far fa-envelope"/>
        <Typography className="card-content__text">
          {content.stock}
        </Typography>
      </Box>
    </CardContent>
  )
}