function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (mondayActivity="go to the office") {
    return `This Monday, I will ${mondayActivity}.`
}

const wrapAdjective = (function (flair="*") {
    return function (adjective="special") {
        return `You are ${flair}${adjective}${flair}!`
    }
})

const encouragingPromptFunction = wrapAdjective("!!!")
