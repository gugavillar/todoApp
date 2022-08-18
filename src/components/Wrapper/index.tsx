/* eslint-disable no-undef */
/* eslint-disable react/display-name */
import { ComponentType } from 'react'

import { ToastContainer, toast } from 'react-toastify'

import { Loader } from '@components/Loader'

const notify = (message: string | undefined) =>
  toast.error(message, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined
  })

const Toast = () => (
  <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss={false}
    draggable={false}
    pauseOnHover={false}
  />
)

interface Base {
  hasNoData: boolean
  emptyComponent: JSX.Element
  isLoading?: boolean
  errorOnLoadData?: boolean
  message?: string
}

export const WrapperLoaderComponent = <TProps extends Base>(
  Component: ComponentType<TProps>
) => {
  return (props: TProps) => {
    if (props.isLoading) return <Loader />
    if (props.hasNoData) return props.emptyComponent
    if (props.errorOnLoadData) {
      notify(props.message)
      return <Toast />
    }
    return <Component {...props} />
  }
}
