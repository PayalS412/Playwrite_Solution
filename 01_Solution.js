function normalizeJsBasicsLabel(label) {
    let x=label.replace(/[^a-zA-Z]/g, ' ')
    if (x.trim() === '') {
        return "js-basic";
    }   
    return "js-basic-" + x.trim().toLowerCase().replace(/\s+/g, '-');
}

let answer= normalizeJsBasicsLabel("  ");
console.log(answer);  