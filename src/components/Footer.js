import React from 'react'

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-light">
            <div className="container">
                &copy; Youngstown Digital { new Date().getFullYear() }
            </div>
        </footer>
    )
}

export default Footer

