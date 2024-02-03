import { Server } from "./presentation/Server";
import { envs } from './config/plugins/envs.plugin';


(async() => {
    await main();
})();

function main() {
    // Server.start();
    console.log( envs );
    
}