function getDateTime() {
    const currentDateTime = new Date()
    return currentDateTime.toLocaleString()
}

module.exports = getDateTime