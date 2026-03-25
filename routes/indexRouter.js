const messages = [
    {
        text: 'Howdy! How are you?',
        user: 'Joe',
        added: new Date(),
        id: 0
    },
    {
        text: 'Staying alive',
        user: 'Martin',
        added: new Date(),
        id: 1
    }
]

const { Router } = require('express');
const indexRouter = Router();
indexRouter.get('/', (req, res) => res.render('index', { messages: messages }));
indexRouter.get('/new', (req, res) => res.render('form'));
indexRouter.post('/new', (req, res) => {
    const newId = messages.length
    messages.push({ text: req.body.text, user: req.body.user, added: new Date(), id: newId});
    res.redirect('/')
});
indexRouter.get('/details/:messageId', (req, res) => {
    const messageId = Number(req.params.messageId)
    res.render('details', { message: messages.find(message => message.id === messageId ) })
});

module.exports = indexRouter;