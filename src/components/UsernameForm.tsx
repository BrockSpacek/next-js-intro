"use client"
import React, { useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import UnderText from './UnderText'
import { useRouter } from 'next/navigation'
import { useAppContext } from '@/context/context'


const UsernameForm = () => {
  // const router = useRouter()
  const { push } = useRouter();

  const { username, setUsername} = useAppContext();

    // const [username, setUserName] = useState("");

    const handleSubmit = () => {
      console.log('User chose: ', username);
      push(`./dashboard/${username}`);
    } 

  return (
    <div className="w-[350px]">
          <div className="pb-10">
            <Label htmlFor="username" className="pb-4"> Username </Label>
            <Input id="username" placeholder="This will be your display name" onChange={(event) => setUserName(event.target.value)}/>
          </div>
          <Button className="hover:bg-gray-600 hover:cursor-pointer " onClick={handleSubmit}>Submit </Button>
            
            <div className='mt-10'>
                <UnderText />
            </div>
        </div>

       
  )
}

export default UsernameForm