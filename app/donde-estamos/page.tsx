import React from 'react'
import { validator } from '@/utils/ValidatorForm'

function page() {
  return (
    <div>
        <div>{validator({ name: "hola" })}</div>
        page Donde estamos</div>
  )
}

export default page