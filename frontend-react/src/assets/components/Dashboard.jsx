import { useEffect } from 'react'
import axiosInstance from '../../axiosInstance'

const Dashboard = () => {
    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                const response = await axiosInstance.get('/protected-view/');
                console.log('success:', response.data);

            } catch (error) {
                console.error('Error fetching protected data:', error.response?.data || error.message);
            }


        }
        fetchProtectedData();
    }, [])

    return (
        <>
        <h1 className='text-light'>DASHBOARD</h1>


        </>

    )
}

export default Dashboard
