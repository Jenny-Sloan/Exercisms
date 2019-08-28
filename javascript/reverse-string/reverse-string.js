
export const reverseString = (word) => {
    const arr = word.split('')
    //taking an array and creating an empty string
    const reversedArr = []
    //reversing that array
    for (let i = 0; i <= arr.length; i++) {
        reversedArr.unshift(arr[i])
        //taking that array and putting it into a new array. Taking the first one in the index 0 and then adding the new string to the left (in front of) the one before that - that's the unshift

    }
    const newStr = reversedArr.join('')
    return newStr
    //The new string is the reversed array that then is joined to become a new string that is reversed from the original
}

// export const reverse = (word: string = '') => word.split('').reverse().join()