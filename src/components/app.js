import React from "react"
import Sidebar from './sidebar.js'

const items = [
    { name: 'home', label: 'Home' },
    { 
        name: 'billing',
        label: 'Billing',
        items: [
            { name: 'statements', label: 'Statements' },
            { name: 'reports', label: 'Reports' }
        ]
    },
    {
        name: 'settings',
        label: 'Settings',
        items: [{ name: 'profile', label: 'Profile' }]
    }
]

function App() {
    return (
        <div>
            <Sidebar items={items} />
        </div>
    )
}

export default App