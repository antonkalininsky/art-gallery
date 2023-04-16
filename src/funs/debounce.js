export function debounce(foo, ms) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = window.setTimeout(() => foo.apply(args), ms);
    };
}