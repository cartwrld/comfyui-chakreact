'use client'

export default class Workflow {
    pos_prompt: string;
    neg_prompt: string;
    steps: number;
    cfg: number;
    width: number;
    height: number;
    version: string;
    prefix: string;
    seed: number;
    sampler: string;
    scheduler: string;
    ckpt: string;
    pathname: string;

    constructor(ckpt: string, posprompt: string, negprompt: string, seed?: number, steps?: number, cfg?: number,
                sampler?: string, scheduler?: string, width?: number, height?: number, version?: string,) {

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
        this.version = version || 'SDXL'
        this.prefix = this.setPrefix(this.pos_prompt)
        this.pathname = ''
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

    setPathName(path: string) {
        this.pathname = path
    }


    // Additional methods can be added here
}
