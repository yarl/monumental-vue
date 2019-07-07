import wdk from "wikidata-sdk";

export function getPropertyValues(values = []) {
  return values.map(value =>
    wdk.simplify.claim(value, { keepRichValues: true })
  );
}
