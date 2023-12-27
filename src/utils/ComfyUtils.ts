'use client'
import axios from 'axios'
import Workflow from "@/utils/Workflow";
import * as fs from 'fs'
import path from 'path'



const API_URL = `http://localhost:3004`

export default async function execGeneration(workflowData: Workflow): Promise<string> {
    try {
        const response = await axios.post(`${API_URL}/generate`, workflowData, {
            withCredentials: true
        });
        return response.data.path;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function getHistory(orientation?: string): Promise<string> {
    try {
        let fetchURL = `${API_URL}/history`;

        switch (orientation) {
            case 'square':
                fetchURL += '/square';
                break
            case 'portrait':
                fetchURL += '/portrait';
                break
            case 'landscape':
                fetchURL += '/landscape';
                break
            default:
                break;
        }
        const response = await axios.get(fetchURL, {
            withCredentials: true
        });
        switch (orientation) {
            case 'square':
                return response.data.squarePaths
            case 'portrait':
                return response.data.portraitPaths
            case 'landscape':
                return response.data.landscapePaths
            default:
                return response.data.paths
        }

    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function getDBHistory(): Promise<any[]> {
    try {
        let fetchURL = `${API_URL}/history/database`;

        const response = await axios.get(fetchURL, {
            withCredentials: true
        });
        return response.data
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}


export async function getHistoryByOrientation(orientation?: string): Promise<any[]> {
    try {

        let fetchURL = `${API_URL}/history/database`

        switch (orientation) {
            case 'square':
                fetchURL += '/square';
                break
            case 'portrait':
                fetchURL += '/portrait';
                break
            case 'landscape':
                fetchURL += '/landscape';
                break
            default:
                break;
        }
        const response = await axios.get(fetchURL, {
            withCredentials: true
        });
        return response.data
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
