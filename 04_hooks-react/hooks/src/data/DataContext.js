import React from 'react'

export const data = {
    number: 123,
    text: 'Context API...'
}

const DataContent = React.createContext(data)

export default DataContent