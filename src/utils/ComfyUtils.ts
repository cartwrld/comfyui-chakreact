'use client'
import axios from 'axios'
import Workflow from "@/utils/Workflow";
import * as fs from 'fs'
import path from 'path'

export default async function execGeneration(workflowData: Workflow): Promise<string> {
    try {
        const response = await axios.post(`http://localhost:3004/generate`, workflowData, {
            withCredentials: true
        });
        // Assuming the server responds with a path in the 'path' key
        return response.data.path;
    } catch (error) {
        console.error('Error:', error);
        throw error; // Rethrow the error to handle it in the calling component
    }
}

export async function getHistory(orientation?: string): Promise<string> {
    try {
        let fetchURL = `http://localhost:3004/history`;

        switch (orientation) {
            case 'square': fetchURL += '/square'; break
            case 'portrait': fetchURL += '/portrait'; break
            case 'landscape': fetchURL += '/landscape'; break
            default: break;
        }

        const response = await axios.get(fetchURL, {
            withCredentials: true
        });

        switch (orientation) {
            case 'square': return response.data.squarePaths
            case 'portrait': return response.data.portraitPaths
            case 'landscape': return response.data.landscapePaths
            default: return response.data.paths
        }


    } catch (error) {
        console.error('Error:', error);
        throw error; // Rethrow the error to handle it in the calling component
    }
}


