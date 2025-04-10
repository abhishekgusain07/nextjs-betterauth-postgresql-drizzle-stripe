"use client"
import { useUser } from '@/hooks/useUser';
import { isAuthorized } from '@/utils/isAuthorized';
import { Loader2 } from 'lucide-react';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';

const OnlyPaidSubs = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [authorized, setAuthorized] = useState<boolean>(false);
  useEffect(() => {
    const checkSubscription = async() => {
      try {
        setLoading(true);
        const {user} = await useUser();
        const { authorized:res } = await isAuthorized(user?.id!);
        setAuthorized(res);
      } catch (error) {
        toast.error("cannot check subscription");
      }finally {
        setLoading(false);
      }
    }
    checkSubscription();
  },[])
  if(loading) {
    return <div>
      <Loader2  className='size-4 animate-spin' />
    </div>
  }
  if (!authorized) {
    console.log("not authorized");
    redirect("/not-subscriber");
  }
  return (
    <div>
      authorized
    </div>
  )
}

export default OnlyPaidSubs