import React, { useState } from 'react'
import styles from './Page.module.scss'
import cn from 'classnames'
import cnBind from 'classnames/bind'
import { Item } from './Item'
import { list } from './list.js'

const cx = cnBind.bind(styles)

export const Page = () => {
   const [activeElement, setActiveElement] = useState(null) // для того чтобы указывать на активный элемент
   const classes = cx('item', { active: !!activeElement }) // мы указываем какие стилибудут применены к нашему списку
   const btnClass = cx('button', {
      disabled: !activeElement,
   })

   return (
      <>
         {/* это пример просто склеивания двух классов одновременно с помощью данной библиотеки */}
         <div className={cn(styles.home, styles.text)}>пробная</div>

         {/* Пример использования для списка в нашем случае это list */}
         <div className={cn('test', classes)}>
            {list.map(item => {
               const { id } = item
               return (
                  <Item
                     key={id}
                     {...item}
                     active={activeElement === id} // для того тчобы показывать активный элемент
                     onClick={() => setActiveElement(id)} // для того чтобы этот элемент именно выбирался по нашему id
                  />
               )
            })}
         </div>

         <bitton className={btnClass} onClick={() => setActiveElement(null)}>
            Кнопка сброса стилей
         </bitton>
      </>
   )
}
