function routeCreate(app) {
    app.get('/', (req, res) => {
        res.send(`Hit homepage!`);
    })
    
    app.get('/about', (req, res) => {
        res.send(`Hit about page!`)
    })
    
    app.get('/members', (req, res) => {
        res.send(`Hit assoc. members page!`)
    })
}

module.exports = routeCreate;
