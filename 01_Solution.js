function normalizeJsBasicsLabel(label) {
    return "js-basic-" + label.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

let answer = normalizeJsBasicsLabel(" Login Button ");
console.log(answer); // Output: "js-basic-login-button"  