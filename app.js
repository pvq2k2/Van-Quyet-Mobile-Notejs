const http = require('http');

const server = http.createServer((req, res) => {
    // console.log("Chạy server thành công !");
    // console.log(req, res);
    // console.log("url", req.url);
    const url = req.url;
    if (url === "/") {
        // console.log("Product");
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<body>");
            res.write("<h1>Hello World</h1>");
            res.write("<form method='post' id='add' action=''><input type='text' placeholder='User name'><br><button type=submit>Create</button></form>")
        res.write("</body>");
        res.write("</html>");
        res.end();
        // const formAdd = document.getElementById('add');
        // formAdd.addEventListener ('submit', () => {
        //     url = url + '/create-user';
        // })
    } else if (url === "/users") {
        // console.log("Home");
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<body>");
            res.write("<ul><li>User 1 </li></ul>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
});


const PORT = 3000
server.listen(PORT, () => {
    console.log(`Server running port ${PORT}`);
})

