import http from 'http'
const PORT = 3000
const server = http.createServer((req, res) => {

    const userAgent = req.headers['user-agent']
    const language = req.headers['content-language']

    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(`${userAgent}, ${language}`)
}
)
server.listen(PORT, 'localhost', () => {
    console.log(`${PORT}`)
})
