import React from 'react'
import Loader from 'react-loader-spinner'

const PageLoader = () =>
    <div className="px-5 py-5 my-5 text-center">
        <Loader styles={{ width: '100%', height: '100%' }} type="Oval" color="#00BFFF" height={100} width={100} />
    </div>

export default PageLoader;
