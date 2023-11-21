import { enqueueSnackbar } from "notistack"

const HandleError = ( error, navigate, notistack ) => {
  const errorData = error.response?.data ?? { status: 0 }
  let errorMessage = ''
  let navegar = false

  if (errorData.status >= 500) {
    errorMessage = 'Hubo un error al realizar la operación. Consulte al administrador del sistema.'
    navegar = true
  } else if (errorData.status === 404) {
    errorMessage = 'El recurso no ha sido encontrado.'
    navegar = true
  } else if (errorData.status >= 400) {
    errorMessage = 'Se ha producido un error en la solicitud. Por favor, verifique los datos y vuelva a intentarlo.'
  } else if (errorData.status === 0) {
    errorMessage = 'El servidor se encuentra sin conexión.'
    navegar = true
  } else {
    errorMessage = 'Error desconocido.'
  }

  if (navegar && navigate){
    navigate('/error', {state: {...errorData, errorMessage}} )
  }else{
    enqueueSnackbar(errorData.message ?? errorMessage, {
      anchorOrigin: {
        vertical: notistack?.vertical ?? 'bottom',
        horizontal: notistack?.horizontal ?? 'left'
      }
    })
  }
}

export default HandleError