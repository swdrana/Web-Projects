// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';

// const AddCustomer = () => {
//   const { register, handleSubmit, reset, formState: { errors } } = useForm();
//   const [paidAmount, setPaidAmount] = useState(0);
//   const [dueAmount, setDueAmount] = useState(0);

//   const onSubmit = async (data) => {
//     try {
//       const response = await axios.post('http://localhost:5000/customers', data);
//       console.log(response.data);
//       reset();
//       setPaidAmount(0);
//       setDueAmount(0);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const calculateDueAmount = (event) => {
//     const totalAmount = Number(event.target.value);
//     setDueAmount(totalAmount - paidAmount);
//   };

//   const calculatePaidAmount = (event) => {
//     const paidAmount = Number(event.target.value);
//     setPaidAmount(paidAmount);
//     setDueAmount(event.target.form.total_amount.value - paidAmount);
//   };

//   return (
//     <div className="flex justify-center">
//       <div className="w-full md:w-3/4 lg:w-1/2 p-4">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
//             <input {...register('name', { required: true })} id="name" type="text" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
//             {errors.name && <p className="text-red-500 mt-1">Name is required</p>}
//           </div>
//           <div className="mb-4">
//             <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
//             <input {...register('phone', { required: true })} id="phone" type="text" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
//             {errors.phone && <p className="text-red-500 mt-1">Phone is required</p>}
//           </div>
//           <div className="mb-4">
//             <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
//             <input {...register('address', { required: true })} id="address" type="text" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
//             {errors.address && <p className="text-red-500 mt-1">Address is required</p>}
//           </div>
//           <div className="mb-4">
//             <label htmlFor="total_amount" className="block text-gray-700 font-bold mb-2">Total Amount</label>
//             <input {...register('transactions.0.total_amount', { required: true, min: 1 })} id="total_amount" type="number" min="1" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" onChange={calculateDue

import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddCustomer = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newData = {
      name: data.name,
      phone: data.phone,
      address: data.address,
      transactions: [
        {
          date: data.tranDate,
          total_amount: data.totalAmount,
          paid_amount: data.paidAmount,
          due_amount: data.dueAmount,
          payment_method: data.paymentMethod,
          note: data.note,
        },
      ],
    };

    axios
      .post('http://localhost:8080/customers', newData)
      .then(() => {
        console.log('Data added successfully');
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(newData)
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            {...register('name')}
            type="text"
            id="name"
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            {...register('phone')}
            type="text"
            id="phone"
            placeholder="123-456-7890"
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            {...register('address')}
            type="text"
            id="address"
            placeholder="123 Main St, Anytown USA"
            required
          />
        </div>
        <div>
          <label htmlFor="tranDate">Transaction Date</label>
          <input
            {...register('tranDate')}
            type="date"
            id="tranDate"
            required
          />
        </div>
        <div>
          <label htmlFor="totalAmount">Total Amount</label>
          <input
            {...register('totalAmount')}
            type="number"
            step=".01"
            id="totalAmount"
            required
          />
        </div>
        <div>
          <label htmlFor="paidAmount">Paid Amount</label>
          <input
            {...register('paidAmount')}
            type="number"
            step=".01"
            id="paidAmount"
            required
          />
        </div>
        <div>
          <label htmlFor="dueAmount">Due Amount</label>
          <input
            {...register('dueAmount')}
            type="number"
            step=".01"
            id="dueAmount"
            required
          />
        </div>
        <div>
          <label htmlFor="paymentMethod">Payment Method</label>
          <input
            {...register('paymentMethod')}
            type="text"
            id="paymentMethod"
            required
          />
        </div>
        <div>
          <label htmlFor="note">Note</label>
          <input {...register('note')} type="text" id="note" required />
        </div>
        <button type="submit">Add Customer</button>
      </form>
    </div>
  );
};

export default AddCustomer;
