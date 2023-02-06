import { Formik } from 'formik'
import * as yup from 'yup'
import './index.css'

function App() {
   //пишем валидацию для input
   const validationsSchema = yup.object().shape({
      name: yup
         .string()
         .typeError('Должно быть строкой')
         .required('Обязательное поле'),
      secondName: yup
         .string()
         .typeError('Должно быть строкой')
         .required('Обязательное поле'),
      password: yup
         .string()
         .typeError('Должно быть строкой')
         .required('Обязательное поле'),
      confirmPassword: yup
         .string()
         .required('Обязательное поле')
         .oneOf([yup.ref('password')], 'Пароли не совпадают'),
      email: yup
         .string()
         .email('Введите вверный Email')
         .required('Обязательное поле'),
      confirmEmail: yup
         .string()
         .oneOf([yup.ref('email')], 'Email не совпадают')
         .required('Обязательное поле'),
   })

   return (
      <>
         {/* Формируем наше первоночальное состояние и эти значения должны быть в name наших input */}
         <Formik
            initialValues={{
               name: '', // Имя
               secondName: '', //Фамилия
               password: '', //Пароль
               confirmPassword: '', //Подтверждение пароля
               email: '', // Почта
               confirmEmail: '', //Подтверждение Email
            }}
            validateOnBlur // Далее показываем когда будет валидироваться в нашемслучае будет валидироватся когда будем переходить на следующее поле
            //   Показываем как будет отправляться форма
            onSubmit={value => {
               console.log(value)
            }}
            validationSchema={validationsSchema}
         >
            {({
               values,
               errors,
               touched,
               handleChange,
               handleBlur,
               isValid,
               handleSubmit,
               dirty,
            }) => (
               <div className='App'>
                  <div className='w-full max-w-sm'>
                     <form className='bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4'>
                        <div className='mb-4'>
                           <label className='block text-gray-700 text-sm font-bold mb-2'>
                              Имя
                           </label>
                           <input
                              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                              name='name' // обязательное поле для FORMIK
                              type='text'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder='Username'
                              value={values.name}
                           />
                           {/* тут выводим ошибку если она у нас есть */}
                           {touched.name && errors.name && (
                              <p className='text-red-500 text-xs italic'>
                                 {errors.name}
                              </p>
                           )}
                        </div>
                        <div className='mb-4'>
                           <label className='block text-gray-700 text-sm font-bold mb-2'>
                              Фамилия
                           </label>
                           <input
                              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                              name='secondName'
                              type='text'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.secondName}
                              placeholder='Secondname'
                           />
                           {touched.secondName && errors.secondName && (
                              <p className='text-red-500 text-xs italic'>
                                 {errors.secondName}
                              </p>
                           )}
                        </div>
                        <div className='mb-4'>
                           <label className='block text-gray-700 text-sm font-bold mb-2'>
                              Пароль
                           </label>
                           <input
                              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                              name='password'
                              type='password'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                              placeholder='Password'
                           />
                           {touched.password && errors.password && (
                              <p className='text-red-500 text-xs italic'>
                                 {errors.password}
                              </p>
                           )}
                        </div>
                        <div className='mb-4'>
                           <label className='block text-gray-700 text-sm font-bold mb-2'>
                              Повторите пароль
                           </label>
                           <input
                              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                              name='confirmPassword'
                              type='password'
                              placeholder='Сonfirm Password'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.confirmPassword}
                           />
                           {touched.confirmPassword &&
                              errors.confirmPassword && (
                                 <p className='text-red-500 text-xs italic'>
                                    {errors.confirmPassword}
                                 </p>
                              )}
                        </div>
                        <div className='mb-4'>
                           <label className='block text-gray-700 text-sm font-bold mb-2'>
                              Email
                           </label>
                           <input
                              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                              name='email'
                              type='text'
                              placeholder='Email'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                           />
                           {touched.email && errors.email && (
                              <p className='text-red-500 text-xs italic'>
                                 {errors.email}
                              </p>
                           )}
                        </div>
                        <div className='mb-6'>
                           <label className='block text-gray-700 text-sm font-bold mb-2'>
                              Повторите Email
                           </label>
                           <input
                              className='shadow appearance-none border b rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                              name='confirmEmail'
                              type='text'
                              placeholder='Email'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.confirmEmail}
                           />
                           {touched.confirmEmail && errors.confirmEmail && (
                              <p className='text-red-500 text-xs italic'>
                                 {errors.confirmEmail}
                              </p>
                           )}
                        </div>
                        <div className='flex items-center justify-between'>
                           <button
                              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline'
                              type='submit'
                              disabled={!isValid && !dirty}
                              onClick={handleSubmit}
                           >
                              Sign In
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            )}
         </Formik>
      </>
   )
}

export default App
