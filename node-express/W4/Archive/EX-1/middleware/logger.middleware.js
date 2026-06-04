

function logger(req, res,next) {
    const method = req.method;
    const url = req.url;
    const curTimeStamp = new Date().toISOString();
    console.log(`${curTimeStamp} ${method} ${url}`)
    next();
}
    
export default logger;