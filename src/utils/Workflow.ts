'use client'

export default class Workflow {
    private prompt: string;
    private steps: number;
    private cfg: number;
    private width: number;  // Assuming width and height should be numbers
    private height: number;
    private sdxl: boolean;
    private prefix: string;

    constructor(prompt: string, steps?: number, cfg?: number, width?: number, height?: number, sdxl?: boolean) {
        this.prompt = prompt;
        this.steps = steps || 20;
        this.cfg = cfg || 7.0;
        this.width = width || 1024;
        this.height = height || 1024;
        this.sdxl = sdxl || true;
        this.prefix = this.setPrefix(prompt)
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
        this.prompt = p;
    }


    // Additional methods can be added here
}
