import React from 'react'
import Logo from '../../../assets/logo.svg'
import Input from '../../UI/Input/Input'

const Login: React.FC = () => {
    const onSubmit = (e: any) => {
        e.preventDefault()

        console.log('Submitted')
    }

    return (
        <div className="flex justify-center">
    <div className="shadow-md bg-form-bg mt-48 p-12 rounded-md h-80 w-2/4">
      <div className="text-primary">
        <div className="mb-4">
            <img className="h-6 m-auto" src={Logo} alt="" />
        </div>
        <p className="mt-1 text-lg font-heading text-center">Sign in to Snippify</p>
      </div>
      <form onSubmit={onSubmit} className="text-center">
        <div className="form-group mt-2">
          <Input placeholder="Email"  />
        </div>
        <div className="form-group mt-2">
          <Input placeholder="Password" />
        </div>
        <input
          type="submit"
          value="Login"
          className="bg-primary-btn-bg pt-1.5 pb-1.5 pl-6 pr-6 rounded text-s text-white mt-4"
        />
      </form>
      <span className="text-primary text-sm flex justify-center mt-3">Sign up to get started</span>
     </div>
    </div>
    )
}

export default Login
