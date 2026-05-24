/** Create a QA-friendly score classifier for practice readiness.

Rules:
- 90 and above => EXCELLENT.
- 75 to 89 => GOOD.
- 50 to 74 => NEEDS_PRACTICE.
- Below 50 => REVISIT. */

function classifyJsBasicsScore(score) {
    if (score >= 90) {
        
        return "EXCELLENT";
    } else if (score >= 75) {
        
        return "GOOD";
    } else if (score >= 50) {
        
        return "NEEDS_PRACTICE";
    } else if (score < 50) {
        
        return "REVISIT";
    }  
    else {
       
        return "Invalid score";
    } 
}

let answer= classifyJsBasicsScore(85);
console.log(answer);