function GetTranslation(word, language = "pol") {
  const translation = {
    ang: {},
  };
  if (!(language in Object.keys(translation))) return word;
  return translation.ang[word];
}

export default GetTranslation;
