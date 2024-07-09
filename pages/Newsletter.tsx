import React from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';

// interface FormValues {
//   name: string;
//   email: string;
// }

const Newsletter: React.FC = () => {
  // const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  // const onSubmit: SubmitHandler<FormValues> = (data) => {
  //   // Save data to local storage
  //   localStorage.setItem('newsletterData', JSON.stringify(data));
  //   alert('Subscription successful!');
  // };

  return (
    <div className="newsletter p-3 m-auto align-center text-center bg-[#FFF1EF]  ">
     
      <form className="flex flex-row justify-between px-5 gap-3 align-center content-center m-auto  ">
      <div className="heading align-center m-auto w-[10%] text-2xl font-bold tracking-widest">
        <span className="font-bold text-[#1B263B]">NEWSLETTER</span>
      </div>
        <div className="name w-[30%]">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"  />
          {/* {errors.name && <span>{errors.name.message}</span>} */}
        </div>
        
        <div className="email flex flex-row w-[30%]">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
          {/* {errors.email && <span>{errors.email.message}</span>} */}
          <button type="submit" className="bg-slate-600 py-1 px-2 text-white ">Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
