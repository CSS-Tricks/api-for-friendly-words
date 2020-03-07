const friendlyWords = require("friendly-words");

exports.handler = function(event, context, callback) {
  const { predicates, objects } = friendlyWords;
  const numberOfPredicates = predicates.length;
  const numbersOfObjects = objects.length;

  const randomPredicate =
    predicates[Math.floor(Math.random() * numberOfPredicates)];
  const randomObject = objects[Math.floor(Math.random() * numbersOfObjects)];

  const output = `${randomPredicate}-${randomObject}`;

  callback(null, {
    statusCode: 200,
    body: output
  });
};
