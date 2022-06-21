import React from 'react'
import { FormBody } from './app/components/FormBody'
import { InterfaceData } from './app/components/InterfaceData'

export const FarmaciaApp = () => {
    return (
        <div className='container'>  
            <div className='row custom-row justify-content-center align-items-center'>
                <div className='col-lg-6'>
                    <InterfaceData />
                </div>

                <div className='col-lg-6'>
                    <FormBody />
                </div>
            </div>        
        </div>
    )
}
