  
import React, { useEffect, useState } from 'react'
import { setTheme } from './../utils/themes'
import { useMediaQuery } from 'react-responsive'

function ThemeToggle() {
    const [togClass, setTogClass] = useState('dark')
    let theme = localStorage.getItem('theme')

    const isLarge = useMediaQuery({
        query: '(min-width: 992px)'
    })

    const handleOnClick = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light')
            setTogClass('light')
        }
        else {
            setTheme('theme-dark')
            setTogClass('dark')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTogClass('dark')
        }
        else if (localStorage.getItem('theme') === 'theme-light') {
            setTogClass('light')
        }
    }, [theme])

    return (
        <div className="container--toggle" style={{ marginLeft: isLarge && 30, position: isLarge && 'absolute', right: isLarge && 35 }}>
            {
                togClass === "light" ?
                <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} checked />
                :
                <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} />
            }
            <label htmlFor="toggle" className="toggle--label">
                <span className="toggle--label-background"></span>
            </label>
        </div>
    )
}

export default ThemeToggle