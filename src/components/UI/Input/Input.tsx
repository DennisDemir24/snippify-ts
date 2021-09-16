import React from 'react'

const Input = (props: any) => {
    return (
        <>
          <input
            className="w-full rounded-md p-2"
            placeholder={props.placeholder}
            {...props}
          />
        </>
    )
}

export default Input
