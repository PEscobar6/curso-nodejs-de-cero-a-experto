import { Server } from "./presentation/Server";


(async() => {
    await main();
})();

function main() {
    Server.start();
}