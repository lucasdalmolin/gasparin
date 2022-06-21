import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm';
import '../styles/formstyle.css'

export const FormBody = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        dni: '',
        vacuna: '',
        lote: '',
        fecha: ''
    });

    const {name, dni, vacuna, lote, fecha} = formValues;

    // useEffect(() => {
    //     console.log('email cambio')
    // }, [])
    
    const handleSubmit = (e) => { //addTask
        e.preventDefault();
        
        console.log( formValues )
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>GASPARIN</h1>
            <h2>Formulario de vacunacion</h2>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className='form-control'
                    placeholder='Nombre y Apellido'
                    autoComplete='off'
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                    type="number"
                    name="dni"
                    className='form-control'
                    placeholder='Dni'
                    autoComplete='off'
                    value={ dni }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="vacuna"
                    className='form-control'
                    placeholder='Vacuna'
                    autoComplete='off'
                    value={ vacuna }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                    type="number"
                    name="lote"
                    className='form-control'
                    placeholder='N°'
                    autoComplete='off'
                    value={ lote }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                    type="date"
                    name="fecha"
                    className='form-control'
                    placeholder='Fecha'
                    autoComplete='off'
                    value={ fecha }
                    onChange={ handleInputChange }
                />
            </div>

        <button type="submit" className='btn btn-primary'>
            Guardar
        </button>
        </form>
    )
}
