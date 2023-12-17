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

    constructor(posprompt: string, negprompt: string, steps?: number, cfg?: number, width?: number, height?: number, sdxl?: boolean, seed?: number) {
        this.pos_prompt = posprompt;
        this.neg_prompt = negprompt;
        this.steps = steps || 20;
        this.cfg = cfg || 7.0;
        this.width = width || 1024;
        this.height = height || 1024;
        this.sdxl = sdxl || true;
        this.prefix = this.setPrefix(posprompt)
        this.seed = seed || 1234567890;
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
        this.pos_prompt = p;
    }


    // Additional methods can be added here
}
