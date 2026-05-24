function normalizeJsBasicsLabel(label) {
  
    return "js-basic-" + label.trim().toLowerCase().replace(/\s+/g, '-');
}

let answer= normalizeJsBasicsLabel(" Login Button ");
console.log(answer); // Output: "login-button"  