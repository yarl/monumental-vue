import axios from "axios";
import jsonpAdapter from "axios-jsonp";
import wdk from "wikidata-sdk";

const endpoint = "https://www.wikidata.org/w/api.php";

export function fullSearch(query) {
  const params = {
    action: "query",
    format: "json",
    list: "search",
    indexpageids: 1,
    utf8: 1,
    srsearch: query,
    srnamespace: "0",
    srlimit: "50",
    srinfo: "totalhits|suggestion|rewrittenquery",
    srprop: "timestamp|titlesnippet|extensiondata",
    srinterwiki: 1,
    srenablerewrites: 1
  };
  return axios.get(endpoint, {
    params,
    adapter: jsonpAdapter,
    callbackParamName: "c"
  });
}

export function getEntities(ids = []) {
  // console.log("getEntities", ids);
  const url = wdk.getEntities({
    ids
  });
  return axios.get(url);
}
