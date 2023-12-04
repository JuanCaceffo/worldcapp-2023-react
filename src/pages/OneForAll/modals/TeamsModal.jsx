import { Box, Button, Modal, TextField, Typography } from '@mui/material'
// import { Team } from 'src/domain/models/TeamModel/Team.model'
import './TeamsModal.css'
import { FormActions } from 'src/components/FormActions/FormActions'

//TODO: Luego mover o pasar a css
const style = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  gap: 3
}

//TODO: mover y reutilizar
// const InputType = {
//   TextField: 'TextField',
//   Select: 'Select',
// }

const TeamsModal = ({ onClose }) => {
  // const [team, setTeam] = useState(new Team())

  //   const fields = {
  //     nombre: {
  //       name: 'Nombre',
  //       type: InputType.TextField,
  //       value: team.nombre,
  //       className: 'field',
  //       elementProps: {},
  //       options: {},
  //     },
  //     confederacion: {
  //       name: 'Pedidos Pendientes',
  //       type: InputType.Select,
  //       value: team.tipoPuntoDeVenta,
  //       className: 'field',
  //       elementProps: { native: true },
  //       options: ['CONMEBOL', 'UEFA'], //TODO: traer del back las confederaciones
  //     },
  //     copasDelMundo: {
  //       name: 'Pedidos Pendientes',
  //       type: InputType.TextField,
  //       value: team.pedidosPendientes,
  //       className: 'field',
  //       elementProps: { type: 'number', min: 0 },
  //       options: {},
  //     },
  //     copasConfederacion: {
  //       name: 'Pedidos Pendientes',
  //       type: InputType.TextField,
  //       value: team.pedidosPendientes,
  //       className: 'field',
  //       elementProps: { type: 'number', min: 0 },
  //       options: {},
  //     }
  //   }


  const handleSave = () => {
    // card.isNew ? saveFunc(card) : saveFunc(card, card.id)
    onClose()
  }
  
  return (
    <>
      <Modal className='teams-modal'
        open={true}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField required label="Nombre" type="text"/>
          <TextField
            className="figuritas-form__select"
            required
            select
            SelectProps={{ native: true }}
          >
            <option>lala</option>
            <option>lele</option>
            <option>lolo</option>
          </TextField>
          <TextField required label="Copas del mundo" type="number" />
          <TextField required label="Copas confederacion" type="number" />
          <FormActions handleLeftButtonClick={handleSave} handleRightButtonClick={onClose} />
        </Box>
      </Modal>
    </>
  )
}

export default TeamsModal