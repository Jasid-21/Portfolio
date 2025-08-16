export function getRandomCode(lim: number = 4): string {
    const lower = 'abcdefghijklmnopqrstuvxyz';
    const upper = lower.toUpperCase();
    const numbers = '0123456789';
    const total = lower + upper + numbers;

    let code = '';
    for (let i = 0; i <= lim; i++) {
        const idx = Math.floor(Math.random() * (total.length - 1));
        const c = total[idx];
        code += c;
    }

    return code;
}
