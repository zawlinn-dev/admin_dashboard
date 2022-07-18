import { useEffect } from 'react'
import { useState } from 'react'

const UseapiComp = (configObj) => {

    const {
        instance,
        method, 
        url, 
        requestConfig = {}} = configObj;

        const [response, setResponse] = useState([])
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState('')

        useEffect(()=>{

            const controller = new AbortController();

            const fetchData = async () => {

                try{

                    const response = await instance[method.toLowerCase()](url, {

                        ...requestConfig,

                        signal: controller.signal
                    })

                    console.log(response)

                    setResponse(response.data)
                }catch(err){

                    console.log(err.message)

                    setError(err.message)

                }finally{

                    setLoading(false)
                }
            }

            fetchData()

            return ()=> controller.abort();

        }, [])


    return [ response, error, loading ]
}

export default UseapiComp
