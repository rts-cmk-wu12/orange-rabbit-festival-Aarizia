import { useEffect, useState } from "react"

export default function Cart() {

    const [data, setData] = useState(null)

    useEffect(() => {

        const dataAsString = localStorage.getItem('data')
        const dataAsObject = dataAsString.JSON.parse()
        setData(dataAsObject)

    }, [])

    console.log(data)

    return (
        
    )
}