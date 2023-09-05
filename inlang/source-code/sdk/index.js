import { sayHelloFromClient } from "@lix-js/client";
import { sayHelloFromServer } from "@lix-js/server";

console.log("client: " + sayHelloFromClient("World"));
console.log("server: " + sayHelloFromServer("World"));
