import React from 'react'
import load from '../../static/css/Loader/Loader.module.css'

const Loader = () => {
    return (
        <div className={load.lds}>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loader;