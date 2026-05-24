/* Given a noisy list of topic labels, keep only supported chapter terms and remove duplicates.

Rules:
- Trim and lowercase each item.
- Allow known aliases from the chapter group.
- Return canonical topic keys in first-seen order.
- Skip unsupported values.
*/

function filterSupportedJsBasicsTopics(topics) {
     const supportedTopics = {
        "node": "node",
        "v8": "v8",
        "npm": "npm"
    };  
    let seen = []
    const result = [];  
    for (let topic of topics) {
        topic = topic.trim().toLowerCase();
        const canonical = supportedTopics[topic];   
        if (canonical && !seen.includes(canonical)) {
            seen.push(canonical);
            result.push(canonical);
        }    }  return result;

  
}

let answer =[];
answer= filterSupportedJsBasicsTopics(["NODE"," v8 ","unknown","npm","node"]);
console.log(answer);