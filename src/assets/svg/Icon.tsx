import React from 'react'
import { IIConProps } from '.'

export default function Icon(props: IIConProps) {
  return (
    <img
      className={props.iconClassName}
      src={require(`./${props.size}/${props.iconName}.svg`)}
    />
  )
}
