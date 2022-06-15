const http = require('http')


const requestListener = function (req, res) {
  const orig = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

  const monkey = orig.replaceAll('dog', 'monkey');
  // expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"
  
  // global flag required when calling replaceAll with regex
  const regex = /Dog/ig;
  const ferret = orig.replaceAll(regex, 'ferret');
  // expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

  const version = process.version;

  res.writeHead(200);
  res.end(`Original: ${orig}\nMonkey: ${monkey}\nFerret: ${ferret}\nI am Node version ${version}`);
};

const HOST = "0.0.0.0";
const PORT = process.env.PORT || 10000;
const server = http.createServer(requestListener);
server.listen(PORT, HOST, () => {
  console.log(`Server is listening on http://${HOST}:${PORT}`);
});