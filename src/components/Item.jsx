import React from 'react'
import cn from 'classnames'
import cnBind from 'classnames/bind'
import styles from './Item.module.scss'

const cx = cnBind.bind(styles)

export const Item = props => {
   const { id, name, secondName, active, onClick } = props //вытягиваем из props с помощью деструктцризации
   const classnames = cn('testItem', cx('item', { active }))

   return (
      <div className={classnames} onClick={onClick}>
         <p>
            <i>{id}</i> {name} {secondName}
         </p>
      </div>
   )
}
