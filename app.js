// Importação do módulo built-in HTTP do Node.js
const http = require('http');

// Criação da instância do servidor HTTP
const server = http.createServer((req, res) => {
    console.log('Servidor recebeu uma requisição');
    console.log('req.url', req.url);
    
    const routes = [];
    routes['/'] = JSON.stringify({ 'message': 'Estou na rota raiz' })
    routes['/sobre'] = JSON.stringify({ 'message': 'Estou na rota sobre' })
    routes['/naoExiste'] = JSON.stringify({ 'message': 'Esta rota nao existe' })

    res.end(routes[req.url] || routes['/naoExiste']);
})

// Iniacialização da escuta do evento 'listen' do servidor HTTP
server.listen(3000, 'localhost', () => {
    console.log('Servidor rodando na porta 3000');
})