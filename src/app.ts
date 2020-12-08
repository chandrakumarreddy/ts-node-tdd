import "dotenv/config";

import createServer from "server";

const startServer = () => {
    const app = createServer();
    const PORT: number = parseInt(<string>process.env.PORT, 10) || 8080;
    app.listen(PORT, () => {
        console.log(`Server is listening at port ${PORT}`);
    });
};

startServer();
