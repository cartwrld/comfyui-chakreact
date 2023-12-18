'use client'

export default class Workflow {
    private pos_prompt: string;
    private neg_prompt: string;
    private steps: number;
    private cfg: number;
    private width: number;  // Assuming width and height should be numbers
    private height: number;
    private sdxl: boolean;
    private prefix: string;
    private seed: number;
    private sampler: string;
    private scheduler: string;
    private ckpt: string;

    constructor(ckpt: string, posprompt: string, negprompt: string, seed?: number, steps?: number, cfg?: number,
                sampler?: string, scheduler?: string, width?: number, height?: number, sdxl?: boolean,) {

        this.ckpt = ckpt || 'dynavisionXL_v0557'
        this.pos_prompt = this.checkForEmptyPrompt(posprompt)
        this.neg_prompt = negprompt || ''
        this.seed = seed || 1234567890
        this.steps = steps || 20
        this.cfg = cfg || 7.0
        this.sampler = sampler || 'euler'
        this.scheduler = scheduler || 'karras'
        this.width = width || 1024
        this.height = height || 1024
        this.sdxl = sdxl || true
        this.prefix = this.setPrefix(this.pos_prompt)
    }
    setPrefix(p: string): string  {
        p = p.substring(0, 100);
        p = p.replaceAll(', ', '_')
        p = p.replaceAll(' ', '_')
        p = p.replaceAll(',', '_')
        p = p.replaceAll('__', '_')
        return p;
    }
    setPrompt(p: string) {
        this.checkForEmptyPrompt(p)
        this.pos_prompt = p;
    }

    checkForEmptyPrompt(p:string) : string {
        return p === '' ? 'empty' : p;
    }


    // Additional methods can be added here
}
