"use server"
import * as Sentry from "@sentry/nextjs";

export const  sentryErrorServerAction = async() => {
    try{
        throw new Error("testing error");
    }catch(error){
        Sentry.captureException(error);
        throw error;
    }
}