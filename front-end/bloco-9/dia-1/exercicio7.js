const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
  console.log('teste');
};

uppercase('xablau')

module.exports = uppercase;