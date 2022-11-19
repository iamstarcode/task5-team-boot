import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import DefaultWrapper from './layouts/DefaultWrapper'
import { Template00, Template01, Template04 } from './components/templates'
import Index from './pages/Index'

const templates = [
    { id: '00', component: Template00 },
    { id: '01', component: Template01 },
    { id: '04', component: Template04 },
    // add your templates here and view at localhost:3000/templates/<template-id>/edit
]

function App() {
    return (
        <Routes>
            <Route element={<DefaultWrapper />}>
                {/* All external page goes in here */}
                <Route path="/" element={<Index />} />
            </Route>

            {/* this should be editable */}
            <Route element={<DefaultWrapper />}>
                {templates.map(Template => (
                    <Route
                        key={Template.id}
                        path={`/templates/${Template.id}/edit`}
                        element={<Template.component editable="true" />}
                    />
                ))}

                <Route path="*" element={<h1>Coming soon</h1>} />
            </Route>
        </Routes>
    )
}

export default App
