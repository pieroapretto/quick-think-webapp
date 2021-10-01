import React, { FC } from 'react'
import {Link} from 'react-router-dom'

interface PropLink {
    to: string, 
    label: string
}
export const LinkComponent: FC<PropLink> = ({to, label}) => {
    return <Link to={to}>{label}</Link>
}
