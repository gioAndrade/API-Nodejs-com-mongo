let app = require('./config/express');

app.listen(app.get('port'), function () {
    console.log('Servidor escutando na porta', app.get('port'));
});