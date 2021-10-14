const getFirstUniqueCharPosition = (word) => {
    for(let i = 0; i< word.length; i++){
        charFreq = 0
        for(let j = 0; j< word.length; j++){
            if(word[i] == word[j]){
                charFreq += 1
            }
        }
        if(charFreq == 1)
            return i + 1
    }
    return -1
}

//console.log(getFirstUniqueCharPosition("babilonia"))



const getFirstUniqueCharPositionImprovedVersion = (word) => {
    charFrequencies = {}
    for(let i = 0; i< word.length; i++){
        if(charFrequencies[word[i]]) {
            charFrequencies[word[i]] += 1
        } else {
            charFrequencies[word[i]] = 1
        }
    }
    for(let i = 0; i< word.length; i++) {
        if(charFrequencies[word[i]] == 1)
            return i + 1
    }
    return -1
}

//console.log(getFirstUniqueCharPositionImprovedVersion("babilonia"))