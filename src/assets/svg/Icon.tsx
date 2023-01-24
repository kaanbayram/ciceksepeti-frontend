import React from 'react'
import { IIConProps } from '.'

export default function Icon(props: IIConProps) {
  return (
    <img
      className={props.iconClassName}
      src={require(`./default/${props.iconName}.svg`)}
    />
  )
}
