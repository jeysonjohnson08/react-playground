//export let apikey = "hhngdfahjlgkjalfkdgj"; <- exporting  way
//export let apikey2 = "ghjfajklgndfskajlgh"; <- can export multiple things per file
// import {apikey} as key from "./importexport.js"; <- used alias as
// import {apikey, apikey2 as second_apikey} from "./importexport.js"; <- if you have multiple name exports
// import * as apikeys from "./importexport.js"; <- if you have multiple name exports
// console.log(apikeys.apikey)

// To make this import valid vanilla js in scripts we should use type=module

// second way
// export default "jfjdhkjhfkjhsdjkhdfs"; <- we can only export only one time using default method per file.
// import apikey from "./importexport.js"; <- we can use any name to import
// console.log(apikey)
// it is useful if you only have one thing to export in a file.