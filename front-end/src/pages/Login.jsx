import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <section className='flex items-center'>
        <div className='flex flex-col items-center gap-4 max-w-96 mx-auto w-full'>
            <h1 className='text-3xl font-bold'>Faça seu login</h1>
            <form className='flex flex-col gap-2 w-full'>
                <input className='w-full border border-gray-300 py-2 px-4 rounded-full' type="email"
                placeholder='Digite seu e-mail'
                />
                <input className='w-full border border-gray-300 py-2 px-4 rounded-full' type="password"
                placeholder='Digite sua senha'
                />
                <button className='bg-primary-400 text-white font-bold cursor-pointer w-full border border-gray-300 py-2 px-4 rounded-full'>
                    Login
                </button>
            </form>

            <p>Ainda não tem uma conta? <Link to="/register" className='underline font-semibold'>Registre-se aqui!</Link></p>

        </div>
    </section>
  )
}
