import React from 'react'
import {GoogleAuthProvider, getAuth, signInWithPopup} from '@firebase/auth'
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import image from '../images/google.jpg'


export default function OAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleCLick = async() =>{
        try{
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);

            const res = await fetch('/api/auth/google',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name:result.user.displayName, 
                    email: result.user.email, 
                    photo: result.user.photoURL
                })
            })
            const data = await res.json()
            dispatch(signInSuccess(data))
            navigate("/")
            // console.log(result)
        }catch(error){
            console.log(error)
        }
    }
  return (
    <button 
        onClick={handleGoogleCLick} 
        type='button' 
        className='bg-blue-700 text-white p-2 rounded-lg uppercase hover:opacity-95 flex items-center justify-center'>
            <img className='h-8 w-8 mr-2' src={image} alt=" Google Logo" />
        <span className='text-sm'>Continue with Google</span> 
    </button>
   
  )
}
