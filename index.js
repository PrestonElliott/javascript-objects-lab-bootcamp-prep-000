var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return Object;
}

function deleteFromObjectByKey(obj, key) {
  Object.assign({}, obj, {key});
  delete obj.key;
  return Object;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return Object;
}

