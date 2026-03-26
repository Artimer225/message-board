const messages = [
    {
        text: 'Axel, howdy! How are you?',
        user: 'Joe',
        added: simpleDate(),
        id: 0
    },
    {
        text: 'Staying alive. You got the package? Your 10k credits ready to be transfered.',
        user: 'Axel',
        added: simpleDate(),
        id: 1
    },
    {
        text: 'Yeah. Shit, someone intercepted our little chat. Name yourself and your intentions stranger, or we will have to open fire.',
        user: 'Joe',
        added: simpleDate(),
        id: 2
    }
]

function simpleDate() {
    const date = new Date();
    return date.toLocaleString()
}

const { Router } = require('express');
const indexRouter = Router();
indexRouter.get('/', (req, res) => res.render('index', { messages: messages }));
indexRouter.get('/new', (req, res) => res.render('form'));
indexRouter.post('/new', (req, res) => {
    const newId = messages.length
    messages.push({ text: req.body.text, user: req.body.user, added: simpleDate(), id: newId});
    res.redirect('/')
});
indexRouter.get('/details/:messageId', (req, res) => {
    const messageId = Number(req.params.messageId)
    res.render('details', { message: messages.find(message => message.id === messageId ) })
});

module.exports = indexRouter;