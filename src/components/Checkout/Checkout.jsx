import React, { useContext, useEffect, useState } from 'react'
import Style from './Checkout.module.css'
import { useFormik } from 'formik'
import { CartContext } from '../../Context/CartContext'



export default function Checkout() {


  let {onlinePayment} = useContext(CartContext)

  let formik = useFormik({
    initialValues:{
      details: '',
      phone: '',
      city: ''
    },
    onSubmit:(values)=>{
      payNow(values);
    },
  })

  async function payNow(values){
    await onlinePayment(values);
  }

  
  return (
    <>
     <div className="container mx-auto">
        

      <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label htmlFor="details" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray">Details:</label>
          <input values={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" id="details" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
          {formik.errors.details && formik.touched.details? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">{formik.errors.details}</div>:""}
        </div>
        <div className="mb-5">
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray">Phone:</label>
          <input values={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur} type="tel" id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
          {formik.errors.phone && formik.touched.phone? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">{formik.errors.phone}</div>:""}

        </div>
        <div className="mb-5">
          <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray">City:</label>
          <input values={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" id="city" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
          {formik.errors.city && formik.touched.city? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">{formik.errors.city}</div>:""}
        </div>

        <div className='text-end'>
          <button
          type='submit'
          className='bg-green-600 py-3 px-7 text-white rounded-md'>
            payNow
          </button>
        </div>
      </form>
     </div>
    </>
  )
}
