/*Build a lookup function for important keywords or terms from this chapter group.

Rules:
- Normalize input by trimming and lowercasing.
- Return the mapped meaning when the term exists.
- Return "unknown" for unmapped terms. */


function getJsBasicsKeywordMeaning(term) {
    const keywordMap = {
        "node": "runtime",
        "v8": "engine",
        "npm": "package-manager"
    };
    
    term = term.trim().toLowerCase();
    
    return keywordMap[term] || "unknown";
}

let answer= getJsBasicsKeywordMeaning("NODE");
console.log(answer);