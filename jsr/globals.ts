// deno-lint-ignore no-explicit-any
export const globals: typeof globalThis & Record<string | symbol, any> = globalThis;

export function cwd(): string {
    if (globals.Deno && globals.Deno.cwd) {
        return globals.Deno.cwd();
    }
    if (globals.process && globals.process.cwd) {
        return globals.process.cwd();
    }
    if (globals.location) {
        return globals.location.href;
    }
    return "/";
}
