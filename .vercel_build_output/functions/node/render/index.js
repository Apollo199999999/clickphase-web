var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// node_modules/@sveltejs/kit/dist/chunks/multipart-parser.js
var multipart_parser_exports = {};
__export(multipart_parser_exports, {
  toFormData: () => toFormData
});
function _fileName(headerValue) {
  const m2 = headerValue.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);
  if (!m2) {
    return;
  }
  const match = m2[2] || m2[3] || "";
  let filename = match.slice(match.lastIndexOf("\\") + 1);
  filename = filename.replace(/%22/g, '"');
  filename = filename.replace(/&#(\d{4});/g, (m3, code) => {
    return String.fromCharCode(code);
  });
  return filename;
}
async function toFormData(Body2, ct) {
  if (!/multipart/i.test(ct)) {
    throw new TypeError("Failed to fetch");
  }
  const m2 = ct.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
  if (!m2) {
    throw new TypeError("no or bad content-type header, no multipart boundary");
  }
  const parser = new MultipartParser(m2[1] || m2[2]);
  let headerField;
  let headerValue;
  let entryValue;
  let entryName;
  let contentType;
  let filename;
  const entryChunks = [];
  const formData = new FormData();
  const onPartData = (ui8a) => {
    entryValue += decoder.decode(ui8a, { stream: true });
  };
  const appendToFile = (ui8a) => {
    entryChunks.push(ui8a);
  };
  const appendFileToFormData = () => {
    const file = new File(entryChunks, filename, { type: contentType });
    formData.append(entryName, file);
  };
  const appendEntryToFormData = () => {
    formData.append(entryName, entryValue);
  };
  const decoder = new TextDecoder("utf-8");
  decoder.decode();
  parser.onPartBegin = function() {
    parser.onPartData = onPartData;
    parser.onPartEnd = appendEntryToFormData;
    headerField = "";
    headerValue = "";
    entryValue = "";
    entryName = "";
    contentType = "";
    filename = null;
    entryChunks.length = 0;
  };
  parser.onHeaderField = function(ui8a) {
    headerField += decoder.decode(ui8a, { stream: true });
  };
  parser.onHeaderValue = function(ui8a) {
    headerValue += decoder.decode(ui8a, { stream: true });
  };
  parser.onHeaderEnd = function() {
    headerValue += decoder.decode();
    headerField = headerField.toLowerCase();
    if (headerField === "content-disposition") {
      const m3 = headerValue.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);
      if (m3) {
        entryName = m3[2] || m3[3] || "";
      }
      filename = _fileName(headerValue);
      if (filename) {
        parser.onPartData = appendToFile;
        parser.onPartEnd = appendFileToFormData;
      }
    } else if (headerField === "content-type") {
      contentType = headerValue;
    }
    headerValue = "";
    headerField = "";
  };
  for await (const chunk of Body2) {
    parser.write(chunk);
  }
  parser.end();
  return formData;
}
var import_node_worker_threads, s, S, f, F, LF, CR, SPACE, HYPHEN, COLON, A, Z, lower, noop, MultipartParser;
var init_multipart_parser = __esm({
  "node_modules/@sveltejs/kit/dist/chunks/multipart-parser.js"() {
    import_node_worker_threads = require("worker_threads");
    init_install_fetch();
    globalThis.DOMException || (() => {
      const port = new import_node_worker_threads.MessageChannel().port1;
      const ab = new ArrayBuffer(0);
      try {
        port.postMessage(ab, [ab, ab]);
      } catch (err) {
        return err.constructor;
      }
    })();
    s = 0;
    S = {
      START_BOUNDARY: s++,
      HEADER_FIELD_START: s++,
      HEADER_FIELD: s++,
      HEADER_VALUE_START: s++,
      HEADER_VALUE: s++,
      HEADER_VALUE_ALMOST_DONE: s++,
      HEADERS_ALMOST_DONE: s++,
      PART_DATA_START: s++,
      PART_DATA: s++,
      END: s++
    };
    f = 1;
    F = {
      PART_BOUNDARY: f,
      LAST_BOUNDARY: f *= 2
    };
    LF = 10;
    CR = 13;
    SPACE = 32;
    HYPHEN = 45;
    COLON = 58;
    A = 97;
    Z = 122;
    lower = (c) => c | 32;
    noop = () => {
    };
    MultipartParser = class {
      constructor(boundary) {
        this.index = 0;
        this.flags = 0;
        this.onHeaderEnd = noop;
        this.onHeaderField = noop;
        this.onHeadersEnd = noop;
        this.onHeaderValue = noop;
        this.onPartBegin = noop;
        this.onPartData = noop;
        this.onPartEnd = noop;
        this.boundaryChars = {};
        boundary = "\r\n--" + boundary;
        const ui8a = new Uint8Array(boundary.length);
        for (let i2 = 0; i2 < boundary.length; i2++) {
          ui8a[i2] = boundary.charCodeAt(i2);
          this.boundaryChars[ui8a[i2]] = true;
        }
        this.boundary = ui8a;
        this.lookbehind = new Uint8Array(this.boundary.length + 8);
        this.state = S.START_BOUNDARY;
      }
      write(data) {
        let i2 = 0;
        const length_ = data.length;
        let previousIndex = this.index;
        let { lookbehind, boundary, boundaryChars, index, state, flags } = this;
        const boundaryLength = this.boundary.length;
        const boundaryEnd = boundaryLength - 1;
        const bufferLength = data.length;
        let c;
        let cl;
        const mark = (name) => {
          this[name + "Mark"] = i2;
        };
        const clear = (name) => {
          delete this[name + "Mark"];
        };
        const callback = (callbackSymbol, start, end, ui8a) => {
          if (start === void 0 || start !== end) {
            this[callbackSymbol](ui8a && ui8a.subarray(start, end));
          }
        };
        const dataCallback = (name, clear2) => {
          const markSymbol = name + "Mark";
          if (!(markSymbol in this)) {
            return;
          }
          if (clear2) {
            callback(name, this[markSymbol], i2, data);
            delete this[markSymbol];
          } else {
            callback(name, this[markSymbol], data.length, data);
            this[markSymbol] = 0;
          }
        };
        for (i2 = 0; i2 < length_; i2++) {
          c = data[i2];
          switch (state) {
            case S.START_BOUNDARY:
              if (index === boundary.length - 2) {
                if (c === HYPHEN) {
                  flags |= F.LAST_BOUNDARY;
                } else if (c !== CR) {
                  return;
                }
                index++;
                break;
              } else if (index - 1 === boundary.length - 2) {
                if (flags & F.LAST_BOUNDARY && c === HYPHEN) {
                  state = S.END;
                  flags = 0;
                } else if (!(flags & F.LAST_BOUNDARY) && c === LF) {
                  index = 0;
                  callback("onPartBegin");
                  state = S.HEADER_FIELD_START;
                } else {
                  return;
                }
                break;
              }
              if (c !== boundary[index + 2]) {
                index = -2;
              }
              if (c === boundary[index + 2]) {
                index++;
              }
              break;
            case S.HEADER_FIELD_START:
              state = S.HEADER_FIELD;
              mark("onHeaderField");
              index = 0;
            case S.HEADER_FIELD:
              if (c === CR) {
                clear("onHeaderField");
                state = S.HEADERS_ALMOST_DONE;
                break;
              }
              index++;
              if (c === HYPHEN) {
                break;
              }
              if (c === COLON) {
                if (index === 1) {
                  return;
                }
                dataCallback("onHeaderField", true);
                state = S.HEADER_VALUE_START;
                break;
              }
              cl = lower(c);
              if (cl < A || cl > Z) {
                return;
              }
              break;
            case S.HEADER_VALUE_START:
              if (c === SPACE) {
                break;
              }
              mark("onHeaderValue");
              state = S.HEADER_VALUE;
            case S.HEADER_VALUE:
              if (c === CR) {
                dataCallback("onHeaderValue", true);
                callback("onHeaderEnd");
                state = S.HEADER_VALUE_ALMOST_DONE;
              }
              break;
            case S.HEADER_VALUE_ALMOST_DONE:
              if (c !== LF) {
                return;
              }
              state = S.HEADER_FIELD_START;
              break;
            case S.HEADERS_ALMOST_DONE:
              if (c !== LF) {
                return;
              }
              callback("onHeadersEnd");
              state = S.PART_DATA_START;
              break;
            case S.PART_DATA_START:
              state = S.PART_DATA;
              mark("onPartData");
            case S.PART_DATA:
              previousIndex = index;
              if (index === 0) {
                i2 += boundaryEnd;
                while (i2 < bufferLength && !(data[i2] in boundaryChars)) {
                  i2 += boundaryLength;
                }
                i2 -= boundaryEnd;
                c = data[i2];
              }
              if (index < boundary.length) {
                if (boundary[index] === c) {
                  if (index === 0) {
                    dataCallback("onPartData", true);
                  }
                  index++;
                } else {
                  index = 0;
                }
              } else if (index === boundary.length) {
                index++;
                if (c === CR) {
                  flags |= F.PART_BOUNDARY;
                } else if (c === HYPHEN) {
                  flags |= F.LAST_BOUNDARY;
                } else {
                  index = 0;
                }
              } else if (index - 1 === boundary.length) {
                if (flags & F.PART_BOUNDARY) {
                  index = 0;
                  if (c === LF) {
                    flags &= ~F.PART_BOUNDARY;
                    callback("onPartEnd");
                    callback("onPartBegin");
                    state = S.HEADER_FIELD_START;
                    break;
                  }
                } else if (flags & F.LAST_BOUNDARY) {
                  if (c === HYPHEN) {
                    callback("onPartEnd");
                    state = S.END;
                    flags = 0;
                  } else {
                    index = 0;
                  }
                } else {
                  index = 0;
                }
              }
              if (index > 0) {
                lookbehind[index - 1] = c;
              } else if (previousIndex > 0) {
                const _lookbehind = new Uint8Array(lookbehind.buffer, lookbehind.byteOffset, lookbehind.byteLength);
                callback("onPartData", 0, previousIndex, _lookbehind);
                previousIndex = 0;
                mark("onPartData");
                i2--;
              }
              break;
            case S.END:
              break;
            default:
              throw new Error(`Unexpected state entered: ${state}`);
          }
        }
        dataCallback("onHeaderField");
        dataCallback("onHeaderValue");
        dataCallback("onPartData");
        this.index = index;
        this.state = state;
        this.flags = flags;
      }
      end() {
        if (this.state === S.HEADER_FIELD_START && this.index === 0 || this.state === S.PART_DATA && this.index === this.boundary.length) {
          this.onPartEnd();
        } else if (this.state !== S.END) {
          throw new Error("MultipartParser.end(): stream ended unexpectedly");
        }
      }
    };
  }
});

// node_modules/@sveltejs/kit/dist/install-fetch.js
function dataUriToBuffer(uri) {
  if (!/^data:/i.test(uri)) {
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  }
  uri = uri.replace(/\r?\n/g, "");
  const firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4) {
    throw new TypeError("malformed data: URI");
  }
  const meta = uri.substring(5, firstComma).split(";");
  let charset = "";
  let base642 = false;
  const type = meta[0] || "text/plain";
  let typeFull = type;
  for (let i2 = 1; i2 < meta.length; i2++) {
    if (meta[i2] === "base64") {
      base642 = true;
    } else {
      typeFull += `;${meta[i2]}`;
      if (meta[i2].indexOf("charset=") === 0) {
        charset = meta[i2].substring(8);
      }
    }
  }
  if (!meta[0] && !charset.length) {
    typeFull += ";charset=US-ASCII";
    charset = "US-ASCII";
  }
  const encoding = base642 ? "base64" : "ascii";
  const data = unescape(uri.substring(firstComma + 1));
  const buffer = Buffer.from(data, encoding);
  buffer.type = type;
  buffer.typeFull = typeFull;
  buffer.charset = charset;
  return buffer;
}
async function* toIterator(parts, clone2 = true) {
  for (const part of parts) {
    if ("stream" in part) {
      yield* part.stream();
    } else if (ArrayBuffer.isView(part)) {
      if (clone2) {
        let position = part.byteOffset;
        const end = part.byteOffset + part.byteLength;
        while (position !== end) {
          const size = Math.min(end - position, POOL_SIZE);
          const chunk = part.buffer.slice(position, position + size);
          position += chunk.byteLength;
          yield new Uint8Array(chunk);
        }
      } else {
        yield part;
      }
    } else {
      let position = 0;
      while (position !== part.size) {
        const chunk = part.slice(position, Math.min(part.size, position + POOL_SIZE));
        const buffer = await chunk.arrayBuffer();
        position += buffer.byteLength;
        yield new Uint8Array(buffer);
      }
    }
  }
}
function formDataToBlob(F2, B = Blob$1) {
  var b = `${r()}${r()}`.replace(/\./g, "").slice(-28).padStart(32, "-"), c = [], p = `--${b}\r
Content-Disposition: form-data; name="`;
  F2.forEach((v, n) => typeof v == "string" ? c.push(p + e(n) + `"\r
\r
${v.replace(/\r(?!\n)|(?<!\r)\n/g, "\r\n")}\r
`) : c.push(p + e(n) + `"; filename="${e(v.name, 1)}"\r
Content-Type: ${v.type || "application/octet-stream"}\r
\r
`, v, "\r\n"));
  c.push(`--${b}--`);
  return new B(c, { type: "multipart/form-data; boundary=" + b });
}
async function consumeBody(data) {
  if (data[INTERNALS$2].disturbed) {
    throw new TypeError(`body used already for: ${data.url}`);
  }
  data[INTERNALS$2].disturbed = true;
  if (data[INTERNALS$2].error) {
    throw data[INTERNALS$2].error;
  }
  const { body } = data;
  if (body === null) {
    return Buffer.alloc(0);
  }
  if (!(body instanceof import_node_stream.default)) {
    return Buffer.alloc(0);
  }
  const accum = [];
  let accumBytes = 0;
  try {
    for await (const chunk of body) {
      if (data.size > 0 && accumBytes + chunk.length > data.size) {
        const error2 = new FetchError(`content size at ${data.url} over limit: ${data.size}`, "max-size");
        body.destroy(error2);
        throw error2;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    }
  } catch (error2) {
    const error_ = error2 instanceof FetchBaseError ? error2 : new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error2.message}`, "system", error2);
    throw error_;
  }
  if (body.readableEnded === true || body._readableState.ended === true) {
    try {
      if (accum.every((c) => typeof c === "string")) {
        return Buffer.from(accum.join(""));
      }
      return Buffer.concat(accum, accumBytes);
    } catch (error2) {
      throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error2.message}`, "system", error2);
    }
  } else {
    throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
  }
}
function fromRawHeaders(headers = []) {
  return new Headers2(headers.reduce((result, value, index, array) => {
    if (index % 2 === 0) {
      result.push(array.slice(index, index + 2));
    }
    return result;
  }, []).filter(([name, value]) => {
    try {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return true;
    } catch {
      return false;
    }
  }));
}
function stripURLForUseAsAReferrer(url, originOnly = false) {
  if (url == null) {
    return "no-referrer";
  }
  url = new URL(url);
  if (/^(about|blob|data):$/.test(url.protocol)) {
    return "no-referrer";
  }
  url.username = "";
  url.password = "";
  url.hash = "";
  if (originOnly) {
    url.pathname = "";
    url.search = "";
  }
  return url;
}
function validateReferrerPolicy(referrerPolicy) {
  if (!ReferrerPolicy.has(referrerPolicy)) {
    throw new TypeError(`Invalid referrerPolicy: ${referrerPolicy}`);
  }
  return referrerPolicy;
}
function isOriginPotentiallyTrustworthy(url) {
  if (/^(http|ws)s:$/.test(url.protocol)) {
    return true;
  }
  const hostIp = url.host.replace(/(^\[)|(]$)/g, "");
  const hostIPVersion = (0, import_net.isIP)(hostIp);
  if (hostIPVersion === 4 && /^127\./.test(hostIp)) {
    return true;
  }
  if (hostIPVersion === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(hostIp)) {
    return true;
  }
  if (/^(.+\.)*localhost$/.test(url.host)) {
    return false;
  }
  if (url.protocol === "file:") {
    return true;
  }
  return false;
}
function isUrlPotentiallyTrustworthy(url) {
  if (/^about:(blank|srcdoc)$/.test(url)) {
    return true;
  }
  if (url.protocol === "data:") {
    return true;
  }
  if (/^(blob|filesystem):$/.test(url.protocol)) {
    return true;
  }
  return isOriginPotentiallyTrustworthy(url);
}
function determineRequestsReferrer(request, { referrerURLCallback, referrerOriginCallback } = {}) {
  if (request.referrer === "no-referrer" || request.referrerPolicy === "") {
    return null;
  }
  const policy = request.referrerPolicy;
  if (request.referrer === "about:client") {
    return "no-referrer";
  }
  const referrerSource = request.referrer;
  let referrerURL = stripURLForUseAsAReferrer(referrerSource);
  let referrerOrigin = stripURLForUseAsAReferrer(referrerSource, true);
  if (referrerURL.toString().length > 4096) {
    referrerURL = referrerOrigin;
  }
  if (referrerURLCallback) {
    referrerURL = referrerURLCallback(referrerURL);
  }
  if (referrerOriginCallback) {
    referrerOrigin = referrerOriginCallback(referrerOrigin);
  }
  const currentURL = new URL(request.url);
  switch (policy) {
    case "no-referrer":
      return "no-referrer";
    case "origin":
      return referrerOrigin;
    case "unsafe-url":
      return referrerURL;
    case "strict-origin":
      if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
        return "no-referrer";
      }
      return referrerOrigin.toString();
    case "strict-origin-when-cross-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
        return "no-referrer";
      }
      return referrerOrigin;
    case "same-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      return "no-referrer";
    case "origin-when-cross-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      return referrerOrigin;
    case "no-referrer-when-downgrade":
      if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
        return "no-referrer";
      }
      return referrerURL;
    default:
      throw new TypeError(`Invalid referrerPolicy: ${policy}`);
  }
}
function parseReferrerPolicyFromHeader(headers) {
  const policyTokens = (headers.get("referrer-policy") || "").split(/[,\s]+/);
  let policy = "";
  for (const token of policyTokens) {
    if (token && ReferrerPolicy.has(token)) {
      policy = token;
    }
  }
  return policy;
}
async function fetch2(url, options_) {
  return new Promise((resolve2, reject) => {
    const request = new Request2(url, options_);
    const { parsedURL, options } = getNodeRequestOptions(request);
    if (!supportedSchemas.has(parsedURL.protocol)) {
      throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${parsedURL.protocol.replace(/:$/, "")}" is not supported.`);
    }
    if (parsedURL.protocol === "data:") {
      const data = dataUriToBuffer(request.url);
      const response2 = new Response2(data, { headers: { "Content-Type": data.typeFull } });
      resolve2(response2);
      return;
    }
    const send = (parsedURL.protocol === "https:" ? import_node_https.default : import_node_http.default).request;
    const { signal } = request;
    let response = null;
    const abort = () => {
      const error2 = new AbortError("The operation was aborted.");
      reject(error2);
      if (request.body && request.body instanceof import_node_stream.default.Readable) {
        request.body.destroy(error2);
      }
      if (!response || !response.body) {
        return;
      }
      response.body.emit("error", error2);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const abortAndFinalize = () => {
      abort();
      finalize();
    };
    const request_ = send(parsedURL, options);
    if (signal) {
      signal.addEventListener("abort", abortAndFinalize);
    }
    const finalize = () => {
      request_.abort();
      if (signal) {
        signal.removeEventListener("abort", abortAndFinalize);
      }
    };
    request_.on("error", (error2) => {
      reject(new FetchError(`request to ${request.url} failed, reason: ${error2.message}`, "system", error2));
      finalize();
    });
    fixResponseChunkedTransferBadEnding(request_, (error2) => {
      response.body.destroy(error2);
    });
    if (process.version < "v14") {
      request_.on("socket", (s3) => {
        let endedWithEventsCount;
        s3.prependListener("end", () => {
          endedWithEventsCount = s3._eventsCount;
        });
        s3.prependListener("close", (hadError) => {
          if (response && endedWithEventsCount < s3._eventsCount && !hadError) {
            const error2 = new Error("Premature close");
            error2.code = "ERR_STREAM_PREMATURE_CLOSE";
            response.body.emit("error", error2);
          }
        });
      });
    }
    request_.on("response", (response_) => {
      request_.setTimeout(0);
      const headers = fromRawHeaders(response_.rawHeaders);
      if (isRedirect(response_.statusCode)) {
        const location = headers.get("Location");
        const locationURL = location === null ? null : new URL(location, request.url);
        switch (request.redirect) {
          case "error":
            reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
            finalize();
            return;
          case "manual":
            if (locationURL !== null) {
              headers.set("Location", locationURL);
            }
            break;
          case "follow": {
            if (locationURL === null) {
              break;
            }
            if (request.counter >= request.follow) {
              reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
              finalize();
              return;
            }
            const requestOptions = {
              headers: new Headers2(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: clone(request),
              signal: request.signal,
              size: request.size,
              referrer: request.referrer,
              referrerPolicy: request.referrerPolicy
            };
            if (response_.statusCode !== 303 && request.body && options_.body instanceof import_node_stream.default.Readable) {
              reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
              finalize();
              return;
            }
            if (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request.method === "POST") {
              requestOptions.method = "GET";
              requestOptions.body = void 0;
              requestOptions.headers.delete("content-length");
            }
            const responseReferrerPolicy = parseReferrerPolicyFromHeader(headers);
            if (responseReferrerPolicy) {
              requestOptions.referrerPolicy = responseReferrerPolicy;
            }
            resolve2(fetch2(new Request2(locationURL, requestOptions)));
            finalize();
            return;
          }
          default:
            return reject(new TypeError(`Redirect option '${request.redirect}' is not a valid value of RequestRedirect`));
        }
      }
      if (signal) {
        response_.once("end", () => {
          signal.removeEventListener("abort", abortAndFinalize);
        });
      }
      let body = (0, import_node_stream.pipeline)(response_, new import_node_stream.PassThrough(), reject);
      if (process.version < "v12.10") {
        response_.on("aborted", abortAndFinalize);
      }
      const responseOptions = {
        url: request.url,
        status: response_.statusCode,
        statusText: response_.statusMessage,
        headers,
        size: request.size,
        counter: request.counter,
        highWaterMark: request.highWaterMark
      };
      const codings = headers.get("Content-Encoding");
      if (!request.compress || request.method === "HEAD" || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      const zlibOptions = {
        flush: import_node_zlib.default.Z_SYNC_FLUSH,
        finishFlush: import_node_zlib.default.Z_SYNC_FLUSH
      };
      if (codings === "gzip" || codings === "x-gzip") {
        body = (0, import_node_stream.pipeline)(body, import_node_zlib.default.createGunzip(zlibOptions), reject);
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      if (codings === "deflate" || codings === "x-deflate") {
        const raw = (0, import_node_stream.pipeline)(response_, new import_node_stream.PassThrough(), reject);
        raw.once("data", (chunk) => {
          body = (chunk[0] & 15) === 8 ? (0, import_node_stream.pipeline)(body, import_node_zlib.default.createInflate(), reject) : (0, import_node_stream.pipeline)(body, import_node_zlib.default.createInflateRaw(), reject);
          response = new Response2(body, responseOptions);
          resolve2(response);
        });
        return;
      }
      if (codings === "br") {
        body = (0, import_node_stream.pipeline)(body, import_node_zlib.default.createBrotliDecompress(), reject);
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      response = new Response2(body, responseOptions);
      resolve2(response);
    });
    writeToStream(request_, request);
  });
}
function fixResponseChunkedTransferBadEnding(request, errorCallback) {
  const LAST_CHUNK = Buffer.from("0\r\n\r\n");
  let isChunkedTransfer = false;
  let properLastChunkReceived = false;
  let previousChunk;
  request.on("response", (response) => {
    const { headers } = response;
    isChunkedTransfer = headers["transfer-encoding"] === "chunked" && !headers["content-length"];
  });
  request.on("socket", (socket) => {
    const onSocketClose = () => {
      if (isChunkedTransfer && !properLastChunkReceived) {
        const error2 = new Error("Premature close");
        error2.code = "ERR_STREAM_PREMATURE_CLOSE";
        errorCallback(error2);
      }
    };
    socket.prependListener("close", onSocketClose);
    request.on("abort", () => {
      socket.removeListener("close", onSocketClose);
    });
    socket.on("data", (buf) => {
      properLastChunkReceived = Buffer.compare(buf.slice(-5), LAST_CHUNK) === 0;
      if (!properLastChunkReceived && previousChunk) {
        properLastChunkReceived = Buffer.compare(previousChunk.slice(-3), LAST_CHUNK.slice(0, 3)) === 0 && Buffer.compare(buf.slice(-2), LAST_CHUNK.slice(3)) === 0;
      }
      previousChunk = buf;
    });
  });
}
function installFetch() {
  Object.defineProperties(globalThis, {
    fetch: {
      enumerable: true,
      configurable: true,
      value: fetch2
    },
    Response: {
      enumerable: true,
      configurable: true,
      value: Response2
    },
    Request: {
      enumerable: true,
      configurable: true,
      value: Request2
    },
    Headers: {
      enumerable: true,
      configurable: true,
      value: Headers2
    }
  });
}
var import_node_http, import_node_https, import_node_zlib, import_node_stream, import_node_util, import_node_url, import_net, commonjsGlobal, ponyfill_es2018, POOL_SIZE$1, POOL_SIZE, _parts, _type, _size, _a, _Blob, Blob, Blob$1, _lastModified, _name, _a2, _File, File, t, i, h, r, m, f2, e, x, _d, _a3, FormData, FetchBaseError, FetchError, NAME, isURLSearchParameters, isBlob, isAbortSignal, INTERNALS$2, Body, clone, getNonSpecFormDataBoundary, extractContentType, getTotalBytes, writeToStream, validateHeaderName, validateHeaderValue, Headers2, redirectStatus, isRedirect, INTERNALS$1, Response2, getSearch, ReferrerPolicy, DEFAULT_REFERRER_POLICY, INTERNALS, isRequest, Request2, getNodeRequestOptions, AbortError, supportedSchemas;
var init_install_fetch = __esm({
  "node_modules/@sveltejs/kit/dist/install-fetch.js"() {
    import_node_http = __toESM(require("http"), 1);
    import_node_https = __toESM(require("https"), 1);
    import_node_zlib = __toESM(require("zlib"), 1);
    import_node_stream = __toESM(require("stream"), 1);
    import_node_util = require("util");
    import_node_url = require("url");
    import_net = require("net");
    commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
    ponyfill_es2018 = { exports: {} };
    (function(module2, exports) {
      (function(global2, factory) {
        factory(exports);
      })(commonjsGlobal, function(exports2) {
        const SymbolPolyfill = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol : (description) => `Symbol(${description})`;
        function noop4() {
          return void 0;
        }
        function getGlobals() {
          if (typeof self !== "undefined") {
            return self;
          } else if (typeof window !== "undefined") {
            return window;
          } else if (typeof commonjsGlobal !== "undefined") {
            return commonjsGlobal;
          }
          return void 0;
        }
        const globals = getGlobals();
        function typeIsObject(x2) {
          return typeof x2 === "object" && x2 !== null || typeof x2 === "function";
        }
        const rethrowAssertionErrorRejection = noop4;
        const originalPromise = Promise;
        const originalPromiseThen = Promise.prototype.then;
        const originalPromiseResolve = Promise.resolve.bind(originalPromise);
        const originalPromiseReject = Promise.reject.bind(originalPromise);
        function newPromise(executor) {
          return new originalPromise(executor);
        }
        function promiseResolvedWith(value) {
          return originalPromiseResolve(value);
        }
        function promiseRejectedWith(reason) {
          return originalPromiseReject(reason);
        }
        function PerformPromiseThen(promise, onFulfilled, onRejected) {
          return originalPromiseThen.call(promise, onFulfilled, onRejected);
        }
        function uponPromise(promise, onFulfilled, onRejected) {
          PerformPromiseThen(PerformPromiseThen(promise, onFulfilled, onRejected), void 0, rethrowAssertionErrorRejection);
        }
        function uponFulfillment(promise, onFulfilled) {
          uponPromise(promise, onFulfilled);
        }
        function uponRejection(promise, onRejected) {
          uponPromise(promise, void 0, onRejected);
        }
        function transformPromiseWith(promise, fulfillmentHandler, rejectionHandler) {
          return PerformPromiseThen(promise, fulfillmentHandler, rejectionHandler);
        }
        function setPromiseIsHandledToTrue(promise) {
          PerformPromiseThen(promise, void 0, rethrowAssertionErrorRejection);
        }
        const queueMicrotask = (() => {
          const globalQueueMicrotask = globals && globals.queueMicrotask;
          if (typeof globalQueueMicrotask === "function") {
            return globalQueueMicrotask;
          }
          const resolvedPromise = promiseResolvedWith(void 0);
          return (fn) => PerformPromiseThen(resolvedPromise, fn);
        })();
        function reflectCall(F2, V, args) {
          if (typeof F2 !== "function") {
            throw new TypeError("Argument is not a function");
          }
          return Function.prototype.apply.call(F2, V, args);
        }
        function promiseCall(F2, V, args) {
          try {
            return promiseResolvedWith(reflectCall(F2, V, args));
          } catch (value) {
            return promiseRejectedWith(value);
          }
        }
        const QUEUE_MAX_ARRAY_SIZE = 16384;
        class SimpleQueue {
          constructor() {
            this._cursor = 0;
            this._size = 0;
            this._front = {
              _elements: [],
              _next: void 0
            };
            this._back = this._front;
            this._cursor = 0;
            this._size = 0;
          }
          get length() {
            return this._size;
          }
          push(element) {
            const oldBack = this._back;
            let newBack = oldBack;
            if (oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE - 1) {
              newBack = {
                _elements: [],
                _next: void 0
              };
            }
            oldBack._elements.push(element);
            if (newBack !== oldBack) {
              this._back = newBack;
              oldBack._next = newBack;
            }
            ++this._size;
          }
          shift() {
            const oldFront = this._front;
            let newFront = oldFront;
            const oldCursor = this._cursor;
            let newCursor = oldCursor + 1;
            const elements = oldFront._elements;
            const element = elements[oldCursor];
            if (newCursor === QUEUE_MAX_ARRAY_SIZE) {
              newFront = oldFront._next;
              newCursor = 0;
            }
            --this._size;
            this._cursor = newCursor;
            if (oldFront !== newFront) {
              this._front = newFront;
            }
            elements[oldCursor] = void 0;
            return element;
          }
          forEach(callback) {
            let i2 = this._cursor;
            let node = this._front;
            let elements = node._elements;
            while (i2 !== elements.length || node._next !== void 0) {
              if (i2 === elements.length) {
                node = node._next;
                elements = node._elements;
                i2 = 0;
                if (elements.length === 0) {
                  break;
                }
              }
              callback(elements[i2]);
              ++i2;
            }
          }
          peek() {
            const front = this._front;
            const cursor = this._cursor;
            return front._elements[cursor];
          }
        }
        function ReadableStreamReaderGenericInitialize(reader, stream) {
          reader._ownerReadableStream = stream;
          stream._reader = reader;
          if (stream._state === "readable") {
            defaultReaderClosedPromiseInitialize(reader);
          } else if (stream._state === "closed") {
            defaultReaderClosedPromiseInitializeAsResolved(reader);
          } else {
            defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
          }
        }
        function ReadableStreamReaderGenericCancel(reader, reason) {
          const stream = reader._ownerReadableStream;
          return ReadableStreamCancel(stream, reason);
        }
        function ReadableStreamReaderGenericRelease(reader) {
          if (reader._ownerReadableStream._state === "readable") {
            defaultReaderClosedPromiseReject(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
          } else {
            defaultReaderClosedPromiseResetToRejected(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
          }
          reader._ownerReadableStream._reader = void 0;
          reader._ownerReadableStream = void 0;
        }
        function readerLockException(name) {
          return new TypeError("Cannot " + name + " a stream using a released reader");
        }
        function defaultReaderClosedPromiseInitialize(reader) {
          reader._closedPromise = newPromise((resolve2, reject) => {
            reader._closedPromise_resolve = resolve2;
            reader._closedPromise_reject = reject;
          });
        }
        function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
          defaultReaderClosedPromiseInitialize(reader);
          defaultReaderClosedPromiseReject(reader, reason);
        }
        function defaultReaderClosedPromiseInitializeAsResolved(reader) {
          defaultReaderClosedPromiseInitialize(reader);
          defaultReaderClosedPromiseResolve(reader);
        }
        function defaultReaderClosedPromiseReject(reader, reason) {
          if (reader._closedPromise_reject === void 0) {
            return;
          }
          setPromiseIsHandledToTrue(reader._closedPromise);
          reader._closedPromise_reject(reason);
          reader._closedPromise_resolve = void 0;
          reader._closedPromise_reject = void 0;
        }
        function defaultReaderClosedPromiseResetToRejected(reader, reason) {
          defaultReaderClosedPromiseInitializeAsRejected(reader, reason);
        }
        function defaultReaderClosedPromiseResolve(reader) {
          if (reader._closedPromise_resolve === void 0) {
            return;
          }
          reader._closedPromise_resolve(void 0);
          reader._closedPromise_resolve = void 0;
          reader._closedPromise_reject = void 0;
        }
        const AbortSteps = SymbolPolyfill("[[AbortSteps]]");
        const ErrorSteps = SymbolPolyfill("[[ErrorSteps]]");
        const CancelSteps = SymbolPolyfill("[[CancelSteps]]");
        const PullSteps = SymbolPolyfill("[[PullSteps]]");
        const NumberIsFinite = Number.isFinite || function(x2) {
          return typeof x2 === "number" && isFinite(x2);
        };
        const MathTrunc = Math.trunc || function(v) {
          return v < 0 ? Math.ceil(v) : Math.floor(v);
        };
        function isDictionary(x2) {
          return typeof x2 === "object" || typeof x2 === "function";
        }
        function assertDictionary(obj, context) {
          if (obj !== void 0 && !isDictionary(obj)) {
            throw new TypeError(`${context} is not an object.`);
          }
        }
        function assertFunction(x2, context) {
          if (typeof x2 !== "function") {
            throw new TypeError(`${context} is not a function.`);
          }
        }
        function isObject(x2) {
          return typeof x2 === "object" && x2 !== null || typeof x2 === "function";
        }
        function assertObject(x2, context) {
          if (!isObject(x2)) {
            throw new TypeError(`${context} is not an object.`);
          }
        }
        function assertRequiredArgument(x2, position, context) {
          if (x2 === void 0) {
            throw new TypeError(`Parameter ${position} is required in '${context}'.`);
          }
        }
        function assertRequiredField(x2, field, context) {
          if (x2 === void 0) {
            throw new TypeError(`${field} is required in '${context}'.`);
          }
        }
        function convertUnrestrictedDouble(value) {
          return Number(value);
        }
        function censorNegativeZero(x2) {
          return x2 === 0 ? 0 : x2;
        }
        function integerPart(x2) {
          return censorNegativeZero(MathTrunc(x2));
        }
        function convertUnsignedLongLongWithEnforceRange(value, context) {
          const lowerBound = 0;
          const upperBound = Number.MAX_SAFE_INTEGER;
          let x2 = Number(value);
          x2 = censorNegativeZero(x2);
          if (!NumberIsFinite(x2)) {
            throw new TypeError(`${context} is not a finite number`);
          }
          x2 = integerPart(x2);
          if (x2 < lowerBound || x2 > upperBound) {
            throw new TypeError(`${context} is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`);
          }
          if (!NumberIsFinite(x2) || x2 === 0) {
            return 0;
          }
          return x2;
        }
        function assertReadableStream(x2, context) {
          if (!IsReadableStream(x2)) {
            throw new TypeError(`${context} is not a ReadableStream.`);
          }
        }
        function AcquireReadableStreamDefaultReader(stream) {
          return new ReadableStreamDefaultReader(stream);
        }
        function ReadableStreamAddReadRequest(stream, readRequest) {
          stream._reader._readRequests.push(readRequest);
        }
        function ReadableStreamFulfillReadRequest(stream, chunk, done) {
          const reader = stream._reader;
          const readRequest = reader._readRequests.shift();
          if (done) {
            readRequest._closeSteps();
          } else {
            readRequest._chunkSteps(chunk);
          }
        }
        function ReadableStreamGetNumReadRequests(stream) {
          return stream._reader._readRequests.length;
        }
        function ReadableStreamHasDefaultReader(stream) {
          const reader = stream._reader;
          if (reader === void 0) {
            return false;
          }
          if (!IsReadableStreamDefaultReader(reader)) {
            return false;
          }
          return true;
        }
        class ReadableStreamDefaultReader {
          constructor(stream) {
            assertRequiredArgument(stream, 1, "ReadableStreamDefaultReader");
            assertReadableStream(stream, "First parameter");
            if (IsReadableStreamLocked(stream)) {
              throw new TypeError("This stream has already been locked for exclusive reading by another reader");
            }
            ReadableStreamReaderGenericInitialize(this, stream);
            this._readRequests = new SimpleQueue();
          }
          get closed() {
            if (!IsReadableStreamDefaultReader(this)) {
              return promiseRejectedWith(defaultReaderBrandCheckException("closed"));
            }
            return this._closedPromise;
          }
          cancel(reason = void 0) {
            if (!IsReadableStreamDefaultReader(this)) {
              return promiseRejectedWith(defaultReaderBrandCheckException("cancel"));
            }
            if (this._ownerReadableStream === void 0) {
              return promiseRejectedWith(readerLockException("cancel"));
            }
            return ReadableStreamReaderGenericCancel(this, reason);
          }
          read() {
            if (!IsReadableStreamDefaultReader(this)) {
              return promiseRejectedWith(defaultReaderBrandCheckException("read"));
            }
            if (this._ownerReadableStream === void 0) {
              return promiseRejectedWith(readerLockException("read from"));
            }
            let resolvePromise;
            let rejectPromise;
            const promise = newPromise((resolve2, reject) => {
              resolvePromise = resolve2;
              rejectPromise = reject;
            });
            const readRequest = {
              _chunkSteps: (chunk) => resolvePromise({ value: chunk, done: false }),
              _closeSteps: () => resolvePromise({ value: void 0, done: true }),
              _errorSteps: (e2) => rejectPromise(e2)
            };
            ReadableStreamDefaultReaderRead(this, readRequest);
            return promise;
          }
          releaseLock() {
            if (!IsReadableStreamDefaultReader(this)) {
              throw defaultReaderBrandCheckException("releaseLock");
            }
            if (this._ownerReadableStream === void 0) {
              return;
            }
            if (this._readRequests.length > 0) {
              throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
            }
            ReadableStreamReaderGenericRelease(this);
          }
        }
        Object.defineProperties(ReadableStreamDefaultReader.prototype, {
          cancel: { enumerable: true },
          read: { enumerable: true },
          releaseLock: { enumerable: true },
          closed: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(ReadableStreamDefaultReader.prototype, SymbolPolyfill.toStringTag, {
            value: "ReadableStreamDefaultReader",
            configurable: true
          });
        }
        function IsReadableStreamDefaultReader(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_readRequests")) {
            return false;
          }
          return x2 instanceof ReadableStreamDefaultReader;
        }
        function ReadableStreamDefaultReaderRead(reader, readRequest) {
          const stream = reader._ownerReadableStream;
          stream._disturbed = true;
          if (stream._state === "closed") {
            readRequest._closeSteps();
          } else if (stream._state === "errored") {
            readRequest._errorSteps(stream._storedError);
          } else {
            stream._readableStreamController[PullSteps](readRequest);
          }
        }
        function defaultReaderBrandCheckException(name) {
          return new TypeError(`ReadableStreamDefaultReader.prototype.${name} can only be used on a ReadableStreamDefaultReader`);
        }
        const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
        }).prototype);
        class ReadableStreamAsyncIteratorImpl {
          constructor(reader, preventCancel) {
            this._ongoingPromise = void 0;
            this._isFinished = false;
            this._reader = reader;
            this._preventCancel = preventCancel;
          }
          next() {
            const nextSteps = () => this._nextSteps();
            this._ongoingPromise = this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, nextSteps, nextSteps) : nextSteps();
            return this._ongoingPromise;
          }
          return(value) {
            const returnSteps = () => this._returnSteps(value);
            return this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, returnSteps, returnSteps) : returnSteps();
          }
          _nextSteps() {
            if (this._isFinished) {
              return Promise.resolve({ value: void 0, done: true });
            }
            const reader = this._reader;
            if (reader._ownerReadableStream === void 0) {
              return promiseRejectedWith(readerLockException("iterate"));
            }
            let resolvePromise;
            let rejectPromise;
            const promise = newPromise((resolve2, reject) => {
              resolvePromise = resolve2;
              rejectPromise = reject;
            });
            const readRequest = {
              _chunkSteps: (chunk) => {
                this._ongoingPromise = void 0;
                queueMicrotask(() => resolvePromise({ value: chunk, done: false }));
              },
              _closeSteps: () => {
                this._ongoingPromise = void 0;
                this._isFinished = true;
                ReadableStreamReaderGenericRelease(reader);
                resolvePromise({ value: void 0, done: true });
              },
              _errorSteps: (reason) => {
                this._ongoingPromise = void 0;
                this._isFinished = true;
                ReadableStreamReaderGenericRelease(reader);
                rejectPromise(reason);
              }
            };
            ReadableStreamDefaultReaderRead(reader, readRequest);
            return promise;
          }
          _returnSteps(value) {
            if (this._isFinished) {
              return Promise.resolve({ value, done: true });
            }
            this._isFinished = true;
            const reader = this._reader;
            if (reader._ownerReadableStream === void 0) {
              return promiseRejectedWith(readerLockException("finish iterating"));
            }
            if (!this._preventCancel) {
              const result = ReadableStreamReaderGenericCancel(reader, value);
              ReadableStreamReaderGenericRelease(reader);
              return transformPromiseWith(result, () => ({ value, done: true }));
            }
            ReadableStreamReaderGenericRelease(reader);
            return promiseResolvedWith({ value, done: true });
          }
        }
        const ReadableStreamAsyncIteratorPrototype = {
          next() {
            if (!IsReadableStreamAsyncIterator(this)) {
              return promiseRejectedWith(streamAsyncIteratorBrandCheckException("next"));
            }
            return this._asyncIteratorImpl.next();
          },
          return(value) {
            if (!IsReadableStreamAsyncIterator(this)) {
              return promiseRejectedWith(streamAsyncIteratorBrandCheckException("return"));
            }
            return this._asyncIteratorImpl.return(value);
          }
        };
        if (AsyncIteratorPrototype !== void 0) {
          Object.setPrototypeOf(ReadableStreamAsyncIteratorPrototype, AsyncIteratorPrototype);
        }
        function AcquireReadableStreamAsyncIterator(stream, preventCancel) {
          const reader = AcquireReadableStreamDefaultReader(stream);
          const impl = new ReadableStreamAsyncIteratorImpl(reader, preventCancel);
          const iterator = Object.create(ReadableStreamAsyncIteratorPrototype);
          iterator._asyncIteratorImpl = impl;
          return iterator;
        }
        function IsReadableStreamAsyncIterator(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_asyncIteratorImpl")) {
            return false;
          }
          try {
            return x2._asyncIteratorImpl instanceof ReadableStreamAsyncIteratorImpl;
          } catch (_a4) {
            return false;
          }
        }
        function streamAsyncIteratorBrandCheckException(name) {
          return new TypeError(`ReadableStreamAsyncIterator.${name} can only be used on a ReadableSteamAsyncIterator`);
        }
        const NumberIsNaN = Number.isNaN || function(x2) {
          return x2 !== x2;
        };
        function CreateArrayFromList(elements) {
          return elements.slice();
        }
        function CopyDataBlockBytes(dest, destOffset, src, srcOffset, n) {
          new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
        }
        function TransferArrayBuffer(O) {
          return O;
        }
        function IsDetachedBuffer(O) {
          return false;
        }
        function ArrayBufferSlice(buffer, begin, end) {
          if (buffer.slice) {
            return buffer.slice(begin, end);
          }
          const length = end - begin;
          const slice = new ArrayBuffer(length);
          CopyDataBlockBytes(slice, 0, buffer, begin, length);
          return slice;
        }
        function IsNonNegativeNumber(v) {
          if (typeof v !== "number") {
            return false;
          }
          if (NumberIsNaN(v)) {
            return false;
          }
          if (v < 0) {
            return false;
          }
          return true;
        }
        function CloneAsUint8Array(O) {
          const buffer = ArrayBufferSlice(O.buffer, O.byteOffset, O.byteOffset + O.byteLength);
          return new Uint8Array(buffer);
        }
        function DequeueValue(container) {
          const pair = container._queue.shift();
          container._queueTotalSize -= pair.size;
          if (container._queueTotalSize < 0) {
            container._queueTotalSize = 0;
          }
          return pair.value;
        }
        function EnqueueValueWithSize(container, value, size) {
          if (!IsNonNegativeNumber(size) || size === Infinity) {
            throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
          }
          container._queue.push({ value, size });
          container._queueTotalSize += size;
        }
        function PeekQueueValue(container) {
          const pair = container._queue.peek();
          return pair.value;
        }
        function ResetQueue(container) {
          container._queue = new SimpleQueue();
          container._queueTotalSize = 0;
        }
        class ReadableStreamBYOBRequest {
          constructor() {
            throw new TypeError("Illegal constructor");
          }
          get view() {
            if (!IsReadableStreamBYOBRequest(this)) {
              throw byobRequestBrandCheckException("view");
            }
            return this._view;
          }
          respond(bytesWritten) {
            if (!IsReadableStreamBYOBRequest(this)) {
              throw byobRequestBrandCheckException("respond");
            }
            assertRequiredArgument(bytesWritten, 1, "respond");
            bytesWritten = convertUnsignedLongLongWithEnforceRange(bytesWritten, "First parameter");
            if (this._associatedReadableByteStreamController === void 0) {
              throw new TypeError("This BYOB request has been invalidated");
            }
            if (IsDetachedBuffer(this._view.buffer))
              ;
            ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
          }
          respondWithNewView(view) {
            if (!IsReadableStreamBYOBRequest(this)) {
              throw byobRequestBrandCheckException("respondWithNewView");
            }
            assertRequiredArgument(view, 1, "respondWithNewView");
            if (!ArrayBuffer.isView(view)) {
              throw new TypeError("You can only respond with array buffer views");
            }
            if (this._associatedReadableByteStreamController === void 0) {
              throw new TypeError("This BYOB request has been invalidated");
            }
            if (IsDetachedBuffer(view.buffer))
              ;
            ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
          }
        }
        Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
          respond: { enumerable: true },
          respondWithNewView: { enumerable: true },
          view: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(ReadableStreamBYOBRequest.prototype, SymbolPolyfill.toStringTag, {
            value: "ReadableStreamBYOBRequest",
            configurable: true
          });
        }
        class ReadableByteStreamController {
          constructor() {
            throw new TypeError("Illegal constructor");
          }
          get byobRequest() {
            if (!IsReadableByteStreamController(this)) {
              throw byteStreamControllerBrandCheckException("byobRequest");
            }
            return ReadableByteStreamControllerGetBYOBRequest(this);
          }
          get desiredSize() {
            if (!IsReadableByteStreamController(this)) {
              throw byteStreamControllerBrandCheckException("desiredSize");
            }
            return ReadableByteStreamControllerGetDesiredSize(this);
          }
          close() {
            if (!IsReadableByteStreamController(this)) {
              throw byteStreamControllerBrandCheckException("close");
            }
            if (this._closeRequested) {
              throw new TypeError("The stream has already been closed; do not close it again!");
            }
            const state = this._controlledReadableByteStream._state;
            if (state !== "readable") {
              throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be closed`);
            }
            ReadableByteStreamControllerClose(this);
          }
          enqueue(chunk) {
            if (!IsReadableByteStreamController(this)) {
              throw byteStreamControllerBrandCheckException("enqueue");
            }
            assertRequiredArgument(chunk, 1, "enqueue");
            if (!ArrayBuffer.isView(chunk)) {
              throw new TypeError("chunk must be an array buffer view");
            }
            if (chunk.byteLength === 0) {
              throw new TypeError("chunk must have non-zero byteLength");
            }
            if (chunk.buffer.byteLength === 0) {
              throw new TypeError(`chunk's buffer must have non-zero byteLength`);
            }
            if (this._closeRequested) {
              throw new TypeError("stream is closed or draining");
            }
            const state = this._controlledReadableByteStream._state;
            if (state !== "readable") {
              throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be enqueued to`);
            }
            ReadableByteStreamControllerEnqueue(this, chunk);
          }
          error(e2 = void 0) {
            if (!IsReadableByteStreamController(this)) {
              throw byteStreamControllerBrandCheckException("error");
            }
            ReadableByteStreamControllerError(this, e2);
          }
          [CancelSteps](reason) {
            ReadableByteStreamControllerClearPendingPullIntos(this);
            ResetQueue(this);
            const result = this._cancelAlgorithm(reason);
            ReadableByteStreamControllerClearAlgorithms(this);
            return result;
          }
          [PullSteps](readRequest) {
            const stream = this._controlledReadableByteStream;
            if (this._queueTotalSize > 0) {
              const entry11 = this._queue.shift();
              this._queueTotalSize -= entry11.byteLength;
              ReadableByteStreamControllerHandleQueueDrain(this);
              const view = new Uint8Array(entry11.buffer, entry11.byteOffset, entry11.byteLength);
              readRequest._chunkSteps(view);
              return;
            }
            const autoAllocateChunkSize = this._autoAllocateChunkSize;
            if (autoAllocateChunkSize !== void 0) {
              let buffer;
              try {
                buffer = new ArrayBuffer(autoAllocateChunkSize);
              } catch (bufferE) {
                readRequest._errorSteps(bufferE);
                return;
              }
              const pullIntoDescriptor = {
                buffer,
                bufferByteLength: autoAllocateChunkSize,
                byteOffset: 0,
                byteLength: autoAllocateChunkSize,
                bytesFilled: 0,
                elementSize: 1,
                viewConstructor: Uint8Array,
                readerType: "default"
              };
              this._pendingPullIntos.push(pullIntoDescriptor);
            }
            ReadableStreamAddReadRequest(stream, readRequest);
            ReadableByteStreamControllerCallPullIfNeeded(this);
          }
        }
        Object.defineProperties(ReadableByteStreamController.prototype, {
          close: { enumerable: true },
          enqueue: { enumerable: true },
          error: { enumerable: true },
          byobRequest: { enumerable: true },
          desiredSize: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(ReadableByteStreamController.prototype, SymbolPolyfill.toStringTag, {
            value: "ReadableByteStreamController",
            configurable: true
          });
        }
        function IsReadableByteStreamController(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_controlledReadableByteStream")) {
            return false;
          }
          return x2 instanceof ReadableByteStreamController;
        }
        function IsReadableStreamBYOBRequest(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_associatedReadableByteStreamController")) {
            return false;
          }
          return x2 instanceof ReadableStreamBYOBRequest;
        }
        function ReadableByteStreamControllerCallPullIfNeeded(controller) {
          const shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
          if (!shouldPull) {
            return;
          }
          if (controller._pulling) {
            controller._pullAgain = true;
            return;
          }
          controller._pulling = true;
          const pullPromise = controller._pullAlgorithm();
          uponPromise(pullPromise, () => {
            controller._pulling = false;
            if (controller._pullAgain) {
              controller._pullAgain = false;
              ReadableByteStreamControllerCallPullIfNeeded(controller);
            }
          }, (e2) => {
            ReadableByteStreamControllerError(controller, e2);
          });
        }
        function ReadableByteStreamControllerClearPendingPullIntos(controller) {
          ReadableByteStreamControllerInvalidateBYOBRequest(controller);
          controller._pendingPullIntos = new SimpleQueue();
        }
        function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
          let done = false;
          if (stream._state === "closed") {
            done = true;
          }
          const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
          if (pullIntoDescriptor.readerType === "default") {
            ReadableStreamFulfillReadRequest(stream, filledView, done);
          } else {
            ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
          }
        }
        function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
          const bytesFilled = pullIntoDescriptor.bytesFilled;
          const elementSize = pullIntoDescriptor.elementSize;
          return new pullIntoDescriptor.viewConstructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
        }
        function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
          controller._queue.push({ buffer, byteOffset, byteLength });
          controller._queueTotalSize += byteLength;
        }
        function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
          const elementSize = pullIntoDescriptor.elementSize;
          const currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize;
          const maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
          const maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
          const maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize;
          let totalBytesToCopyRemaining = maxBytesToCopy;
          let ready = false;
          if (maxAlignedBytes > currentAlignedBytes) {
            totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
            ready = true;
          }
          const queue = controller._queue;
          while (totalBytesToCopyRemaining > 0) {
            const headOfQueue = queue.peek();
            const bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
            const destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
            CopyDataBlockBytes(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
            if (headOfQueue.byteLength === bytesToCopy) {
              queue.shift();
            } else {
              headOfQueue.byteOffset += bytesToCopy;
              headOfQueue.byteLength -= bytesToCopy;
            }
            controller._queueTotalSize -= bytesToCopy;
            ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
            totalBytesToCopyRemaining -= bytesToCopy;
          }
          return ready;
        }
        function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
          pullIntoDescriptor.bytesFilled += size;
        }
        function ReadableByteStreamControllerHandleQueueDrain(controller) {
          if (controller._queueTotalSize === 0 && controller._closeRequested) {
            ReadableByteStreamControllerClearAlgorithms(controller);
            ReadableStreamClose(controller._controlledReadableByteStream);
          } else {
            ReadableByteStreamControllerCallPullIfNeeded(controller);
          }
        }
        function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
          if (controller._byobRequest === null) {
            return;
          }
          controller._byobRequest._associatedReadableByteStreamController = void 0;
          controller._byobRequest._view = null;
          controller._byobRequest = null;
        }
        function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
          while (controller._pendingPullIntos.length > 0) {
            if (controller._queueTotalSize === 0) {
              return;
            }
            const pullIntoDescriptor = controller._pendingPullIntos.peek();
            if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
              ReadableByteStreamControllerShiftPendingPullInto(controller);
              ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
            }
          }
        }
        function ReadableByteStreamControllerPullInto(controller, view, readIntoRequest) {
          const stream = controller._controlledReadableByteStream;
          let elementSize = 1;
          if (view.constructor !== DataView) {
            elementSize = view.constructor.BYTES_PER_ELEMENT;
          }
          const ctor = view.constructor;
          const buffer = TransferArrayBuffer(view.buffer);
          const pullIntoDescriptor = {
            buffer,
            bufferByteLength: buffer.byteLength,
            byteOffset: view.byteOffset,
            byteLength: view.byteLength,
            bytesFilled: 0,
            elementSize,
            viewConstructor: ctor,
            readerType: "byob"
          };
          if (controller._pendingPullIntos.length > 0) {
            controller._pendingPullIntos.push(pullIntoDescriptor);
            ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
            return;
          }
          if (stream._state === "closed") {
            const emptyView = new ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
            readIntoRequest._closeSteps(emptyView);
            return;
          }
          if (controller._queueTotalSize > 0) {
            if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
              const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
              ReadableByteStreamControllerHandleQueueDrain(controller);
              readIntoRequest._chunkSteps(filledView);
              return;
            }
            if (controller._closeRequested) {
              const e2 = new TypeError("Insufficient bytes to fill elements in the given buffer");
              ReadableByteStreamControllerError(controller, e2);
              readIntoRequest._errorSteps(e2);
              return;
            }
          }
          controller._pendingPullIntos.push(pullIntoDescriptor);
          ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
          ReadableByteStreamControllerCallPullIfNeeded(controller);
        }
        function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
          const stream = controller._controlledReadableByteStream;
          if (ReadableStreamHasBYOBReader(stream)) {
            while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
              const pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
              ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
            }
          }
        }
        function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
          ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
          if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
            return;
          }
          ReadableByteStreamControllerShiftPendingPullInto(controller);
          const remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
          if (remainderSize > 0) {
            const end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
            const remainder = ArrayBufferSlice(pullIntoDescriptor.buffer, end - remainderSize, end);
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
          }
          pullIntoDescriptor.bytesFilled -= remainderSize;
          ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
          ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
        }
        function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
          const firstDescriptor = controller._pendingPullIntos.peek();
          ReadableByteStreamControllerInvalidateBYOBRequest(controller);
          const state = controller._controlledReadableByteStream._state;
          if (state === "closed") {
            ReadableByteStreamControllerRespondInClosedState(controller);
          } else {
            ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
          }
          ReadableByteStreamControllerCallPullIfNeeded(controller);
        }
        function ReadableByteStreamControllerShiftPendingPullInto(controller) {
          const descriptor = controller._pendingPullIntos.shift();
          return descriptor;
        }
        function ReadableByteStreamControllerShouldCallPull(controller) {
          const stream = controller._controlledReadableByteStream;
          if (stream._state !== "readable") {
            return false;
          }
          if (controller._closeRequested) {
            return false;
          }
          if (!controller._started) {
            return false;
          }
          if (ReadableStreamHasDefaultReader(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
            return true;
          }
          if (ReadableStreamHasBYOBReader(stream) && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
            return true;
          }
          const desiredSize = ReadableByteStreamControllerGetDesiredSize(controller);
          if (desiredSize > 0) {
            return true;
          }
          return false;
        }
        function ReadableByteStreamControllerClearAlgorithms(controller) {
          controller._pullAlgorithm = void 0;
          controller._cancelAlgorithm = void 0;
        }
        function ReadableByteStreamControllerClose(controller) {
          const stream = controller._controlledReadableByteStream;
          if (controller._closeRequested || stream._state !== "readable") {
            return;
          }
          if (controller._queueTotalSize > 0) {
            controller._closeRequested = true;
            return;
          }
          if (controller._pendingPullIntos.length > 0) {
            const firstPendingPullInto = controller._pendingPullIntos.peek();
            if (firstPendingPullInto.bytesFilled > 0) {
              const e2 = new TypeError("Insufficient bytes to fill elements in the given buffer");
              ReadableByteStreamControllerError(controller, e2);
              throw e2;
            }
          }
          ReadableByteStreamControllerClearAlgorithms(controller);
          ReadableStreamClose(stream);
        }
        function ReadableByteStreamControllerEnqueue(controller, chunk) {
          const stream = controller._controlledReadableByteStream;
          if (controller._closeRequested || stream._state !== "readable") {
            return;
          }
          const buffer = chunk.buffer;
          const byteOffset = chunk.byteOffset;
          const byteLength = chunk.byteLength;
          const transferredBuffer = TransferArrayBuffer(buffer);
          if (controller._pendingPullIntos.length > 0) {
            const firstPendingPullInto = controller._pendingPullIntos.peek();
            if (IsDetachedBuffer(firstPendingPullInto.buffer))
              ;
            firstPendingPullInto.buffer = TransferArrayBuffer(firstPendingPullInto.buffer);
          }
          ReadableByteStreamControllerInvalidateBYOBRequest(controller);
          if (ReadableStreamHasDefaultReader(stream)) {
            if (ReadableStreamGetNumReadRequests(stream) === 0) {
              ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
            } else {
              if (controller._pendingPullIntos.length > 0) {
                ReadableByteStreamControllerShiftPendingPullInto(controller);
              }
              const transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
              ReadableStreamFulfillReadRequest(stream, transferredView, false);
            }
          } else if (ReadableStreamHasBYOBReader(stream)) {
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
            ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
          } else {
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
          }
          ReadableByteStreamControllerCallPullIfNeeded(controller);
        }
        function ReadableByteStreamControllerError(controller, e2) {
          const stream = controller._controlledReadableByteStream;
          if (stream._state !== "readable") {
            return;
          }
          ReadableByteStreamControllerClearPendingPullIntos(controller);
          ResetQueue(controller);
          ReadableByteStreamControllerClearAlgorithms(controller);
          ReadableStreamError(stream, e2);
        }
        function ReadableByteStreamControllerGetBYOBRequest(controller) {
          if (controller._byobRequest === null && controller._pendingPullIntos.length > 0) {
            const firstDescriptor = controller._pendingPullIntos.peek();
            const view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
            const byobRequest = Object.create(ReadableStreamBYOBRequest.prototype);
            SetUpReadableStreamBYOBRequest(byobRequest, controller, view);
            controller._byobRequest = byobRequest;
          }
          return controller._byobRequest;
        }
        function ReadableByteStreamControllerGetDesiredSize(controller) {
          const state = controller._controlledReadableByteStream._state;
          if (state === "errored") {
            return null;
          }
          if (state === "closed") {
            return 0;
          }
          return controller._strategyHWM - controller._queueTotalSize;
        }
        function ReadableByteStreamControllerRespond(controller, bytesWritten) {
          const firstDescriptor = controller._pendingPullIntos.peek();
          const state = controller._controlledReadableByteStream._state;
          if (state === "closed") {
            if (bytesWritten !== 0) {
              throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
            }
          } else {
            if (bytesWritten === 0) {
              throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
            }
            if (firstDescriptor.bytesFilled + bytesWritten > firstDescriptor.byteLength) {
              throw new RangeError("bytesWritten out of range");
            }
          }
          firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
          ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
        }
        function ReadableByteStreamControllerRespondWithNewView(controller, view) {
          const firstDescriptor = controller._pendingPullIntos.peek();
          const state = controller._controlledReadableByteStream._state;
          if (state === "closed") {
            if (view.byteLength !== 0) {
              throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
            }
          } else {
            if (view.byteLength === 0) {
              throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
            }
          }
          if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
            throw new RangeError("The region specified by view does not match byobRequest");
          }
          if (firstDescriptor.bufferByteLength !== view.buffer.byteLength) {
            throw new RangeError("The buffer of view has different capacity than byobRequest");
          }
          if (firstDescriptor.bytesFilled + view.byteLength > firstDescriptor.byteLength) {
            throw new RangeError("The region specified by view is larger than byobRequest");
          }
          const viewByteLength = view.byteLength;
          firstDescriptor.buffer = TransferArrayBuffer(view.buffer);
          ReadableByteStreamControllerRespondInternal(controller, viewByteLength);
        }
        function SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize) {
          controller._controlledReadableByteStream = stream;
          controller._pullAgain = false;
          controller._pulling = false;
          controller._byobRequest = null;
          controller._queue = controller._queueTotalSize = void 0;
          ResetQueue(controller);
          controller._closeRequested = false;
          controller._started = false;
          controller._strategyHWM = highWaterMark;
          controller._pullAlgorithm = pullAlgorithm;
          controller._cancelAlgorithm = cancelAlgorithm;
          controller._autoAllocateChunkSize = autoAllocateChunkSize;
          controller._pendingPullIntos = new SimpleQueue();
          stream._readableStreamController = controller;
          const startResult = startAlgorithm();
          uponPromise(promiseResolvedWith(startResult), () => {
            controller._started = true;
            ReadableByteStreamControllerCallPullIfNeeded(controller);
          }, (r2) => {
            ReadableByteStreamControllerError(controller, r2);
          });
        }
        function SetUpReadableByteStreamControllerFromUnderlyingSource(stream, underlyingByteSource, highWaterMark) {
          const controller = Object.create(ReadableByteStreamController.prototype);
          let startAlgorithm = () => void 0;
          let pullAlgorithm = () => promiseResolvedWith(void 0);
          let cancelAlgorithm = () => promiseResolvedWith(void 0);
          if (underlyingByteSource.start !== void 0) {
            startAlgorithm = () => underlyingByteSource.start(controller);
          }
          if (underlyingByteSource.pull !== void 0) {
            pullAlgorithm = () => underlyingByteSource.pull(controller);
          }
          if (underlyingByteSource.cancel !== void 0) {
            cancelAlgorithm = (reason) => underlyingByteSource.cancel(reason);
          }
          const autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
          if (autoAllocateChunkSize === 0) {
            throw new TypeError("autoAllocateChunkSize must be greater than 0");
          }
          SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize);
        }
        function SetUpReadableStreamBYOBRequest(request, controller, view) {
          request._associatedReadableByteStreamController = controller;
          request._view = view;
        }
        function byobRequestBrandCheckException(name) {
          return new TypeError(`ReadableStreamBYOBRequest.prototype.${name} can only be used on a ReadableStreamBYOBRequest`);
        }
        function byteStreamControllerBrandCheckException(name) {
          return new TypeError(`ReadableByteStreamController.prototype.${name} can only be used on a ReadableByteStreamController`);
        }
        function AcquireReadableStreamBYOBReader(stream) {
          return new ReadableStreamBYOBReader(stream);
        }
        function ReadableStreamAddReadIntoRequest(stream, readIntoRequest) {
          stream._reader._readIntoRequests.push(readIntoRequest);
        }
        function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
          const reader = stream._reader;
          const readIntoRequest = reader._readIntoRequests.shift();
          if (done) {
            readIntoRequest._closeSteps(chunk);
          } else {
            readIntoRequest._chunkSteps(chunk);
          }
        }
        function ReadableStreamGetNumReadIntoRequests(stream) {
          return stream._reader._readIntoRequests.length;
        }
        function ReadableStreamHasBYOBReader(stream) {
          const reader = stream._reader;
          if (reader === void 0) {
            return false;
          }
          if (!IsReadableStreamBYOBReader(reader)) {
            return false;
          }
          return true;
        }
        class ReadableStreamBYOBReader {
          constructor(stream) {
            assertRequiredArgument(stream, 1, "ReadableStreamBYOBReader");
            assertReadableStream(stream, "First parameter");
            if (IsReadableStreamLocked(stream)) {
              throw new TypeError("This stream has already been locked for exclusive reading by another reader");
            }
            if (!IsReadableByteStreamController(stream._readableStreamController)) {
              throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
            }
            ReadableStreamReaderGenericInitialize(this, stream);
            this._readIntoRequests = new SimpleQueue();
          }
          get closed() {
            if (!IsReadableStreamBYOBReader(this)) {
              return promiseRejectedWith(byobReaderBrandCheckException("closed"));
            }
            return this._closedPromise;
          }
          cancel(reason = void 0) {
            if (!IsReadableStreamBYOBReader(this)) {
              return promiseRejectedWith(byobReaderBrandCheckException("cancel"));
            }
            if (this._ownerReadableStream === void 0) {
              return promiseRejectedWith(readerLockException("cancel"));
            }
            return ReadableStreamReaderGenericCancel(this, reason);
          }
          read(view) {
            if (!IsReadableStreamBYOBReader(this)) {
              return promiseRejectedWith(byobReaderBrandCheckException("read"));
            }
            if (!ArrayBuffer.isView(view)) {
              return promiseRejectedWith(new TypeError("view must be an array buffer view"));
            }
            if (view.byteLength === 0) {
              return promiseRejectedWith(new TypeError("view must have non-zero byteLength"));
            }
            if (view.buffer.byteLength === 0) {
              return promiseRejectedWith(new TypeError(`view's buffer must have non-zero byteLength`));
            }
            if (IsDetachedBuffer(view.buffer))
              ;
            if (this._ownerReadableStream === void 0) {
              return promiseRejectedWith(readerLockException("read from"));
            }
            let resolvePromise;
            let rejectPromise;
            const promise = newPromise((resolve2, reject) => {
              resolvePromise = resolve2;
              rejectPromise = reject;
            });
            const readIntoRequest = {
              _chunkSteps: (chunk) => resolvePromise({ value: chunk, done: false }),
              _closeSteps: (chunk) => resolvePromise({ value: chunk, done: true }),
              _errorSteps: (e2) => rejectPromise(e2)
            };
            ReadableStreamBYOBReaderRead(this, view, readIntoRequest);
            return promise;
          }
          releaseLock() {
            if (!IsReadableStreamBYOBReader(this)) {
              throw byobReaderBrandCheckException("releaseLock");
            }
            if (this._ownerReadableStream === void 0) {
              return;
            }
            if (this._readIntoRequests.length > 0) {
              throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
            }
            ReadableStreamReaderGenericRelease(this);
          }
        }
        Object.defineProperties(ReadableStreamBYOBReader.prototype, {
          cancel: { enumerable: true },
          read: { enumerable: true },
          releaseLock: { enumerable: true },
          closed: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(ReadableStreamBYOBReader.prototype, SymbolPolyfill.toStringTag, {
            value: "ReadableStreamBYOBReader",
            configurable: true
          });
        }
        function IsReadableStreamBYOBReader(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_readIntoRequests")) {
            return false;
          }
          return x2 instanceof ReadableStreamBYOBReader;
        }
        function ReadableStreamBYOBReaderRead(reader, view, readIntoRequest) {
          const stream = reader._ownerReadableStream;
          stream._disturbed = true;
          if (stream._state === "errored") {
            readIntoRequest._errorSteps(stream._storedError);
          } else {
            ReadableByteStreamControllerPullInto(stream._readableStreamController, view, readIntoRequest);
          }
        }
        function byobReaderBrandCheckException(name) {
          return new TypeError(`ReadableStreamBYOBReader.prototype.${name} can only be used on a ReadableStreamBYOBReader`);
        }
        function ExtractHighWaterMark(strategy, defaultHWM) {
          const { highWaterMark } = strategy;
          if (highWaterMark === void 0) {
            return defaultHWM;
          }
          if (NumberIsNaN(highWaterMark) || highWaterMark < 0) {
            throw new RangeError("Invalid highWaterMark");
          }
          return highWaterMark;
        }
        function ExtractSizeAlgorithm(strategy) {
          const { size } = strategy;
          if (!size) {
            return () => 1;
          }
          return size;
        }
        function convertQueuingStrategy(init2, context) {
          assertDictionary(init2, context);
          const highWaterMark = init2 === null || init2 === void 0 ? void 0 : init2.highWaterMark;
          const size = init2 === null || init2 === void 0 ? void 0 : init2.size;
          return {
            highWaterMark: highWaterMark === void 0 ? void 0 : convertUnrestrictedDouble(highWaterMark),
            size: size === void 0 ? void 0 : convertQueuingStrategySize(size, `${context} has member 'size' that`)
          };
        }
        function convertQueuingStrategySize(fn, context) {
          assertFunction(fn, context);
          return (chunk) => convertUnrestrictedDouble(fn(chunk));
        }
        function convertUnderlyingSink(original, context) {
          assertDictionary(original, context);
          const abort = original === null || original === void 0 ? void 0 : original.abort;
          const close = original === null || original === void 0 ? void 0 : original.close;
          const start = original === null || original === void 0 ? void 0 : original.start;
          const type = original === null || original === void 0 ? void 0 : original.type;
          const write = original === null || original === void 0 ? void 0 : original.write;
          return {
            abort: abort === void 0 ? void 0 : convertUnderlyingSinkAbortCallback(abort, original, `${context} has member 'abort' that`),
            close: close === void 0 ? void 0 : convertUnderlyingSinkCloseCallback(close, original, `${context} has member 'close' that`),
            start: start === void 0 ? void 0 : convertUnderlyingSinkStartCallback(start, original, `${context} has member 'start' that`),
            write: write === void 0 ? void 0 : convertUnderlyingSinkWriteCallback(write, original, `${context} has member 'write' that`),
            type
          };
        }
        function convertUnderlyingSinkAbortCallback(fn, original, context) {
          assertFunction(fn, context);
          return (reason) => promiseCall(fn, original, [reason]);
        }
        function convertUnderlyingSinkCloseCallback(fn, original, context) {
          assertFunction(fn, context);
          return () => promiseCall(fn, original, []);
        }
        function convertUnderlyingSinkStartCallback(fn, original, context) {
          assertFunction(fn, context);
          return (controller) => reflectCall(fn, original, [controller]);
        }
        function convertUnderlyingSinkWriteCallback(fn, original, context) {
          assertFunction(fn, context);
          return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
        }
        function assertWritableStream(x2, context) {
          if (!IsWritableStream(x2)) {
            throw new TypeError(`${context} is not a WritableStream.`);
          }
        }
        function isAbortSignal2(value) {
          if (typeof value !== "object" || value === null) {
            return false;
          }
          try {
            return typeof value.aborted === "boolean";
          } catch (_a4) {
            return false;
          }
        }
        const supportsAbortController = typeof AbortController === "function";
        function createAbortController() {
          if (supportsAbortController) {
            return new AbortController();
          }
          return void 0;
        }
        class WritableStream {
          constructor(rawUnderlyingSink = {}, rawStrategy = {}) {
            if (rawUnderlyingSink === void 0) {
              rawUnderlyingSink = null;
            } else {
              assertObject(rawUnderlyingSink, "First parameter");
            }
            const strategy = convertQueuingStrategy(rawStrategy, "Second parameter");
            const underlyingSink = convertUnderlyingSink(rawUnderlyingSink, "First parameter");
            InitializeWritableStream(this);
            const type = underlyingSink.type;
            if (type !== void 0) {
              throw new RangeError("Invalid type is specified");
            }
            const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
            const highWaterMark = ExtractHighWaterMark(strategy, 1);
            SetUpWritableStreamDefaultControllerFromUnderlyingSink(this, underlyingSink, highWaterMark, sizeAlgorithm);
          }
          get locked() {
            if (!IsWritableStream(this)) {
              throw streamBrandCheckException$2("locked");
            }
            return IsWritableStreamLocked(this);
          }
          abort(reason = void 0) {
            if (!IsWritableStream(this)) {
              return promiseRejectedWith(streamBrandCheckException$2("abort"));
            }
            if (IsWritableStreamLocked(this)) {
              return promiseRejectedWith(new TypeError("Cannot abort a stream that already has a writer"));
            }
            return WritableStreamAbort(this, reason);
          }
          close() {
            if (!IsWritableStream(this)) {
              return promiseRejectedWith(streamBrandCheckException$2("close"));
            }
            if (IsWritableStreamLocked(this)) {
              return promiseRejectedWith(new TypeError("Cannot close a stream that already has a writer"));
            }
            if (WritableStreamCloseQueuedOrInFlight(this)) {
              return promiseRejectedWith(new TypeError("Cannot close an already-closing stream"));
            }
            return WritableStreamClose(this);
          }
          getWriter() {
            if (!IsWritableStream(this)) {
              throw streamBrandCheckException$2("getWriter");
            }
            return AcquireWritableStreamDefaultWriter(this);
          }
        }
        Object.defineProperties(WritableStream.prototype, {
          abort: { enumerable: true },
          close: { enumerable: true },
          getWriter: { enumerable: true },
          locked: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(WritableStream.prototype, SymbolPolyfill.toStringTag, {
            value: "WritableStream",
            configurable: true
          });
        }
        function AcquireWritableStreamDefaultWriter(stream) {
          return new WritableStreamDefaultWriter(stream);
        }
        function CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
          const stream = Object.create(WritableStream.prototype);
          InitializeWritableStream(stream);
          const controller = Object.create(WritableStreamDefaultController.prototype);
          SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
          return stream;
        }
        function InitializeWritableStream(stream) {
          stream._state = "writable";
          stream._storedError = void 0;
          stream._writer = void 0;
          stream._writableStreamController = void 0;
          stream._writeRequests = new SimpleQueue();
          stream._inFlightWriteRequest = void 0;
          stream._closeRequest = void 0;
          stream._inFlightCloseRequest = void 0;
          stream._pendingAbortRequest = void 0;
          stream._backpressure = false;
        }
        function IsWritableStream(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_writableStreamController")) {
            return false;
          }
          return x2 instanceof WritableStream;
        }
        function IsWritableStreamLocked(stream) {
          if (stream._writer === void 0) {
            return false;
          }
          return true;
        }
        function WritableStreamAbort(stream, reason) {
          var _a4;
          if (stream._state === "closed" || stream._state === "errored") {
            return promiseResolvedWith(void 0);
          }
          stream._writableStreamController._abortReason = reason;
          (_a4 = stream._writableStreamController._abortController) === null || _a4 === void 0 ? void 0 : _a4.abort();
          const state = stream._state;
          if (state === "closed" || state === "errored") {
            return promiseResolvedWith(void 0);
          }
          if (stream._pendingAbortRequest !== void 0) {
            return stream._pendingAbortRequest._promise;
          }
          let wasAlreadyErroring = false;
          if (state === "erroring") {
            wasAlreadyErroring = true;
            reason = void 0;
          }
          const promise = newPromise((resolve2, reject) => {
            stream._pendingAbortRequest = {
              _promise: void 0,
              _resolve: resolve2,
              _reject: reject,
              _reason: reason,
              _wasAlreadyErroring: wasAlreadyErroring
            };
          });
          stream._pendingAbortRequest._promise = promise;
          if (!wasAlreadyErroring) {
            WritableStreamStartErroring(stream, reason);
          }
          return promise;
        }
        function WritableStreamClose(stream) {
          const state = stream._state;
          if (state === "closed" || state === "errored") {
            return promiseRejectedWith(new TypeError(`The stream (in ${state} state) is not in the writable state and cannot be closed`));
          }
          const promise = newPromise((resolve2, reject) => {
            const closeRequest = {
              _resolve: resolve2,
              _reject: reject
            };
            stream._closeRequest = closeRequest;
          });
          const writer = stream._writer;
          if (writer !== void 0 && stream._backpressure && state === "writable") {
            defaultWriterReadyPromiseResolve(writer);
          }
          WritableStreamDefaultControllerClose(stream._writableStreamController);
          return promise;
        }
        function WritableStreamAddWriteRequest(stream) {
          const promise = newPromise((resolve2, reject) => {
            const writeRequest = {
              _resolve: resolve2,
              _reject: reject
            };
            stream._writeRequests.push(writeRequest);
          });
          return promise;
        }
        function WritableStreamDealWithRejection(stream, error2) {
          const state = stream._state;
          if (state === "writable") {
            WritableStreamStartErroring(stream, error2);
            return;
          }
          WritableStreamFinishErroring(stream);
        }
        function WritableStreamStartErroring(stream, reason) {
          const controller = stream._writableStreamController;
          stream._state = "erroring";
          stream._storedError = reason;
          const writer = stream._writer;
          if (writer !== void 0) {
            WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
          }
          if (!WritableStreamHasOperationMarkedInFlight(stream) && controller._started) {
            WritableStreamFinishErroring(stream);
          }
        }
        function WritableStreamFinishErroring(stream) {
          stream._state = "errored";
          stream._writableStreamController[ErrorSteps]();
          const storedError = stream._storedError;
          stream._writeRequests.forEach((writeRequest) => {
            writeRequest._reject(storedError);
          });
          stream._writeRequests = new SimpleQueue();
          if (stream._pendingAbortRequest === void 0) {
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
            return;
          }
          const abortRequest = stream._pendingAbortRequest;
          stream._pendingAbortRequest = void 0;
          if (abortRequest._wasAlreadyErroring) {
            abortRequest._reject(storedError);
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
            return;
          }
          const promise = stream._writableStreamController[AbortSteps](abortRequest._reason);
          uponPromise(promise, () => {
            abortRequest._resolve();
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
          }, (reason) => {
            abortRequest._reject(reason);
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
          });
        }
        function WritableStreamFinishInFlightWrite(stream) {
          stream._inFlightWriteRequest._resolve(void 0);
          stream._inFlightWriteRequest = void 0;
        }
        function WritableStreamFinishInFlightWriteWithError(stream, error2) {
          stream._inFlightWriteRequest._reject(error2);
          stream._inFlightWriteRequest = void 0;
          WritableStreamDealWithRejection(stream, error2);
        }
        function WritableStreamFinishInFlightClose(stream) {
          stream._inFlightCloseRequest._resolve(void 0);
          stream._inFlightCloseRequest = void 0;
          const state = stream._state;
          if (state === "erroring") {
            stream._storedError = void 0;
            if (stream._pendingAbortRequest !== void 0) {
              stream._pendingAbortRequest._resolve();
              stream._pendingAbortRequest = void 0;
            }
          }
          stream._state = "closed";
          const writer = stream._writer;
          if (writer !== void 0) {
            defaultWriterClosedPromiseResolve(writer);
          }
        }
        function WritableStreamFinishInFlightCloseWithError(stream, error2) {
          stream._inFlightCloseRequest._reject(error2);
          stream._inFlightCloseRequest = void 0;
          if (stream._pendingAbortRequest !== void 0) {
            stream._pendingAbortRequest._reject(error2);
            stream._pendingAbortRequest = void 0;
          }
          WritableStreamDealWithRejection(stream, error2);
        }
        function WritableStreamCloseQueuedOrInFlight(stream) {
          if (stream._closeRequest === void 0 && stream._inFlightCloseRequest === void 0) {
            return false;
          }
          return true;
        }
        function WritableStreamHasOperationMarkedInFlight(stream) {
          if (stream._inFlightWriteRequest === void 0 && stream._inFlightCloseRequest === void 0) {
            return false;
          }
          return true;
        }
        function WritableStreamMarkCloseRequestInFlight(stream) {
          stream._inFlightCloseRequest = stream._closeRequest;
          stream._closeRequest = void 0;
        }
        function WritableStreamMarkFirstWriteRequestInFlight(stream) {
          stream._inFlightWriteRequest = stream._writeRequests.shift();
        }
        function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
          if (stream._closeRequest !== void 0) {
            stream._closeRequest._reject(stream._storedError);
            stream._closeRequest = void 0;
          }
          const writer = stream._writer;
          if (writer !== void 0) {
            defaultWriterClosedPromiseReject(writer, stream._storedError);
          }
        }
        function WritableStreamUpdateBackpressure(stream, backpressure) {
          const writer = stream._writer;
          if (writer !== void 0 && backpressure !== stream._backpressure) {
            if (backpressure) {
              defaultWriterReadyPromiseReset(writer);
            } else {
              defaultWriterReadyPromiseResolve(writer);
            }
          }
          stream._backpressure = backpressure;
        }
        class WritableStreamDefaultWriter {
          constructor(stream) {
            assertRequiredArgument(stream, 1, "WritableStreamDefaultWriter");
            assertWritableStream(stream, "First parameter");
            if (IsWritableStreamLocked(stream)) {
              throw new TypeError("This stream has already been locked for exclusive writing by another writer");
            }
            this._ownerWritableStream = stream;
            stream._writer = this;
            const state = stream._state;
            if (state === "writable") {
              if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._backpressure) {
                defaultWriterReadyPromiseInitialize(this);
              } else {
                defaultWriterReadyPromiseInitializeAsResolved(this);
              }
              defaultWriterClosedPromiseInitialize(this);
            } else if (state === "erroring") {
              defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
              defaultWriterClosedPromiseInitialize(this);
            } else if (state === "closed") {
              defaultWriterReadyPromiseInitializeAsResolved(this);
              defaultWriterClosedPromiseInitializeAsResolved(this);
            } else {
              const storedError = stream._storedError;
              defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
              defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
            }
          }
          get closed() {
            if (!IsWritableStreamDefaultWriter(this)) {
              return promiseRejectedWith(defaultWriterBrandCheckException("closed"));
            }
            return this._closedPromise;
          }
          get desiredSize() {
            if (!IsWritableStreamDefaultWriter(this)) {
              throw defaultWriterBrandCheckException("desiredSize");
            }
            if (this._ownerWritableStream === void 0) {
              throw defaultWriterLockException("desiredSize");
            }
            return WritableStreamDefaultWriterGetDesiredSize(this);
          }
          get ready() {
            if (!IsWritableStreamDefaultWriter(this)) {
              return promiseRejectedWith(defaultWriterBrandCheckException("ready"));
            }
            return this._readyPromise;
          }
          abort(reason = void 0) {
            if (!IsWritableStreamDefaultWriter(this)) {
              return promiseRejectedWith(defaultWriterBrandCheckException("abort"));
            }
            if (this._ownerWritableStream === void 0) {
              return promiseRejectedWith(defaultWriterLockException("abort"));
            }
            return WritableStreamDefaultWriterAbort(this, reason);
          }
          close() {
            if (!IsWritableStreamDefaultWriter(this)) {
              return promiseRejectedWith(defaultWriterBrandCheckException("close"));
            }
            const stream = this._ownerWritableStream;
            if (stream === void 0) {
              return promiseRejectedWith(defaultWriterLockException("close"));
            }
            if (WritableStreamCloseQueuedOrInFlight(stream)) {
              return promiseRejectedWith(new TypeError("Cannot close an already-closing stream"));
            }
            return WritableStreamDefaultWriterClose(this);
          }
          releaseLock() {
            if (!IsWritableStreamDefaultWriter(this)) {
              throw defaultWriterBrandCheckException("releaseLock");
            }
            const stream = this._ownerWritableStream;
            if (stream === void 0) {
              return;
            }
            WritableStreamDefaultWriterRelease(this);
          }
          write(chunk = void 0) {
            if (!IsWritableStreamDefaultWriter(this)) {
              return promiseRejectedWith(defaultWriterBrandCheckException("write"));
            }
            if (this._ownerWritableStream === void 0) {
              return promiseRejectedWith(defaultWriterLockException("write to"));
            }
            return WritableStreamDefaultWriterWrite(this, chunk);
          }
        }
        Object.defineProperties(WritableStreamDefaultWriter.prototype, {
          abort: { enumerable: true },
          close: { enumerable: true },
          releaseLock: { enumerable: true },
          write: { enumerable: true },
          closed: { enumerable: true },
          desiredSize: { enumerable: true },
          ready: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(WritableStreamDefaultWriter.prototype, SymbolPolyfill.toStringTag, {
            value: "WritableStreamDefaultWriter",
            configurable: true
          });
        }
        function IsWritableStreamDefaultWriter(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_ownerWritableStream")) {
            return false;
          }
          return x2 instanceof WritableStreamDefaultWriter;
        }
        function WritableStreamDefaultWriterAbort(writer, reason) {
          const stream = writer._ownerWritableStream;
          return WritableStreamAbort(stream, reason);
        }
        function WritableStreamDefaultWriterClose(writer) {
          const stream = writer._ownerWritableStream;
          return WritableStreamClose(stream);
        }
        function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
          const stream = writer._ownerWritableStream;
          const state = stream._state;
          if (WritableStreamCloseQueuedOrInFlight(stream) || state === "closed") {
            return promiseResolvedWith(void 0);
          }
          if (state === "errored") {
            return promiseRejectedWith(stream._storedError);
          }
          return WritableStreamDefaultWriterClose(writer);
        }
        function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error2) {
          if (writer._closedPromiseState === "pending") {
            defaultWriterClosedPromiseReject(writer, error2);
          } else {
            defaultWriterClosedPromiseResetToRejected(writer, error2);
          }
        }
        function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error2) {
          if (writer._readyPromiseState === "pending") {
            defaultWriterReadyPromiseReject(writer, error2);
          } else {
            defaultWriterReadyPromiseResetToRejected(writer, error2);
          }
        }
        function WritableStreamDefaultWriterGetDesiredSize(writer) {
          const stream = writer._ownerWritableStream;
          const state = stream._state;
          if (state === "errored" || state === "erroring") {
            return null;
          }
          if (state === "closed") {
            return 0;
          }
          return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
        }
        function WritableStreamDefaultWriterRelease(writer) {
          const stream = writer._ownerWritableStream;
          const releasedError = new TypeError(`Writer was released and can no longer be used to monitor the stream's closedness`);
          WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
          WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
          stream._writer = void 0;
          writer._ownerWritableStream = void 0;
        }
        function WritableStreamDefaultWriterWrite(writer, chunk) {
          const stream = writer._ownerWritableStream;
          const controller = stream._writableStreamController;
          const chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
          if (stream !== writer._ownerWritableStream) {
            return promiseRejectedWith(defaultWriterLockException("write to"));
          }
          const state = stream._state;
          if (state === "errored") {
            return promiseRejectedWith(stream._storedError);
          }
          if (WritableStreamCloseQueuedOrInFlight(stream) || state === "closed") {
            return promiseRejectedWith(new TypeError("The stream is closing or closed and cannot be written to"));
          }
          if (state === "erroring") {
            return promiseRejectedWith(stream._storedError);
          }
          const promise = WritableStreamAddWriteRequest(stream);
          WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
          return promise;
        }
        const closeSentinel = {};
        class WritableStreamDefaultController {
          constructor() {
            throw new TypeError("Illegal constructor");
          }
          get abortReason() {
            if (!IsWritableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$2("abortReason");
            }
            return this._abortReason;
          }
          get signal() {
            if (!IsWritableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$2("signal");
            }
            if (this._abortController === void 0) {
              throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
            }
            return this._abortController.signal;
          }
          error(e2 = void 0) {
            if (!IsWritableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$2("error");
            }
            const state = this._controlledWritableStream._state;
            if (state !== "writable") {
              return;
            }
            WritableStreamDefaultControllerError(this, e2);
          }
          [AbortSteps](reason) {
            const result = this._abortAlgorithm(reason);
            WritableStreamDefaultControllerClearAlgorithms(this);
            return result;
          }
          [ErrorSteps]() {
            ResetQueue(this);
          }
        }
        Object.defineProperties(WritableStreamDefaultController.prototype, {
          abortReason: { enumerable: true },
          signal: { enumerable: true },
          error: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(WritableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
            value: "WritableStreamDefaultController",
            configurable: true
          });
        }
        function IsWritableStreamDefaultController(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_controlledWritableStream")) {
            return false;
          }
          return x2 instanceof WritableStreamDefaultController;
        }
        function SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
          controller._controlledWritableStream = stream;
          stream._writableStreamController = controller;
          controller._queue = void 0;
          controller._queueTotalSize = void 0;
          ResetQueue(controller);
          controller._abortReason = void 0;
          controller._abortController = createAbortController();
          controller._started = false;
          controller._strategySizeAlgorithm = sizeAlgorithm;
          controller._strategyHWM = highWaterMark;
          controller._writeAlgorithm = writeAlgorithm;
          controller._closeAlgorithm = closeAlgorithm;
          controller._abortAlgorithm = abortAlgorithm;
          const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
          WritableStreamUpdateBackpressure(stream, backpressure);
          const startResult = startAlgorithm();
          const startPromise = promiseResolvedWith(startResult);
          uponPromise(startPromise, () => {
            controller._started = true;
            WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
          }, (r2) => {
            controller._started = true;
            WritableStreamDealWithRejection(stream, r2);
          });
        }
        function SetUpWritableStreamDefaultControllerFromUnderlyingSink(stream, underlyingSink, highWaterMark, sizeAlgorithm) {
          const controller = Object.create(WritableStreamDefaultController.prototype);
          let startAlgorithm = () => void 0;
          let writeAlgorithm = () => promiseResolvedWith(void 0);
          let closeAlgorithm = () => promiseResolvedWith(void 0);
          let abortAlgorithm = () => promiseResolvedWith(void 0);
          if (underlyingSink.start !== void 0) {
            startAlgorithm = () => underlyingSink.start(controller);
          }
          if (underlyingSink.write !== void 0) {
            writeAlgorithm = (chunk) => underlyingSink.write(chunk, controller);
          }
          if (underlyingSink.close !== void 0) {
            closeAlgorithm = () => underlyingSink.close();
          }
          if (underlyingSink.abort !== void 0) {
            abortAlgorithm = (reason) => underlyingSink.abort(reason);
          }
          SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
        }
        function WritableStreamDefaultControllerClearAlgorithms(controller) {
          controller._writeAlgorithm = void 0;
          controller._closeAlgorithm = void 0;
          controller._abortAlgorithm = void 0;
          controller._strategySizeAlgorithm = void 0;
        }
        function WritableStreamDefaultControllerClose(controller) {
          EnqueueValueWithSize(controller, closeSentinel, 0);
          WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
        }
        function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
          try {
            return controller._strategySizeAlgorithm(chunk);
          } catch (chunkSizeE) {
            WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
            return 1;
          }
        }
        function WritableStreamDefaultControllerGetDesiredSize(controller) {
          return controller._strategyHWM - controller._queueTotalSize;
        }
        function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
          try {
            EnqueueValueWithSize(controller, chunk, chunkSize);
          } catch (enqueueE) {
            WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
            return;
          }
          const stream = controller._controlledWritableStream;
          if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._state === "writable") {
            const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
            WritableStreamUpdateBackpressure(stream, backpressure);
          }
          WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
        }
        function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
          const stream = controller._controlledWritableStream;
          if (!controller._started) {
            return;
          }
          if (stream._inFlightWriteRequest !== void 0) {
            return;
          }
          const state = stream._state;
          if (state === "erroring") {
            WritableStreamFinishErroring(stream);
            return;
          }
          if (controller._queue.length === 0) {
            return;
          }
          const value = PeekQueueValue(controller);
          if (value === closeSentinel) {
            WritableStreamDefaultControllerProcessClose(controller);
          } else {
            WritableStreamDefaultControllerProcessWrite(controller, value);
          }
        }
        function WritableStreamDefaultControllerErrorIfNeeded(controller, error2) {
          if (controller._controlledWritableStream._state === "writable") {
            WritableStreamDefaultControllerError(controller, error2);
          }
        }
        function WritableStreamDefaultControllerProcessClose(controller) {
          const stream = controller._controlledWritableStream;
          WritableStreamMarkCloseRequestInFlight(stream);
          DequeueValue(controller);
          const sinkClosePromise = controller._closeAlgorithm();
          WritableStreamDefaultControllerClearAlgorithms(controller);
          uponPromise(sinkClosePromise, () => {
            WritableStreamFinishInFlightClose(stream);
          }, (reason) => {
            WritableStreamFinishInFlightCloseWithError(stream, reason);
          });
        }
        function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
          const stream = controller._controlledWritableStream;
          WritableStreamMarkFirstWriteRequestInFlight(stream);
          const sinkWritePromise = controller._writeAlgorithm(chunk);
          uponPromise(sinkWritePromise, () => {
            WritableStreamFinishInFlightWrite(stream);
            const state = stream._state;
            DequeueValue(controller);
            if (!WritableStreamCloseQueuedOrInFlight(stream) && state === "writable") {
              const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
              WritableStreamUpdateBackpressure(stream, backpressure);
            }
            WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
          }, (reason) => {
            if (stream._state === "writable") {
              WritableStreamDefaultControllerClearAlgorithms(controller);
            }
            WritableStreamFinishInFlightWriteWithError(stream, reason);
          });
        }
        function WritableStreamDefaultControllerGetBackpressure(controller) {
          const desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
          return desiredSize <= 0;
        }
        function WritableStreamDefaultControllerError(controller, error2) {
          const stream = controller._controlledWritableStream;
          WritableStreamDefaultControllerClearAlgorithms(controller);
          WritableStreamStartErroring(stream, error2);
        }
        function streamBrandCheckException$2(name) {
          return new TypeError(`WritableStream.prototype.${name} can only be used on a WritableStream`);
        }
        function defaultControllerBrandCheckException$2(name) {
          return new TypeError(`WritableStreamDefaultController.prototype.${name} can only be used on a WritableStreamDefaultController`);
        }
        function defaultWriterBrandCheckException(name) {
          return new TypeError(`WritableStreamDefaultWriter.prototype.${name} can only be used on a WritableStreamDefaultWriter`);
        }
        function defaultWriterLockException(name) {
          return new TypeError("Cannot " + name + " a stream using a released writer");
        }
        function defaultWriterClosedPromiseInitialize(writer) {
          writer._closedPromise = newPromise((resolve2, reject) => {
            writer._closedPromise_resolve = resolve2;
            writer._closedPromise_reject = reject;
            writer._closedPromiseState = "pending";
          });
        }
        function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
          defaultWriterClosedPromiseInitialize(writer);
          defaultWriterClosedPromiseReject(writer, reason);
        }
        function defaultWriterClosedPromiseInitializeAsResolved(writer) {
          defaultWriterClosedPromiseInitialize(writer);
          defaultWriterClosedPromiseResolve(writer);
        }
        function defaultWriterClosedPromiseReject(writer, reason) {
          if (writer._closedPromise_reject === void 0) {
            return;
          }
          setPromiseIsHandledToTrue(writer._closedPromise);
          writer._closedPromise_reject(reason);
          writer._closedPromise_resolve = void 0;
          writer._closedPromise_reject = void 0;
          writer._closedPromiseState = "rejected";
        }
        function defaultWriterClosedPromiseResetToRejected(writer, reason) {
          defaultWriterClosedPromiseInitializeAsRejected(writer, reason);
        }
        function defaultWriterClosedPromiseResolve(writer) {
          if (writer._closedPromise_resolve === void 0) {
            return;
          }
          writer._closedPromise_resolve(void 0);
          writer._closedPromise_resolve = void 0;
          writer._closedPromise_reject = void 0;
          writer._closedPromiseState = "resolved";
        }
        function defaultWriterReadyPromiseInitialize(writer) {
          writer._readyPromise = newPromise((resolve2, reject) => {
            writer._readyPromise_resolve = resolve2;
            writer._readyPromise_reject = reject;
          });
          writer._readyPromiseState = "pending";
        }
        function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
          defaultWriterReadyPromiseInitialize(writer);
          defaultWriterReadyPromiseReject(writer, reason);
        }
        function defaultWriterReadyPromiseInitializeAsResolved(writer) {
          defaultWriterReadyPromiseInitialize(writer);
          defaultWriterReadyPromiseResolve(writer);
        }
        function defaultWriterReadyPromiseReject(writer, reason) {
          if (writer._readyPromise_reject === void 0) {
            return;
          }
          setPromiseIsHandledToTrue(writer._readyPromise);
          writer._readyPromise_reject(reason);
          writer._readyPromise_resolve = void 0;
          writer._readyPromise_reject = void 0;
          writer._readyPromiseState = "rejected";
        }
        function defaultWriterReadyPromiseReset(writer) {
          defaultWriterReadyPromiseInitialize(writer);
        }
        function defaultWriterReadyPromiseResetToRejected(writer, reason) {
          defaultWriterReadyPromiseInitializeAsRejected(writer, reason);
        }
        function defaultWriterReadyPromiseResolve(writer) {
          if (writer._readyPromise_resolve === void 0) {
            return;
          }
          writer._readyPromise_resolve(void 0);
          writer._readyPromise_resolve = void 0;
          writer._readyPromise_reject = void 0;
          writer._readyPromiseState = "fulfilled";
        }
        const NativeDOMException = typeof DOMException !== "undefined" ? DOMException : void 0;
        function isDOMExceptionConstructor(ctor) {
          if (!(typeof ctor === "function" || typeof ctor === "object")) {
            return false;
          }
          try {
            new ctor();
            return true;
          } catch (_a4) {
            return false;
          }
        }
        function createDOMExceptionPolyfill() {
          const ctor = function DOMException2(message, name) {
            this.message = message || "";
            this.name = name || "Error";
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, this.constructor);
            }
          };
          ctor.prototype = Object.create(Error.prototype);
          Object.defineProperty(ctor.prototype, "constructor", { value: ctor, writable: true, configurable: true });
          return ctor;
        }
        const DOMException$1 = isDOMExceptionConstructor(NativeDOMException) ? NativeDOMException : createDOMExceptionPolyfill();
        function ReadableStreamPipeTo(source, dest, preventClose, preventAbort, preventCancel, signal) {
          const reader = AcquireReadableStreamDefaultReader(source);
          const writer = AcquireWritableStreamDefaultWriter(dest);
          source._disturbed = true;
          let shuttingDown = false;
          let currentWrite = promiseResolvedWith(void 0);
          return newPromise((resolve2, reject) => {
            let abortAlgorithm;
            if (signal !== void 0) {
              abortAlgorithm = () => {
                const error2 = new DOMException$1("Aborted", "AbortError");
                const actions = [];
                if (!preventAbort) {
                  actions.push(() => {
                    if (dest._state === "writable") {
                      return WritableStreamAbort(dest, error2);
                    }
                    return promiseResolvedWith(void 0);
                  });
                }
                if (!preventCancel) {
                  actions.push(() => {
                    if (source._state === "readable") {
                      return ReadableStreamCancel(source, error2);
                    }
                    return promiseResolvedWith(void 0);
                  });
                }
                shutdownWithAction(() => Promise.all(actions.map((action) => action())), true, error2);
              };
              if (signal.aborted) {
                abortAlgorithm();
                return;
              }
              signal.addEventListener("abort", abortAlgorithm);
            }
            function pipeLoop() {
              return newPromise((resolveLoop, rejectLoop) => {
                function next(done) {
                  if (done) {
                    resolveLoop();
                  } else {
                    PerformPromiseThen(pipeStep(), next, rejectLoop);
                  }
                }
                next(false);
              });
            }
            function pipeStep() {
              if (shuttingDown) {
                return promiseResolvedWith(true);
              }
              return PerformPromiseThen(writer._readyPromise, () => {
                return newPromise((resolveRead, rejectRead) => {
                  ReadableStreamDefaultReaderRead(reader, {
                    _chunkSteps: (chunk) => {
                      currentWrite = PerformPromiseThen(WritableStreamDefaultWriterWrite(writer, chunk), void 0, noop4);
                      resolveRead(false);
                    },
                    _closeSteps: () => resolveRead(true),
                    _errorSteps: rejectRead
                  });
                });
              });
            }
            isOrBecomesErrored(source, reader._closedPromise, (storedError) => {
              if (!preventAbort) {
                shutdownWithAction(() => WritableStreamAbort(dest, storedError), true, storedError);
              } else {
                shutdown(true, storedError);
              }
            });
            isOrBecomesErrored(dest, writer._closedPromise, (storedError) => {
              if (!preventCancel) {
                shutdownWithAction(() => ReadableStreamCancel(source, storedError), true, storedError);
              } else {
                shutdown(true, storedError);
              }
            });
            isOrBecomesClosed(source, reader._closedPromise, () => {
              if (!preventClose) {
                shutdownWithAction(() => WritableStreamDefaultWriterCloseWithErrorPropagation(writer));
              } else {
                shutdown();
              }
            });
            if (WritableStreamCloseQueuedOrInFlight(dest) || dest._state === "closed") {
              const destClosed = new TypeError("the destination writable stream closed before all data could be piped to it");
              if (!preventCancel) {
                shutdownWithAction(() => ReadableStreamCancel(source, destClosed), true, destClosed);
              } else {
                shutdown(true, destClosed);
              }
            }
            setPromiseIsHandledToTrue(pipeLoop());
            function waitForWritesToFinish() {
              const oldCurrentWrite = currentWrite;
              return PerformPromiseThen(currentWrite, () => oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : void 0);
            }
            function isOrBecomesErrored(stream, promise, action) {
              if (stream._state === "errored") {
                action(stream._storedError);
              } else {
                uponRejection(promise, action);
              }
            }
            function isOrBecomesClosed(stream, promise, action) {
              if (stream._state === "closed") {
                action();
              } else {
                uponFulfillment(promise, action);
              }
            }
            function shutdownWithAction(action, originalIsError, originalError) {
              if (shuttingDown) {
                return;
              }
              shuttingDown = true;
              if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest)) {
                uponFulfillment(waitForWritesToFinish(), doTheRest);
              } else {
                doTheRest();
              }
              function doTheRest() {
                uponPromise(action(), () => finalize(originalIsError, originalError), (newError) => finalize(true, newError));
              }
            }
            function shutdown(isError, error2) {
              if (shuttingDown) {
                return;
              }
              shuttingDown = true;
              if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest)) {
                uponFulfillment(waitForWritesToFinish(), () => finalize(isError, error2));
              } else {
                finalize(isError, error2);
              }
            }
            function finalize(isError, error2) {
              WritableStreamDefaultWriterRelease(writer);
              ReadableStreamReaderGenericRelease(reader);
              if (signal !== void 0) {
                signal.removeEventListener("abort", abortAlgorithm);
              }
              if (isError) {
                reject(error2);
              } else {
                resolve2(void 0);
              }
            }
          });
        }
        class ReadableStreamDefaultController {
          constructor() {
            throw new TypeError("Illegal constructor");
          }
          get desiredSize() {
            if (!IsReadableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$1("desiredSize");
            }
            return ReadableStreamDefaultControllerGetDesiredSize(this);
          }
          close() {
            if (!IsReadableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$1("close");
            }
            if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
              throw new TypeError("The stream is not in a state that permits close");
            }
            ReadableStreamDefaultControllerClose(this);
          }
          enqueue(chunk = void 0) {
            if (!IsReadableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$1("enqueue");
            }
            if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
              throw new TypeError("The stream is not in a state that permits enqueue");
            }
            return ReadableStreamDefaultControllerEnqueue(this, chunk);
          }
          error(e2 = void 0) {
            if (!IsReadableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$1("error");
            }
            ReadableStreamDefaultControllerError(this, e2);
          }
          [CancelSteps](reason) {
            ResetQueue(this);
            const result = this._cancelAlgorithm(reason);
            ReadableStreamDefaultControllerClearAlgorithms(this);
            return result;
          }
          [PullSteps](readRequest) {
            const stream = this._controlledReadableStream;
            if (this._queue.length > 0) {
              const chunk = DequeueValue(this);
              if (this._closeRequested && this._queue.length === 0) {
                ReadableStreamDefaultControllerClearAlgorithms(this);
                ReadableStreamClose(stream);
              } else {
                ReadableStreamDefaultControllerCallPullIfNeeded(this);
              }
              readRequest._chunkSteps(chunk);
            } else {
              ReadableStreamAddReadRequest(stream, readRequest);
              ReadableStreamDefaultControllerCallPullIfNeeded(this);
            }
          }
        }
        Object.defineProperties(ReadableStreamDefaultController.prototype, {
          close: { enumerable: true },
          enqueue: { enumerable: true },
          error: { enumerable: true },
          desiredSize: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(ReadableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
            value: "ReadableStreamDefaultController",
            configurable: true
          });
        }
        function IsReadableStreamDefaultController(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_controlledReadableStream")) {
            return false;
          }
          return x2 instanceof ReadableStreamDefaultController;
        }
        function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
          const shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
          if (!shouldPull) {
            return;
          }
          if (controller._pulling) {
            controller._pullAgain = true;
            return;
          }
          controller._pulling = true;
          const pullPromise = controller._pullAlgorithm();
          uponPromise(pullPromise, () => {
            controller._pulling = false;
            if (controller._pullAgain) {
              controller._pullAgain = false;
              ReadableStreamDefaultControllerCallPullIfNeeded(controller);
            }
          }, (e2) => {
            ReadableStreamDefaultControllerError(controller, e2);
          });
        }
        function ReadableStreamDefaultControllerShouldCallPull(controller) {
          const stream = controller._controlledReadableStream;
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
            return false;
          }
          if (!controller._started) {
            return false;
          }
          if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
            return true;
          }
          const desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
          if (desiredSize > 0) {
            return true;
          }
          return false;
        }
        function ReadableStreamDefaultControllerClearAlgorithms(controller) {
          controller._pullAlgorithm = void 0;
          controller._cancelAlgorithm = void 0;
          controller._strategySizeAlgorithm = void 0;
        }
        function ReadableStreamDefaultControllerClose(controller) {
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
            return;
          }
          const stream = controller._controlledReadableStream;
          controller._closeRequested = true;
          if (controller._queue.length === 0) {
            ReadableStreamDefaultControllerClearAlgorithms(controller);
            ReadableStreamClose(stream);
          }
        }
        function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
            return;
          }
          const stream = controller._controlledReadableStream;
          if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
            ReadableStreamFulfillReadRequest(stream, chunk, false);
          } else {
            let chunkSize;
            try {
              chunkSize = controller._strategySizeAlgorithm(chunk);
            } catch (chunkSizeE) {
              ReadableStreamDefaultControllerError(controller, chunkSizeE);
              throw chunkSizeE;
            }
            try {
              EnqueueValueWithSize(controller, chunk, chunkSize);
            } catch (enqueueE) {
              ReadableStreamDefaultControllerError(controller, enqueueE);
              throw enqueueE;
            }
          }
          ReadableStreamDefaultControllerCallPullIfNeeded(controller);
        }
        function ReadableStreamDefaultControllerError(controller, e2) {
          const stream = controller._controlledReadableStream;
          if (stream._state !== "readable") {
            return;
          }
          ResetQueue(controller);
          ReadableStreamDefaultControllerClearAlgorithms(controller);
          ReadableStreamError(stream, e2);
        }
        function ReadableStreamDefaultControllerGetDesiredSize(controller) {
          const state = controller._controlledReadableStream._state;
          if (state === "errored") {
            return null;
          }
          if (state === "closed") {
            return 0;
          }
          return controller._strategyHWM - controller._queueTotalSize;
        }
        function ReadableStreamDefaultControllerHasBackpressure(controller) {
          if (ReadableStreamDefaultControllerShouldCallPull(controller)) {
            return false;
          }
          return true;
        }
        function ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) {
          const state = controller._controlledReadableStream._state;
          if (!controller._closeRequested && state === "readable") {
            return true;
          }
          return false;
        }
        function SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
          controller._controlledReadableStream = stream;
          controller._queue = void 0;
          controller._queueTotalSize = void 0;
          ResetQueue(controller);
          controller._started = false;
          controller._closeRequested = false;
          controller._pullAgain = false;
          controller._pulling = false;
          controller._strategySizeAlgorithm = sizeAlgorithm;
          controller._strategyHWM = highWaterMark;
          controller._pullAlgorithm = pullAlgorithm;
          controller._cancelAlgorithm = cancelAlgorithm;
          stream._readableStreamController = controller;
          const startResult = startAlgorithm();
          uponPromise(promiseResolvedWith(startResult), () => {
            controller._started = true;
            ReadableStreamDefaultControllerCallPullIfNeeded(controller);
          }, (r2) => {
            ReadableStreamDefaultControllerError(controller, r2);
          });
        }
        function SetUpReadableStreamDefaultControllerFromUnderlyingSource(stream, underlyingSource, highWaterMark, sizeAlgorithm) {
          const controller = Object.create(ReadableStreamDefaultController.prototype);
          let startAlgorithm = () => void 0;
          let pullAlgorithm = () => promiseResolvedWith(void 0);
          let cancelAlgorithm = () => promiseResolvedWith(void 0);
          if (underlyingSource.start !== void 0) {
            startAlgorithm = () => underlyingSource.start(controller);
          }
          if (underlyingSource.pull !== void 0) {
            pullAlgorithm = () => underlyingSource.pull(controller);
          }
          if (underlyingSource.cancel !== void 0) {
            cancelAlgorithm = (reason) => underlyingSource.cancel(reason);
          }
          SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
        }
        function defaultControllerBrandCheckException$1(name) {
          return new TypeError(`ReadableStreamDefaultController.prototype.${name} can only be used on a ReadableStreamDefaultController`);
        }
        function ReadableStreamTee(stream, cloneForBranch2) {
          if (IsReadableByteStreamController(stream._readableStreamController)) {
            return ReadableByteStreamTee(stream);
          }
          return ReadableStreamDefaultTee(stream);
        }
        function ReadableStreamDefaultTee(stream, cloneForBranch2) {
          const reader = AcquireReadableStreamDefaultReader(stream);
          let reading = false;
          let readAgain = false;
          let canceled1 = false;
          let canceled2 = false;
          let reason1;
          let reason2;
          let branch1;
          let branch2;
          let resolveCancelPromise;
          const cancelPromise = newPromise((resolve2) => {
            resolveCancelPromise = resolve2;
          });
          function pullAlgorithm() {
            if (reading) {
              readAgain = true;
              return promiseResolvedWith(void 0);
            }
            reading = true;
            const readRequest = {
              _chunkSteps: (chunk) => {
                queueMicrotask(() => {
                  readAgain = false;
                  const chunk1 = chunk;
                  const chunk2 = chunk;
                  if (!canceled1) {
                    ReadableStreamDefaultControllerEnqueue(branch1._readableStreamController, chunk1);
                  }
                  if (!canceled2) {
                    ReadableStreamDefaultControllerEnqueue(branch2._readableStreamController, chunk2);
                  }
                  reading = false;
                  if (readAgain) {
                    pullAlgorithm();
                  }
                });
              },
              _closeSteps: () => {
                reading = false;
                if (!canceled1) {
                  ReadableStreamDefaultControllerClose(branch1._readableStreamController);
                }
                if (!canceled2) {
                  ReadableStreamDefaultControllerClose(branch2._readableStreamController);
                }
                if (!canceled1 || !canceled2) {
                  resolveCancelPromise(void 0);
                }
              },
              _errorSteps: () => {
                reading = false;
              }
            };
            ReadableStreamDefaultReaderRead(reader, readRequest);
            return promiseResolvedWith(void 0);
          }
          function cancel1Algorithm(reason) {
            canceled1 = true;
            reason1 = reason;
            if (canceled2) {
              const compositeReason = CreateArrayFromList([reason1, reason2]);
              const cancelResult = ReadableStreamCancel(stream, compositeReason);
              resolveCancelPromise(cancelResult);
            }
            return cancelPromise;
          }
          function cancel2Algorithm(reason) {
            canceled2 = true;
            reason2 = reason;
            if (canceled1) {
              const compositeReason = CreateArrayFromList([reason1, reason2]);
              const cancelResult = ReadableStreamCancel(stream, compositeReason);
              resolveCancelPromise(cancelResult);
            }
            return cancelPromise;
          }
          function startAlgorithm() {
          }
          branch1 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel1Algorithm);
          branch2 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel2Algorithm);
          uponRejection(reader._closedPromise, (r2) => {
            ReadableStreamDefaultControllerError(branch1._readableStreamController, r2);
            ReadableStreamDefaultControllerError(branch2._readableStreamController, r2);
            if (!canceled1 || !canceled2) {
              resolveCancelPromise(void 0);
            }
          });
          return [branch1, branch2];
        }
        function ReadableByteStreamTee(stream) {
          let reader = AcquireReadableStreamDefaultReader(stream);
          let reading = false;
          let readAgainForBranch1 = false;
          let readAgainForBranch2 = false;
          let canceled1 = false;
          let canceled2 = false;
          let reason1;
          let reason2;
          let branch1;
          let branch2;
          let resolveCancelPromise;
          const cancelPromise = newPromise((resolve2) => {
            resolveCancelPromise = resolve2;
          });
          function forwardReaderError(thisReader) {
            uponRejection(thisReader._closedPromise, (r2) => {
              if (thisReader !== reader) {
                return;
              }
              ReadableByteStreamControllerError(branch1._readableStreamController, r2);
              ReadableByteStreamControllerError(branch2._readableStreamController, r2);
              if (!canceled1 || !canceled2) {
                resolveCancelPromise(void 0);
              }
            });
          }
          function pullWithDefaultReader() {
            if (IsReadableStreamBYOBReader(reader)) {
              ReadableStreamReaderGenericRelease(reader);
              reader = AcquireReadableStreamDefaultReader(stream);
              forwardReaderError(reader);
            }
            const readRequest = {
              _chunkSteps: (chunk) => {
                queueMicrotask(() => {
                  readAgainForBranch1 = false;
                  readAgainForBranch2 = false;
                  const chunk1 = chunk;
                  let chunk2 = chunk;
                  if (!canceled1 && !canceled2) {
                    try {
                      chunk2 = CloneAsUint8Array(chunk);
                    } catch (cloneE) {
                      ReadableByteStreamControllerError(branch1._readableStreamController, cloneE);
                      ReadableByteStreamControllerError(branch2._readableStreamController, cloneE);
                      resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                      return;
                    }
                  }
                  if (!canceled1) {
                    ReadableByteStreamControllerEnqueue(branch1._readableStreamController, chunk1);
                  }
                  if (!canceled2) {
                    ReadableByteStreamControllerEnqueue(branch2._readableStreamController, chunk2);
                  }
                  reading = false;
                  if (readAgainForBranch1) {
                    pull1Algorithm();
                  } else if (readAgainForBranch2) {
                    pull2Algorithm();
                  }
                });
              },
              _closeSteps: () => {
                reading = false;
                if (!canceled1) {
                  ReadableByteStreamControllerClose(branch1._readableStreamController);
                }
                if (!canceled2) {
                  ReadableByteStreamControllerClose(branch2._readableStreamController);
                }
                if (branch1._readableStreamController._pendingPullIntos.length > 0) {
                  ReadableByteStreamControllerRespond(branch1._readableStreamController, 0);
                }
                if (branch2._readableStreamController._pendingPullIntos.length > 0) {
                  ReadableByteStreamControllerRespond(branch2._readableStreamController, 0);
                }
                if (!canceled1 || !canceled2) {
                  resolveCancelPromise(void 0);
                }
              },
              _errorSteps: () => {
                reading = false;
              }
            };
            ReadableStreamDefaultReaderRead(reader, readRequest);
          }
          function pullWithBYOBReader(view, forBranch2) {
            if (IsReadableStreamDefaultReader(reader)) {
              ReadableStreamReaderGenericRelease(reader);
              reader = AcquireReadableStreamBYOBReader(stream);
              forwardReaderError(reader);
            }
            const byobBranch = forBranch2 ? branch2 : branch1;
            const otherBranch = forBranch2 ? branch1 : branch2;
            const readIntoRequest = {
              _chunkSteps: (chunk) => {
                queueMicrotask(() => {
                  readAgainForBranch1 = false;
                  readAgainForBranch2 = false;
                  const byobCanceled = forBranch2 ? canceled2 : canceled1;
                  const otherCanceled = forBranch2 ? canceled1 : canceled2;
                  if (!otherCanceled) {
                    let clonedChunk;
                    try {
                      clonedChunk = CloneAsUint8Array(chunk);
                    } catch (cloneE) {
                      ReadableByteStreamControllerError(byobBranch._readableStreamController, cloneE);
                      ReadableByteStreamControllerError(otherBranch._readableStreamController, cloneE);
                      resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                      return;
                    }
                    if (!byobCanceled) {
                      ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                    }
                    ReadableByteStreamControllerEnqueue(otherBranch._readableStreamController, clonedChunk);
                  } else if (!byobCanceled) {
                    ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                  }
                  reading = false;
                  if (readAgainForBranch1) {
                    pull1Algorithm();
                  } else if (readAgainForBranch2) {
                    pull2Algorithm();
                  }
                });
              },
              _closeSteps: (chunk) => {
                reading = false;
                const byobCanceled = forBranch2 ? canceled2 : canceled1;
                const otherCanceled = forBranch2 ? canceled1 : canceled2;
                if (!byobCanceled) {
                  ReadableByteStreamControllerClose(byobBranch._readableStreamController);
                }
                if (!otherCanceled) {
                  ReadableByteStreamControllerClose(otherBranch._readableStreamController);
                }
                if (chunk !== void 0) {
                  if (!byobCanceled) {
                    ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                  }
                  if (!otherCanceled && otherBranch._readableStreamController._pendingPullIntos.length > 0) {
                    ReadableByteStreamControllerRespond(otherBranch._readableStreamController, 0);
                  }
                }
                if (!byobCanceled || !otherCanceled) {
                  resolveCancelPromise(void 0);
                }
              },
              _errorSteps: () => {
                reading = false;
              }
            };
            ReadableStreamBYOBReaderRead(reader, view, readIntoRequest);
          }
          function pull1Algorithm() {
            if (reading) {
              readAgainForBranch1 = true;
              return promiseResolvedWith(void 0);
            }
            reading = true;
            const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch1._readableStreamController);
            if (byobRequest === null) {
              pullWithDefaultReader();
            } else {
              pullWithBYOBReader(byobRequest._view, false);
            }
            return promiseResolvedWith(void 0);
          }
          function pull2Algorithm() {
            if (reading) {
              readAgainForBranch2 = true;
              return promiseResolvedWith(void 0);
            }
            reading = true;
            const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch2._readableStreamController);
            if (byobRequest === null) {
              pullWithDefaultReader();
            } else {
              pullWithBYOBReader(byobRequest._view, true);
            }
            return promiseResolvedWith(void 0);
          }
          function cancel1Algorithm(reason) {
            canceled1 = true;
            reason1 = reason;
            if (canceled2) {
              const compositeReason = CreateArrayFromList([reason1, reason2]);
              const cancelResult = ReadableStreamCancel(stream, compositeReason);
              resolveCancelPromise(cancelResult);
            }
            return cancelPromise;
          }
          function cancel2Algorithm(reason) {
            canceled2 = true;
            reason2 = reason;
            if (canceled1) {
              const compositeReason = CreateArrayFromList([reason1, reason2]);
              const cancelResult = ReadableStreamCancel(stream, compositeReason);
              resolveCancelPromise(cancelResult);
            }
            return cancelPromise;
          }
          function startAlgorithm() {
            return;
          }
          branch1 = CreateReadableByteStream(startAlgorithm, pull1Algorithm, cancel1Algorithm);
          branch2 = CreateReadableByteStream(startAlgorithm, pull2Algorithm, cancel2Algorithm);
          forwardReaderError(reader);
          return [branch1, branch2];
        }
        function convertUnderlyingDefaultOrByteSource(source, context) {
          assertDictionary(source, context);
          const original = source;
          const autoAllocateChunkSize = original === null || original === void 0 ? void 0 : original.autoAllocateChunkSize;
          const cancel = original === null || original === void 0 ? void 0 : original.cancel;
          const pull = original === null || original === void 0 ? void 0 : original.pull;
          const start = original === null || original === void 0 ? void 0 : original.start;
          const type = original === null || original === void 0 ? void 0 : original.type;
          return {
            autoAllocateChunkSize: autoAllocateChunkSize === void 0 ? void 0 : convertUnsignedLongLongWithEnforceRange(autoAllocateChunkSize, `${context} has member 'autoAllocateChunkSize' that`),
            cancel: cancel === void 0 ? void 0 : convertUnderlyingSourceCancelCallback(cancel, original, `${context} has member 'cancel' that`),
            pull: pull === void 0 ? void 0 : convertUnderlyingSourcePullCallback(pull, original, `${context} has member 'pull' that`),
            start: start === void 0 ? void 0 : convertUnderlyingSourceStartCallback(start, original, `${context} has member 'start' that`),
            type: type === void 0 ? void 0 : convertReadableStreamType(type, `${context} has member 'type' that`)
          };
        }
        function convertUnderlyingSourceCancelCallback(fn, original, context) {
          assertFunction(fn, context);
          return (reason) => promiseCall(fn, original, [reason]);
        }
        function convertUnderlyingSourcePullCallback(fn, original, context) {
          assertFunction(fn, context);
          return (controller) => promiseCall(fn, original, [controller]);
        }
        function convertUnderlyingSourceStartCallback(fn, original, context) {
          assertFunction(fn, context);
          return (controller) => reflectCall(fn, original, [controller]);
        }
        function convertReadableStreamType(type, context) {
          type = `${type}`;
          if (type !== "bytes") {
            throw new TypeError(`${context} '${type}' is not a valid enumeration value for ReadableStreamType`);
          }
          return type;
        }
        function convertReaderOptions(options, context) {
          assertDictionary(options, context);
          const mode = options === null || options === void 0 ? void 0 : options.mode;
          return {
            mode: mode === void 0 ? void 0 : convertReadableStreamReaderMode(mode, `${context} has member 'mode' that`)
          };
        }
        function convertReadableStreamReaderMode(mode, context) {
          mode = `${mode}`;
          if (mode !== "byob") {
            throw new TypeError(`${context} '${mode}' is not a valid enumeration value for ReadableStreamReaderMode`);
          }
          return mode;
        }
        function convertIteratorOptions(options, context) {
          assertDictionary(options, context);
          const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
          return { preventCancel: Boolean(preventCancel) };
        }
        function convertPipeOptions(options, context) {
          assertDictionary(options, context);
          const preventAbort = options === null || options === void 0 ? void 0 : options.preventAbort;
          const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
          const preventClose = options === null || options === void 0 ? void 0 : options.preventClose;
          const signal = options === null || options === void 0 ? void 0 : options.signal;
          if (signal !== void 0) {
            assertAbortSignal(signal, `${context} has member 'signal' that`);
          }
          return {
            preventAbort: Boolean(preventAbort),
            preventCancel: Boolean(preventCancel),
            preventClose: Boolean(preventClose),
            signal
          };
        }
        function assertAbortSignal(signal, context) {
          if (!isAbortSignal2(signal)) {
            throw new TypeError(`${context} is not an AbortSignal.`);
          }
        }
        function convertReadableWritablePair(pair, context) {
          assertDictionary(pair, context);
          const readable2 = pair === null || pair === void 0 ? void 0 : pair.readable;
          assertRequiredField(readable2, "readable", "ReadableWritablePair");
          assertReadableStream(readable2, `${context} has member 'readable' that`);
          const writable3 = pair === null || pair === void 0 ? void 0 : pair.writable;
          assertRequiredField(writable3, "writable", "ReadableWritablePair");
          assertWritableStream(writable3, `${context} has member 'writable' that`);
          return { readable: readable2, writable: writable3 };
        }
        class ReadableStream2 {
          constructor(rawUnderlyingSource = {}, rawStrategy = {}) {
            if (rawUnderlyingSource === void 0) {
              rawUnderlyingSource = null;
            } else {
              assertObject(rawUnderlyingSource, "First parameter");
            }
            const strategy = convertQueuingStrategy(rawStrategy, "Second parameter");
            const underlyingSource = convertUnderlyingDefaultOrByteSource(rawUnderlyingSource, "First parameter");
            InitializeReadableStream(this);
            if (underlyingSource.type === "bytes") {
              if (strategy.size !== void 0) {
                throw new RangeError("The strategy for a byte stream cannot have a size function");
              }
              const highWaterMark = ExtractHighWaterMark(strategy, 0);
              SetUpReadableByteStreamControllerFromUnderlyingSource(this, underlyingSource, highWaterMark);
            } else {
              const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
              const highWaterMark = ExtractHighWaterMark(strategy, 1);
              SetUpReadableStreamDefaultControllerFromUnderlyingSource(this, underlyingSource, highWaterMark, sizeAlgorithm);
            }
          }
          get locked() {
            if (!IsReadableStream(this)) {
              throw streamBrandCheckException$1("locked");
            }
            return IsReadableStreamLocked(this);
          }
          cancel(reason = void 0) {
            if (!IsReadableStream(this)) {
              return promiseRejectedWith(streamBrandCheckException$1("cancel"));
            }
            if (IsReadableStreamLocked(this)) {
              return promiseRejectedWith(new TypeError("Cannot cancel a stream that already has a reader"));
            }
            return ReadableStreamCancel(this, reason);
          }
          getReader(rawOptions = void 0) {
            if (!IsReadableStream(this)) {
              throw streamBrandCheckException$1("getReader");
            }
            const options = convertReaderOptions(rawOptions, "First parameter");
            if (options.mode === void 0) {
              return AcquireReadableStreamDefaultReader(this);
            }
            return AcquireReadableStreamBYOBReader(this);
          }
          pipeThrough(rawTransform, rawOptions = {}) {
            if (!IsReadableStream(this)) {
              throw streamBrandCheckException$1("pipeThrough");
            }
            assertRequiredArgument(rawTransform, 1, "pipeThrough");
            const transform = convertReadableWritablePair(rawTransform, "First parameter");
            const options = convertPipeOptions(rawOptions, "Second parameter");
            if (IsReadableStreamLocked(this)) {
              throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
            }
            if (IsWritableStreamLocked(transform.writable)) {
              throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
            }
            const promise = ReadableStreamPipeTo(this, transform.writable, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
            setPromiseIsHandledToTrue(promise);
            return transform.readable;
          }
          pipeTo(destination, rawOptions = {}) {
            if (!IsReadableStream(this)) {
              return promiseRejectedWith(streamBrandCheckException$1("pipeTo"));
            }
            if (destination === void 0) {
              return promiseRejectedWith(`Parameter 1 is required in 'pipeTo'.`);
            }
            if (!IsWritableStream(destination)) {
              return promiseRejectedWith(new TypeError(`ReadableStream.prototype.pipeTo's first argument must be a WritableStream`));
            }
            let options;
            try {
              options = convertPipeOptions(rawOptions, "Second parameter");
            } catch (e2) {
              return promiseRejectedWith(e2);
            }
            if (IsReadableStreamLocked(this)) {
              return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"));
            }
            if (IsWritableStreamLocked(destination)) {
              return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"));
            }
            return ReadableStreamPipeTo(this, destination, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
          }
          tee() {
            if (!IsReadableStream(this)) {
              throw streamBrandCheckException$1("tee");
            }
            const branches = ReadableStreamTee(this);
            return CreateArrayFromList(branches);
          }
          values(rawOptions = void 0) {
            if (!IsReadableStream(this)) {
              throw streamBrandCheckException$1("values");
            }
            const options = convertIteratorOptions(rawOptions, "First parameter");
            return AcquireReadableStreamAsyncIterator(this, options.preventCancel);
          }
        }
        Object.defineProperties(ReadableStream2.prototype, {
          cancel: { enumerable: true },
          getReader: { enumerable: true },
          pipeThrough: { enumerable: true },
          pipeTo: { enumerable: true },
          tee: { enumerable: true },
          values: { enumerable: true },
          locked: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(ReadableStream2.prototype, SymbolPolyfill.toStringTag, {
            value: "ReadableStream",
            configurable: true
          });
        }
        if (typeof SymbolPolyfill.asyncIterator === "symbol") {
          Object.defineProperty(ReadableStream2.prototype, SymbolPolyfill.asyncIterator, {
            value: ReadableStream2.prototype.values,
            writable: true,
            configurable: true
          });
        }
        function CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
          const stream = Object.create(ReadableStream2.prototype);
          InitializeReadableStream(stream);
          const controller = Object.create(ReadableStreamDefaultController.prototype);
          SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
          return stream;
        }
        function CreateReadableByteStream(startAlgorithm, pullAlgorithm, cancelAlgorithm) {
          const stream = Object.create(ReadableStream2.prototype);
          InitializeReadableStream(stream);
          const controller = Object.create(ReadableByteStreamController.prototype);
          SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, 0, void 0);
          return stream;
        }
        function InitializeReadableStream(stream) {
          stream._state = "readable";
          stream._reader = void 0;
          stream._storedError = void 0;
          stream._disturbed = false;
        }
        function IsReadableStream(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_readableStreamController")) {
            return false;
          }
          return x2 instanceof ReadableStream2;
        }
        function IsReadableStreamLocked(stream) {
          if (stream._reader === void 0) {
            return false;
          }
          return true;
        }
        function ReadableStreamCancel(stream, reason) {
          stream._disturbed = true;
          if (stream._state === "closed") {
            return promiseResolvedWith(void 0);
          }
          if (stream._state === "errored") {
            return promiseRejectedWith(stream._storedError);
          }
          ReadableStreamClose(stream);
          const reader = stream._reader;
          if (reader !== void 0 && IsReadableStreamBYOBReader(reader)) {
            reader._readIntoRequests.forEach((readIntoRequest) => {
              readIntoRequest._closeSteps(void 0);
            });
            reader._readIntoRequests = new SimpleQueue();
          }
          const sourceCancelPromise = stream._readableStreamController[CancelSteps](reason);
          return transformPromiseWith(sourceCancelPromise, noop4);
        }
        function ReadableStreamClose(stream) {
          stream._state = "closed";
          const reader = stream._reader;
          if (reader === void 0) {
            return;
          }
          defaultReaderClosedPromiseResolve(reader);
          if (IsReadableStreamDefaultReader(reader)) {
            reader._readRequests.forEach((readRequest) => {
              readRequest._closeSteps();
            });
            reader._readRequests = new SimpleQueue();
          }
        }
        function ReadableStreamError(stream, e2) {
          stream._state = "errored";
          stream._storedError = e2;
          const reader = stream._reader;
          if (reader === void 0) {
            return;
          }
          defaultReaderClosedPromiseReject(reader, e2);
          if (IsReadableStreamDefaultReader(reader)) {
            reader._readRequests.forEach((readRequest) => {
              readRequest._errorSteps(e2);
            });
            reader._readRequests = new SimpleQueue();
          } else {
            reader._readIntoRequests.forEach((readIntoRequest) => {
              readIntoRequest._errorSteps(e2);
            });
            reader._readIntoRequests = new SimpleQueue();
          }
        }
        function streamBrandCheckException$1(name) {
          return new TypeError(`ReadableStream.prototype.${name} can only be used on a ReadableStream`);
        }
        function convertQueuingStrategyInit(init2, context) {
          assertDictionary(init2, context);
          const highWaterMark = init2 === null || init2 === void 0 ? void 0 : init2.highWaterMark;
          assertRequiredField(highWaterMark, "highWaterMark", "QueuingStrategyInit");
          return {
            highWaterMark: convertUnrestrictedDouble(highWaterMark)
          };
        }
        const byteLengthSizeFunction = (chunk) => {
          return chunk.byteLength;
        };
        Object.defineProperty(byteLengthSizeFunction, "name", {
          value: "size",
          configurable: true
        });
        class ByteLengthQueuingStrategy {
          constructor(options) {
            assertRequiredArgument(options, 1, "ByteLengthQueuingStrategy");
            options = convertQueuingStrategyInit(options, "First parameter");
            this._byteLengthQueuingStrategyHighWaterMark = options.highWaterMark;
          }
          get highWaterMark() {
            if (!IsByteLengthQueuingStrategy(this)) {
              throw byteLengthBrandCheckException("highWaterMark");
            }
            return this._byteLengthQueuingStrategyHighWaterMark;
          }
          get size() {
            if (!IsByteLengthQueuingStrategy(this)) {
              throw byteLengthBrandCheckException("size");
            }
            return byteLengthSizeFunction;
          }
        }
        Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
          highWaterMark: { enumerable: true },
          size: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(ByteLengthQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
            value: "ByteLengthQueuingStrategy",
            configurable: true
          });
        }
        function byteLengthBrandCheckException(name) {
          return new TypeError(`ByteLengthQueuingStrategy.prototype.${name} can only be used on a ByteLengthQueuingStrategy`);
        }
        function IsByteLengthQueuingStrategy(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_byteLengthQueuingStrategyHighWaterMark")) {
            return false;
          }
          return x2 instanceof ByteLengthQueuingStrategy;
        }
        const countSizeFunction = () => {
          return 1;
        };
        Object.defineProperty(countSizeFunction, "name", {
          value: "size",
          configurable: true
        });
        class CountQueuingStrategy {
          constructor(options) {
            assertRequiredArgument(options, 1, "CountQueuingStrategy");
            options = convertQueuingStrategyInit(options, "First parameter");
            this._countQueuingStrategyHighWaterMark = options.highWaterMark;
          }
          get highWaterMark() {
            if (!IsCountQueuingStrategy(this)) {
              throw countBrandCheckException("highWaterMark");
            }
            return this._countQueuingStrategyHighWaterMark;
          }
          get size() {
            if (!IsCountQueuingStrategy(this)) {
              throw countBrandCheckException("size");
            }
            return countSizeFunction;
          }
        }
        Object.defineProperties(CountQueuingStrategy.prototype, {
          highWaterMark: { enumerable: true },
          size: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(CountQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
            value: "CountQueuingStrategy",
            configurable: true
          });
        }
        function countBrandCheckException(name) {
          return new TypeError(`CountQueuingStrategy.prototype.${name} can only be used on a CountQueuingStrategy`);
        }
        function IsCountQueuingStrategy(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_countQueuingStrategyHighWaterMark")) {
            return false;
          }
          return x2 instanceof CountQueuingStrategy;
        }
        function convertTransformer(original, context) {
          assertDictionary(original, context);
          const flush = original === null || original === void 0 ? void 0 : original.flush;
          const readableType = original === null || original === void 0 ? void 0 : original.readableType;
          const start = original === null || original === void 0 ? void 0 : original.start;
          const transform = original === null || original === void 0 ? void 0 : original.transform;
          const writableType = original === null || original === void 0 ? void 0 : original.writableType;
          return {
            flush: flush === void 0 ? void 0 : convertTransformerFlushCallback(flush, original, `${context} has member 'flush' that`),
            readableType,
            start: start === void 0 ? void 0 : convertTransformerStartCallback(start, original, `${context} has member 'start' that`),
            transform: transform === void 0 ? void 0 : convertTransformerTransformCallback(transform, original, `${context} has member 'transform' that`),
            writableType
          };
        }
        function convertTransformerFlushCallback(fn, original, context) {
          assertFunction(fn, context);
          return (controller) => promiseCall(fn, original, [controller]);
        }
        function convertTransformerStartCallback(fn, original, context) {
          assertFunction(fn, context);
          return (controller) => reflectCall(fn, original, [controller]);
        }
        function convertTransformerTransformCallback(fn, original, context) {
          assertFunction(fn, context);
          return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
        }
        class TransformStream {
          constructor(rawTransformer = {}, rawWritableStrategy = {}, rawReadableStrategy = {}) {
            if (rawTransformer === void 0) {
              rawTransformer = null;
            }
            const writableStrategy = convertQueuingStrategy(rawWritableStrategy, "Second parameter");
            const readableStrategy = convertQueuingStrategy(rawReadableStrategy, "Third parameter");
            const transformer = convertTransformer(rawTransformer, "First parameter");
            if (transformer.readableType !== void 0) {
              throw new RangeError("Invalid readableType specified");
            }
            if (transformer.writableType !== void 0) {
              throw new RangeError("Invalid writableType specified");
            }
            const readableHighWaterMark = ExtractHighWaterMark(readableStrategy, 0);
            const readableSizeAlgorithm = ExtractSizeAlgorithm(readableStrategy);
            const writableHighWaterMark = ExtractHighWaterMark(writableStrategy, 1);
            const writableSizeAlgorithm = ExtractSizeAlgorithm(writableStrategy);
            let startPromise_resolve;
            const startPromise = newPromise((resolve2) => {
              startPromise_resolve = resolve2;
            });
            InitializeTransformStream(this, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
            SetUpTransformStreamDefaultControllerFromTransformer(this, transformer);
            if (transformer.start !== void 0) {
              startPromise_resolve(transformer.start(this._transformStreamController));
            } else {
              startPromise_resolve(void 0);
            }
          }
          get readable() {
            if (!IsTransformStream(this)) {
              throw streamBrandCheckException("readable");
            }
            return this._readable;
          }
          get writable() {
            if (!IsTransformStream(this)) {
              throw streamBrandCheckException("writable");
            }
            return this._writable;
          }
        }
        Object.defineProperties(TransformStream.prototype, {
          readable: { enumerable: true },
          writable: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(TransformStream.prototype, SymbolPolyfill.toStringTag, {
            value: "TransformStream",
            configurable: true
          });
        }
        function InitializeTransformStream(stream, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm) {
          function startAlgorithm() {
            return startPromise;
          }
          function writeAlgorithm(chunk) {
            return TransformStreamDefaultSinkWriteAlgorithm(stream, chunk);
          }
          function abortAlgorithm(reason) {
            return TransformStreamDefaultSinkAbortAlgorithm(stream, reason);
          }
          function closeAlgorithm() {
            return TransformStreamDefaultSinkCloseAlgorithm(stream);
          }
          stream._writable = CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, writableHighWaterMark, writableSizeAlgorithm);
          function pullAlgorithm() {
            return TransformStreamDefaultSourcePullAlgorithm(stream);
          }
          function cancelAlgorithm(reason) {
            TransformStreamErrorWritableAndUnblockWrite(stream, reason);
            return promiseResolvedWith(void 0);
          }
          stream._readable = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
          stream._backpressure = void 0;
          stream._backpressureChangePromise = void 0;
          stream._backpressureChangePromise_resolve = void 0;
          TransformStreamSetBackpressure(stream, true);
          stream._transformStreamController = void 0;
        }
        function IsTransformStream(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_transformStreamController")) {
            return false;
          }
          return x2 instanceof TransformStream;
        }
        function TransformStreamError(stream, e2) {
          ReadableStreamDefaultControllerError(stream._readable._readableStreamController, e2);
          TransformStreamErrorWritableAndUnblockWrite(stream, e2);
        }
        function TransformStreamErrorWritableAndUnblockWrite(stream, e2) {
          TransformStreamDefaultControllerClearAlgorithms(stream._transformStreamController);
          WritableStreamDefaultControllerErrorIfNeeded(stream._writable._writableStreamController, e2);
          if (stream._backpressure) {
            TransformStreamSetBackpressure(stream, false);
          }
        }
        function TransformStreamSetBackpressure(stream, backpressure) {
          if (stream._backpressureChangePromise !== void 0) {
            stream._backpressureChangePromise_resolve();
          }
          stream._backpressureChangePromise = newPromise((resolve2) => {
            stream._backpressureChangePromise_resolve = resolve2;
          });
          stream._backpressure = backpressure;
        }
        class TransformStreamDefaultController {
          constructor() {
            throw new TypeError("Illegal constructor");
          }
          get desiredSize() {
            if (!IsTransformStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException("desiredSize");
            }
            const readableController = this._controlledTransformStream._readable._readableStreamController;
            return ReadableStreamDefaultControllerGetDesiredSize(readableController);
          }
          enqueue(chunk = void 0) {
            if (!IsTransformStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException("enqueue");
            }
            TransformStreamDefaultControllerEnqueue(this, chunk);
          }
          error(reason = void 0) {
            if (!IsTransformStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException("error");
            }
            TransformStreamDefaultControllerError(this, reason);
          }
          terminate() {
            if (!IsTransformStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException("terminate");
            }
            TransformStreamDefaultControllerTerminate(this);
          }
        }
        Object.defineProperties(TransformStreamDefaultController.prototype, {
          enqueue: { enumerable: true },
          error: { enumerable: true },
          terminate: { enumerable: true },
          desiredSize: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(TransformStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
            value: "TransformStreamDefaultController",
            configurable: true
          });
        }
        function IsTransformStreamDefaultController(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_controlledTransformStream")) {
            return false;
          }
          return x2 instanceof TransformStreamDefaultController;
        }
        function SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm) {
          controller._controlledTransformStream = stream;
          stream._transformStreamController = controller;
          controller._transformAlgorithm = transformAlgorithm;
          controller._flushAlgorithm = flushAlgorithm;
        }
        function SetUpTransformStreamDefaultControllerFromTransformer(stream, transformer) {
          const controller = Object.create(TransformStreamDefaultController.prototype);
          let transformAlgorithm = (chunk) => {
            try {
              TransformStreamDefaultControllerEnqueue(controller, chunk);
              return promiseResolvedWith(void 0);
            } catch (transformResultE) {
              return promiseRejectedWith(transformResultE);
            }
          };
          let flushAlgorithm = () => promiseResolvedWith(void 0);
          if (transformer.transform !== void 0) {
            transformAlgorithm = (chunk) => transformer.transform(chunk, controller);
          }
          if (transformer.flush !== void 0) {
            flushAlgorithm = () => transformer.flush(controller);
          }
          SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm);
        }
        function TransformStreamDefaultControllerClearAlgorithms(controller) {
          controller._transformAlgorithm = void 0;
          controller._flushAlgorithm = void 0;
        }
        function TransformStreamDefaultControllerEnqueue(controller, chunk) {
          const stream = controller._controlledTransformStream;
          const readableController = stream._readable._readableStreamController;
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(readableController)) {
            throw new TypeError("Readable side is not in a state that permits enqueue");
          }
          try {
            ReadableStreamDefaultControllerEnqueue(readableController, chunk);
          } catch (e2) {
            TransformStreamErrorWritableAndUnblockWrite(stream, e2);
            throw stream._readable._storedError;
          }
          const backpressure = ReadableStreamDefaultControllerHasBackpressure(readableController);
          if (backpressure !== stream._backpressure) {
            TransformStreamSetBackpressure(stream, true);
          }
        }
        function TransformStreamDefaultControllerError(controller, e2) {
          TransformStreamError(controller._controlledTransformStream, e2);
        }
        function TransformStreamDefaultControllerPerformTransform(controller, chunk) {
          const transformPromise = controller._transformAlgorithm(chunk);
          return transformPromiseWith(transformPromise, void 0, (r2) => {
            TransformStreamError(controller._controlledTransformStream, r2);
            throw r2;
          });
        }
        function TransformStreamDefaultControllerTerminate(controller) {
          const stream = controller._controlledTransformStream;
          const readableController = stream._readable._readableStreamController;
          ReadableStreamDefaultControllerClose(readableController);
          const error2 = new TypeError("TransformStream terminated");
          TransformStreamErrorWritableAndUnblockWrite(stream, error2);
        }
        function TransformStreamDefaultSinkWriteAlgorithm(stream, chunk) {
          const controller = stream._transformStreamController;
          if (stream._backpressure) {
            const backpressureChangePromise = stream._backpressureChangePromise;
            return transformPromiseWith(backpressureChangePromise, () => {
              const writable3 = stream._writable;
              const state = writable3._state;
              if (state === "erroring") {
                throw writable3._storedError;
              }
              return TransformStreamDefaultControllerPerformTransform(controller, chunk);
            });
          }
          return TransformStreamDefaultControllerPerformTransform(controller, chunk);
        }
        function TransformStreamDefaultSinkAbortAlgorithm(stream, reason) {
          TransformStreamError(stream, reason);
          return promiseResolvedWith(void 0);
        }
        function TransformStreamDefaultSinkCloseAlgorithm(stream) {
          const readable2 = stream._readable;
          const controller = stream._transformStreamController;
          const flushPromise = controller._flushAlgorithm();
          TransformStreamDefaultControllerClearAlgorithms(controller);
          return transformPromiseWith(flushPromise, () => {
            if (readable2._state === "errored") {
              throw readable2._storedError;
            }
            ReadableStreamDefaultControllerClose(readable2._readableStreamController);
          }, (r2) => {
            TransformStreamError(stream, r2);
            throw readable2._storedError;
          });
        }
        function TransformStreamDefaultSourcePullAlgorithm(stream) {
          TransformStreamSetBackpressure(stream, false);
          return stream._backpressureChangePromise;
        }
        function defaultControllerBrandCheckException(name) {
          return new TypeError(`TransformStreamDefaultController.prototype.${name} can only be used on a TransformStreamDefaultController`);
        }
        function streamBrandCheckException(name) {
          return new TypeError(`TransformStream.prototype.${name} can only be used on a TransformStream`);
        }
        exports2.ByteLengthQueuingStrategy = ByteLengthQueuingStrategy;
        exports2.CountQueuingStrategy = CountQueuingStrategy;
        exports2.ReadableByteStreamController = ReadableByteStreamController;
        exports2.ReadableStream = ReadableStream2;
        exports2.ReadableStreamBYOBReader = ReadableStreamBYOBReader;
        exports2.ReadableStreamBYOBRequest = ReadableStreamBYOBRequest;
        exports2.ReadableStreamDefaultController = ReadableStreamDefaultController;
        exports2.ReadableStreamDefaultReader = ReadableStreamDefaultReader;
        exports2.TransformStream = TransformStream;
        exports2.TransformStreamDefaultController = TransformStreamDefaultController;
        exports2.WritableStream = WritableStream;
        exports2.WritableStreamDefaultController = WritableStreamDefaultController;
        exports2.WritableStreamDefaultWriter = WritableStreamDefaultWriter;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    })(ponyfill_es2018, ponyfill_es2018.exports);
    POOL_SIZE$1 = 65536;
    if (!globalThis.ReadableStream) {
      try {
        const process2 = require("process");
        const { emitWarning } = process2;
        try {
          process2.emitWarning = () => {
          };
          Object.assign(globalThis, require("stream/web"));
          process2.emitWarning = emitWarning;
        } catch (error2) {
          process2.emitWarning = emitWarning;
          throw error2;
        }
      } catch (error2) {
        Object.assign(globalThis, ponyfill_es2018.exports);
      }
    }
    try {
      const { Blob: Blob2 } = require("buffer");
      if (Blob2 && !Blob2.prototype.stream) {
        Blob2.prototype.stream = function name(params) {
          let position = 0;
          const blob = this;
          return new ReadableStream({
            type: "bytes",
            async pull(ctrl) {
              const chunk = blob.slice(position, Math.min(blob.size, position + POOL_SIZE$1));
              const buffer = await chunk.arrayBuffer();
              position += buffer.byteLength;
              ctrl.enqueue(new Uint8Array(buffer));
              if (position === blob.size) {
                ctrl.close();
              }
            }
          });
        };
      }
    } catch (error2) {
    }
    POOL_SIZE = 65536;
    _Blob = (_a = class {
      constructor(blobParts = [], options = {}) {
        __privateAdd(this, _parts, []);
        __privateAdd(this, _type, "");
        __privateAdd(this, _size, 0);
        if (typeof blobParts !== "object" || blobParts === null) {
          throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
        }
        if (typeof blobParts[Symbol.iterator] !== "function") {
          throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
        }
        if (typeof options !== "object" && typeof options !== "function") {
          throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
        }
        if (options === null)
          options = {};
        const encoder2 = new TextEncoder();
        for (const element of blobParts) {
          let part;
          if (ArrayBuffer.isView(element)) {
            part = new Uint8Array(element.buffer.slice(element.byteOffset, element.byteOffset + element.byteLength));
          } else if (element instanceof ArrayBuffer) {
            part = new Uint8Array(element.slice(0));
          } else if (element instanceof _a) {
            part = element;
          } else {
            part = encoder2.encode(element);
          }
          __privateSet(this, _size, __privateGet(this, _size) + (ArrayBuffer.isView(part) ? part.byteLength : part.size));
          __privateGet(this, _parts).push(part);
        }
        const type = options.type === void 0 ? "" : String(options.type);
        __privateSet(this, _type, /^[\x20-\x7E]*$/.test(type) ? type : "");
      }
      get size() {
        return __privateGet(this, _size);
      }
      get type() {
        return __privateGet(this, _type);
      }
      async text() {
        const decoder = new TextDecoder();
        let str = "";
        for await (const part of toIterator(__privateGet(this, _parts), false)) {
          str += decoder.decode(part, { stream: true });
        }
        str += decoder.decode();
        return str;
      }
      async arrayBuffer() {
        const data = new Uint8Array(this.size);
        let offset = 0;
        for await (const chunk of toIterator(__privateGet(this, _parts), false)) {
          data.set(chunk, offset);
          offset += chunk.length;
        }
        return data.buffer;
      }
      stream() {
        const it = toIterator(__privateGet(this, _parts), true);
        return new globalThis.ReadableStream({
          type: "bytes",
          async pull(ctrl) {
            const chunk = await it.next();
            chunk.done ? ctrl.close() : ctrl.enqueue(chunk.value);
          },
          async cancel() {
            await it.return();
          }
        });
      }
      slice(start = 0, end = this.size, type = "") {
        const { size } = this;
        let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
        let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
        const span = Math.max(relativeEnd - relativeStart, 0);
        const parts = __privateGet(this, _parts);
        const blobParts = [];
        let added = 0;
        for (const part of parts) {
          if (added >= span) {
            break;
          }
          const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
          if (relativeStart && size2 <= relativeStart) {
            relativeStart -= size2;
            relativeEnd -= size2;
          } else {
            let chunk;
            if (ArrayBuffer.isView(part)) {
              chunk = part.subarray(relativeStart, Math.min(size2, relativeEnd));
              added += chunk.byteLength;
            } else {
              chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
              added += chunk.size;
            }
            relativeEnd -= size2;
            blobParts.push(chunk);
            relativeStart = 0;
          }
        }
        const blob = new _a([], { type: String(type).toLowerCase() });
        __privateSet(blob, _size, span);
        __privateSet(blob, _parts, blobParts);
        return blob;
      }
      get [Symbol.toStringTag]() {
        return "Blob";
      }
      static [Symbol.hasInstance](object) {
        return object && typeof object === "object" && typeof object.constructor === "function" && (typeof object.stream === "function" || typeof object.arrayBuffer === "function") && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
      }
    }, _parts = new WeakMap(), _type = new WeakMap(), _size = new WeakMap(), _a);
    Object.defineProperties(_Blob.prototype, {
      size: { enumerable: true },
      type: { enumerable: true },
      slice: { enumerable: true }
    });
    Blob = _Blob;
    Blob$1 = Blob;
    _File = (_a2 = class extends Blob$1 {
      constructor(fileBits, fileName, options = {}) {
        if (arguments.length < 2) {
          throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
        }
        super(fileBits, options);
        __privateAdd(this, _lastModified, 0);
        __privateAdd(this, _name, "");
        if (options === null)
          options = {};
        const lastModified = options.lastModified === void 0 ? Date.now() : Number(options.lastModified);
        if (!Number.isNaN(lastModified)) {
          __privateSet(this, _lastModified, lastModified);
        }
        __privateSet(this, _name, String(fileName));
      }
      get name() {
        return __privateGet(this, _name);
      }
      get lastModified() {
        return __privateGet(this, _lastModified);
      }
      get [Symbol.toStringTag]() {
        return "File";
      }
    }, _lastModified = new WeakMap(), _name = new WeakMap(), _a2);
    File = _File;
    ({ toStringTag: t, iterator: i, hasInstance: h } = Symbol);
    r = Math.random;
    m = "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(",");
    f2 = (a, b, c) => (a += "", /^(Blob|File)$/.test(b && b[t]) ? [(c = c !== void 0 ? c + "" : b[t] == "File" ? b.name : "blob", a), b.name !== c || b[t] == "blob" ? new File([b], c, b) : b] : [a, b + ""]);
    e = (c, f3) => (f3 ? c : c.replace(/\r?\n|\r/g, "\r\n")).replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22");
    x = (n, a, e2) => {
      if (a.length < e2) {
        throw new TypeError(`Failed to execute '${n}' on 'FormData': ${e2} arguments required, but only ${a.length} present.`);
      }
    };
    FormData = (_a3 = class {
      constructor(...a) {
        __privateAdd(this, _d, []);
        if (a.length)
          throw new TypeError(`Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.`);
      }
      get [t]() {
        return "FormData";
      }
      [i]() {
        return this.entries();
      }
      static [h](o) {
        return o && typeof o === "object" && o[t] === "FormData" && !m.some((m2) => typeof o[m2] != "function");
      }
      append(...a) {
        x("append", arguments, 2);
        __privateGet(this, _d).push(f2(...a));
      }
      delete(a) {
        x("delete", arguments, 1);
        a += "";
        __privateSet(this, _d, __privateGet(this, _d).filter(([b]) => b !== a));
      }
      get(a) {
        x("get", arguments, 1);
        a += "";
        for (var b = __privateGet(this, _d), l = b.length, c = 0; c < l; c++)
          if (b[c][0] === a)
            return b[c][1];
        return null;
      }
      getAll(a, b) {
        x("getAll", arguments, 1);
        b = [];
        a += "";
        __privateGet(this, _d).forEach((c) => c[0] === a && b.push(c[1]));
        return b;
      }
      has(a) {
        x("has", arguments, 1);
        a += "";
        return __privateGet(this, _d).some((b) => b[0] === a);
      }
      forEach(a, b) {
        x("forEach", arguments, 1);
        for (var [c, d] of this)
          a.call(b, d, c, this);
      }
      set(...a) {
        x("set", arguments, 2);
        var b = [], c = true;
        a = f2(...a);
        __privateGet(this, _d).forEach((d) => {
          d[0] === a[0] ? c && (c = !b.push(a)) : b.push(d);
        });
        c && b.push(a);
        __privateSet(this, _d, b);
      }
      *entries() {
        yield* __privateGet(this, _d);
      }
      *keys() {
        for (var [a] of this)
          yield a;
      }
      *values() {
        for (var [, a] of this)
          yield a;
      }
    }, _d = new WeakMap(), _a3);
    FetchBaseError = class extends Error {
      constructor(message, type) {
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.type = type;
      }
      get name() {
        return this.constructor.name;
      }
      get [Symbol.toStringTag]() {
        return this.constructor.name;
      }
    };
    FetchError = class extends FetchBaseError {
      constructor(message, type, systemError) {
        super(message, type);
        if (systemError) {
          this.code = this.errno = systemError.code;
          this.erroredSysCall = systemError.syscall;
        }
      }
    };
    NAME = Symbol.toStringTag;
    isURLSearchParameters = (object) => {
      return typeof object === "object" && typeof object.append === "function" && typeof object.delete === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.has === "function" && typeof object.set === "function" && typeof object.sort === "function" && object[NAME] === "URLSearchParams";
    };
    isBlob = (object) => {
      return object && typeof object === "object" && typeof object.arrayBuffer === "function" && typeof object.type === "string" && typeof object.stream === "function" && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[NAME]);
    };
    isAbortSignal = (object) => {
      return typeof object === "object" && (object[NAME] === "AbortSignal" || object[NAME] === "EventTarget");
    };
    INTERNALS$2 = Symbol("Body internals");
    Body = class {
      constructor(body, {
        size = 0
      } = {}) {
        let boundary = null;
        if (body === null) {
          body = null;
        } else if (isURLSearchParameters(body)) {
          body = Buffer.from(body.toString());
        } else if (isBlob(body))
          ;
        else if (Buffer.isBuffer(body))
          ;
        else if (import_node_util.types.isAnyArrayBuffer(body)) {
          body = Buffer.from(body);
        } else if (ArrayBuffer.isView(body)) {
          body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
        } else if (body instanceof import_node_stream.default)
          ;
        else if (body instanceof FormData) {
          body = formDataToBlob(body);
          boundary = body.type.split("=")[1];
        } else {
          body = Buffer.from(String(body));
        }
        let stream = body;
        if (Buffer.isBuffer(body)) {
          stream = import_node_stream.default.Readable.from(body);
        } else if (isBlob(body)) {
          stream = import_node_stream.default.Readable.from(body.stream());
        }
        this[INTERNALS$2] = {
          body,
          stream,
          boundary,
          disturbed: false,
          error: null
        };
        this.size = size;
        if (body instanceof import_node_stream.default) {
          body.on("error", (error_) => {
            const error2 = error_ instanceof FetchBaseError ? error_ : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${error_.message}`, "system", error_);
            this[INTERNALS$2].error = error2;
          });
        }
      }
      get body() {
        return this[INTERNALS$2].stream;
      }
      get bodyUsed() {
        return this[INTERNALS$2].disturbed;
      }
      async arrayBuffer() {
        const { buffer, byteOffset, byteLength } = await consumeBody(this);
        return buffer.slice(byteOffset, byteOffset + byteLength);
      }
      async formData() {
        const ct = this.headers.get("content-type");
        if (ct.startsWith("application/x-www-form-urlencoded")) {
          const formData = new FormData();
          const parameters = new URLSearchParams(await this.text());
          for (const [name, value] of parameters) {
            formData.append(name, value);
          }
          return formData;
        }
        const { toFormData: toFormData2 } = await Promise.resolve().then(() => (init_multipart_parser(), multipart_parser_exports));
        return toFormData2(this.body, ct);
      }
      async blob() {
        const ct = this.headers && this.headers.get("content-type") || this[INTERNALS$2].body && this[INTERNALS$2].body.type || "";
        const buf = await this.buffer();
        return new Blob$1([buf], {
          type: ct
        });
      }
      async json() {
        const buffer = await consumeBody(this);
        return JSON.parse(buffer.toString());
      }
      async text() {
        const buffer = await consumeBody(this);
        return buffer.toString();
      }
      buffer() {
        return consumeBody(this);
      }
    };
    Body.prototype.buffer = (0, import_node_util.deprecate)(Body.prototype.buffer, "Please use 'response.arrayBuffer()' instead of 'response.buffer()'", "node-fetch#buffer");
    Object.defineProperties(Body.prototype, {
      body: { enumerable: true },
      bodyUsed: { enumerable: true },
      arrayBuffer: { enumerable: true },
      blob: { enumerable: true },
      json: { enumerable: true },
      text: { enumerable: true }
    });
    clone = (instance, highWaterMark) => {
      let p1;
      let p2;
      let { body } = instance[INTERNALS$2];
      if (instance.bodyUsed) {
        throw new Error("cannot clone body after it is used");
      }
      if (body instanceof import_node_stream.default && typeof body.getBoundary !== "function") {
        p1 = new import_node_stream.PassThrough({ highWaterMark });
        p2 = new import_node_stream.PassThrough({ highWaterMark });
        body.pipe(p1);
        body.pipe(p2);
        instance[INTERNALS$2].stream = p1;
        body = p2;
      }
      return body;
    };
    getNonSpecFormDataBoundary = (0, import_node_util.deprecate)((body) => body.getBoundary(), "form-data doesn't follow the spec and requires special treatment. Use alternative package", "https://github.com/node-fetch/node-fetch/issues/1167");
    extractContentType = (body, request) => {
      if (body === null) {
        return null;
      }
      if (typeof body === "string") {
        return "text/plain;charset=UTF-8";
      }
      if (isURLSearchParameters(body)) {
        return "application/x-www-form-urlencoded;charset=UTF-8";
      }
      if (isBlob(body)) {
        return body.type || null;
      }
      if (Buffer.isBuffer(body) || import_node_util.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
        return null;
      }
      if (body instanceof FormData) {
        return `multipart/form-data; boundary=${request[INTERNALS$2].boundary}`;
      }
      if (body && typeof body.getBoundary === "function") {
        return `multipart/form-data;boundary=${getNonSpecFormDataBoundary(body)}`;
      }
      if (body instanceof import_node_stream.default) {
        return null;
      }
      return "text/plain;charset=UTF-8";
    };
    getTotalBytes = (request) => {
      const { body } = request[INTERNALS$2];
      if (body === null) {
        return 0;
      }
      if (isBlob(body)) {
        return body.size;
      }
      if (Buffer.isBuffer(body)) {
        return body.length;
      }
      if (body && typeof body.getLengthSync === "function") {
        return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
      }
      return null;
    };
    writeToStream = (dest, { body }) => {
      if (body === null) {
        dest.end();
      } else {
        body.pipe(dest);
      }
    };
    validateHeaderName = typeof import_node_http.default.validateHeaderName === "function" ? import_node_http.default.validateHeaderName : (name) => {
      if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
        const error2 = new TypeError(`Header name must be a valid HTTP token [${name}]`);
        Object.defineProperty(error2, "code", { value: "ERR_INVALID_HTTP_TOKEN" });
        throw error2;
      }
    };
    validateHeaderValue = typeof import_node_http.default.validateHeaderValue === "function" ? import_node_http.default.validateHeaderValue : (name, value) => {
      if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
        const error2 = new TypeError(`Invalid character in header content ["${name}"]`);
        Object.defineProperty(error2, "code", { value: "ERR_INVALID_CHAR" });
        throw error2;
      }
    };
    Headers2 = class extends URLSearchParams {
      constructor(init2) {
        let result = [];
        if (init2 instanceof Headers2) {
          const raw = init2.raw();
          for (const [name, values] of Object.entries(raw)) {
            result.push(...values.map((value) => [name, value]));
          }
        } else if (init2 == null)
          ;
        else if (typeof init2 === "object" && !import_node_util.types.isBoxedPrimitive(init2)) {
          const method = init2[Symbol.iterator];
          if (method == null) {
            result.push(...Object.entries(init2));
          } else {
            if (typeof method !== "function") {
              throw new TypeError("Header pairs must be iterable");
            }
            result = [...init2].map((pair) => {
              if (typeof pair !== "object" || import_node_util.types.isBoxedPrimitive(pair)) {
                throw new TypeError("Each header pair must be an iterable object");
              }
              return [...pair];
            }).map((pair) => {
              if (pair.length !== 2) {
                throw new TypeError("Each header pair must be a name/value tuple");
              }
              return [...pair];
            });
          }
        } else {
          throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
        }
        result = result.length > 0 ? result.map(([name, value]) => {
          validateHeaderName(name);
          validateHeaderValue(name, String(value));
          return [String(name).toLowerCase(), String(value)];
        }) : void 0;
        super(result);
        return new Proxy(this, {
          get(target, p, receiver) {
            switch (p) {
              case "append":
              case "set":
                return (name, value) => {
                  validateHeaderName(name);
                  validateHeaderValue(name, String(value));
                  return URLSearchParams.prototype[p].call(target, String(name).toLowerCase(), String(value));
                };
              case "delete":
              case "has":
              case "getAll":
                return (name) => {
                  validateHeaderName(name);
                  return URLSearchParams.prototype[p].call(target, String(name).toLowerCase());
                };
              case "keys":
                return () => {
                  target.sort();
                  return new Set(URLSearchParams.prototype.keys.call(target)).keys();
                };
              default:
                return Reflect.get(target, p, receiver);
            }
          }
        });
      }
      get [Symbol.toStringTag]() {
        return this.constructor.name;
      }
      toString() {
        return Object.prototype.toString.call(this);
      }
      get(name) {
        const values = this.getAll(name);
        if (values.length === 0) {
          return null;
        }
        let value = values.join(", ");
        if (/^content-encoding$/i.test(name)) {
          value = value.toLowerCase();
        }
        return value;
      }
      forEach(callback, thisArg = void 0) {
        for (const name of this.keys()) {
          Reflect.apply(callback, thisArg, [this.get(name), name, this]);
        }
      }
      *values() {
        for (const name of this.keys()) {
          yield this.get(name);
        }
      }
      *entries() {
        for (const name of this.keys()) {
          yield [name, this.get(name)];
        }
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      raw() {
        return [...this.keys()].reduce((result, key2) => {
          result[key2] = this.getAll(key2);
          return result;
        }, {});
      }
      [Symbol.for("nodejs.util.inspect.custom")]() {
        return [...this.keys()].reduce((result, key2) => {
          const values = this.getAll(key2);
          if (key2 === "host") {
            result[key2] = values[0];
          } else {
            result[key2] = values.length > 1 ? values : values[0];
          }
          return result;
        }, {});
      }
    };
    Object.defineProperties(Headers2.prototype, ["get", "entries", "forEach", "values"].reduce((result, property) => {
      result[property] = { enumerable: true };
      return result;
    }, {}));
    redirectStatus = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
    isRedirect = (code) => {
      return redirectStatus.has(code);
    };
    INTERNALS$1 = Symbol("Response internals");
    Response2 = class extends Body {
      constructor(body = null, options = {}) {
        super(body, options);
        const status = options.status != null ? options.status : 200;
        const headers = new Headers2(options.headers);
        if (body !== null && !headers.has("Content-Type")) {
          const contentType = extractContentType(body, this);
          if (contentType) {
            headers.append("Content-Type", contentType);
          }
        }
        this[INTERNALS$1] = {
          type: "default",
          url: options.url,
          status,
          statusText: options.statusText || "",
          headers,
          counter: options.counter,
          highWaterMark: options.highWaterMark
        };
      }
      get type() {
        return this[INTERNALS$1].type;
      }
      get url() {
        return this[INTERNALS$1].url || "";
      }
      get status() {
        return this[INTERNALS$1].status;
      }
      get ok() {
        return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
      }
      get redirected() {
        return this[INTERNALS$1].counter > 0;
      }
      get statusText() {
        return this[INTERNALS$1].statusText;
      }
      get headers() {
        return this[INTERNALS$1].headers;
      }
      get highWaterMark() {
        return this[INTERNALS$1].highWaterMark;
      }
      clone() {
        return new Response2(clone(this, this.highWaterMark), {
          type: this.type,
          url: this.url,
          status: this.status,
          statusText: this.statusText,
          headers: this.headers,
          ok: this.ok,
          redirected: this.redirected,
          size: this.size,
          highWaterMark: this.highWaterMark
        });
      }
      static redirect(url, status = 302) {
        if (!isRedirect(status)) {
          throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        return new Response2(null, {
          headers: {
            location: new URL(url).toString()
          },
          status
        });
      }
      static error() {
        const response = new Response2(null, { status: 0, statusText: "" });
        response[INTERNALS$1].type = "error";
        return response;
      }
      get [Symbol.toStringTag]() {
        return "Response";
      }
    };
    Object.defineProperties(Response2.prototype, {
      type: { enumerable: true },
      url: { enumerable: true },
      status: { enumerable: true },
      ok: { enumerable: true },
      redirected: { enumerable: true },
      statusText: { enumerable: true },
      headers: { enumerable: true },
      clone: { enumerable: true }
    });
    getSearch = (parsedURL) => {
      if (parsedURL.search) {
        return parsedURL.search;
      }
      const lastOffset = parsedURL.href.length - 1;
      const hash2 = parsedURL.hash || (parsedURL.href[lastOffset] === "#" ? "#" : "");
      return parsedURL.href[lastOffset - hash2.length] === "?" ? "?" : "";
    };
    ReferrerPolicy = /* @__PURE__ */ new Set([
      "",
      "no-referrer",
      "no-referrer-when-downgrade",
      "same-origin",
      "origin",
      "strict-origin",
      "origin-when-cross-origin",
      "strict-origin-when-cross-origin",
      "unsafe-url"
    ]);
    DEFAULT_REFERRER_POLICY = "strict-origin-when-cross-origin";
    INTERNALS = Symbol("Request internals");
    isRequest = (object) => {
      return typeof object === "object" && typeof object[INTERNALS] === "object";
    };
    Request2 = class extends Body {
      constructor(input, init2 = {}) {
        let parsedURL;
        if (isRequest(input)) {
          parsedURL = new URL(input.url);
        } else {
          parsedURL = new URL(input);
          input = {};
        }
        if (parsedURL.username !== "" || parsedURL.password !== "") {
          throw new TypeError(`${parsedURL} is an url with embedded credentails.`);
        }
        let method = init2.method || input.method || "GET";
        method = method.toUpperCase();
        if ((init2.body != null || isRequest(input)) && input.body !== null && (method === "GET" || method === "HEAD")) {
          throw new TypeError("Request with GET/HEAD method cannot have body");
        }
        const inputBody = init2.body ? init2.body : isRequest(input) && input.body !== null ? clone(input) : null;
        super(inputBody, {
          size: init2.size || input.size || 0
        });
        const headers = new Headers2(init2.headers || input.headers || {});
        if (inputBody !== null && !headers.has("Content-Type")) {
          const contentType = extractContentType(inputBody, this);
          if (contentType) {
            headers.set("Content-Type", contentType);
          }
        }
        let signal = isRequest(input) ? input.signal : null;
        if ("signal" in init2) {
          signal = init2.signal;
        }
        if (signal != null && !isAbortSignal(signal)) {
          throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");
        }
        let referrer = init2.referrer == null ? input.referrer : init2.referrer;
        if (referrer === "") {
          referrer = "no-referrer";
        } else if (referrer) {
          const parsedReferrer = new URL(referrer);
          referrer = /^about:(\/\/)?client$/.test(parsedReferrer) ? "client" : parsedReferrer;
        } else {
          referrer = void 0;
        }
        this[INTERNALS] = {
          method,
          redirect: init2.redirect || input.redirect || "follow",
          headers,
          parsedURL,
          signal,
          referrer
        };
        this.follow = init2.follow === void 0 ? input.follow === void 0 ? 20 : input.follow : init2.follow;
        this.compress = init2.compress === void 0 ? input.compress === void 0 ? true : input.compress : init2.compress;
        this.counter = init2.counter || input.counter || 0;
        this.agent = init2.agent || input.agent;
        this.highWaterMark = init2.highWaterMark || input.highWaterMark || 16384;
        this.insecureHTTPParser = init2.insecureHTTPParser || input.insecureHTTPParser || false;
        this.referrerPolicy = init2.referrerPolicy || input.referrerPolicy || "";
      }
      get method() {
        return this[INTERNALS].method;
      }
      get url() {
        return (0, import_node_url.format)(this[INTERNALS].parsedURL);
      }
      get headers() {
        return this[INTERNALS].headers;
      }
      get redirect() {
        return this[INTERNALS].redirect;
      }
      get signal() {
        return this[INTERNALS].signal;
      }
      get referrer() {
        if (this[INTERNALS].referrer === "no-referrer") {
          return "";
        }
        if (this[INTERNALS].referrer === "client") {
          return "about:client";
        }
        if (this[INTERNALS].referrer) {
          return this[INTERNALS].referrer.toString();
        }
        return void 0;
      }
      get referrerPolicy() {
        return this[INTERNALS].referrerPolicy;
      }
      set referrerPolicy(referrerPolicy) {
        this[INTERNALS].referrerPolicy = validateReferrerPolicy(referrerPolicy);
      }
      clone() {
        return new Request2(this);
      }
      get [Symbol.toStringTag]() {
        return "Request";
      }
    };
    Object.defineProperties(Request2.prototype, {
      method: { enumerable: true },
      url: { enumerable: true },
      headers: { enumerable: true },
      redirect: { enumerable: true },
      clone: { enumerable: true },
      signal: { enumerable: true },
      referrer: { enumerable: true },
      referrerPolicy: { enumerable: true }
    });
    getNodeRequestOptions = (request) => {
      const { parsedURL } = request[INTERNALS];
      const headers = new Headers2(request[INTERNALS].headers);
      if (!headers.has("Accept")) {
        headers.set("Accept", "*/*");
      }
      let contentLengthValue = null;
      if (request.body === null && /^(post|put)$/i.test(request.method)) {
        contentLengthValue = "0";
      }
      if (request.body !== null) {
        const totalBytes = getTotalBytes(request);
        if (typeof totalBytes === "number" && !Number.isNaN(totalBytes)) {
          contentLengthValue = String(totalBytes);
        }
      }
      if (contentLengthValue) {
        headers.set("Content-Length", contentLengthValue);
      }
      if (request.referrerPolicy === "") {
        request.referrerPolicy = DEFAULT_REFERRER_POLICY;
      }
      if (request.referrer && request.referrer !== "no-referrer") {
        request[INTERNALS].referrer = determineRequestsReferrer(request);
      } else {
        request[INTERNALS].referrer = "no-referrer";
      }
      if (request[INTERNALS].referrer instanceof URL) {
        headers.set("Referer", request.referrer);
      }
      if (!headers.has("User-Agent")) {
        headers.set("User-Agent", "node-fetch");
      }
      if (request.compress && !headers.has("Accept-Encoding")) {
        headers.set("Accept-Encoding", "gzip,deflate,br");
      }
      let { agent } = request;
      if (typeof agent === "function") {
        agent = agent(parsedURL);
      }
      if (!headers.has("Connection") && !agent) {
        headers.set("Connection", "close");
      }
      const search = getSearch(parsedURL);
      const options = {
        path: parsedURL.pathname + search,
        method: request.method,
        headers: headers[Symbol.for("nodejs.util.inspect.custom")](),
        insecureHTTPParser: request.insecureHTTPParser,
        agent
      };
      return {
        parsedURL,
        options
      };
    };
    AbortError = class extends FetchBaseError {
      constructor(message, type = "aborted") {
        super(message, type);
      }
    };
    supportedSchemas = /* @__PURE__ */ new Set(["data:", "http:", "https:"]);
  }
});

// .svelte-kit/output/server/chunks/index-223a4ced.js
function noop2() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop2;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function compute_rest_props(props, keys) {
  const rest = {};
  keys = new Set(keys);
  for (const k in props)
    if (!keys.has(k) && k[0] !== "$")
      rest[k] = props[k];
  return rest;
}
function compute_slots(slots) {
  const result = {};
  for (const key2 in slots) {
    result[key2] = true;
  }
  return result;
}
function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
  const e2 = document.createEvent("CustomEvent");
  e2.initCustomEvent(type, bubbles, cancelable, detail);
  return e2;
}
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail, { cancelable = false } = {}) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = custom_event(type, detail, { cancelable });
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
      return !event.defaultPrevented;
    }
    return true;
  };
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function bubble(component, event) {
  const callbacks = component.$$.callbacks[event.type];
  if (callbacks) {
    callbacks.slice().forEach((fn) => fn.call(this, event));
  }
}
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
function spread(args, attrs_to_add) {
  const attributes = Object.assign({}, ...args);
  if (attrs_to_add) {
    const classes_to_add = attrs_to_add.classes;
    const styles_to_add = attrs_to_add.styles;
    if (classes_to_add) {
      if (attributes.class == null) {
        attributes.class = classes_to_add;
      } else {
        attributes.class += " " + classes_to_add;
      }
    }
    if (styles_to_add) {
      if (attributes.style == null) {
        attributes.style = style_object_to_string(styles_to_add);
      } else {
        attributes.style = style_object_to_string(merge_ssr_styles(attributes.style, styles_to_add));
      }
    }
  }
  let str = "";
  Object.keys(attributes).forEach((name) => {
    if (invalid_attribute_name_character.test(name))
      return;
    const value = attributes[name];
    if (value === true)
      str += " " + name;
    else if (boolean_attributes.has(name.toLowerCase())) {
      if (value)
        str += " " + name;
    } else if (value != null) {
      str += ` ${name}="${value}"`;
    }
  });
  return str;
}
function merge_ssr_styles(style_attribute, style_directive) {
  const style_object = {};
  for (const individual_style of style_attribute.split(";")) {
    const colon_index = individual_style.indexOf(":");
    const name = individual_style.slice(0, colon_index).trim();
    const value = individual_style.slice(colon_index + 1).trim();
    if (!name)
      continue;
    style_object[name] = value;
  }
  for (const name in style_directive) {
    const value = style_directive[name];
    if (value) {
      style_object[name] = value;
    } else {
      delete style_object[name];
    }
  }
  return style_object;
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern.test(str)) {
    const i2 = pattern.lastIndex - 1;
    const ch = str[i2];
    escaped2 += str.substring(last, i2) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i2 + 1;
  }
  return escaped2 + str.substring(last);
}
function escape_attribute_value(value) {
  const should_escape = typeof value === "string" || value && typeof value === "object";
  return should_escape ? escape(value, true) : value;
}
function escape_object(obj) {
  const result = {};
  for (const key2 in obj) {
    result[key2] = escape_attribute_value(obj[key2]);
  }
  return result;
}
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css26) => css26.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  const assignment = boolean && value === true ? "" : `="${escape(value, true)}"`;
  return ` ${name}${assignment}`;
}
function style_object_to_string(style_object) {
  return Object.keys(style_object).filter((key2) => style_object[key2]).map((key2) => `${key2}: ${style_object[key2]};`).join(" ");
}
var current_component, boolean_attributes, void_element_names, invalid_attribute_name_character, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_index_223a4ced = __esm({
  ".svelte-kit/output/server/chunks/index-223a4ced.js"() {
    Promise.resolve();
    boolean_attributes = /* @__PURE__ */ new Set([
      "allowfullscreen",
      "allowpaymentrequest",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "defer",
      "disabled",
      "formnovalidate",
      "hidden",
      "ismap",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "selected"
    ]);
    void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
    invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// .svelte-kit/output/server/chunks/hooks-1c45ba0b.js
var hooks_1c45ba0b_exports = {};
var init_hooks_1c45ba0b = __esm({
  ".svelte-kit/output/server/chunks/hooks-1c45ba0b.js"() {
  }
});

// .svelte-kit/output/server/chunks/NavigationView.svelte_svelte_type_style_lang-8088d3b7.js
var css, TextBlock;
var init_NavigationView_svelte_svelte_type_style_lang_8088d3b7 = __esm({
  ".svelte-kit/output/server/chunks/NavigationView.svelte_svelte_type_style_lang-8088d3b7.js"() {
    init_index_223a4ced();
    css = {
      code: ".text-block.svelte-zxj483{color:currentColor;display:inline-block;margin:0;padding:0}.text-block.type-display.svelte-zxj483,.text-block.type-subtitle.svelte-zxj483,.text-block.type-title.svelte-zxj483,.text-block.type-title-large.svelte-zxj483{font-family:var(--fds-font-family-display);font-weight:600}.text-block.type-body.svelte-zxj483,.text-block.type-body-large.svelte-zxj483,.text-block.type-body-strong.svelte-zxj483{font-family:var(--fds-font-family-text)}.text-block.type-caption.svelte-zxj483{font-family:var(--fds-font-family-small);font-size:var(--fds-caption-font-size);font-weight:400;line-height:16px}.text-block.type-body.svelte-zxj483,.text-block.type-body-large.svelte-zxj483,.text-block.type-body-strong.svelte-zxj483{font-size:var(--fds-body-font-size);font-weight:400;line-height:20px}.text-block.type-body-strong.svelte-zxj483{font-weight:600}.text-block.type-body-large.svelte-zxj483{font-size:var(--fds-body-large-font-size);line-height:24px}.text-block.type-subtitle.svelte-zxj483{font-size:var(--fds-subtitle-font-size);line-height:28px}.text-block.type-title.svelte-zxj483{font-size:var(--fds-title-font-size);line-height:36px}.text-block.type-title-large.svelte-zxj483{font-size:var(--fds-title-large-font-size);line-height:52px}.text-block.type-display.svelte-zxj483{font-size:var(--fds-display-font-size);line-height:92px}",
      map: null
    };
    TextBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$restProps = compute_rest_props($$props, ["variant", "tag", "class", "element"]);
      let { variant = "body" } = $$props;
      let { tag = void 0 } = $$props;
      let { class: className = "" } = $$props;
      let { element = null } = $$props;
      const map = {
        caption: { tag: "span", name: "caption" },
        body: { tag: "span", name: "body" },
        bodyStrong: { tag: "h5", name: "body-strong" },
        bodyLarge: { tag: "h5", name: "body-large" },
        subtitle: { tag: "h4", name: "subtitle" },
        title: { tag: "h3", name: "title" },
        titleLarge: { tag: "h2", name: "title-large" },
        display: { tag: "h1", name: "display" }
      };
      if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
        $$bindings.variant(variant);
      if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
        $$bindings.tag(tag);
      if ($$props.class === void 0 && $$bindings.class && className !== void 0)
        $$bindings.class(className);
      if ($$props.element === void 0 && $$bindings.element && element !== void 0)
        $$bindings.element(element);
      $$result.css.add(css);
      return `${((tag$1) => {
        return tag$1 ? `<${tag ? tag : map[variant].tag}${spread([
          {
            class: "text-block type-" + escape(map[variant].name, true) + " " + escape(className, true)
          },
          escape_object($$restProps)
        ], { classes: "svelte-zxj483" })}${add_attribute("this", element, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}
`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
      })(tag ? tag : map[variant].tag)}`;
    });
  }
});

// node_modules/web-vitals/dist/web-vitals.umd.js
var require_web_vitals_umd = __commonJS({
  "node_modules/web-vitals/dist/web-vitals.umd.js"(exports, module2) {
    !function(e2, t2) {
      typeof exports == "object" && typeof module2 != "undefined" ? t2(exports) : typeof define == "function" && define.amd ? define(["exports"], t2) : t2((e2 = typeof globalThis != "undefined" ? globalThis : e2 || self).webVitals = {});
    }(exports, function(e2) {
      "use strict";
      var t2, n, i2, r2, a = function(e3, t3) {
        return { name: e3, value: t3 === void 0 ? -1 : t3, delta: 0, entries: [], id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12) };
      }, o = function(e3, t3) {
        try {
          if (PerformanceObserver.supportedEntryTypes.includes(e3)) {
            if (e3 === "first-input" && !("PerformanceEventTiming" in self))
              return;
            var n2 = new PerformanceObserver(function(e4) {
              return e4.getEntries().map(t3);
            });
            return n2.observe({ type: e3, buffered: true }), n2;
          }
        } catch (e4) {
        }
      }, u = function(e3, t3) {
        var n2 = function n3(i3) {
          i3.type !== "pagehide" && document.visibilityState !== "hidden" || (e3(i3), t3 && (removeEventListener("visibilitychange", n3, true), removeEventListener("pagehide", n3, true)));
        };
        addEventListener("visibilitychange", n2, true), addEventListener("pagehide", n2, true);
      }, c = function(e3) {
        addEventListener("pageshow", function(t3) {
          t3.persisted && e3(t3);
        }, true);
      }, f3 = function(e3, t3, n2) {
        var i3;
        return function(r3) {
          t3.value >= 0 && (r3 || n2) && (t3.delta = t3.value - (i3 || 0), (t3.delta || i3 === void 0) && (i3 = t3.value, e3(t3)));
        };
      }, s3 = -1, m2 = function() {
        return document.visibilityState === "hidden" ? 0 : 1 / 0;
      }, d = function() {
        u(function(e3) {
          var t3 = e3.timeStamp;
          s3 = t3;
        }, true);
      }, v = function() {
        return s3 < 0 && (s3 = m2(), d(), c(function() {
          setTimeout(function() {
            s3 = m2(), d();
          }, 0);
        })), { get firstHiddenTime() {
          return s3;
        } };
      }, p = function(e3, t3) {
        var n2, i3 = v(), r3 = a("FCP"), u2 = function(e4) {
          e4.name === "first-contentful-paint" && (m3 && m3.disconnect(), e4.startTime < i3.firstHiddenTime && (r3.value = e4.startTime, r3.entries.push(e4), n2(true)));
        }, s4 = window.performance && performance.getEntriesByName && performance.getEntriesByName("first-contentful-paint")[0], m3 = s4 ? null : o("paint", u2);
        (s4 || m3) && (n2 = f3(e3, r3, t3), s4 && u2(s4), c(function(i4) {
          r3 = a("FCP"), n2 = f3(e3, r3, t3), requestAnimationFrame(function() {
            requestAnimationFrame(function() {
              r3.value = performance.now() - i4.timeStamp, n2(true);
            });
          });
        }));
      }, l = false, g = -1, y = { passive: true, capture: true }, T = new Date(), h2 = function(e3, r3) {
        t2 || (t2 = r3, n = e3, i2 = new Date(), S2(removeEventListener), E());
      }, E = function() {
        if (n >= 0 && n < i2 - T) {
          var e3 = { entryType: "first-input", name: t2.type, target: t2.target, cancelable: t2.cancelable, startTime: t2.timeStamp, processingStart: t2.timeStamp + n };
          r2.forEach(function(t3) {
            t3(e3);
          }), r2 = [];
        }
      }, L = function(e3) {
        if (e3.cancelable) {
          var t3 = (e3.timeStamp > 1e12 ? new Date() : performance.now()) - e3.timeStamp;
          e3.type == "pointerdown" ? function(e4, t4) {
            var n2 = function() {
              h2(e4, t4), r3();
            }, i3 = function() {
              r3();
            }, r3 = function() {
              removeEventListener("pointerup", n2, y), removeEventListener("pointercancel", i3, y);
            };
            addEventListener("pointerup", n2, y), addEventListener("pointercancel", i3, y);
          }(t3, e3) : h2(t3, e3);
        }
      }, S2 = function(e3) {
        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(t3) {
          return e3(t3, L, y);
        });
      }, w = {};
      e2.getCLS = function(e3, t3) {
        l || (p(function(e4) {
          g = e4.value;
        }), l = true);
        var n2, i3 = function(t4) {
          g > -1 && e3(t4);
        }, r3 = a("CLS", 0), s4 = 0, m3 = [], d2 = function(e4) {
          if (!e4.hadRecentInput) {
            var t4 = m3[0], i4 = m3[m3.length - 1];
            s4 && e4.startTime - i4.startTime < 1e3 && e4.startTime - t4.startTime < 5e3 ? (s4 += e4.value, m3.push(e4)) : (s4 = e4.value, m3 = [e4]), s4 > r3.value && (r3.value = s4, r3.entries = m3, n2());
          }
        }, v2 = o("layout-shift", d2);
        v2 && (n2 = f3(i3, r3, t3), u(function() {
          v2.takeRecords().map(d2), n2(true);
        }), c(function() {
          s4 = 0, g = -1, r3 = a("CLS", 0), n2 = f3(i3, r3, t3);
        }));
      }, e2.getFCP = p, e2.getFID = function(e3, i3) {
        var s4, m3 = v(), d2 = a("FID"), p2 = function(e4) {
          e4.startTime < m3.firstHiddenTime && (d2.value = e4.processingStart - e4.startTime, d2.entries.push(e4), s4(true));
        }, l2 = o("first-input", p2);
        s4 = f3(e3, d2, i3), l2 && u(function() {
          l2.takeRecords().map(p2), l2.disconnect();
        }, true), l2 && c(function() {
          var o2;
          d2 = a("FID"), s4 = f3(e3, d2, i3), r2 = [], n = -1, t2 = null, S2(addEventListener), o2 = p2, r2.push(o2), E();
        });
      }, e2.getLCP = function(e3, t3) {
        var n2, i3 = v(), r3 = a("LCP"), s4 = function(e4) {
          var t4 = e4.startTime;
          t4 < i3.firstHiddenTime && (r3.value = t4, r3.entries.push(e4), n2());
        }, m3 = o("largest-contentful-paint", s4);
        if (m3) {
          n2 = f3(e3, r3, t3);
          var d2 = function() {
            w[r3.id] || (m3.takeRecords().map(s4), m3.disconnect(), w[r3.id] = true, n2(true));
          };
          ["keydown", "click"].forEach(function(e4) {
            addEventListener(e4, d2, { once: true, capture: true });
          }), u(d2, true), c(function(i4) {
            r3 = a("LCP"), n2 = f3(e3, r3, t3), requestAnimationFrame(function() {
              requestAnimationFrame(function() {
                r3.value = performance.now() - i4.timeStamp, w[r3.id] = true, n2(true);
              });
            });
          });
        }
      }, e2.getTTFB = function(e3) {
        var t3, n2 = a("TTFB");
        t3 = function() {
          try {
            var t4 = performance.getEntriesByType("navigation")[0] || function() {
              var e4 = performance.timing, t5 = { entryType: "navigation", startTime: 0 };
              for (var n3 in e4)
                n3 !== "navigationStart" && n3 !== "toJSON" && (t5[n3] = Math.max(e4[n3] - e4.navigationStart, 0));
              return t5;
            }();
            if (n2.value = n2.delta = t4.responseStart, n2.value < 0 || n2.value > performance.now())
              return;
            n2.entries = [t4], e3(n2);
          } catch (e4) {
          }
        }, document.readyState === "complete" ? setTimeout(t3, 0) : addEventListener("load", function() {
          return setTimeout(t3, 0);
        });
      }, Object.defineProperty(e2, "__esModule", { value: true });
    });
  }
});

// .svelte-kit/output/server/entries/pages/__layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => _layout
});
var import_web_vitals, getStores, page, css$1, Header, css2, _layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/__layout.svelte.js"() {
    init_index_223a4ced();
    init_NavigationView_svelte_svelte_type_style_lang_8088d3b7();
    import_web_vitals = __toESM(require_web_vitals_umd(), 1);
    getStores = () => {
      const stores = getContext("__svelte__");
      return {
        page: {
          subscribe: stores.page.subscribe
        },
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        get preloading() {
          console.error("stores.preloading is deprecated; use stores.navigating instead");
          return {
            subscribe: stores.navigating.subscribe
          };
        },
        session: stores.session,
        updated: stores.updated
      };
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
    css$1 = {
      code: '@font-face{font-family:"FluentUIIcons";src:url("/FluentSystemIcons-Regular.ttf")}.active.svelte-1emlb1d a.svelte-1emlb1d{background-color:var(--fds-accent-default) !important;color:var(--fds-text-on-accent-primary) !important}header.svelte-1emlb1d.svelte-1emlb1d{position:sticky;top:0;z-index:2147483647;display:flex;overflow:auto;background-color:var(--fds-control-solid-fill-default)}@supports (-webkit-backdrop-filter: blur(60px) saturate(200%)) or\n		(backdrop-filter: blur(60px) saturate(200%)){header.svelte-1emlb1d.svelte-1emlb1d{position:sticky;top:0;z-index:2147483647;display:flex;overflow:auto;background-color:var(--fds-control-fill-default);backdrop-filter:blur(60px) saturate(200%);-webkit-backdrop-filter:blur(60px) saturate(200%)}}.corner.svelte-1emlb1d.svelte-1emlb1d{height:4em}.corner.svelte-1emlb1d a.svelte-1emlb1d{display:flex;align-items:center;justify-content:center;width:100%;height:100%;text-decoration:none;color:inherit;margin-right:3em}.corner.svelte-1emlb1d img.svelte-1emlb1d{width:2.5em;height:2.5em;object-fit:contain;margin-right:0.5em}nav.svelte-1emlb1d.svelte-1emlb1d{display:flex;justify-content:center;margin-left:1em}ul.svelte-1emlb1d.svelte-1emlb1d{position:relative;padding:0;margin:auto;display:flex;justify-content:center;align-items:center;list-style:none;background-size:contain}li.svelte-1emlb1d.svelte-1emlb1d{position:relative;height:100%;margin-right:0.5em}li.svelte-1emlb1d a.svelte-1emlb1d{padding:5px 11px 5px 7px;border-radius:var(--fds-control-corner-radius);text-decoration:none;font-family:var(--fds-font-family-display);display:flex;color:var(--fds-text-secondary)}li.svelte-1emlb1d a.svelte-1emlb1d:hover{color:var(--fds-accent-text-primary);background-color:var(--fds-card-background-secondary)}.linkIcon.svelte-1emlb1d.svelte-1emlb1d{font-family:"FluentUIIcons" !important;font-size:20px;margin:auto;margin-right:0.3em}.linkText.svelte-1emlb1d.svelte-1emlb1d{margin:auto;line-height:100%}',
      map: null
    };
    Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$result.css.add(css$1);
      $$unsubscribe_page();
      return `${$$result.head += `<link rel="${"preload"}" href="${"/FluentSystemIcons-Regular.ttf"}" as="${"font"}" crossorigin="${"anonymous"}" data-svelte="svelte-11ucb4r">`, ""}

<header class="${"svelte-1emlb1d"}"><div class="${"corner svelte-1emlb1d"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1emlb1d"}"><img src="${"/logo-img.png"}" alt="${"ClickPhase"}" class="${"svelte-1emlb1d"}">
			${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "title" }, {}, {
        default: () => {
          return `ClickPhase`;
        }
      })}</a></div>

	<nav class="${"svelte-1emlb1d"}"><ul class="${"svelte-1emlb1d"}"><li class="${["svelte-1emlb1d", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1emlb1d"}"><p class="${"linkIcon svelte-1emlb1d"}">\uF480</p>
					<p class="${"linkText svelte-1emlb1d"}">Home</p></a></li>
			<li class="${["svelte-1emlb1d", $page.url.pathname === "/software" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/software"}" class="${"svelte-1emlb1d"}"><p class="${"linkIcon svelte-1emlb1d"}">\u02A7</p>
					<p class="${"linkText svelte-1emlb1d"}">Software</p></a></li>
			<li class="${[
        "svelte-1emlb1d",
        $page.url.pathname === "/animationsvideos" ? "active" : ""
      ].join(" ").trim()}"><a sveltekit:prefetch href="${"/animationsvideos"}" class="${"svelte-1emlb1d"}"><p class="${"linkIcon svelte-1emlb1d"}">\u0378</p>
					<p class="${"linkText svelte-1emlb1d"}">Animations/Videos</p></a></li>
			<li class="${["svelte-1emlb1d", $page.url.pathname === "/aboutcontact" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/aboutcontact"}" class="${"svelte-1emlb1d"}"><p class="${"linkIcon svelte-1emlb1d"}">\uF4A3</p>
					<p class="${"linkText svelte-1emlb1d"}">About/Contact</p></a></li></ul></nav>

	<div class="${"corner svelte-1emlb1d"}"></div>
</header>`;
    });
    css2 = {
      code: "body{background-color:var(--fds-solid-background-base);color:var(--fds-text-primary);margin:0%;padding:0%;width:100%}h1, h2, h3, h4, h5, h6, p, span{font-family:var(--fds-font-family-display) !important}main.svelte-o28w7s{flex:1;display:flex;flex-direction:column;width:100%;margin:0, auto;padding:0%;box-sizing:border-box;overflow-x:hidden}",
      map: null
    };
    _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => value);
      $$result.css.add(css2);
      $$unsubscribe_page();
      return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<meta name="${"viewport"}" content="${"width=device-width, initial-scale=1.0"}">
<main class="${"svelte-o28w7s"}">${slots.default ? slots.default({}) : ``}
</main>`;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  css: () => css3,
  entry: () => entry,
  js: () => js,
  module: () => layout_svelte_exports
});
var entry, js, css3;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    init_layout_svelte();
    entry = "pages/__layout.svelte-f296506a.js";
    js = ["pages/__layout.svelte-f296506a.js", "chunks/index-a7d8ca41.js", "chunks/NavigationView.svelte_svelte_type_style_lang-86c9a88c.js"];
    css3 = ["assets/pages/__layout.svelte-682c4f33.css", "assets/NavigationView.svelte_svelte_type_style_lang-492d57f0.css"];
  }
});

// .svelte-kit/output/server/chunks/Button-9355eef8.js
function uid(prefix) {
  return prefix + String.fromCharCode(Math.floor(Math.random() * 26) + 97) + Math.random().toString(16).slice(2) + Date.now().toString(16).split(".")[0];
}
function createEventForwarder(component, exclude = []) {
  let $on;
  let events = [];
  component.$on = (eventType, callback) => {
    let destructor = () => {
    };
    if (exclude.includes(eventType)) {
      const callbacks = component.$$.callbacks[eventType] || (component.$$.callbacks[eventType] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events.push([eventType, callback]);
    }
    return () => destructor();
  };
  return (node) => {
    const destructors = [];
    const forwardDestructors = {};
    const forward = (e2) => bubble(component, e2);
    $on = (eventType, callback) => {
      let handler = callback;
      let options = false;
      const off = listen(node, eventType, handler, options);
      const destructor = () => {
        off();
        const idx = destructors.indexOf(destructor);
        if (idx > -1) {
          destructors.splice(idx, 1);
        }
      };
      destructors.push(destructor);
      if (!(eventType in forwardDestructors)) {
        forwardDestructors[eventType] = listen(node, eventType, forward);
      }
      return destructor;
    };
    for (const event of events) {
      $on(event[0], event[1]);
    }
    return {
      destroy: () => {
        for (const destructor of destructors) {
          destructor();
        }
        for (let entry11 of Object.entries(forwardDestructors)) {
          entry11[1]();
        }
      }
    };
  };
}
var css4, Button;
var init_Button_9355eef8 = __esm({
  ".svelte-kit/output/server/chunks/Button-9355eef8.js"() {
    init_index_223a4ced();
    init_NavigationView_svelte_svelte_type_style_lang_8088d3b7();
    css4 = {
      code: ".button.svelte-1ulhukx{align-items:center;border:none;border-radius:var(--fds-control-corner-radius);box-sizing:border-box;cursor:default;display:inline-flex;font-family:var(--fds-font-family-text);font-size:var(--fds-body-font-size);font-weight:400;justify-content:center;line-height:20px;outline:none;padding-block:4px 6px;padding-inline:11px;position:relative;text-decoration:none;transition:var(--fds-control-faster-duration) ease background;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.button.svelte-1ulhukx:focus-visible{box-shadow:var(--fds-focus-stroke)}.button.style-standard.svelte-1ulhukx{background-clip:padding-box;background-color:var(--fds-control-fill-default);border:1px solid;border-color:var(--fds-control-border-default);color:var(--fds-text-primary)}.button.style-standard.svelte-1ulhukx:hover{background-color:var(--fds-control-fill-secondary)}.button.style-standard.svelte-1ulhukx:active{background-color:var(--fds-control-fill-tertiary);border-color:var(--fds-control-stroke-default);color:var(--fds-text-secondary)}.button.style-standard.disabled.svelte-1ulhukx{background-color:var(--fds-control-fill-disabled);border-color:var(--fds-control-stroke-default);color:var(--fds-text-disabled)}.button.style-accent.svelte-1ulhukx{background-color:var(--fds-accent-default);border:1px solid var(--fds-control-stroke-on-accent-default);border-bottom-color:var(--fds-control-stroke-on-accent-secondary);color:var(--fds-text-on-accent-primary);transition:var(--fds-control-faster-duration) ease border-color}.button.style-accent.svelte-1ulhukx:hover{background-color:var(--fds-accent-secondary)}.button.style-accent.svelte-1ulhukx:active{background-color:var(--fds-accent-tertiary);border-color:transparent;color:var(--fds-text-on-accent-secondary)}.button.style-accent.disabled.svelte-1ulhukx{background-color:var(--fds-accent-disabled);border-color:transparent;color:var(--fds-text-on-accent-disabled)}.button.style-hyperlink.svelte-1ulhukx{background-color:var(--fds-subtle-fill-transparent);color:var(--fds-accent-text-primary);cursor:pointer}.button.style-hyperlink.svelte-1ulhukx:hover{background-color:var(--fds-subtle-fill-secondary)}.button.style-hyperlink.svelte-1ulhukx:active{background-color:var(--fds-subtle-fill-tertiary);color:var(--fds-accent-text-tertiary)}.button.style-hyperlink.disabled.svelte-1ulhukx{color:var(--fds-accent-text-disabled)}.button.disabled.svelte-1ulhukx{pointer-events:none}",
      map: null
    };
    Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$restProps = compute_rest_props($$props, ["variant", "href", "disabled", "class", "element"]);
      let { variant = "standard" } = $$props;
      let { href = "" } = $$props;
      let { disabled = false } = $$props;
      let { class: className = "" } = $$props;
      let { element = null } = $$props;
      createEventForwarder(get_current_component());
      if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
        $$bindings.variant(variant);
      if ($$props.href === void 0 && $$bindings.href && href !== void 0)
        $$bindings.href(href);
      if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
        $$bindings.disabled(disabled);
      if ($$props.class === void 0 && $$bindings.class && className !== void 0)
        $$bindings.class(className);
      if ($$props.element === void 0 && $$bindings.element && element !== void 0)
        $$bindings.element(element);
      $$result.css.add(css4);
      return `
${((tag) => {
        return tag ? `<${href && !disabled ? "a" : "button"}${spread([
          {
            role: escape_attribute_value(href && !disabled ? "button" : void 0)
          },
          {
            href: escape_attribute_value(href && !disabled ? href : void 0)
          },
          {
            class: "button style-" + escape(variant, true) + " " + escape(className, true)
          },
          escape_object($$restProps)
        ], {
          classes: (disabled ? "disabled" : "") + " svelte-1ulhukx"
        })}${add_attribute("this", element, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}
`}${is_void(tag) ? "" : `</${tag}>`}` : "";
      })(href && !disabled ? "a" : "button")}`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/__error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => _error,
  load: () => load
});
function load({ error: error2, status }) {
  return {
    props: { message: error2.message, status }
  };
}
var css5, _error;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/__error.svelte.js"() {
    init_index_223a4ced();
    init_NavigationView_svelte_svelte_type_style_lang_8088d3b7();
    init_Button_9355eef8();
    css5 = {
      code: '.container.svelte-1pkjsfi{position:relative;word-wrap:break-word;align-items:center;justify-content:center;text-align:center}.components.svelte-1pkjsfi{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);text-align:center}.error-status.svelte-1pkjsfi{line-height:normal}.error-message.svelte-1pkjsfi{margin-top:1rem;line-height:normal}.error-button.svelte-1pkjsfi{transform:scale(calc(16/14));margin-top:calc(1.5rem / calc(16/14))}.mica-bg.svelte-1pkjsfi{position:relative;width:100%;height:calc(100vh - 4em);overflow:hidden}.image.svelte-1pkjsfi{background-image:url("/MicaLight.png");width:100%;height:100%;filter:saturate(120%);transform:scale(1.7);background-position:center;background-repeat:no-repeat;background-size:cover;background-attachment:fixed}@media(prefers-color-scheme: dark){.image.svelte-1pkjsfi{background-image:url("/MicaDark.png");width:100%;height:100%;filter:saturate(120%);transform:scale(1.7);background-position:center;background-repeat:no-repeat;background-size:cover;background-attachment:fixed}}.image.svelte-1pkjsfi:before{content:"";position:absolute;left:0;right:0;top:0;bottom:0;background:var(--fds-card-background-secondary)}',
      map: null
    };
    _error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { message } = $$props;
      let { status } = $$props;
      if ($$props.message === void 0 && $$bindings.message && message !== void 0)
        $$bindings.message(message);
      if ($$props.status === void 0 && $$bindings.status && status !== void 0)
        $$bindings.status(status);
      $$result.css.add(css5);
      return `
<div class="${"container svelte-1pkjsfi"}"><div class="${"mica-bg svelte-1pkjsfi"}"><div class="${"image svelte-1pkjsfi"}"></div></div>
    <div class="${"components svelte-1pkjsfi"}"><div class="${"error-status svelte-1pkjsfi"}">${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "display" }, {}, {
        default: () => {
          return `Error ${escape(status)}`;
        }
      })}</div>
        <div class="${"error-message svelte-1pkjsfi"}">${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "bodyLarge" }, {}, {
        default: () => {
          return `Error message: ${escape(message)}`;
        }
      })}</div>
        <div class="${"error-button svelte-1pkjsfi"}">${validate_component(Button, "Button").$$render($$result, { href: "/" }, {}, {
        default: () => {
          return `Return to homepage`;
        }
      })}</div></div>
</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  css: () => css6,
  entry: () => entry2,
  js: () => js2,
  module: () => error_svelte_exports
});
var entry2, js2, css6;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    init_error_svelte();
    entry2 = "pages/__error.svelte-607a0d71.js";
    js2 = ["pages/__error.svelte-607a0d71.js", "chunks/index-a7d8ca41.js", "chunks/NavigationView.svelte_svelte_type_style_lang-86c9a88c.js", "chunks/Button-9d1ab1dc.js"];
    css6 = ["assets/pages/__error.svelte-a92cb9ee.css", "assets/NavigationView.svelte_svelte_type_style_lang-492d57f0.css"];
  }
});

// .svelte-kit/output/server/chunks/MicaBackground-bde423f3.js
var css7, MicaBackground;
var init_MicaBackground_bde423f3 = __esm({
  ".svelte-kit/output/server/chunks/MicaBackground-bde423f3.js"() {
    init_index_223a4ced();
    css7 = {
      code: '.container.svelte-wa3wd2{width:100%;height:72vh;overflow:hidden}.image.svelte-wa3wd2{background-image:url("/MicaLight.png");width:100%;height:100%;filter:saturate(120%);transform:scale(1.7);background-position:center;background-repeat:no-repeat;background-size:cover}@media(prefers-color-scheme: dark){.image.svelte-wa3wd2{background-image:url("/MicaDark.png");width:100%;height:100%;filter:saturate(120%);transform:scale(1.7);background-position:center;background-repeat:no-repeat;background-size:cover}}.image.svelte-wa3wd2:before{content:"";position:absolute;left:0;right:0;top:0;bottom:0;background:var(--fds-card-background-secondary)}',
      map: null
    };
    MicaBackground = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css7);
      return `
<div class="${"container svelte-wa3wd2"}"><div class="${"image svelte-wa3wd2"}"></div>
</div>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/index.svelte.js
var index_svelte_exports = {};
__export(index_svelte_exports, {
  default: () => Routes
});
var css$2, HeroSection, css$12, CardsSection, css8, FeaturedApps, Routes;
var init_index_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/index.svelte.js"() {
    init_index_223a4ced();
    init_NavigationView_svelte_svelte_type_style_lang_8088d3b7();
    init_MicaBackground_bde423f3();
    css$2 = {
      code: ".container.svelte-10rlesd.svelte-10rlesd{position:relative;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;padding:0%}.logo.svelte-10rlesd.svelte-10rlesd{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.logo.svelte-10rlesd a.svelte-10rlesd{display:flex;align-items:center;justify-content:center;width:100%;height:100%;text-decoration:none;color:inherit;padding:0%}.logo.svelte-10rlesd img.svelte-10rlesd{width:6em;height:6em;object-fit:contain;margin-right:1.2em;padding:0%}",
      map: null
    };
    HeroSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let sy;
      $$result.css.add(css$2);
      return `


<div class="${"container svelte-10rlesd"}">${validate_component(MicaBackground, "MicaBackground").$$render($$result, {}, {}, {})}
    <div class="${"logo svelte-10rlesd"}"><div style="${"transform: translate(0," + escape(-sy * 0.17, true) + "px)"}"><a${add_attribute("href", void 0, 0)} class="${"svelte-10rlesd"}"><img src="${"/logo-img.png"}" alt="${"ClickPhase"}" class="${"svelte-10rlesd"}">
                ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "display" }, {}, {
        default: () => {
          return `ClickPhase`;
        }
      })}</a></div></div>
</div>`;
    });
    css$12 = {
      code: '@font-face{font-family:"FluentUIIcons";src:url("/FluentSystemIcons-Regular.ttf")}.container.svelte-1qqtj1q{margin-top:-11.5em;padding:2em 5vw 2em 5vw;overflow:hidden}.cards-collection.svelte-1qqtj1q{margin-bottom:-1.5em;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.card.svelte-1qqtj1q{display:flex;justify-content:center;align-items:center;margin:0em 0.7rem 1.5em 0.7rem;width:280px;min-width:200px;flex-grow:1;height:350px;text-align:center;border-radius:var(--fds-control-corner-radius);z-index:999;-webkit-transition:200ms ease-in-out;-o-transition:200ms ease-in-out;transition:200ms ease-in-out;-webkit-box-shadow:0 0 15px rgba(0, 0, 0, 0.3);box-shadow:0 0 15px rgba(0, 0, 0, 0.3);background:linear-gradient(\r\n                var(--fds-card-background-default),\r\n                var(--fds-card-background-default)\r\n            ),\r\n            linear-gradient(\r\n                var(--fds-solid-background-base),\r\n                var(--fds-solid-background-base)\r\n            )}.card.svelte-1qqtj1q:hover{transform:scale(1.035);-webkit-box-shadow:0 0 20px rgba(0, 0, 0, 0.2);box-shadow:0 0 20px rgba(0, 0, 0, 0.2)}.card-content.svelte-1qqtj1q{width:100%}.card-default-icon.svelte-1qqtj1q{font-family:"FluentUIIcons" !important;font-size:100px;color:var(--fds-accent-default);margin:0px}.card-github-icon.svelte-1qqtj1q{fill:var(--fds-text-primary);margin:0px}.card-text.svelte-1qqtj1q{font-family:var(--fds-font-family-display);font-weight:600;font-size:28px;margin:0px;margin-top:1.5rem;margin-left:10px;margin-right:10px}',
      map: null
    };
    CardsSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$12);
      return `${$$result.head += `<link rel="${"preload"}" href="${"/FluentSystemIcons-Regular.ttf"}" as="${"font"}" crossorigin="${"anonymous"}" data-svelte="svelte-1cl6w1x">`, ""}

<div class="${"container svelte-1qqtj1q"}"><div class="${"cards-collection svelte-1qqtj1q"}"><div class="${"card svelte-1qqtj1q"}" onclick="${"window.location.href = '/software';"}"><div class="${"card-content svelte-1qqtj1q"}"><p class="${"card-default-icon svelte-1qqtj1q"}">\u02A7</p>
                <p class="${"card-text svelte-1qqtj1q"}">All Software</p></div></div>

        <div class="${"card svelte-1qqtj1q"}" onclick="${"window.open('https://www.youtube.com/channel/UCUy3erIflkjOWYsfGPVIM6g', '_blank');"}"><div class="${"card-content svelte-1qqtj1q"}"><p class="${"card-default-icon svelte-1qqtj1q"}">\u0379</p>
                <p class="${"card-text svelte-1qqtj1q"}">YouTube</p></div></div>

        <div class="${"card svelte-1qqtj1q"}" onclick="${"window.location.href = 'mailto:clickphasehelp@gmail.com';"}"><div class="${"card-content svelte-1qqtj1q"}"><p class="${"card-default-icon svelte-1qqtj1q"}">\uF509</p>
                <p class="${"card-text svelte-1qqtj1q"}">Email</p></div></div>

        <div class="${"card svelte-1qqtj1q"}" onclick="${"window.open('https://github.com/Apollo199999999', '_blank');"}"><div class="${"card-content svelte-1qqtj1q"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 16 16"}" width="${"100"}" height="${"100"}" class="${"card-github-icon svelte-1qqtj1q"}"><path fill-rule="${"evenodd"}" d="${"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"}"></path></svg>
                <p class="${"card-text svelte-1qqtj1q"}">GitHub</p></div></div></div>
</div>`;
    });
    css8 = {
      code: ".container.svelte-8l66gp{padding:2em 5vw 2em 5vw;overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.cards-collection.svelte-8l66gp{margin-top:1.5em;margin-bottom:-1.5em;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.card.svelte-8l66gp{display:flex;justify-content:center;align-items:center;margin:0em 0.7em 1.5em 0.7em;width:280px;min-width:200px;flex-grow:1;height:350px;text-align:center;border-radius:var(--fds-control-corner-radius);z-index:999;-webkit-transition:200ms ease-in-out;-o-transition:200ms ease-in-out;transition:200ms ease-in-out;-webkit-box-shadow:0 0 15px rgba(0, 0, 0, 0.3);box-shadow:0 0 15px rgba(0, 0, 0, 0.3);background:linear-gradient(\r\n                var(--fds-card-background-default),\r\n                var(--fds-card-background-default)\r\n            ),\r\n            linear-gradient(\r\n                var(--fds-solid-background-base),\r\n                var(--fds-solid-background-base)\r\n            )}.card.svelte-8l66gp:hover{transform:scale(1.035);-webkit-box-shadow:0 0 20px rgba(0, 0, 0, 0.2);box-shadow:0 0 20px rgba(0, 0, 0, 0.2)}.card-content.svelte-8l66gp{width:100%}.card-image.svelte-8l66gp{width:80%;max-width:260px}.card-text.svelte-8l66gp{font-family:var(--fds-font-family-display);font-weight:600;font-size:28px;margin:0px;margin-top:1.5rem;margin-left:10px;margin-right:10px}.card-subtext.svelte-8l66gp{font-family:var(--fds-font-family-display);font-size:18px;margin:0px;margin-top:1rem;margin-left:20px;margin-right:20px}",
      map: null
    };
    FeaturedApps = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css8);
      return `<div class="${"container svelte-8l66gp"}">${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "titleLarge" }, {}, {
        default: () => {
          return `Featured Software`;
        }
      })}

    <div class="${"cards-collection svelte-8l66gp"}"><div class="${"card svelte-8l66gp"}" onclick="${"window.location.href = '/dynawin';"}"><div class="${"card-content svelte-8l66gp"}"><img class="${"card-image svelte-8l66gp"}" alt="${"DynaWin"}" src="${"/app-images/dynawin/DynaWinImage.jpg"}">
                <p class="${"card-text svelte-8l66gp"}">DynaWin</p>
                <p class="${"card-subtext svelte-8l66gp"}">Dynamic Desktop for Windows 10 and Windows 11
                </p></div></div>

        <div class="${"card svelte-8l66gp"}" onclick="${"window.location.href = '/launcherx';"}"><div class="${"card-content svelte-8l66gp"}"><img class="${"card-image svelte-8l66gp"}" alt="${"LauncherX"}" src="${"/app-images/launcherx/LauncherXImage.png"}">
                <p class="${"card-text svelte-8l66gp"}">LauncherX</p>
                <p class="${"card-subtext svelte-8l66gp"}">Organise all your stuff!</p></div></div></div>
</div>`;
    });
    Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${$$result.head += `${$$result.title = `<title>Home - ClickPhase</title>`, ""}<meta name="${"description"}" content="${"The official site of ClickPhase. ClickPhase specialises in desktop software and utlities."}" data-svelte="svelte-ra94wo"><meta name="${"keywords"}" content="${"Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js"}" data-svelte="svelte-ra94wo"><meta name="${"author"}" content="${"ClickPhase"}" data-svelte="svelte-ra94wo">`, ""}

${validate_component(HeroSection, "HeroSection").$$render($$result, {}, {}, {})}
${validate_component(CardsSection, "CardsSection").$$render($$result, {}, {}, {})}
${validate_component(FeaturedApps, "FeaturedApps").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/6.js
var __exports3 = {};
__export(__exports3, {
  css: () => css9,
  entry: () => entry3,
  js: () => js3,
  module: () => index_svelte_exports
});
var entry3, js3, css9;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/6.js"() {
    init_index_svelte();
    entry3 = "pages/index.svelte-1d7b96c3.js";
    js3 = ["pages/index.svelte-1d7b96c3.js", "chunks/index-a7d8ca41.js", "chunks/NavigationView.svelte_svelte_type_style_lang-86c9a88c.js", "chunks/MicaBackground-ff907a83.js"];
    css9 = ["assets/pages/index.svelte-d7fa926c.css", "assets/NavigationView.svelte_svelte_type_style_lang-492d57f0.css", "assets/MicaBackground-b6441a3f.css"];
  }
});

// .svelte-kit/output/server/entries/pages/aboutcontact.svelte.js
var aboutcontact_svelte_exports = {};
__export(aboutcontact_svelte_exports, {
  default: () => Aboutcontact
});
var css$13, HeroSection2, css10, InfoSection, Aboutcontact;
var init_aboutcontact_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/aboutcontact.svelte.js"() {
    init_index_223a4ced();
    init_NavigationView_svelte_svelte_type_style_lang_8088d3b7();
    init_MicaBackground_bde423f3();
    css$13 = {
      code: ".container.svelte-kgadmr{position:relative;word-wrap:break-word;align-items:center;justify-content:center;text-align:center}.text-div.svelte-kgadmr{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.text-div.svelte-kgadmr .titleText{line-height:normal;font-size:min(7vmax, 68px)}",
      map: null
    };
    HeroSection2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let sy;
      $$result.css.add(css$13);
      return `


<div class="${"container svelte-kgadmr"}">${validate_component(MicaBackground, "MicaBackground").$$render($$result, {}, {}, {})}
    <div class="${"text-div svelte-kgadmr"}">${validate_component(TextBlock, "TextBlock").$$render($$result, {
        class: "titleText",
        style: "transform: translate(0," + -sy * 0.2 + "px)",
        variant: "display"
      }, {}, {
        default: () => {
          return `About &amp; Contact`;
        }
      })}</div>
</div>`;
    });
    css10 = {
      code: ".container.svelte-3j17de.svelte-3j17de{margin-top:1em;padding:2em 5vw 2em 5vw;word-wrap:break-word;align-items:center;justify-content:center;text-align:center}.logo.svelte-3j17de.svelte-3j17de{max-width:450px;margin-top:4em;margin-bottom:4em;margin-left:auto;margin-right:auto}.logo.svelte-3j17de a.svelte-3j17de{display:flex;align-items:center;justify-content:center;width:100%;height:100%;text-decoration:none;color:inherit;margin-right:3em}.logo.svelte-3j17de img.svelte-3j17de{width:6em;height:6em;object-fit:contain;margin-right:1.2em}.container.svelte-3j17de .bodyText{display:block;text-align:center;max-width:1100px;margin:auto;margin-bottom:2em}.divider.svelte-3j17de.svelte-3j17de{border-top:1px solid var(--fds-divider-stroke-default);margin:auto;max-width:1200px}.container.svelte-3j17de .contactHeader{display:block;margin-top:1em;margin-bottom:1em;text-align:center}.container.svelte-3j17de .linkTextBlock{text-align:center}.links.svelte-3j17de.svelte-3j17de{color:var(--fds-accent-text-primary);text-align:center;overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;-ms-hyphens:auto;-moz-hyphens:auto;-webkit-hyphens:auto;hyphens:auto}.container.svelte-3j17de ul.svelte-3j17de{padding:0;-webkit-padding-start:0;list-style-type:none}.container.svelte-3j17de ul li.svelte-3j17de{margin-bottom:0.2em}.container.svelte-3j17de .contactText{display:block;text-align:center;max-width:1100px;margin:auto;margin-top:2.8em;margin-bottom:2em}",
      map: null
    };
    InfoSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css10);
      return `<div class="${"container svelte-3j17de"}">${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "titleLarge" }, {}, {
        default: () => {
          return `About ClickPhase`;
        }
      })}

	<div class="${"logo svelte-3j17de"}"><a${add_attribute("href", void 0, 0)} class="${"svelte-3j17de"}"><img src="${"/logo-img.png"}" alt="${"ClickPhase"}" class="${"svelte-3j17de"}">
			${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "display" }, {}, {
        default: () => {
          return `ClickPhase`;
        }
      })}</a></div>

	${validate_component(TextBlock, "TextBlock").$$render($$result, { class: "bodyText", variant: "bodyLarge" }, {}, {
        default: () => {
          return `Hi! I am Matthias from ClickPhase, the only person here. I make
		software and animations during my free time and I hope you like using my
		software and watching my animations as much as I enjoy making them :)`;
        }
      })}

	<div class="${"divider svelte-3j17de"}"></div>

	${validate_component(TextBlock, "TextBlock").$$render($$result, {
        class: "contactHeader",
        variant: "titleLarge"
      }, {}, {
        default: () => {
          return `Contact ClickPhase`;
        }
      })}

	<ul class="${"svelte-3j17de"}"><li class="${"svelte-3j17de"}">${validate_component(TextBlock, "TextBlock").$$render($$result, {
        class: "linkTextBlock",
        variant: "bodyLarge"
      }, {}, {
        default: () => {
          return `Email:
				<a class="${"links svelte-3j17de"}" href="${"mailto:clickphasehelp@gmail.com"}">clickphasehelp@gmail.com
				</a>`;
        }
      })}</li>
		<li class="${"svelte-3j17de"}">${validate_component(TextBlock, "TextBlock").$$render($$result, {
        class: "linkTextBlock",
        variant: "bodyLarge"
      }, {}, {
        default: () => {
          return `GitHub Account:
				<a class="${"links svelte-3j17de"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://github.com/Apollo199999999"}">https://github.com/Apollo199999999
				</a>`;
        }
      })}</li>
		<li class="${"svelte-3j17de"}">${validate_component(TextBlock, "TextBlock").$$render($$result, {
        class: "linkTextBlock",
        variant: "bodyLarge"
      }, {}, {
        default: () => {
          return `YouTube Channel:
				<a class="${"links svelte-3j17de"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://www.youtube.com/channel/UCUy3erIflkjOWYsfGPVIM6g"}">https://www.youtube.com/channel/UCUy3erIflkjOWYsfGPVIM6g
				</a>`;
        }
      })}</li>
		<li class="${"svelte-3j17de"}">${validate_component(TextBlock, "TextBlock").$$render($$result, {
        class: "linkTextBlock",
        variant: "bodyLarge"
      }, {}, {
        default: () => {
          return `Personal YouTube Channel:
				<a class="${"links svelte-3j17de"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://www.youtube.com/channel/UCyx7JU3eigRv4A9HnxRWAIQ"}">https://www.youtube.com/channel/UCyx7JU3eigRv4A9HnxRWAIQ
				</a>`;
        }
      })}</li></ul>

	${validate_component(TextBlock, "TextBlock").$$render($$result, {
        class: "contactText",
        variant: "bodyLarge"
      }, {}, {
        default: () => {
          return `If you need support or want to leave feedback, 
		you may tell us on the designated GitHub repository for each software. 
		Alternatively, you may email us. We will respond within 5 business days.`;
        }
      })}
</div>`;
    });
    Aboutcontact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${$$result.head += `${$$result.title = `<title>About &amp; Contact - ClickPhase</title>`, ""}<meta name="${"description"}" content="${"About ClickPhase and how to contact ClickPhase."}" data-svelte="svelte-mxenvi"><meta name="${"keywords"}" content="${"Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js"}" data-svelte="svelte-mxenvi"><meta name="${"author"}" content="${"ClickPhase"}" data-svelte="svelte-mxenvi">`, ""}

${validate_component(HeroSection2, "HeroSection").$$render($$result, {}, {}, {})}
${validate_component(InfoSection, "InfoSection").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports4 = {};
__export(__exports4, {
  css: () => css11,
  entry: () => entry4,
  js: () => js4,
  module: () => aboutcontact_svelte_exports
});
var entry4, js4, css11;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    init_aboutcontact_svelte();
    entry4 = "pages/aboutcontact.svelte-956928a1.js";
    js4 = ["pages/aboutcontact.svelte-956928a1.js", "chunks/index-a7d8ca41.js", "chunks/NavigationView.svelte_svelte_type_style_lang-86c9a88c.js", "chunks/MicaBackground-ff907a83.js"];
    css11 = ["assets/pages/aboutcontact.svelte-281d7559.css", "assets/NavigationView.svelte_svelte_type_style_lang-492d57f0.css", "assets/MicaBackground-b6441a3f.css"];
  }
});

// .svelte-kit/output/server/entries/pages/animationsvideos.svelte.js
var animationsvideos_svelte_exports = {};
__export(animationsvideos_svelte_exports, {
  default: () => Animationsvideos
});
var css$14, HeroSection3, css12, VideoChannels, Animationsvideos;
var init_animationsvideos_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/animationsvideos.svelte.js"() {
    init_index_223a4ced();
    init_NavigationView_svelte_svelte_type_style_lang_8088d3b7();
    init_MicaBackground_bde423f3();
    css$14 = {
      code: ".container.svelte-19s7slf{position:relative;word-wrap:break-word;align-items:center;justify-content:center;text-align:center}.text-div.svelte-19s7slf{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.text-div.svelte-19s7slf .titleText{line-height:normal;font-size:min(7vmax, 68px)}",
      map: null
    };
    HeroSection3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let sy;
      $$result.css.add(css$14);
      return `


<div class="${"container svelte-19s7slf"}">${validate_component(MicaBackground, "MicaBackground").$$render($$result, {}, {}, {})}
    <div class="${"text-div svelte-19s7slf"}">${validate_component(TextBlock, "TextBlock").$$render($$result, {
        class: "titleText",
        style: "transform: translate(0," + -sy * 0.2 + "px)",
        variant: "display"
      }, {}, {
        default: () => {
          return `Animations &amp; Videos`;
        }
      })}</div>
</div>`;
    });
    css12 = {
      code: ".container.svelte-1sady8u{margin-top:1em;padding:2em 5vw 2em 5vw;overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.container.svelte-1sady8u .titleText{margin-left:5px;margin-right:5px}.container.svelte-1sady8u .bodyText{display:block;text-align:center;margin:auto;margin-top:1.5em}.cards-collection.svelte-1sady8u{margin-top:1.5em;margin-bottom:-1.5em;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.card.svelte-1sady8u{display:flex;justify-content:center;align-items:center;margin:0em 0.7em 1.5em 0.7em;width:280px;min-width:200px;flex-grow:1;height:350px;text-align:center;border-radius:var(--fds-control-corner-radius);z-index:999;-webkit-transition:200ms ease-in-out;-o-transition:200ms ease-in-out;transition:200ms ease-in-out;-webkit-box-shadow:0 0 15px rgba(0, 0, 0, 0.3);box-shadow:0 0 15px rgba(0, 0, 0, 0.3);background:linear-gradient(\r\n                var(--fds-card-background-default),\r\n                var(--fds-card-background-default)\r\n            ),\r\n            linear-gradient(\r\n                var(--fds-solid-background-base),\r\n                var(--fds-solid-background-base)\r\n            )}.card.svelte-1sady8u:hover{transform:scale(1.035);-webkit-box-shadow:0 0 20px rgba(0, 0, 0, 0.2);box-shadow:0 0 20px rgba(0, 0, 0, 0.2)}.card-content.svelte-1sady8u{width:100%}.card-image.svelte-1sady8u{width:40%;max-width:260px}.card-text.svelte-1sady8u{font-family:var(--fds-font-family-display);font-weight:600;font-size:28px;margin:0px;margin-top:1rem;margin-left:20px;margin-right:20px}",
      map: null
    };
    VideoChannels = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css12);
      return `<div class="${"container svelte-1sady8u"}">${validate_component(TextBlock, "TextBlock").$$render($$result, {
        variant: "titleLarge",
        class: "titleText"
      }, {}, {
        default: () => {
          return `My animations &amp; videos`;
        }
      })}
    ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "bodyLarge", class: "bodyText" }, {}, {
        default: () => {
          return `You can find all of my animations and videos on my 3 YouTube channels.`;
        }
      })}

    <div class="${"cards-collection svelte-1sady8u"}"><div class="${"card svelte-1sady8u"}" onclick="${"window.open('https://www.youtube.com/channel/UCUy3erIflkjOWYsfGPVIM6g', '_blank');"}"><div class="${"card-content svelte-1sady8u"}"><img class="${"card-image svelte-1sady8u"}" alt="${"ClickPhase"}" src="${"/youtube-profiles/clickphase.png"}">
                <p class="${"card-text svelte-1sady8u"}">ClickPhase</p></div></div>

        <div class="${"card svelte-1sady8u"}" onclick="${"window.open('https://www.youtube.com/channel/UCyx7JU3eigRv4A9HnxRWAIQ', '_blank');"}"><div class="${"card-content svelte-1sady8u"}"><img class="${"card-image svelte-1sady8u"}" alt="${"Matthias Wang"}" src="${"/youtube-profiles/matthias-wang.jpg"}">
                <p class="${"card-text svelte-1sady8u"}">Matthias Wang</p></div></div>

        <div class="${"card svelte-1sady8u"}" onclick="${"window.open('https://www.youtube.com/channel/UCDVwYsVmGsjiWVdWCb_4vIg', '_blank');"}"><div class="${"card-content svelte-1sady8u"}"><img class="${"card-image svelte-1sady8u"}" alt="${"Granny the Great"}" src="${"/youtube-profiles/granny.png"}">
                <p class="${"card-text svelte-1sady8u"}">Granny the Great</p></div></div></div>
</div>`;
    });
    Animationsvideos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${$$result.head += `${$$result.title = `<title>Animations &amp; Videos - ClickPhase</title>`, ""}<meta name="${"description"}" content="${"Animations and Videos from ClickPhase and others."}" data-svelte="svelte-1uumrc6"><meta name="${"keywords"}" content="${"Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js"}" data-svelte="svelte-1uumrc6"><meta name="${"author"}" content="${"ClickPhase"}" data-svelte="svelte-1uumrc6">`, ""}

${validate_component(HeroSection3, "HeroSection").$$render($$result, {}, {}, {})}
${validate_component(VideoChannels, "VideoChannels").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports5 = {};
__export(__exports5, {
  css: () => css13,
  entry: () => entry5,
  js: () => js5,
  module: () => animationsvideos_svelte_exports
});
var entry5, js5, css13;
var init__5 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    init_animationsvideos_svelte();
    entry5 = "pages/animationsvideos.svelte-4a18f59a.js";
    js5 = ["pages/animationsvideos.svelte-4a18f59a.js", "chunks/index-a7d8ca41.js", "chunks/NavigationView.svelte_svelte_type_style_lang-86c9a88c.js", "chunks/MicaBackground-ff907a83.js"];
    css13 = ["assets/pages/animationsvideos.svelte-c6cf0e0f.css", "assets/NavigationView.svelte_svelte_type_style_lang-492d57f0.css", "assets/MicaBackground-b6441a3f.css"];
  }
});

// .svelte-kit/output/server/chunks/InfoBar-c3821baf.js
var css$15, InfoBadge, css14, InfoBar;
var init_InfoBar_c3821baf = __esm({
  ".svelte-kit/output/server/chunks/InfoBar-c3821baf.js"() {
    init_index_223a4ced();
    init_Button_9355eef8();
    init_NavigationView_svelte_svelte_type_style_lang_8088d3b7();
    css$15 = {
      code: ".info-badge.svelte-106nxdf{align-items:center;border-radius:16px;box-sizing:border-box;color:var(--fds-text-on-accent-primary);display:inline-flex;font-family:var(--fds-font-family-small);font-size:var(--fds-caption-font-size);justify-content:center;line-height:var(--fds-caption-font-size);min-block-size:16px;min-inline-size:16px;padding:2px 4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.info-badge.severity-attention.svelte-106nxdf{background-color:var(--fds-system-attention)}.info-badge.severity-success.svelte-106nxdf{background-color:var(--fds-system-success)}.info-badge.severity-caution.svelte-106nxdf{background-color:var(--fds-system-caution)}.info-badge.severity-critical.svelte-106nxdf{background-color:var(--fds-system-critical)}.info-badge.severity-information.svelte-106nxdf{background-color:var(--fds-system-solid-neutral)}.info-badge.svelte-106nxdf svg{fill:currentColor;block-size:8px;inline-size:8px}",
      map: null
    };
    InfoBadge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$restProps = compute_rest_props($$props, ["severity", "class", "element"]);
      let { severity = "attention" } = $$props;
      let { class: className = "" } = $$props;
      let { element = null } = $$props;
      createEventForwarder(get_current_component());
      const svgProps = {
        "aria-hidden": true,
        xmlns: "http://www.w3.org/2000/svg"
      };
      if ($$props.severity === void 0 && $$bindings.severity && severity !== void 0)
        $$bindings.severity(severity);
      if ($$props.class === void 0 && $$bindings.class && className !== void 0)
        $$bindings.class(className);
      if ($$props.element === void 0 && $$bindings.element && element !== void 0)
        $$bindings.element(element);
      $$result.css.add(css$15);
      return `
<span${spread([
        {
          class: "info-badge severity-" + escape(severity, true) + " " + escape(className, true)
        },
        escape_object($$restProps)
      ], { classes: "svelte-106nxdf" })}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : `
		${severity === "attention" ? `<svg${spread([escape_object(svgProps), { viewBox: "162 118 701 789" }], { classes: "svelte-106nxdf" })}><path fill="${"currentColor"}" d="${"M862.5,680C862.5,687.333 861.083,694.25 858.25,700.75C855.417,707.25 851.583,712.917 846.75,717.75C841.917,722.583 836.25,726.417 829.75,729.25C823.25,732.083 816.333,733.5 809,733.5C800,733.5 791.333,731.167 783,726.5L565.5,603.5L565.5,853.5C565.5,860.833 564.083,867.75 561.25,874.25C558.417,880.75 554.583,886.333 549.75,891C544.917,895.667 539.25,899.417 532.75,902.25C526.25,905.083 519.333,906.5 512,906.5C504.667,906.5 497.75,905.083 491.25,902.25C484.75,899.417 479.083,895.667 474.25,891C469.417,886.333 465.583,880.75 462.75,874.25C459.917,867.75 458.5,860.833 458.5,853.5L458.5,603.5L241,726.5C232.667,731.167 224,733.5 215,733.5C207.667,733.5 200.75,732.083 194.25,729.25C187.75,726.417 182.083,722.583 177.25,717.75C172.417,712.917 168.583,707.25 165.75,700.75C162.917,694.25 161.5,687.333 161.5,680C161.5,670.667 164,661.75 169,653.25C174,644.75 180.5,638.167 188.5,633.5L403.5,512L188.5,390.5C180.5,385.833 174,379.25 169,370.75C164,362.25 161.5,353.333 161.5,344C161.5,336.667 162.917,329.75 165.75,323.25C168.583,316.75 172.417,311.083 177.25,306.25C182.083,301.417 187.75,297.583 194.25,294.75C200.75,291.917 207.667,290.5 215,290.5C224.667,290.5 233.333,292.833 241,297.5L458.5,420.5L458.5,170.5C458.5,163.167 459.917,156.25 462.75,149.75C465.583,143.25 469.417,137.667 474.25,133C479.083,128.333 484.75,124.583 491.25,121.75C497.75,118.917 504.667,117.5 512,117.5C519.333,117.5 526.25,118.917 532.75,121.75C539.25,124.583 544.917,128.333 549.75,133C554.583,137.667 558.417,143.25 561.25,149.75C564.083,156.25 565.5,163.167 565.5,170.5L565.5,420.5L783,297.5C791.333,292.833 800,290.5 809,290.5C816.333,290.5 823.25,291.917 829.75,294.75C836.25,297.583 841.917,301.417 846.75,306.25C851.583,311.083 855.417,316.75 858.25,323.25C861.083,329.75 862.5,336.667 862.5,344C862.5,353.333 860,362.25 855,370.75C850,379.25 843.5,385.833 835.5,390.5L620.5,512L835.5,633.5C843.5,638.167 850,644.75 855,653.25C860,661.75 862.5,670.667 862.5,680Z"}"></path></svg>` : `${severity === "success" ? `<svg${spread([escape_object(svgProps), { viewBox: "118 245 790 577" }], { classes: "svelte-106nxdf" })}><path fill="${"currentColor"}" d="${"M117.5,554.5C117.5,547.167 118.917,540.25 121.75,533.75C124.583,527.25 128.417,521.583 133.25,516.75C138.083,511.917 143.75,508.083 150.25,505.25C156.75,502.417 163.667,501 171,501C185.333,501 197.833,506.333 208.5,517L384,692.5L815.5,261C826.167,250.333 838.833,245 853.5,245C860.833,245 867.75,246.417 874.25,249.25C880.75,252.083 886.417,256 891.25,261C896.083,266 899.917,271.75 902.75,278.25C905.583,284.75 907,291.5 907,298.5C907,313.167 901.667,325.833 891,336.5L421.5,805.5C416.5,810.5 410.75,814.417 404.25,817.25C397.75,820.083 391,821.5 384,821.5C369.667,821.5 357.167,816.167 346.5,805.5L133,592.5C122.667,582.167 117.5,569.5 117.5,554.5Z"}"></path></svg>` : `${severity === "caution" ? `<svg${spread([escape_object(svgProps), { viewBox: "406 86 213 875" }], { classes: "svelte-106nxdf" })}><path fill="${"currentColor"}" d="${"M426.5,512L426.5,170.5C426.5,158.833 428.75,147.833 433.25,137.5C437.75,127.167 443.917,118.167 451.75,110.5C459.583,102.833 468.667,96.75 479,92.25C489.333,87.75 500.333,85.5 512,85.5C523.667,85.5 534.667,87.75 545,92.25C555.333,96.75 564.417,102.833 572.25,110.5C580.083,118.167 586.25,127.167 590.75,137.5C595.25,147.833 597.5,158.833 597.5,170.5L597.5,512C597.5,523.667 595.25,534.667 590.75,545C586.25,555.333 580.083,564.417 572.25,572.25C564.417,580.083 555.333,586.25 545,590.75C534.667,595.25 523.667,597.5 512,597.5C500.333,597.5 489.333,595.25 479,590.75C468.667,586.25 459.583,580.083 451.75,572.25C443.917,564.417 437.75,555.333 433.25,545C428.75,534.667 426.5,523.667 426.5,512ZM405.5,853.5C405.5,838.833 408.333,825 414,812C419.667,799 427.333,787.667 437,778C446.667,768.333 457.917,760.667 470.75,755C483.583,749.333 497.333,746.5 512,746.5C526.667,746.5 540.417,749.333 553.25,755C566.083,760.667 577.333,768.333 587,778C596.667,787.667 604.333,799 610,812C615.667,825 618.5,838.833 618.5,853.5C618.5,868.167 615.667,881.917 610,894.75C604.333,907.583 596.667,918.833 587,928.5C577.333,938.167 566,945.833 553,951.5C540,957.167 526.333,960 512,960C497.333,960 483.583,957.167 470.75,951.5C457.917,945.833 446.667,938.167 437,928.5C427.333,918.833 419.667,907.583 414,894.75C408.333,881.917 405.5,868.167 405.5,853.5Z"}"></path></svg>` : `${severity === "critical" ? `<svg${spread([escape_object(svgProps), { viewBox: "172 171 683 683" }], { classes: "svelte-106nxdf" })}><path fill="${"currentColor"}" d="${"M512.5,587.5L262.5,838C252.167,848.333 239.5,853.5 224.5,853.5C209.5,853.5 196.917,848.417 186.75,838.25C176.583,828.083 171.5,815.5 171.5,800.5C171.5,785.5 176.667,772.833 187,762.5L437,512L187,262C176.667,251.667 171.5,239.167 171.5,224.5C171.5,217.167 172.833,210.167 175.5,203.5C178.167,196.833 181.917,191.167 186.75,186.5C191.583,181.833 197.167,178.083 203.5,175.25C209.833,172.417 216.833,171 224.5,171C239.167,171 251.667,176.167 262,186.5L512.5,437L762.5,186.5C773.167,175.833 785.833,170.5 800.5,170.5C807.833,170.5 814.75,171.917 821.25,174.75C827.75,177.583 833.417,181.417 838.25,186.25C843.083,191.083 846.833,196.75 849.5,203.25C852.167,209.75 853.5,216.667 853.5,224C853.5,238.667 848.333,251.167 838,261.5L587.5,512L838,762.5C848.667,773.167 854,785.833 854,800.5C854,807.833 852.583,814.667 849.75,821C846.917,827.333 843.083,832.917 838.25,837.75C833.417,842.583 827.75,846.417 821.25,849.25C814.75,852.083 807.833,853.5 800.5,853.5C785.5,853.5 772.833,848.333 762.5,838Z"}"></path></svg>` : `${severity === "information" ? `<svg${spread([escape_object(svgProps), { viewBox: "406 64 213 875" }], { classes: "svelte-106nxdf" })}><path fill="${"currentColor"}" d="${"M405.5,170.5C405.5,156.167 408.333,142.5 414,129.5C419.667,116.5 427.333,105.167 437,95.5C446.667,85.8334 457.917,78.1667 470.75,72.5C483.583,66.8334 497.333,64.0001 512,64C526.333,64.0001 540,66.8334 553,72.5C566,78.1667 577.333,85.8334 587,95.5C596.667,105.167 604.333,116.5 610,129.5C615.667,142.5 618.5,156.167 618.5,170.5C618.5,185.167 615.667,199 610,212C604.333,225 596.667,236.333 587,246C577.333,255.667 566.083,263.333 553.25,269C540.417,274.667 526.667,277.5 512,277.5C497.333,277.5 483.583,274.667 470.75,269C457.917,263.333 446.667,255.667 437,246C427.333,236.333 419.667,225 414,212C408.333,199 405.5,185.167 405.5,170.5ZM426.5,853.5L426.5,512C426.5,500.333 428.75,489.333 433.25,479C437.75,468.667 443.917,459.583 451.75,451.75C459.583,443.917 468.667,437.75 479,433.25C489.333,428.75 500.333,426.5 512,426.5C523.667,426.5 534.667,428.75 545,433.25C555.333,437.75 564.417,443.917 572.25,451.75C580.083,459.583 586.25,468.667 590.75,479C595.25,489.333 597.5,500.333 597.5,512L597.5,853.5C597.5,865.167 595.25,876.167 590.75,886.5C586.25,896.833 580.083,905.833 572.25,913.5C564.417,921.167 555.333,927.25 545,931.75C534.667,936.25 523.667,938.5 512,938.5C500.333,938.5 489.333,936.25 479,931.75C468.667,927.25 459.583,921.167 451.75,913.5C443.917,905.833 437.75,896.833 433.25,886.5C428.75,876.167 426.5,865.167 426.5,853.5Z"}"></path></svg>` : ``}`}`}`}`}
	`}
</span>`;
    });
    css14 = {
      code: ".info-bar.svelte-fp4fp6.svelte-fp4fp6{-webkit-padding-start:15px;align-items:center;background-clip:padding-box;border:1px solid var(--fds-card-stroke-default);border-radius:var(--fds-control-corner-radius);box-sizing:border-box;display:flex;font-family:var(--fds-font-family-text);min-block-size:48px;padding-inline-start:15px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.info-bar.severity-information.svelte-fp4fp6.svelte-fp4fp6{background-color:var(--fds-card-background-secondary)}.info-bar.severity-success.svelte-fp4fp6.svelte-fp4fp6{background-color:var(--fds-system-background-success)}.info-bar.severity-caution.svelte-fp4fp6.svelte-fp4fp6{background-color:var(--fds-system-background-caution)}.info-bar.severity-critical.svelte-fp4fp6.svelte-fp4fp6{background-color:var(--fds-system-background-critical)}.info-bar.severity-attention.svelte-fp4fp6.svelte-fp4fp6{background-color:var(--fds-system-background-attention)}.info-bar-icon.svelte-fp4fp6.svelte-fp4fp6{-webkit-margin-before:16px;align-self:flex-start;display:flex;flex:0 0 auto;margin-block-start:16px}.info-bar-content.svelte-fp4fp6.svelte-fp4fp6{-webkit-margin-start:13px;-webkit-margin-before:7px;-webkit-margin-after:7px;align-items:center;box-sizing:border-box;display:flex;flex:1 1 auto;flex-wrap:wrap;margin-block-end:7px;margin-block-start:7px;margin-inline-start:13px;position:relative}.info-bar-content.action-wrapped.svelte-fp4fp6.svelte-fp4fp6,.info-bar-content.message-wrapped.svelte-fp4fp6.svelte-fp4fp6{-webkit-margin-before:13px;-webkit-margin-after:15px;margin-block-end:15px;margin-block-start:13px}.info-bar-content.message-wrapped.svelte-fp4fp6 h5.svelte-fp4fp6,.info-bar-content.message-wrapped.svelte-fp4fp6 p.svelte-fp4fp6{align-self:flex-start}.info-bar-content.message-wrapped.svelte-fp4fp6 .info-bar-action.svelte-fp4fp6{-webkit-margin-end:50%;margin-inline-end:50%}.info-bar-content.action-wrapped.svelte-fp4fp6 .info-bar-action.svelte-fp4fp6{-webkit-padding-before:16px;padding-block-start:16px}.info-bar.svelte-fp4fp6 h5.svelte-fp4fp6,.info-bar.svelte-fp4fp6 p.svelte-fp4fp6{color:var(--fds-text-primary);font-size:var(--fds-body-font-size);font-weight:400;line-height:20px;margin:0}.info-bar.svelte-fp4fp6 h5.svelte-fp4fp6{-webkit-margin-end:12px;font-weight:600;margin-inline-end:12px}.info-bar.svelte-fp4fp6 p.svelte-fp4fp6{-webkit-margin-end:15px;flex:1 1 auto;margin-inline-end:15px}.info-bar-action.svelte-fp4fp6.svelte-fp4fp6{-webkit-margin-end:4px;margin-inline-end:4px}.info-bar-action.svelte-fp4fp6.svelte-fp4fp6,.info-bar-close-button.svelte-fp4fp6.svelte-fp4fp6{align-items:center;align-self:flex-start;display:flex}.info-bar-close-button.svelte-fp4fp6.svelte-fp4fp6{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--fds-subtle-fill-transparent);block-size:38px;border:none;border-radius:var(--fds-control-corner-radius);color:var(--fds-text-primary);flex:0 0 auto;inline-size:38px;justify-content:center;margin:4px;outline:none;transition:var(--fds-control-fast-duration) var(--fds-control-fast-out-slow-in-easing)}.info-bar-close-button.svelte-fp4fp6.svelte-fp4fp6:focus-visible{box-shadow:var(--fds-focus-stroke)}.info-bar-close-button.svelte-fp4fp6.svelte-fp4fp6:hover{background-color:var(--fds-subtle-fill-secondary)}.info-bar-close-button.svelte-fp4fp6.svelte-fp4fp6:active{background-color:var(--fds-subtle-fill-tertiary);color:var(--fds-text-secondary)}.info-bar-close-button.svelte-fp4fp6 svg.svelte-fp4fp6{fill:currentColor;block-size:12px;inline-size:12px}",
      map: null
    };
    InfoBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let actionWrapped;
      let messageWrapped;
      let $$restProps = compute_rest_props($$props, [
        "open",
        "closable",
        "severity",
        "title",
        "message",
        "class",
        "element",
        "titleElement",
        "messageElement",
        "actionElement",
        "closeButtonElement"
      ]);
      let $$slots = compute_slots(slots);
      let { open = true } = $$props;
      let { closable = true } = $$props;
      let { severity = "information" } = $$props;
      let { title = "" } = $$props;
      let { message = "" } = $$props;
      let { class: className = "" } = $$props;
      let { element = null } = $$props;
      let { titleElement = null } = $$props;
      let { messageElement = null } = $$props;
      let { actionElement = null } = $$props;
      let { closeButtonElement = null } = $$props;
      let clientHeight = 0;
      const dispatch = createEventDispatcher();
      createEventForwarder(get_current_component());
      if ($$props.open === void 0 && $$bindings.open && open !== void 0)
        $$bindings.open(open);
      if ($$props.closable === void 0 && $$bindings.closable && closable !== void 0)
        $$bindings.closable(closable);
      if ($$props.severity === void 0 && $$bindings.severity && severity !== void 0)
        $$bindings.severity(severity);
      if ($$props.title === void 0 && $$bindings.title && title !== void 0)
        $$bindings.title(title);
      if ($$props.message === void 0 && $$bindings.message && message !== void 0)
        $$bindings.message(message);
      if ($$props.class === void 0 && $$bindings.class && className !== void 0)
        $$bindings.class(className);
      if ($$props.element === void 0 && $$bindings.element && element !== void 0)
        $$bindings.element(element);
      if ($$props.titleElement === void 0 && $$bindings.titleElement && titleElement !== void 0)
        $$bindings.titleElement(titleElement);
      if ($$props.messageElement === void 0 && $$bindings.messageElement && messageElement !== void 0)
        $$bindings.messageElement(messageElement);
      if ($$props.actionElement === void 0 && $$bindings.actionElement && actionElement !== void 0)
        $$bindings.actionElement(actionElement);
      if ($$props.closeButtonElement === void 0 && $$bindings.closeButtonElement && closeButtonElement !== void 0)
        $$bindings.closeButtonElement(closeButtonElement);
      $$result.css.add(css14);
      actionWrapped = clientHeight;
      messageWrapped = clientHeight;
      {
        if (open) {
          dispatch("open");
        } else {
          dispatch("close");
        }
      }
      return `
${open ? `<div${spread([
        {
          class: "info-bar severity-" + escape(severity, true) + " " + escape(className, true)
        },
        { role: "alert" },
        escape_object($$restProps)
      ], { classes: "svelte-fp4fp6" })}${add_attribute("this", element, 0)}><div class="${"info-bar-icon svelte-fp4fp6"}">${slots.icon ? slots.icon({}) : `
				${validate_component(InfoBadge, "InfoBadge").$$render($$result, { severity }, {}, {})}
			`}</div>
		<div class="${[
        "info-bar-content svelte-fp4fp6",
        " " + ($$slots.action ? "action-visible" : "") + " " + (actionWrapped ? "action-wrapped" : "") + " " + (messageWrapped ? "message-wrapped" : "")
      ].join(" ").trim()}">${title ? `<h5 class="${"svelte-fp4fp6"}"${add_attribute("this", titleElement, 0)}>${escape(title)}</h5>` : ``}
			${message || $$slots.default ? `<p class="${"svelte-fp4fp6"}"${add_attribute("this", messageElement, 0)}>${escape(message)}
					${slots.default ? slots.default({}) : ``}</p>` : ``}
			${$$slots.action ? `<div class="${"info-bar-action svelte-fp4fp6"}"${add_attribute("this", actionElement, 0)}>${slots.action ? slots.action({}) : ``}</div>` : ``}</div>
		${closable ? `<button class="${"info-bar-close-button svelte-fp4fp6"}" type="${"button"}" aria-label="${"Close"}"${add_attribute("this", closeButtonElement, 0)}><svg aria-hidden="${"true"}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"12"}" height="${"12"}" viewBox="${"0 0 1024 1024"}" class="${"svelte-fp4fp6"}"><path fill="${"currentColor"}" d="${"M512,584.5L87.5,1009C77.5,1019 65.5,1024 51.5,1024C36.8333,1024 24.5833,1019.08 14.75,1009.25C4.91667,999.417 0,987.167 0,972.5C0,958.5 5,946.5 15,936.5L439.5,512L15,87.5C5,77.5 0,65.3334 0,51C0,44 1.33333,37.3334 4,31C6.66667,24.6667 10.3333,19.25 15,14.75C19.6667,10.25 25.1667,6.66669 31.5,4C37.8333,1.33337 44.5,0 51.5,0C65.5,0 77.5,5 87.5,15L512,439.5L936.5,15C946.5,5 958.667,0 973,0C980,0 986.583,1.33337 992.75,4C998.917,6.66669 1004.33,10.3334 1009,15C1013.67,19.6667 1017.33,25.0834 1020,31.25C1022.67,37.4167 1024,44 1024,51C1024,65.3334 1019,77.5 1009,87.5L584.5,512L1009,936.5C1019,946.5 1024,958.5 1024,972.5C1024,979.5 1022.67,986.167 1020,992.5C1017.33,998.833 1013.75,1004.33 1009.25,1009C1004.75,1013.67 999.333,1017.33 993,1020C986.667,1022.67 980,1024 973,1024C958.667,1024 946.5,1019 936.5,1009Z"}"></path></svg></button>` : ``}</div>` : ``}`;
    });
  }
});

// .svelte-kit/output/server/chunks/HeaderChip-992c049f.js
var css15, HeaderChip;
var init_HeaderChip_992c049f = __esm({
  ".svelte-kit/output/server/chunks/HeaderChip-992c049f.js"() {
    init_index_223a4ced();
    init_NavigationView_svelte_svelte_type_style_lang_8088d3b7();
    css15 = {
      code: ".header-chip.svelte-1bkpq2h{display:inline-flex;margin-block-end:8px;padding:4px 16px;border-radius:50px;background-color:var(--fds-subtle-fill-secondary);color:var(--fds-text-secondary);font-size:var(--fds-body-font-size);font-weight:600;line-height:18px;user-select:none;margin-bottom:0.5em}",
      map: null
    };
    HeaderChip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css15);
      return `<div><span class="${"header-chip svelte-1bkpq2h"}">${slots.default ? slots.default({}) : ``}</span>
</div>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/dynawin.svelte.js
var dynawin_svelte_exports = {};
__export(dynawin_svelte_exports, {
  default: () => Dynawin
});
function writable2(value, start = noop2) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue2.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue2.push(subscriber, value);
        }
        if (run_queue) {
          for (let i2 = 0; i2 < subscriber_queue2.length; i2 += 2) {
            subscriber_queue2[i2][0](subscriber_queue2[i2 + 1]);
          }
          subscriber_queue2.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop2) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop2;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
var css$8, ContentDialog, subscriber_queue2, css$7, HeroSection4, css$6, AboutDynaWin, css$5, Compatibility, css$4, CompareImage, css$3, DynamicThemeFeature, css$22, DynamicWallpaperFeature, css$16, AutomaticUpdates, css16, DownloadLinks, Dynawin;
var init_dynawin_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/dynawin.svelte.js"() {
    init_index_223a4ced();
    init_NavigationView_svelte_svelte_type_style_lang_8088d3b7();
    init_MicaBackground_bde423f3();
    init_Button_9355eef8();
    init_InfoBar_c3821baf();
    init_HeaderChip_992c049f();
    css$8 = {
      code: ".content-dialog.svelte-1szmc6y{-webkit-animation:dialog-inner var(--fds-control-fast-duration) var(--fds-control-fast-out-slow-in-easing);animation:dialog-inner var(--fds-control-fast-duration) var(--fds-control-fast-out-slow-in-easing);background-clip:padding-box;background-color:var(--fds-solid-background-base);border:1px solid var(--fds-surface-stroke-default);border-radius:var(--fds-overlay-corner-radius);box-shadow:var(--fds-dialog-shadow);box-sizing:border-box;max-inline-size:calc(100% - 24px);overflow:hidden;position:fixed}.content-dialog.size-min.svelte-1szmc6y{inline-size:320px}.content-dialog.size-standard.svelte-1szmc6y{inline-size:448px}.content-dialog.size-max.svelte-1szmc6y{inline-size:540px}.content-dialog-smoke.svelte-1szmc6y{align-items:center;block-size:100%;display:flex;flex-direction:column;inline-size:100%;inset-block-start:0;inset-inline-start:0;justify-content:center;position:fixed;z-index:101}.content-dialog-smoke.darken.svelte-1szmc6y{background-color:var(--fds-smoke-background-default)}.content-dialog.svelte-1szmc6y .content-dialog-title{color:var(--fds-text-primary);display:block;margin-bottom:12px}.content-dialog-body.svelte-1szmc6y,.content-dialog-footer.svelte-1szmc6y{padding:24px}.content-dialog-body.svelte-1szmc6y{background-color:var(--fds-layer-background-default);color:var(--fds-text-primary);font-family:var(--fds-font-family-text);font-size:var(--fds-body-font-size);font-weight:400;line-height:20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.content-dialog-footer.svelte-1szmc6y{grid-gap:8px;-webkit-border-before:1px solid var(--fds-card-stroke-default);border-block-start:1px solid var(--fds-card-stroke-default);display:grid;grid-auto-flow:column;grid-auto-rows:1fr;white-space:nowrap}.content-dialog-footer.svelte-1szmc6y>.button:only-child{inline-size:50%;justify-self:end}",
      map: null
    };
    ContentDialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$restProps = compute_rest_props($$props, [
        "open",
        "title",
        "size",
        "closable",
        "append",
        "darken",
        "trapFocus",
        "class",
        "element",
        "backdropElement",
        "bodyElement",
        "footerElement"
      ]);
      let $$slots = compute_slots(slots);
      let { open = false } = $$props;
      let { title = "" } = $$props;
      let { size = "standard" } = $$props;
      let { closable = true } = $$props;
      let { append = void 0 } = $$props;
      let { darken = true } = $$props;
      let { trapFocus = true } = $$props;
      let { class: className = "" } = $$props;
      let { element = null } = $$props;
      let { backdropElement = null } = $$props;
      let { bodyElement = null } = $$props;
      let { footerElement = null } = $$props;
      createEventForwarder(get_current_component(), ["open", "close", "backdropclick", "backdropmousedown"]);
      const dispatch = createEventDispatcher();
      const titleId = uid("fds-dialog-title-");
      const bodyId = uid("fds-dialog-body-");
      if ($$props.open === void 0 && $$bindings.open && open !== void 0)
        $$bindings.open(open);
      if ($$props.title === void 0 && $$bindings.title && title !== void 0)
        $$bindings.title(title);
      if ($$props.size === void 0 && $$bindings.size && size !== void 0)
        $$bindings.size(size);
      if ($$props.closable === void 0 && $$bindings.closable && closable !== void 0)
        $$bindings.closable(closable);
      if ($$props.append === void 0 && $$bindings.append && append !== void 0)
        $$bindings.append(append);
      if ($$props.darken === void 0 && $$bindings.darken && darken !== void 0)
        $$bindings.darken(darken);
      if ($$props.trapFocus === void 0 && $$bindings.trapFocus && trapFocus !== void 0)
        $$bindings.trapFocus(trapFocus);
      if ($$props.class === void 0 && $$bindings.class && className !== void 0)
        $$bindings.class(className);
      if ($$props.element === void 0 && $$bindings.element && element !== void 0)
        $$bindings.element(element);
      if ($$props.backdropElement === void 0 && $$bindings.backdropElement && backdropElement !== void 0)
        $$bindings.backdropElement(backdropElement);
      if ($$props.bodyElement === void 0 && $$bindings.bodyElement && bodyElement !== void 0)
        $$bindings.bodyElement(bodyElement);
      if ($$props.footerElement === void 0 && $$bindings.footerElement && footerElement !== void 0)
        $$bindings.footerElement(footerElement);
      $$result.css.add(css$8);
      {
        if (!open)
          dispatch("close");
      }
      return `

${open ? `<div class="${["content-dialog-smoke svelte-1szmc6y", darken ? "darken" : ""].join(" ").trim()}"${add_attribute("this", backdropElement, 0)}><div${spread([
        {
          class: "content-dialog size-" + escape(size, true) + " " + escape(className, true)
        },
        { role: "dialog" },
        { "aria-modal": "true" },
        {
          "aria-labelledby": escape_attribute_value(title && titleId)
        },
        {
          "aria-describedby": escape_attribute_value(bodyId)
        },
        escape_object($$restProps)
      ], { classes: "svelte-1szmc6y" })}${add_attribute("this", element, 0)}><div class="${"content-dialog-body svelte-1szmc6y"}"${add_attribute("id", bodyId, 0)}${add_attribute("this", bodyElement, 0)}>${title ? `${validate_component(TextBlock, "TextBlock").$$render($$result, {
        variant: "subtitle",
        class: "content-dialog-title",
        id: titleId
      }, {}, {
        default: () => {
          return `${escape(title)}`;
        }
      })}` : ``}
				${slots.default ? slots.default({}) : ``}</div>
			${$$slots.footer ? `<footer class="${"content-dialog-footer svelte-1szmc6y"}"${add_attribute("this", footerElement, 0)}>${slots.footer ? slots.footer({}) : ``}</footer>` : ``}</div>
		${slots.outer ? slots.outer({}) : ``}</div>` : ``}`;
    });
    subscriber_queue2 = [];
    css$7 = {
      code: '.parallax-container.svelte-f0ytc1.svelte-f0ytc1{position:relative;width:100%;height:72vh;overflow-y:hidden;align-items:center;justify-content:center;text-align:center}.bg-image-div.svelte-f0ytc1.svelte-f0ytc1{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.bg-image-div.svelte-f0ytc1 img.svelte-f0ytc1{max-height:calc(72vh - 50px);max-width:80vw;content:url("/screenshots/dynawin/WindowLight.png");-webkit-fliter:blur(2px);filter:blur(2px)}@media(prefers-color-scheme: dark){.bg-image-div.svelte-f0ytc1 img.svelte-f0ytc1{max-height:calc(72vh - 50px);max-width:80vw;content:url("/screenshots/dynawin/WindowDark.png");-webkit-fliter:blur(2px);filter:blur(2px)}}.logo-components.svelte-f0ytc1.svelte-f0ytc1{position:absolute;word-wrap:break-word;top:50%;left:50%;transform:translate(-50%, -50%);width:90vw}.logo-components.svelte-f0ytc1 img.svelte-f0ytc1{display:block;max-height:20vh;max-width:80vw;content:url("/app-images/dynawin/logoLight.png");margin:auto}@media(prefers-color-scheme: dark){.logo-components.svelte-f0ytc1 img.svelte-f0ytc1{display:block;max-height:20vh;max-width:80vw;content:url("/app-images/dynawin/logoDark.png");margin:auto}}.logo-components.svelte-f0ytc1 .caption-text{display:block;margin-top:10px}.logo-components.svelte-f0ytc1 .download-btn{margin-top:calc(25px / calc(16 / 14))}',
      map: null
    };
    HeroSection4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let sy;
      $$result.css.add(css$7);
      return `


<div class="${"parallax-container svelte-f0ytc1"}">${validate_component(MicaBackground, "MicaBackground").$$render($$result, {}, {}, {})}

    <div class="${"bg-image-div svelte-f0ytc1"}"><img style="${"transform: translate(0," + escape(-sy * 0.2, true) + "px)"}" alt="${"DynaWin Window Screenshot"}" class="${"svelte-f0ytc1"}"></div>

    <div class="${"logo-components svelte-f0ytc1"}"><img style="${"transform: translate(0," + escape(-sy * 0.1, true) + "px)"}" alt="${"DynaWin Logo"}" class="${"svelte-f0ytc1"}">
        ${validate_component(TextBlock, "TextBlock").$$render($$result, {
        variant: "subtitle",
        style: "transform: translate(0," + -sy * 0.1 + "px)",
        class: "caption-text"
      }, {}, {
        default: () => {
          return `Dynamic Desktop for Windows 10 and Windows 11
        `;
        }
      })}

        ${validate_component(Button, "Button").$$render($$result, {
        class: "download-btn",
        style: "transform: translate(0," + -sy * 0.1 + "px) scale(calc(16/14))",
        onclick: "window.open('https://github.com/Apollo199999999/DynaWin/releases', '_blank');",
        variant: "accent"
      }, {}, {
        default: () => {
          return `Download DynaWin
        `;
        }
      })}</div>
</div>`;
    });
    css$6 = {
      code: ".padding-div.svelte-1x9kd4c.svelte-1x9kd4c{padding:2em 5vw 2em 5vw;background-color:var(--fds-solid-background-base)}.install-infobar{max-width:1024px;margin:auto;padding:0.2em}.content-dialog{margin-top:20px}.container.svelte-1x9kd4c.svelte-1x9kd4c{margin-top:1em;overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.container.svelte-1x9kd4c .titleText{margin-left:5px;margin-right:5px}.container.svelte-1x9kd4c .bodyText{display:block;text-align:center;margin:auto;margin-top:1.5em}.container.svelte-1x9kd4c iframe.svelte-1x9kd4c{width:90vw;max-width:840px;height:calc(calc(90vw / 16) * 9);max-height:473px;margin-top:1.5em}",
      map: null
    };
    AboutDynaWin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let open = false;
      $$result.css.add(css$6);
      let $$settled;
      let $$rendered;
      do {
        $$settled = true;
        $$rendered = `<div class="${"padding-div svelte-1x9kd4c"}">${validate_component(InfoBar, "InfoBar").$$render($$result, {
          severity: "caution",
          class: "install-infobar",
          title: "Before you install..."
        }, {}, {
          action: () => {
            return `${validate_component(Button, "Button").$$render($$result, { slot: "action" }, {}, {
              default: () => {
                return `View Notice`;
              }
            })}`;
          },
          default: () => {
            return `Please read this notice about some antiviruses preventing DynaWin from functioning normally.
        `;
          }
        })}
     
     ${validate_component(ContentDialog, "ContentDialog").$$render($$result, {
          class: "content-dialog",
          size: "max",
          title: "NOTICE: Before you install...",
          open
        }, {
          open: ($$value) => {
            open = $$value;
            $$settled = false;
          }
        }, {
          footer: () => {
            return `${validate_component(Button, "Button").$$render($$result, { slot: "footer", variant: "accent" }, {}, {
              default: () => {
                return `OK`;
              }
            })}`;
          },
          default: () => {
            return `<p class="${"content-dialog-first-para"}">To run on startup, DynaWin creates a batch script in the user&#39;s startup folder. However, some antiviruses may flag this as unsafe. If this is the case, please add DynaWin and the batch script, located at 
             <code><strong>%APPDATA%\\<wbr>Microsoft\\<wbr>Windows\\<wbr>Start\xA0Menu\\<wbr>Programs\\<wbr>Startup\\<wbr>StartDynaWin.bat</strong></code> to your antivirus&#39;s exclusions list. </p>
     
         <p>Some antiviruses and/or firewalls may block DynaWin from accessing the internet, causing the auto-update system to not work. In this case, please add DynaWin to your firewall&#39;s or antivrus&#39;s exclusion list.</p>`;
          }
        })}
     
     <div class="${"container svelte-1x9kd4c"}">${validate_component(HeaderChip, "HeaderChip").$$render($$result, {}, {}, {
          default: () => {
            return `About`;
          }
        })}
         ${validate_component(TextBlock, "TextBlock").$$render($$result, {
          variant: "titleLarge",
          class: "titleText"
        }, {}, {
          default: () => {
            return `About DynaWin`;
          }
        })}
         ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "bodyLarge", class: "bodyText" }, {}, {
          default: () => {
            return `DynaWin is a utility that allows the Windows desktop to change
             dynamically.`;
          }
        })}
         <iframe src="${"https://www.youtube-nocookie.com/embed/J0iyzZG5tXc"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen class="${"svelte-1x9kd4c"}"></iframe></div>
</div>`;
      } while (!$$settled);
      return $$rendered;
    });
    css$5 = {
      code: ".container.svelte-1wisto3{padding:2em 5vw 2em 5vw;background-color:var(--fds-solid-background-secondary);overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.container.svelte-1wisto3 .titleText{margin-left:5px;margin-right:5px}.container.svelte-1wisto3 .bodyText{display:block;text-align:center;margin:auto;margin-top:1.5em;max-width:1100px}",
      map: null
    };
    Compatibility = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$5);
      return `<div class="${"container svelte-1wisto3"}">${validate_component(HeaderChip, "HeaderChip").$$render($$result, {}, {}, {
        default: () => {
          return `System`;
        }
      })}

    ${validate_component(TextBlock, "TextBlock").$$render($$result, {
        class: "titleText",
        variant: "titleLarge"
      }, {}, {
        default: () => {
          return `Compatibility`;
        }
      })}
    ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "bodyLarge", class: "bodyText" }, {}, {
        default: () => {
          return `DynaWin works with Windows 10 and Windows 11. I have not tested if
        DynaWin works with Windows 8.1 or Windows 7, so if you are on those
        versions of Windows, use at your own risk. DynaWin also requires .NET
        framework version 4.8 to function properly.
    `;
        }
      })}
</div>`;
    });
    css$4 = {
      code: '.svelte-compare-image-container.svelte-qgpj5s{box-sizing:border-box;position:relative;width:100%;height:var(--container-height);overflow:hidden}.svelte-compare-image-container.svelte-qgpj5s:focus-within{outline:auto 4px rgba(59, 153, 252, 0.7);outline:auto 4px -moz-mac-focusring;outline:auto 4px -webkit-focus-ring-color}img.svelte-qgpj5s{display:block;height:100%;object-fit:cover;position:absolute;width:100%}.left-img.svelte-qgpj5s{clip:rect(\n      auto,\n      calc(var(--container-width) * var(--slider-position)),\n      auto,\n      auto\n    )}.right-img.svelte-qgpj5s{clip:rect(\n      auto,\n      auto,\n      auto,\n      calc(var(--container-width) * var(--slider-position))\n    )}.slider.svelte-qgpj5s{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:var(--handle-size);cursor:ew-resize;position:absolute;left:calc(\n      var(--container-width) * var(--slider-position) -\n        var(--handle-size, 2.5rem) / 2\n    );top:0}.slider.svelte-qgpj5s:focus{outline:none}.line.svelte-qgpj5s{background:var(--slider-color, #ffffff);box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2),\n      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);flex:0 1 auto;height:100%;width:var(--slider-width, 0.125rem)}.handle.svelte-qgpj5s{box-sizing:border-box;flex:1 0 auto;display:flex;justify-content:center;align-items:center;border:var(--slider-width, 0.125rem) solid var(--slider-color, #ffffff);border-radius:100%;box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2),\n      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);height:var(--handle-size, 2.5rem);width:var(--handle-size, 2.5rem)}.handle.svelte-qgpj5s::before{content:"";border:inset calc(var(--handle-size, 2.5rem) * 0.15) rgba(0, 0, 0, 0);border-right:calc(var(--handle-size, 2.5rem) * 0.15) solid\n      var(--slider-color, #ffffff);height:0;margin-right:calc(var(--handle-size, 2.5rem) * 0.25);width:0}.handle.svelte-qgpj5s::after{content:"";border:inset calc(var(--handle-size, 2.5rem) * 0.15) rgba(0, 0, 0, 0);border-left:calc(var(--handle-size, 2.5rem) * 0.15) solid\n      var(--slider-color, #ffffff);height:0;width:0}',
      map: null
    };
    CompareImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let containerWidthStore;
      let $containerWidthStore, $$unsubscribe_containerWidthStore = noop2, $$subscribe_containerWidthStore = () => ($$unsubscribe_containerWidthStore(), $$unsubscribe_containerWidthStore = subscribe(containerWidthStore, ($$value) => $containerWidthStore = $$value), containerWidthStore);
      let { imageLeftSrc = "" } = $$props;
      let { imageLeftAlt = "" } = $$props;
      let { imageRightSrc = "" } = $$props;
      let { imageRightAlt = "" } = $$props;
      function syncWidth(el) {
        return writable2(0, (set) => {
          if (!el) {
            return;
          }
          let ro = new ResizeObserver(([entry11]) => {
            set(entry11.target.getBoundingClientRect().width);
          });
          ro.observe(el);
          return () => ro.disconnect();
        });
      }
      let containerRef = null;
      let imageLeftRef = null;
      let imageRightRef = null;
      let height = 0;
      let sliderRef = null;
      let sliderPosition = 0.5;
      if ($$props.imageLeftSrc === void 0 && $$bindings.imageLeftSrc && imageLeftSrc !== void 0)
        $$bindings.imageLeftSrc(imageLeftSrc);
      if ($$props.imageLeftAlt === void 0 && $$bindings.imageLeftAlt && imageLeftAlt !== void 0)
        $$bindings.imageLeftAlt(imageLeftAlt);
      if ($$props.imageRightSrc === void 0 && $$bindings.imageRightSrc && imageRightSrc !== void 0)
        $$bindings.imageRightSrc(imageRightSrc);
      if ($$props.imageRightAlt === void 0 && $$bindings.imageRightAlt && imageRightAlt !== void 0)
        $$bindings.imageRightAlt(imageRightAlt);
      $$result.css.add(css$4);
      $$subscribe_containerWidthStore(containerWidthStore = syncWidth(containerRef));
      {
        {
          (imageLeftRef == null ? void 0 : imageLeftRef.complete) ?? false;
        }
      }
      {
        {
          (imageRightRef == null ? void 0 : imageRightRef.complete) ?? false;
        }
      }
      $$unsubscribe_containerWidthStore();
      return `<div class="${"svelte-compare-image-container svelte-qgpj5s"}" style="${"--container-height: " + escape(height, true) + "px; --container-width: " + escape($containerWidthStore, true) + "px; --slider-position: " + escape(sliderPosition, true) + ";"}" data-testid="${"svelte-compare-image"}"${add_attribute("this", containerRef, 0)}><img${add_attribute("src", imageLeftSrc, 0)}${add_attribute("alt", imageLeftAlt, 0)} class="${"left-img svelte-qgpj5s"}"${add_attribute("this", imageLeftRef, 0)}>
  <img${add_attribute("src", imageRightSrc, 0)}${add_attribute("alt", imageRightAlt, 0)} class="${"right-img svelte-qgpj5s"}"${add_attribute("this", imageRightRef, 0)}>
  <div class="${"slider svelte-qgpj5s"}" role="${"slider"}"${add_attribute("aria-valuemin", 0, 0)}${add_attribute("aria-valuemax", 1, 0)}${add_attribute("aria-valuenow", sliderPosition, 0)} aria-label="${"Compare image"}" tabindex="${"0"}"${add_attribute("this", sliderRef, 0)}><div class="${"line svelte-qgpj5s"}"></div>
    <div class="${"handle svelte-qgpj5s"}"></div>
    <div class="${"line svelte-qgpj5s"}"></div></div>
</div>`;
    });
    css$3 = {
      code: ".container.svelte-quqcrl{padding:2em 5vw 2em 5vw;background-color:var(--fds-solid-background-base);overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.container.svelte-quqcrl .titleText{margin-left:5px;margin-right:5px}.container.svelte-quqcrl .bodyText{display:block;text-align:center;margin:auto;margin-top:1.5em}.cards-collection.svelte-quqcrl{margin-top:1.5em;margin-bottom:-1.5em;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.card.svelte-quqcrl{display:flex;justify-content:center;align-items:center;margin:0em 0.7em 1.5em 0.7em;padding:1.5rem 0.2rem;width:280px;min-width:200px;flex-grow:1;min-height:180px;text-align:center;border-radius:var(--fds-control-corner-radius);z-index:999;-webkit-transition:200ms ease-in-out;-o-transition:200ms ease-in-out;transition:200ms ease-in-out;-webkit-box-shadow:0 0 5px rgba(0, 0, 0, 0.3);box-shadow:0 0 5px rgba(0, 0, 0, 0.3);background:linear-gradient(\r\n                var(--fds-card-background-default),\r\n                var(--fds-card-background-default)\r\n            ),\r\n            linear-gradient(\r\n                var(--fds-solid-background-base),\r\n                var(--fds-solid-background-base)\r\n            )}.card-content.svelte-quqcrl{width:100%}.card-text.svelte-quqcrl{font-family:var(--fds-font-family-display);font-weight:600;font-size:28px;margin:0px;margin-left:10px;margin-right:10px}.card-subtext.svelte-quqcrl{font-family:var(--fds-font-family-display);font-size:18px;margin:0px;margin-top:1rem;margin-left:20px;margin-right:20px}.compare-image-div.svelte-quqcrl{padding:1.5em 5vw 0vw 5vw}",
      map: null
    };
    DynamicThemeFeature = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$3);
      return `<div class="${"container svelte-quqcrl"}">${validate_component(HeaderChip, "HeaderChip").$$render($$result, {}, {}, {
        default: () => {
          return `Feature`;
        }
      })}

    ${validate_component(TextBlock, "TextBlock").$$render($$result, {
        class: "titleText",
        variant: "titleLarge"
      }, {}, {
        default: () => {
          return `Dynamic Theme`;
        }
      })}
    ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "bodyLarge", class: "bodyText" }, {}, {
        default: () => {
          return `Switch your Windows theme or app theme based on time.
    `;
        }
      })}

    <div class="${"cards-collection svelte-quqcrl"}"><div class="${"card svelte-quqcrl"}"><div class="${"card-content svelte-quqcrl"}"><p class="${"card-text svelte-quqcrl"}">Automatic switching of theme</p>
                <p class="${"card-subtext svelte-quqcrl"}">You can configure DynaWin to automatically switch the theme
                    at specified timings. For example, you can automatically
                    switch Windows to Dark theme, so that it is easier on the
                    eyes at night.
                </p></div></div>

        <div class="${"card svelte-quqcrl"}"><div class="${"card-content svelte-quqcrl"}"><p class="${"card-text svelte-quqcrl"}">Choose which mode to switch</p>
                <p class="${"card-subtext svelte-quqcrl"}">You can configure DynaWin to switch only the app or system
                    theme, or both. This allows DynaWin to better cater to your
                    needs.
                </p></div></div></div>

    <div class="${"compare-image-div svelte-quqcrl"}"><div style="display: contents; --handle-size:${"2.5rem"}; --slider-color:${"#ffffff"}; --slider-width:${"0.125rem"};">${validate_component(CompareImage, "CompareImage").$$render($$result, {
        class: "image-comparer",
        imageLeftSrc: "/screenshots/dynawin/DynamicThemeLight.png",
        imageLeftAlt: "Light Theme",
        imageRightSrc: "/screenshots/dynawin/DynamicThemeDark.png",
        imageRightAlt: "Dark Theme"
      }, {}, {})}</div></div>
</div>`;
    });
    css$22 = {
      code: ".container.svelte-4v8q38{padding:2em 5vw 2em 5vw;background-color:var(--fds-solid-background-secondary);overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.container.svelte-4v8q38 .titleText{margin-left:5px;margin-right:5px}.container.svelte-4v8q38 .bodyText{display:block;text-align:center;margin:auto;margin-top:1.5em}.cards-collection.svelte-4v8q38{margin-top:1.5em;margin-bottom:-1.5em;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.card.svelte-4v8q38{display:flex;justify-content:center;align-items:center;margin:0em 0.7em 1.5em 0.7em;padding:1.5rem 0.2rem;width:280px;min-width:200px;flex-grow:1;min-height:180px;text-align:center;border-radius:var(--fds-control-corner-radius);z-index:999;-webkit-transition:200ms ease-in-out;-o-transition:200ms ease-in-out;transition:200ms ease-in-out;-webkit-box-shadow:0 0 5px rgba(0, 0, 0, 0.3);box-shadow:0 0 5px rgba(0, 0, 0, 0.3);background:linear-gradient(\r\n                var(--fds-card-background-default),\r\n                var(--fds-card-background-default)\r\n            ),\r\n            linear-gradient(\r\n                var(--fds-solid-background-secondary),\r\n                var(--fds-solid-background-secondary)\r\n            )}.card-content.svelte-4v8q38{width:100%}.card-text.svelte-4v8q38{font-family:var(--fds-font-family-display);font-weight:600;font-size:28px;margin:0px;margin-left:10px;margin-right:10px}.card-subtext.svelte-4v8q38{font-family:var(--fds-font-family-display);font-size:18px;margin:0px;margin-top:1rem;margin-left:20px;margin-right:20px}.compare-image-div.svelte-4v8q38{padding:1.5em 5vw 0vw 5vw}",
      map: null
    };
    DynamicWallpaperFeature = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$22);
      return `<div class="${"container svelte-4v8q38"}">${validate_component(HeaderChip, "HeaderChip").$$render($$result, {}, {}, {
        default: () => {
          return `Feature`;
        }
      })}

    ${validate_component(TextBlock, "TextBlock").$$render($$result, {
        class: "titleText",
        variant: "titleLarge"
      }, {}, {
        default: () => {
          return `Dynamic Wallpaper`;
        }
      })}
    ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "bodyLarge", class: "bodyText" }, {}, {
        default: () => {
          return `Switch your desktop wallpaper at certain triggers.
    `;
        }
      })}

    <div class="${"cards-collection svelte-4v8q38"}"><div class="${"card svelte-4v8q38"}"><div class="${"card-content svelte-4v8q38"}"><p class="${"card-text svelte-4v8q38"}">Automatic switching of desktop wallpaper
                </p>
                <p class="${"card-subtext svelte-4v8q38"}">You can configure DynaWin to automatically switch your
                    wallpaper at specific triggers. For example, you can
                    configure DynaWin to switch your wallpaper at night, to make
                    it easier on the eyes at night.
                </p></div></div>

        <div class="${"card svelte-4v8q38"}"><div class="${"card-content svelte-4v8q38"}"><p class="${"card-text svelte-4v8q38"}">Choose when to change your wallpaper</p>
                <p class="${"card-subtext svelte-4v8q38"}">You can choose to change your wallpaper either based on the
                    time, or based on your battery percentage. This can help remind you
                    when your battery is running low, or remind you to unplug
                    your laptop charger when your laptop is fully charged.
                </p></div></div></div>

    <div class="${"compare-image-div svelte-4v8q38"}"><div style="display: contents; --handle-size:${"2.5rem"}; --slider-color:${"#ffffff"}; --slider-width:${"0.125rem"};">${validate_component(CompareImage, "CompareImage").$$render($$result, {
        class: "image-comparer",
        imageLeftSrc: "/screenshots/dynawin/DynamicWallpaperLight.png",
        imageLeftAlt: "Light Theme",
        imageRightSrc: "/screenshots/dynawin/DynamicWallpaperDark.png",
        imageRightAlt: "Dark Theme"
      }, {}, {})}</div></div>
</div>`;
    });
    css$16 = {
      code: ".container.svelte-14h04yk{padding:2em 5vw 2em 5vw;background-color:var(--fds-solid-background-base);overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.container.svelte-14h04yk .titleText{margin-left:5px;margin-right:5px}.container.svelte-14h04yk .bodyText{display:block;text-align:center;margin:auto;margin-top:1.5em;max-width:1100px}",
      map: null
    };
    AutomaticUpdates = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$16);
      return `<div class="${"container svelte-14h04yk"}">${validate_component(HeaderChip, "HeaderChip").$$render($$result, {}, {}, {
        default: () => {
          return `Feature`;
        }
      })}

    ${validate_component(TextBlock, "TextBlock").$$render($$result, {
        class: "titleText",
        variant: "titleLarge"
      }, {}, {
        default: () => {
          return `Automatic Updates`;
        }
      })}
    ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "bodyLarge", class: "bodyText" }, {}, {
        default: () => {
          return `DynaWin also automatically notifies you when there is a new update. This
        is to ensure that you have the latest version of DynaWin at all times so
        that you can have the latest features available.
    `;
        }
      })}
</div>`;
    });
    css16 = {
      code: ".container.svelte-2gk8ks{padding:2em 5vw 2em 5vw;background-color:var(--fds-solid-background-secondary);overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.container.svelte-2gk8ks .titleText{margin-left:5px;margin-right:5px}.container.svelte-2gk8ks .bodyText{display:block;text-align:center;margin:auto;margin-top:1.5em}.cards-collection.svelte-2gk8ks{margin-top:1.5em;margin-bottom:-1.5em;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.card.svelte-2gk8ks{display:flex;justify-content:center;align-items:center;margin:0em 0.7em 1.5em 0.7em;padding:1.5rem 0.2rem;width:280px;min-width:200px;flex-grow:1;min-height:145px;text-align:center;border-radius:var(--fds-control-corner-radius);z-index:999;-webkit-transition:200ms ease-in-out;-o-transition:200ms ease-in-out;transition:200ms ease-in-out;-webkit-box-shadow:0 0 5px rgba(0, 0, 0, 0.3);box-shadow:0 0 5px rgba(0, 0, 0, 0.3);background:linear-gradient(\r\n                var(--fds-card-background-default),\r\n                var(--fds-card-background-default)\r\n            ),\r\n            linear-gradient(\r\n                var(--fds-solid-background-secondary),\r\n                var(--fds-solid-background-secondary)\r\n            )}.card-content.svelte-2gk8ks{width:100%}.card-text.svelte-2gk8ks{font-family:var(--fds-font-family-display);font-weight:600;font-size:28px;margin:0px;margin-left:10px;margin-right:10px}.card-subtext.svelte-2gk8ks{font-family:var(--fds-font-family-display);font-size:18px;margin:0px;margin-top:1rem;margin-left:20px;margin-right:20px}.download-btn{margin-top:calc(1.5em / 1.1);transform:scale(1.1)}.hyperlinks{margin-top:1em;margin-bottom:-0.5em;margin-left:10px;margin-right:10px}",
      map: null
    };
    DownloadLinks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css16);
      return `<div class="${"container svelte-2gk8ks"}">${validate_component(HeaderChip, "HeaderChip").$$render($$result, {}, {}, {
        default: () => {
          return `Links`;
        }
      })}

    ${validate_component(TextBlock, "TextBlock").$$render($$result, {
        class: "titleText",
        variant: "titleLarge"
      }, {}, {
        default: () => {
          return `Downloads and Links`;
        }
      })}
    ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "bodyLarge", class: "bodyText" }, {}, {
        default: () => {
          return `DynaWin downloads and other links.
    `;
        }
      })}

    <div class="${"cards-collection svelte-2gk8ks"}"><div class="${"card svelte-2gk8ks"}"><div class="${"card-content svelte-2gk8ks"}"><p class="${"card-text svelte-2gk8ks"}">Download DynaWin</p>
                <p class="${"card-subtext svelte-2gk8ks"}">Click the button below to download DynaWin:
                </p>
                ${validate_component(Button, "Button").$$render($$result, {
        onclick: "window.open('https://github.com/Apollo199999999/DynaWin/releases', '_blank');",
        variant: "accent",
        class: "download-btn"
      }, {}, {
        default: () => {
          return `Download DynaWin
                `;
        }
      })}</div></div>

        <div class="${"card svelte-2gk8ks"}"><div class="${"card-content svelte-2gk8ks"}"><p class="${"card-text svelte-2gk8ks"}">DynaWin links</p>
                ${validate_component(Button, "Button").$$render($$result, {
        class: "hyperlinks",
        onclick: "window.open('https://github.com/Apollo199999999/DynaWin', '_blank');",
        variant: "hyperlink"
      }, {}, {
        default: () => {
          return `DynaWin source code`;
        }
      })}
                ${validate_component(Button, "Button").$$render($$result, {
        class: "hyperlinks",
        onclick: "window.open('https://github.com/Apollo199999999/DynaWin/issues', '_blank');",
        variant: "hyperlink"
      }, {}, {
        default: () => {
          return `Report a bug`;
        }
      })}
                ${validate_component(Button, "Button").$$render($$result, {
        class: "hyperlinks",
        onclick: "window.open('https://github.com/Apollo199999999/DynaWin/issues', '_blank');",
        variant: "hyperlink"
      }, {}, {
        default: () => {
          return `Request a feature`;
        }
      })}
                ${validate_component(Button, "Button").$$render($$result, {
        class: "hyperlinks",
        onclick: "window.open('https://github.com/Apollo199999999/DynaWin/blob/main/NOTICE.txt', '_blank');",
        variant: "hyperlink"
      }, {}, {
        default: () => {
          return `Third Party Notices and Licenses`;
        }
      })}</div></div></div>
</div>`;
    });
    Dynawin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${$$result.head += `${$$result.title = `<title>DynaWin - ClickPhase</title>`, ""}<meta name="${"description"}" content="${"DynaWin - Dynamic Desktop for Windows 10 and Windows 11"}" data-svelte="svelte-iig045"><meta name="${"keywords"}" content="${"Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js"}" data-svelte="svelte-iig045"><meta name="${"author"}" content="${"ClickPhase"}" data-svelte="svelte-iig045">`, ""}

${validate_component(HeroSection4, "HeroSection").$$render($$result, {}, {}, {})}
${validate_component(AboutDynaWin, "AboutDynaWin").$$render($$result, {}, {}, {})}
${validate_component(Compatibility, "Compatibility").$$render($$result, {}, {}, {})}
${validate_component(DynamicThemeFeature, "DynamicThemeFeature").$$render($$result, {}, {}, {})}
${validate_component(DynamicWallpaperFeature, "DynamicWallpaperFeature").$$render($$result, {}, {}, {})}
${validate_component(AutomaticUpdates, "AutomaticUpdates").$$render($$result, {}, {}, {})}
${validate_component(DownloadLinks, "DownloadLinks").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/4.js
var __exports6 = {};
__export(__exports6, {
  css: () => css17,
  entry: () => entry6,
  js: () => js6,
  module: () => dynawin_svelte_exports
});
var entry6, js6, css17;
var init__6 = __esm({
  ".svelte-kit/output/server/nodes/4.js"() {
    init_dynawin_svelte();
    entry6 = "pages/dynawin.svelte-994e1fc4.js";
    js6 = ["pages/dynawin.svelte-994e1fc4.js", "chunks/index-a7d8ca41.js", "chunks/NavigationView.svelte_svelte_type_style_lang-86c9a88c.js", "chunks/MicaBackground-ff907a83.js", "chunks/Button-9d1ab1dc.js", "chunks/InfoBar-6ec7ff53.js", "chunks/HeaderChip-049c70ed.js", "chunks/index-adad17a3.js"];
    css17 = ["assets/pages/dynawin.svelte-c818b42b.css", "assets/NavigationView.svelte_svelte_type_style_lang-492d57f0.css", "assets/MicaBackground-b6441a3f.css", "assets/HeaderChip-3ac8b427.css"];
  }
});

// .svelte-kit/output/server/entries/pages/granny-keyboard.svelte.js
var granny_keyboard_svelte_exports = {};
__export(granny_keyboard_svelte_exports, {
  default: () => Granny_keyboard
});
var css$23, HeroSection5, css$17, AboutGrannyKeyboard, css18, DownloadLinks2, Granny_keyboard;
var init_granny_keyboard_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/granny-keyboard.svelte.js"() {
    init_index_223a4ced();
    init_NavigationView_svelte_svelte_type_style_lang_8088d3b7();
    init_MicaBackground_bde423f3();
    init_Button_9355eef8();
    init_HeaderChip_992c049f();
    css$23 = {
      code: '.parallax-container.svelte-1iyksoe.svelte-1iyksoe{position:relative;width:100%;height:72vh;overflow-y:hidden;align-items:center;justify-content:center;text-align:center}.bg-image-div.svelte-1iyksoe.svelte-1iyksoe{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.bg-image-div.svelte-1iyksoe img.svelte-1iyksoe{max-height:calc(72vh - 50px);max-width:95vw;content:url("/screenshots/granny-keyboard/Window.png");-webkit-fliter:blur(4px);filter:blur(4px)}.logo-components.svelte-1iyksoe.svelte-1iyksoe{position:absolute;word-wrap:break-word;top:50%;left:50%;transform:translate(-50%, -50%);width:90vw}.logo-components.svelte-1iyksoe img.svelte-1iyksoe{display:block;max-height:17vh;max-width:90vw;content:url("/app-images/granny-keyboard/logoLight.png");margin:auto}@media(prefers-color-scheme: dark){.logo-components.svelte-1iyksoe img.svelte-1iyksoe{display:block;max-height:17vh;max-width:90vw;content:url("/app-images/granny-keyboard/logoDark.png");margin:auto}}.logo-components.svelte-1iyksoe .caption-text{display:block;margin-top:10px}.logo-components.svelte-1iyksoe .download-btn{margin-top:calc(25px / calc(16/14))}',
      map: null
    };
    HeroSection5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let sy;
      $$result.css.add(css$23);
      return `


<div class="${"parallax-container svelte-1iyksoe"}">${validate_component(MicaBackground, "MicaBackground").$$render($$result, {}, {}, {})}

    <div class="${"bg-image-div svelte-1iyksoe"}"><img style="${"transform: translate(0," + escape(-sy * 0.2, true) + "px)"}" alt="${"Granny Keyboard Windows Screenshot"}" class="${"svelte-1iyksoe"}"></div>

    <div class="${"logo-components svelte-1iyksoe"}"><img style="${"transform: translate(0," + escape(-sy * 0.1, true) + "px)"}" alt="${"Granny Keyboard Logo"}" class="${"svelte-1iyksoe"}">
        ${validate_component(TextBlock, "TextBlock").$$render($$result, {
        variant: "subtitle",
        style: "transform: translate(0," + -sy * 0.1 + "px)",
        class: "caption-text"
      }, {}, {
        default: () => {
          return `Your keys will start worshipping Granny
        `;
        }
      })}

        ${validate_component(Button, "Button").$$render($$result, {
        class: "download-btn",
        style: "transform: translate(0," + -sy * 0.1 + "px) scale(calc(16/14))",
        onclick: "window.open('https://github.com/Apollo199999999/Granny-Keyboard/releases', '_blank');",
        variant: "accent"
      }, {}, {
        default: () => {
          return `Download Granny Keyboard
        `;
        }
      })}</div>
</div>`;
    });
    css$17 = {
      code: ".container.svelte-18fotlr.svelte-18fotlr{padding:2em 5vw 2em 5vw;background-color:var(--fds-solid-background-base);margin-top:1em;overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.container.svelte-18fotlr .titleText{margin-left:5px;margin-right:5px}.container.svelte-18fotlr .bodyText{display:block;text-align:center;margin:auto;margin-top:1.5em;max-width:1100px}.container.svelte-18fotlr iframe.svelte-18fotlr{width:90vw;max-width:840px;height:calc(calc(90vw / 16) * 9);max-height:473px;margin-top:1.5em}",
      map: null
    };
    AboutGrannyKeyboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$17);
      return `<div class="${"container svelte-18fotlr"}">${validate_component(HeaderChip, "HeaderChip").$$render($$result, {}, {}, {
        default: () => {
          return `About`;
        }
      })}
    
    ${validate_component(TextBlock, "TextBlock").$$render($$result, {
        variant: "titleLarge",
        class: "titleText"
      }, {}, {
        default: () => {
          return `About Granny Keyboard`;
        }
      })}

    ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "bodyLarge", class: "bodyText" }, {}, {
        default: () => {
          return `Granny Keyboard is a keyboard modifier that modifies your keyboard to
        make it worthy of Granny. Whichever key you press, the word &#39;Granny&#39;
        will be added in front of it and a dialog box will pop up.`;
        }
      })}

    <iframe src="${"https://www.youtube-nocookie.com/embed/NdBmcblzhFA"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen class="${"svelte-18fotlr"}"></iframe>
</div>`;
    });
    css18 = {
      code: ".container.svelte-2gk8ks{padding:2em 5vw 2em 5vw;background-color:var(--fds-solid-background-secondary);overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.container.svelte-2gk8ks .titleText{margin-left:5px;margin-right:5px}.container.svelte-2gk8ks .bodyText{display:block;text-align:center;margin:auto;margin-top:1.5em}.cards-collection.svelte-2gk8ks{margin-top:1.5em;margin-bottom:-1.5em;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.card.svelte-2gk8ks{display:flex;justify-content:center;align-items:center;margin:0em 0.7em 1.5em 0.7em;padding:1.5rem 0.2rem;width:280px;min-width:200px;flex-grow:1;min-height:145px;text-align:center;border-radius:var(--fds-control-corner-radius);z-index:999;-webkit-transition:200ms ease-in-out;-o-transition:200ms ease-in-out;transition:200ms ease-in-out;-webkit-box-shadow:0 0 5px rgba(0, 0, 0, 0.3);box-shadow:0 0 5px rgba(0, 0, 0, 0.3);background:linear-gradient(\r\n                var(--fds-card-background-default),\r\n                var(--fds-card-background-default)\r\n            ),\r\n            linear-gradient(\r\n                var(--fds-solid-background-secondary),\r\n                var(--fds-solid-background-secondary)\r\n            )}.card-content.svelte-2gk8ks{width:100%}.card-text.svelte-2gk8ks{font-family:var(--fds-font-family-display);font-weight:600;font-size:28px;margin:0px;margin-left:10px;margin-right:10px}.card-subtext.svelte-2gk8ks{font-family:var(--fds-font-family-display);font-size:18px;margin:0px;margin-top:1rem;margin-left:20px;margin-right:20px}.download-btn{margin-top:calc(1.5em / 1.1);transform:scale(1.1)}.hyperlinks{margin-top:1em;margin-bottom:-0.5em;margin-left:10px;margin-right:10px}",
      map: null
    };
    DownloadLinks2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css18);
      return `<div class="${"container svelte-2gk8ks"}">${validate_component(HeaderChip, "HeaderChip").$$render($$result, {}, {}, {
        default: () => {
          return `Links`;
        }
      })}

    ${validate_component(TextBlock, "TextBlock").$$render($$result, {
        class: "titleText",
        variant: "titleLarge"
      }, {}, {
        default: () => {
          return `Downloads and Links`;
        }
      })}
    ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "bodyLarge", class: "bodyText" }, {}, {
        default: () => {
          return `Granny Keyboard downloads and other links.
    `;
        }
      })}

    <div class="${"cards-collection svelte-2gk8ks"}"><div class="${"card svelte-2gk8ks"}"><div class="${"card-content svelte-2gk8ks"}"><p class="${"card-text svelte-2gk8ks"}">Download Granny Keyboard</p>
                <p class="${"card-subtext svelte-2gk8ks"}">Click the button below to download Granny Keyboard:
                </p>
                ${validate_component(Button, "Button").$$render($$result, {
        onclick: "window.open('https://github.com/Apollo199999999/Granny-Keyboard/releases', '_blank');",
        variant: "accent",
        class: "download-btn"
      }, {}, {
        default: () => {
          return `Download Granny Keyboard
                `;
        }
      })}</div></div>

        <div class="${"card svelte-2gk8ks"}"><div class="${"card-content svelte-2gk8ks"}"><p class="${"card-text svelte-2gk8ks"}">Granny Keyboard links</p>
                ${validate_component(Button, "Button").$$render($$result, {
        class: "hyperlinks",
        onclick: "window.open('https://github.com/Apollo199999999/Granny-Keyboard', '_blank');",
        variant: "hyperlink"
      }, {}, {
        default: () => {
          return `Granny Keyboard source code`;
        }
      })}
                ${validate_component(Button, "Button").$$render($$result, {
        class: "hyperlinks",
        onclick: "window.open('https://github.com/Apollo199999999/Granny-Keyboard/issues', '_blank');",
        variant: "hyperlink"
      }, {}, {
        default: () => {
          return `Report a bug`;
        }
      })}
                ${validate_component(Button, "Button").$$render($$result, {
        class: "hyperlinks",
        onclick: "window.open('https://github.com/Apollo199999999/Granny-Keyboard/issues', '_blank');",
        variant: "hyperlink"
      }, {}, {
        default: () => {
          return `Request a feature`;
        }
      })}</div></div></div>
</div>`;
    });
    Granny_keyboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${$$result.head += `${$$result.title = `<title>Granny Keyboard - ClickPhase</title>`, ""}<meta name="${"description"}" content="${"Granny Keyboard - Your keys will start worshipping Granny"}" data-svelte="svelte-17x9va3"><meta name="${"keywords"}" content="${"Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js"}" data-svelte="svelte-17x9va3"><meta name="${"author"}" content="${"ClickPhase"}" data-svelte="svelte-17x9va3">`, ""}

${validate_component(HeroSection5, "HeroSection").$$render($$result, {}, {}, {})}
${validate_component(AboutGrannyKeyboard, "AboutGrannyKeyboard").$$render($$result, {}, {}, {})}
${validate_component(DownloadLinks2, "DownloadLinks").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/5.js
var __exports7 = {};
__export(__exports7, {
  css: () => css19,
  entry: () => entry7,
  js: () => js7,
  module: () => granny_keyboard_svelte_exports
});
var entry7, js7, css19;
var init__7 = __esm({
  ".svelte-kit/output/server/nodes/5.js"() {
    init_granny_keyboard_svelte();
    entry7 = "pages/granny-keyboard.svelte-b68765e0.js";
    js7 = ["pages/granny-keyboard.svelte-b68765e0.js", "chunks/index-a7d8ca41.js", "chunks/NavigationView.svelte_svelte_type_style_lang-86c9a88c.js", "chunks/MicaBackground-ff907a83.js", "chunks/Button-9d1ab1dc.js", "chunks/HeaderChip-049c70ed.js"];
    css19 = ["assets/pages/granny-keyboard.svelte-8ad5b121.css", "assets/NavigationView.svelte_svelte_type_style_lang-492d57f0.css", "assets/MicaBackground-b6441a3f.css", "assets/HeaderChip-3ac8b427.css"];
  }
});

// .svelte-kit/output/server/entries/pages/launcherx.svelte.js
var launcherx_svelte_exports = {};
__export(launcherx_svelte_exports, {
  default: () => Launcherx
});
var css$24, HeroSection6, css$18, AboutLauncherX, css20, HowToInstall, Launcherx;
var init_launcherx_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/launcherx.svelte.js"() {
    init_index_223a4ced();
    init_NavigationView_svelte_svelte_type_style_lang_8088d3b7();
    init_MicaBackground_bde423f3();
    init_Button_9355eef8();
    init_InfoBar_c3821baf();
    init_HeaderChip_992c049f();
    css$24 = {
      code: '.parallax-container.svelte-egah5j.svelte-egah5j{position:relative;width:100%;height:72vh;overflow-y:hidden;align-items:center;justify-content:center;text-align:center}.bg-image-div.svelte-egah5j.svelte-egah5j{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.bg-image-div.svelte-egah5j img.svelte-egah5j{max-height:calc(72vh - 50px);max-width:80vw;content:url("/screenshots/launcherx/WindowLight.png");-webkit-fliter:blur(6px);filter:blur(6px)}@media(prefers-color-scheme: dark){.bg-image-div.svelte-egah5j img.svelte-egah5j{max-height:calc(72vh - 50px);max-width:80vw;content:url("/screenshots/launcherx/WindowDark.png");-webkit-fliter:blur(6px);filter:blur(6px)}}.logo-components.svelte-egah5j.svelte-egah5j{position:absolute;word-wrap:break-word;top:50%;left:50%;transform:translate(-50%, -50%);width:90vw}.logo-components.svelte-egah5j img.svelte-egah5j{display:block;max-height:15vh;max-width:80vw;content:url("/app-images/launcherx/logoLight.png");margin:auto}@media(prefers-color-scheme: dark){.logo-components.svelte-egah5j img.svelte-egah5j{display:block;max-height:15vh;max-width:80vw;content:url("/app-images/launcherx/logoDark.png");margin:auto}}.logo-components.svelte-egah5j .caption-text{display:block;margin-top:10px}.logo-components.svelte-egah5j .download-btn{margin-top:calc(25px / calc(16/14))}',
      map: null
    };
    HeroSection6 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let sy;
      $$result.css.add(css$24);
      return `


<div class="${"parallax-container svelte-egah5j"}">${validate_component(MicaBackground, "MicaBackground").$$render($$result, {}, {}, {})}

    <div class="${"bg-image-div svelte-egah5j"}"><img style="${"transform: translate(0," + escape(-sy * 0.2, true) + "px)"}" alt="${"LauncherX Window Screenshot"}" class="${"svelte-egah5j"}"></div>

    <div class="${"logo-components svelte-egah5j"}"><img style="${"transform: translate(0," + escape(-sy * 0.1, true) + "px)"}" alt="${"LauncherX Logo"}" class="${"svelte-egah5j"}">
        ${validate_component(TextBlock, "TextBlock").$$render($$result, {
        variant: "subtitle",
        style: "transform: translate(0," + -sy * 0.1 + "px)",
        class: "caption-text"
      }, {}, {
        default: () => {
          return `Organise all your stuff!
        `;
        }
      })}

        ${validate_component(Button, "Button").$$render($$result, {
        class: "download-btn",
        style: "transform: translate(0," + -sy * 0.1 + "px) scale(calc(16/14))",
        onclick: "window.open('https://github.com/Apollo199999999/LauncherX/releases', '_blank');",
        variant: "accent"
      }, {}, {
        default: () => {
          return `Download LauncherX
        `;
        }
      })}</div>
</div>`;
    });
    css$18 = {
      code: ".padding-div.svelte-1qg3puz.svelte-1qg3puz{padding:2em 5vw 2em 5vw;background-color:var(--fds-solid-background-base)}.attention-infobar{max-width:1060px;margin:auto;padding:0.2em}.links.svelte-1qg3puz.svelte-1qg3puz{color:var(--fds-accent-text-primary);text-align:center;overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;-ms-hyphens:auto;-moz-hyphens:auto;-webkit-hyphens:auto;hyphens:auto}.container.svelte-1qg3puz.svelte-1qg3puz{background-color:var(--fds-solid-background-base);margin-top:1em;overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.container.svelte-1qg3puz .titleText{margin-left:5px;margin-right:5px}.container.svelte-1qg3puz .bodyText{display:block;text-align:center;margin:auto;margin-top:1.5em;max-width:1100px}.container.svelte-1qg3puz iframe.svelte-1qg3puz{width:90vw;max-width:840px;height:calc(calc(90vw / 16) * 9);max-height:473px;margin-top:1.5em}",
      map: null
    };
    AboutLauncherX = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$18);
      return `<div class="${"padding-div svelte-1qg3puz"}">${validate_component(InfoBar, "InfoBar").$$render($$result, {
        severity: "caution",
        class: "attention-infobar",
        title: "Attention"
      }, {}, {
        default: () => {
          return `This page is still under construction. For now, please head to <a class="${"links svelte-1qg3puz"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://clickphase.weebly.com/launcherx.html"}">https://clickphase.weebly.com/launcherx.html
        </a>
        for information about LauncherX.
    `;
        }
      })}

    <div class="${"container svelte-1qg3puz"}">${validate_component(HeaderChip, "HeaderChip").$$render($$result, {}, {}, {
        default: () => {
          return `About`;
        }
      })}

        ${validate_component(TextBlock, "TextBlock").$$render($$result, {
        variant: "titleLarge",
        class: "titleText"
      }, {}, {
        default: () => {
          return `About LauncherX`;
        }
      })}

        ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "bodyLarge", class: "bodyText" }, {}, {
        default: () => {
          return `LauncherX is a Windows Program used to organize and access all of
            your files, folders, websites, and pretty much anything.`;
        }
      })}

        <iframe src="${"https://www.youtube-nocookie.com/embed/TPSv2jQtsIA"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen class="${"svelte-1qg3puz"}"></iframe></div>
</div>`;
    });
    css20 = {
      code: ".container.svelte-1j28iyo.svelte-1j28iyo{padding:2em 5vw 2em 5vw;background-color:var(--fds-solid-background-secondary);overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.container.svelte-1j28iyo .titleText{margin-left:5px;margin-right:5px}.container.svelte-1j28iyo .bodyText{display:block;text-align:center;margin:auto;margin-top:1.5em;max-width:1100px}.container.svelte-1j28iyo iframe.svelte-1j28iyo{width:90vw;max-width:840px;height:calc(calc(90vw / 16) * 9);max-height:473px;margin-top:1.5em}",
      map: null
    };
    HowToInstall = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css20);
      return `<div class="${"container svelte-1j28iyo"}">${validate_component(HeaderChip, "HeaderChip").$$render($$result, {}, {}, {
        default: () => {
          return `Installation`;
        }
      })}

    ${validate_component(TextBlock, "TextBlock").$$render($$result, {
        variant: "titleLarge",
        class: "titleText"
      }, {}, {
        default: () => {
          return `How to install`;
        }
      })}

    ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "bodyLarge", class: "bodyText" }, {}, {
        default: () => {
          return `How to install LauncherX.`;
        }
      })}

    <iframe src="${"https://www.youtube-nocookie.com/embed/8QV_SVkfgtU"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen class="${"svelte-1j28iyo"}"></iframe>
</div>`;
    });
    Launcherx = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${$$result.head += `${$$result.title = `<title>LauncherX - ClickPhase</title>`, ""}<meta name="${"description"}" content="${"LauncherX - Organise all your stuff!"}" data-svelte="svelte-107j836"><meta name="${"keywords"}" content="${"Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js"}" data-svelte="svelte-107j836"><meta name="${"author"}" content="${"ClickPhase"}" data-svelte="svelte-107j836">`, ""}

${validate_component(HeroSection6, "HeroSection").$$render($$result, {}, {}, {})}
${validate_component(AboutLauncherX, "AboutLauncherX").$$render($$result, {}, {}, {})}
${validate_component(HowToInstall, "HowToInstall").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/7.js
var __exports8 = {};
__export(__exports8, {
  css: () => css21,
  entry: () => entry8,
  js: () => js8,
  module: () => launcherx_svelte_exports
});
var entry8, js8, css21;
var init__8 = __esm({
  ".svelte-kit/output/server/nodes/7.js"() {
    init_launcherx_svelte();
    entry8 = "pages/launcherx.svelte-b2954deb.js";
    js8 = ["pages/launcherx.svelte-b2954deb.js", "chunks/index-a7d8ca41.js", "chunks/NavigationView.svelte_svelte_type_style_lang-86c9a88c.js", "chunks/MicaBackground-ff907a83.js", "chunks/Button-9d1ab1dc.js", "chunks/InfoBar-6ec7ff53.js", "chunks/HeaderChip-049c70ed.js"];
    css21 = ["assets/pages/launcherx.svelte-6230db58.css", "assets/NavigationView.svelte_svelte_type_style_lang-492d57f0.css", "assets/MicaBackground-b6441a3f.css", "assets/HeaderChip-3ac8b427.css"];
  }
});

// node_modules/screenfull/dist/screenfull.js
var require_screenfull = __commonJS({
  "node_modules/screenfull/dist/screenfull.js"(exports, module2) {
    (function() {
      "use strict";
      var document2 = typeof window !== "undefined" && typeof window.document !== "undefined" ? window.document : {};
      var isCommonjs = typeof module2 !== "undefined" && module2.exports;
      var fn = function() {
        var val;
        var fnMap = [
          [
            "requestFullscreen",
            "exitFullscreen",
            "fullscreenElement",
            "fullscreenEnabled",
            "fullscreenchange",
            "fullscreenerror"
          ],
          [
            "webkitRequestFullscreen",
            "webkitExitFullscreen",
            "webkitFullscreenElement",
            "webkitFullscreenEnabled",
            "webkitfullscreenchange",
            "webkitfullscreenerror"
          ],
          [
            "webkitRequestFullScreen",
            "webkitCancelFullScreen",
            "webkitCurrentFullScreenElement",
            "webkitCancelFullScreen",
            "webkitfullscreenchange",
            "webkitfullscreenerror"
          ],
          [
            "mozRequestFullScreen",
            "mozCancelFullScreen",
            "mozFullScreenElement",
            "mozFullScreenEnabled",
            "mozfullscreenchange",
            "mozfullscreenerror"
          ],
          [
            "msRequestFullscreen",
            "msExitFullscreen",
            "msFullscreenElement",
            "msFullscreenEnabled",
            "MSFullscreenChange",
            "MSFullscreenError"
          ]
        ];
        var i2 = 0;
        var l = fnMap.length;
        var ret = {};
        for (; i2 < l; i2++) {
          val = fnMap[i2];
          if (val && val[1] in document2) {
            for (i2 = 0; i2 < val.length; i2++) {
              ret[fnMap[0][i2]] = val[i2];
            }
            return ret;
          }
        }
        return false;
      }();
      var eventNameMap = {
        change: fn.fullscreenchange,
        error: fn.fullscreenerror
      };
      var screenfull2 = {
        request: function(element, options) {
          return new Promise(function(resolve2, reject) {
            var onFullScreenEntered = function() {
              this.off("change", onFullScreenEntered);
              resolve2();
            }.bind(this);
            this.on("change", onFullScreenEntered);
            element = element || document2.documentElement;
            var returnPromise = element[fn.requestFullscreen](options);
            if (returnPromise instanceof Promise) {
              returnPromise.then(onFullScreenEntered).catch(reject);
            }
          }.bind(this));
        },
        exit: function() {
          return new Promise(function(resolve2, reject) {
            if (!this.isFullscreen) {
              resolve2();
              return;
            }
            var onFullScreenExit = function() {
              this.off("change", onFullScreenExit);
              resolve2();
            }.bind(this);
            this.on("change", onFullScreenExit);
            var returnPromise = document2[fn.exitFullscreen]();
            if (returnPromise instanceof Promise) {
              returnPromise.then(onFullScreenExit).catch(reject);
            }
          }.bind(this));
        },
        toggle: function(element, options) {
          return this.isFullscreen ? this.exit() : this.request(element, options);
        },
        onchange: function(callback) {
          this.on("change", callback);
        },
        onerror: function(callback) {
          this.on("error", callback);
        },
        on: function(event, callback) {
          var eventName = eventNameMap[event];
          if (eventName) {
            document2.addEventListener(eventName, callback, false);
          }
        },
        off: function(event, callback) {
          var eventName = eventNameMap[event];
          if (eventName) {
            document2.removeEventListener(eventName, callback, false);
          }
        },
        raw: fn
      };
      if (!fn) {
        if (isCommonjs) {
          module2.exports = { isEnabled: false };
        } else {
          window.screenfull = { isEnabled: false };
        }
        return;
      }
      Object.defineProperties(screenfull2, {
        isFullscreen: {
          get: function() {
            return Boolean(document2[fn.fullscreenElement]);
          }
        },
        element: {
          enumerable: true,
          get: function() {
            return document2[fn.fullscreenElement];
          }
        },
        isEnabled: {
          enumerable: true,
          get: function() {
            return Boolean(document2[fn.fullscreenEnabled]);
          }
        }
      });
      if (isCommonjs) {
        module2.exports = screenfull2;
      } else {
        window.screenfull = screenfull2;
      }
    })();
  }
});

// .svelte-kit/output/server/entries/pages/p5js-paint-app.svelte.js
var p5js_paint_app_svelte_exports = {};
__export(p5js_paint_app_svelte_exports, {
  default: () => P5js_paint_app
});
var import_screenfull, css$19, HeroSection7, Fullscreen, css22, P5jsFrameSection, P5js_paint_app;
var init_p5js_paint_app_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/p5js-paint-app.svelte.js"() {
    init_index_223a4ced();
    init_NavigationView_svelte_svelte_type_style_lang_8088d3b7();
    init_MicaBackground_bde423f3();
    init_Button_9355eef8();
    import_screenfull = __toESM(require_screenfull(), 1);
    init_HeaderChip_992c049f();
    css$19 = {
      code: '.parallax-container.svelte-1u6dzon.svelte-1u6dzon{position:relative;width:100%;height:72vh;overflow-y:hidden;align-items:center;justify-content:center;text-align:center}.bg-image-div.svelte-1u6dzon.svelte-1u6dzon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.bg-image-div.svelte-1u6dzon img.svelte-1u6dzon{max-height:calc(72vh - 50px);max-width:80vw;content:url("/screenshots/p5js-paint-app/Window.png");-webkit-fliter:blur(4px);filter:blur(4px)}@media(prefers-color-scheme: dark){.bg-image-div.svelte-1u6dzon img.svelte-1u6dzon{max-height:calc(72vh - 50px);max-width:80vw;content:url("/screenshots/p5js-paint-app/Window.png");-webkit-fliter:blur(4px) brightness(0.8);filter:blur(4px) brightness(0.8)}}.logo-components.svelte-1u6dzon.svelte-1u6dzon{position:absolute;word-wrap:break-word;top:50%;left:50%;transform:translate(-50%, -50%);width:90vw}.logo-components.svelte-1u6dzon .logo-title{display:block;line-height:normal;font-size:min(7vmax, 68px);margin:auto}.logo-components.svelte-1u6dzon .caption-text{display:block;margin-top:20px}.logo-components.svelte-1u6dzon .visit-btn{margin-top:calc(25px / calc(16 / 14))}',
      map: null
    };
    HeroSection7 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let sy;
      $$result.css.add(css$19);
      return `


<div class="${"parallax-container svelte-1u6dzon"}">${validate_component(MicaBackground, "MicaBackground").$$render($$result, {}, {}, {})}

    <div class="${"bg-image-div svelte-1u6dzon"}"><img style="${"transform: translate(0," + escape(-sy * 0.2, true) + "px)"}" alt="${"p5.js Paint App Screenshot"}" class="${"svelte-1u6dzon"}"></div>

    <div class="${"logo-components svelte-1u6dzon"}">${validate_component(TextBlock, "TextBlock").$$render($$result, {
        class: "logo-title",
        style: "transform: translate(0," + -sy * 0.1 + "px)",
        variant: "display"
      }, {}, {
        default: () => {
          return `p5.js Paint App`;
        }
      })}
        ${validate_component(TextBlock, "TextBlock").$$render($$result, {
        variant: "subtitle",
        style: "transform: translate(0," + -sy * 0.1 + "px)",
        class: "caption-text"
      }, {}, {
        default: () => {
          return `A lightweight, online, and minimal paint app made in p5.js
        `;
        }
      })}

        ${validate_component(Button, "Button").$$render($$result, {
        class: "visit-btn",
        style: "transform: translate(0," + -sy * 0.1 + "px) scale(calc(16/14))",
        onclick: "window.open('https://editor.p5js.org/Apollo199999999/sketches/X0Y6tSIjJ', '_blank');",
        variant: "accent"
      }, {}, {
        default: () => {
          return `Visit Paint App on p5.js
        `;
        }
      })}</div>
</div>`;
    });
    Fullscreen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let component;
      createEventDispatcher();
      const onToggle = () => {
        if (import_screenfull.default.isEnabled && (component == null ? void 0 : component.nextElementSibling)) {
          import_screenfull.default.toggle(component.nextElementSibling);
        }
      };
      const onRequest = () => {
        if (import_screenfull.default.isEnabled && (component == null ? void 0 : component.nextElementSibling)) {
          import_screenfull.default.request(component.nextElementSibling);
        }
      };
      const onExit = () => {
        if (import_screenfull.default.isEnabled && (component == null ? void 0 : component.nextElementSibling)) {
          import_screenfull.default.exit();
        }
      };
      onDestroy(() => {
        if (import_screenfull.default.isEnabled) {
          import_screenfull.default.off("change", () => true);
          import_screenfull.default.off("error", () => true);
        }
      });
      return `<div style="${"width:0; height:0"}"${add_attribute("this", component, 0)}></div>
${slots.default ? slots.default({ onToggle, onRequest, onExit }) : ``}`;
    });
    css22 = {
      code: ".container.svelte-1vlp3o7{margin-top:1em;padding:2em 5vw 2em 5vw;overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.container.svelte-1vlp3o7 .bodyText{display:block;text-align:center;margin:auto;margin-top:1.5em}.paint-app-frame.svelte-1vlp3o7{display:flex;align-items:center;justify-content:center;background-color:var(--fds-solid-background-base)}.frame-div.svelte-1vlp3o7{overflow-x:scroll;width:90vw;height:100%}.paint-app-frame.svelte-1vlp3o7 .fullscreen-btn{margin:1em}",
      map: null
    };
    P5jsFrameSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css22);
      return `<div class="${"container svelte-1vlp3o7"}">${validate_component(HeaderChip, "HeaderChip").$$render($$result, {}, {}, {
        default: () => {
          return `About`;
        }
      })}
    
    ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "titleLarge" }, {}, {
        default: () => {
          return `p5.js Paint App`;
        }
      })}
    ${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "bodyLarge", class: "bodyText" }, {}, {
        default: () => {
          return `A lightweight, online, and minimal paint app developed in p5.js by me.
        (Works best on desktop, does not work well on mobile)
    `;
        }
      })}

    ${validate_component(Fullscreen, "Fullscreen").$$render($$result, {}, {}, {
        default: ({ onToggle }) => {
          return `<div class="${"paint-app-frame svelte-1vlp3o7"}"><div><div class="${"fullscreen-btn-div"}">${validate_component(Button, "Button").$$render($$result, {
            class: "fullscreen-btn",
            variant: "accent"
          }, {}, {
            default: () => {
              return `Toggle Fullscreen`;
            }
          })}</div>
                <div class="${"frame-div svelte-1vlp3o7"}"><iframe title="${"p5.js Paint App"}" width="${"900"}" height="${"642"}" src="${"https://editor.p5js.org/Apollo199999999/embed/X0Y6tSIjJ"}"></iframe></div></div></div>`;
        }
      })}
</div>`;
    });
    P5js_paint_app = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${$$result.head += `${$$result.title = `<title>p5.js Paint App - ClickPhase</title>`, ""}<meta name="${"description"}" content="${"p5.js - A lightweight, online, and minimal paint app made in p5.js"}" data-svelte="svelte-vyya11"><meta name="${"keywords"}" content="${"Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js"}" data-svelte="svelte-vyya11"><meta name="${"author"}" content="${"ClickPhase"}" data-svelte="svelte-vyya11">`, ""}

${validate_component(HeroSection7, "HeroSection").$$render($$result, {}, {}, {})}
${validate_component(P5jsFrameSection, "P5jsFrameSection").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/8.js
var __exports9 = {};
__export(__exports9, {
  css: () => css23,
  entry: () => entry9,
  js: () => js9,
  module: () => p5js_paint_app_svelte_exports
});
var entry9, js9, css23;
var init__9 = __esm({
  ".svelte-kit/output/server/nodes/8.js"() {
    init_p5js_paint_app_svelte();
    entry9 = "pages/p5js-paint-app.svelte-cba55676.js";
    js9 = ["pages/p5js-paint-app.svelte-cba55676.js", "chunks/index-a7d8ca41.js", "chunks/NavigationView.svelte_svelte_type_style_lang-86c9a88c.js", "chunks/MicaBackground-ff907a83.js", "chunks/Button-9d1ab1dc.js", "chunks/HeaderChip-049c70ed.js"];
    css23 = ["assets/pages/p5js-paint-app.svelte-411d2b0a.css", "assets/NavigationView.svelte_svelte_type_style_lang-492d57f0.css", "assets/MicaBackground-b6441a3f.css", "assets/HeaderChip-3ac8b427.css"];
  }
});

// .svelte-kit/output/server/entries/pages/software.svelte.js
var software_svelte_exports = {};
__export(software_svelte_exports, {
  default: () => Software
});
var css$110, HeroSection8, css24, AllSoftware, Software;
var init_software_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/software.svelte.js"() {
    init_index_223a4ced();
    init_NavigationView_svelte_svelte_type_style_lang_8088d3b7();
    init_MicaBackground_bde423f3();
    css$110 = {
      code: ".container.svelte-kgadmr{position:relative;word-wrap:break-word;align-items:center;justify-content:center;text-align:center}.text-div.svelte-kgadmr{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.text-div.svelte-kgadmr .titleText{line-height:normal;font-size:min(7vmax, 68px)}",
      map: null
    };
    HeroSection8 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let sy;
      $$result.css.add(css$110);
      return `


<div class="${"container svelte-kgadmr"}">${validate_component(MicaBackground, "MicaBackground").$$render($$result, {}, {}, {})}
    <div class="${"text-div svelte-kgadmr"}">${validate_component(TextBlock, "TextBlock").$$render($$result, {
        class: "titleText",
        style: "transform: translate(0," + -sy * 0.2 + "px)",
        variant: "display"
      }, {}, {
        default: () => {
          return `Software`;
        }
      })}</div>
</div>`;
    });
    css24 = {
      code: ".container.svelte-9pbw57{margin-top:1em;padding:2em 5vw 2em 5vw;overflow:hidden;word-wrap:break-word;align-items:center;justify-content:center;text-align:center;overflow:hidden}.cards-collection.svelte-9pbw57{margin-top:1.5em;margin-bottom:-1.5em;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.card.svelte-9pbw57{display:flex;justify-content:center;align-items:center;margin:0em 0.7em 1.5em 0.7em;width:280px;min-width:200px;flex-grow:1;height:350px;text-align:center;border-radius:var(--fds-control-corner-radius);z-index:999;-webkit-transition:200ms ease-in-out;-o-transition:200ms ease-in-out;transition:200ms ease-in-out;-webkit-box-shadow:0 0 15px rgba(0, 0, 0, 0.3);box-shadow:0 0 15px rgba(0, 0, 0, 0.3);background:linear-gradient(\r\n                var(--fds-card-background-default),\r\n                var(--fds-card-background-default)\r\n            ),\r\n            linear-gradient(\r\n                var(--fds-solid-background-base),\r\n                var(--fds-solid-background-base)\r\n            )}.card.svelte-9pbw57:hover{transform:scale(1.035);-webkit-box-shadow:0 0 20px rgba(0, 0, 0, 0.2);box-shadow:0 0 20px rgba(0, 0, 0, 0.2)}.card-content.svelte-9pbw57{width:100%}.card-image.svelte-9pbw57{width:80%;max-width:260px}.card-text.svelte-9pbw57{font-family:var(--fds-font-family-display);font-weight:600;font-size:28px;margin:0px;margin-top:1.5rem;margin-left:10px;margin-right:10px}.card-subtext.svelte-9pbw57{font-family:var(--fds-font-family-display);font-size:18px;margin:0px;margin-top:1rem;margin-left:20px;margin-right:20px}",
      map: null
    };
    AllSoftware = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css24);
      return `<div class="${"container svelte-9pbw57"}">${validate_component(TextBlock, "TextBlock").$$render($$result, { variant: "titleLarge" }, {}, {
        default: () => {
          return `All Software`;
        }
      })}

    <div class="${"cards-collection svelte-9pbw57"}"><div class="${"card svelte-9pbw57"}" onclick="${"window.location.href = '/p5js-paint-app';"}"><div class="${"card-content svelte-9pbw57"}"><img class="${"card-image svelte-9pbw57"}" alt="${"p5.js Paint App"}" src="${"/app-images/p5js-paint-app/p5jsPaintAppImage.png"}">
                <p class="${"card-text svelte-9pbw57"}">p5.js Paint App</p>
                <p class="${"card-subtext svelte-9pbw57"}">A lightweight, online, and minimal paint app made in p5.js</p></div></div>

        <div class="${"card svelte-9pbw57"}" onclick="${"window.location.href = '/dynawin';"}"><div class="${"card-content svelte-9pbw57"}"><img class="${"card-image svelte-9pbw57"}" alt="${"DynaWin"}" src="${"/app-images/dynawin/DynaWinImage.jpg"}">
                <p class="${"card-text svelte-9pbw57"}">DynaWin</p>
                <p class="${"card-subtext svelte-9pbw57"}">Dynamic Desktop for Windows 10 and Windows 11</p></div></div>

        <div class="${"card svelte-9pbw57"}" onclick="${"window.location.href = '/launcherx';"}"><div class="${"card-content svelte-9pbw57"}"><img class="${"card-image svelte-9pbw57"}" alt="${"LauncherX"}" src="${"/app-images/launcherx/LauncherXImage.png"}">
                <p class="${"card-text svelte-9pbw57"}">LauncherX</p>
                <p class="${"card-subtext svelte-9pbw57"}">Organise all your stuff!</p></div></div>

        <div class="${"card svelte-9pbw57"}" onclick="${"window.location.href = '/granny-keyboard';"}"><div class="${"card-content svelte-9pbw57"}"><img class="${"card-image svelte-9pbw57"}" alt="${"Granny Keyboard"}" src="${"/app-images/granny-keyboard/GrannyKeyboardImage.png"}">
                <p class="${"card-text svelte-9pbw57"}">Granny Keyboard</p>
                <p class="${"card-subtext svelte-9pbw57"}">Your keys will start worshipping Granny</p></div></div></div>
</div>`;
    });
    Software = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${$$result.head += `${$$result.title = `<title>Software - ClickPhase</title>`, ""}<meta name="${"description"}" content="${"Software made by ClickPhase. LauncherX, DynaWin, and others."}" data-svelte="svelte-170st9z"><meta name="${"keywords"}" content="${"Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js"}" data-svelte="svelte-170st9z"><meta name="${"author"}" content="${"ClickPhase"}" data-svelte="svelte-170st9z">`, ""}

${validate_component(HeroSection8, "HeroSection").$$render($$result, {}, {}, {})}
${validate_component(AllSoftware, "AllSoftware").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/9.js
var __exports10 = {};
__export(__exports10, {
  css: () => css25,
  entry: () => entry10,
  js: () => js10,
  module: () => software_svelte_exports
});
var entry10, js10, css25;
var init__10 = __esm({
  ".svelte-kit/output/server/nodes/9.js"() {
    init_software_svelte();
    entry10 = "pages/software.svelte-cd9f200e.js";
    js10 = ["pages/software.svelte-cd9f200e.js", "chunks/index-a7d8ca41.js", "chunks/NavigationView.svelte_svelte_type_style_lang-86c9a88c.js", "chunks/MicaBackground-ff907a83.js"];
    css25 = ["assets/pages/software.svelte-5528fcc6.css", "assets/NavigationView.svelte_svelte_type_style_lang-492d57f0.css", "assets/MicaBackground-b6441a3f.css"];
  }
});

// .svelte-kit/vercel-tmp/serverless.js
var serverless_exports = {};
__export(serverless_exports, {
  default: () => serverless_default
});
module.exports = __toCommonJS(serverless_exports);
init_install_fetch();

// node_modules/@sveltejs/kit/dist/node.js
var import_stream = require("stream");
function get_raw_body(req) {
  return new Promise((fulfil, reject) => {
    const h2 = req.headers;
    if (!h2["content-type"]) {
      return fulfil(null);
    }
    req.on("error", reject);
    const length = Number(h2["content-length"]);
    if (isNaN(length) && h2["transfer-encoding"] == null) {
      return fulfil(null);
    }
    let data = new Uint8Array(length || 0);
    if (length > 0) {
      let offset = 0;
      req.on("data", (chunk) => {
        const new_len = offset + Buffer.byteLength(chunk);
        if (new_len > length) {
          return reject({
            status: 413,
            reason: 'Exceeded "Content-Length" limit'
          });
        }
        data.set(chunk, offset);
        offset = new_len;
      });
    } else {
      req.on("data", (chunk) => {
        const new_data = new Uint8Array(data.length + chunk.length);
        new_data.set(data, 0);
        new_data.set(chunk, data.length);
        data = new_data;
      });
    }
    req.on("end", () => {
      fulfil(data);
    });
  });
}
async function getRequest(base2, req) {
  let headers = req.headers;
  if (req.httpVersionMajor === 2) {
    headers = Object.assign({}, headers);
    delete headers[":method"];
    delete headers[":path"];
    delete headers[":authority"];
    delete headers[":scheme"];
  }
  return new Request(base2 + req.url, {
    method: req.method,
    headers,
    body: await get_raw_body(req)
  });
}
async function setResponse(res, response) {
  const headers = Object.fromEntries(response.headers);
  if (response.headers.has("set-cookie")) {
    headers["set-cookie"] = response.headers.raw()["set-cookie"];
  }
  res.writeHead(response.status, headers);
  if (response.body instanceof import_stream.Readable) {
    response.body.pipe(res);
  } else {
    if (response.body) {
      res.write(await response.arrayBuffer());
    }
    res.end();
  }
}

// .svelte-kit/output/server/index.js
init_index_223a4ced();
var __accessCheck2 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet2 = (obj, member, getter) => {
  __accessCheck2(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd2 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet2 = (obj, member, value, setter) => {
  __accessCheck2(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _use_hashes;
var _dev;
var _script_needs_csp;
var _style_needs_csp;
var _directives;
var _script_src;
var _style_src;
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { components } = $$props;
  let { props_0 = null } = $$props;
  let { props_1 = null } = $$props;
  let { props_2 = null } = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  {
    stores.page.set(page2);
  }
  return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => {
      return `${components[2] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
        default: () => {
          return `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}`;
        }
      })}` : `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {})}`}`;
    }
  })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {})}`}

${``}`;
});
function to_headers(object) {
  const headers = new Headers();
  if (object) {
    for (const key2 in object) {
      const value = object[key2];
      if (!value)
        continue;
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          headers.append(key2, value2);
        });
      } else {
        headers.set(key2, value);
      }
    }
  }
  return headers;
}
function hash(value) {
  let hash2 = 5381;
  let i2 = value.length;
  if (typeof value === "string") {
    while (i2)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i2);
  } else {
    while (i2)
      hash2 = hash2 * 33 ^ value[--i2];
  }
  return (hash2 >>> 0).toString(36);
}
function lowercase_keys(obj) {
  const clone2 = {};
  for (const key2 in obj) {
    clone2[key2.toLowerCase()] = obj[key2];
  }
  return clone2;
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = params[key2].replace(/%23/g, "#").replace(/%3[Bb]/g, ";").replace(/%2[Cc]/g, ",").replace(/%2[Ff]/g, "/").replace(/%3[Ff]/g, "?").replace(/%3[Aa]/g, ":").replace(/%40/g, "@").replace(/%26/g, "&").replace(/%3[Dd]/g, "=").replace(/%2[Bb]/g, "+").replace(/%24/g, "$");
  }
  return params;
}
function is_pojo(body) {
  if (typeof body !== "object")
    return false;
  if (body) {
    if (body instanceof Uint8Array)
      return false;
    if (body._readableState && typeof body.pipe === "function")
      return false;
    if (typeof ReadableStream !== "undefined" && body instanceof ReadableStream)
      return false;
  }
  return true;
}
function normalize_request_method(event) {
  const method = event.request.method.toLowerCase();
  return method === "delete" ? "del" : method;
}
function error(body) {
  return new Response(body, {
    status: 500
  });
}
function is_string(s22) {
  return typeof s22 === "string" || s22 instanceof String;
}
var text_types = /* @__PURE__ */ new Set([
  "application/xml",
  "application/json",
  "application/x-www-form-urlencoded",
  "multipart/form-data"
]);
function is_text(content_type) {
  if (!content_type)
    return true;
  const type = content_type.split(";")[0].toLowerCase();
  return type.startsWith("text/") || type.endsWith("+xml") || text_types.has(type);
}
async function render_endpoint(event, mod) {
  const method = normalize_request_method(event);
  let handler = mod[method];
  if (!handler && method === "head") {
    handler = mod.get;
  }
  if (!handler) {
    const allowed = [];
    for (const method2 in ["get", "post", "put", "patch"]) {
      if (mod[method2])
        allowed.push(method2.toUpperCase());
    }
    if (mod.del)
      allowed.push("DELETE");
    if (mod.get || mod.head)
      allowed.push("HEAD");
    return event.request.headers.get("x-sveltekit-load") ? new Response(void 0, {
      status: 204
    }) : new Response(`${event.request.method} method not allowed`, {
      status: 405,
      headers: {
        allow: allowed.join(", ")
      }
    });
  }
  const response = await handler(event);
  const preface = `Invalid response from route ${event.url.pathname}`;
  if (typeof response !== "object") {
    return error(`${preface}: expected an object, got ${typeof response}`);
  }
  if (response.fallthrough) {
    throw new Error("fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching");
  }
  const { status = 200, body = {} } = response;
  const headers = response.headers instanceof Headers ? new Headers(response.headers) : to_headers(response.headers);
  const type = headers.get("content-type");
  if (!is_text(type) && !(body instanceof Uint8Array || is_string(body))) {
    return error(`${preface}: body must be an instance of string or Uint8Array if content-type is not a supported textual content-type`);
  }
  let normalized_body;
  if (is_pojo(body) && (!type || type.startsWith("application/json"))) {
    headers.set("content-type", "application/json; charset=utf-8");
    normalized_body = JSON.stringify(body);
  } else {
    normalized_body = body;
  }
  if ((typeof normalized_body === "string" || normalized_body instanceof Uint8Array) && !headers.has("etag")) {
    const cache_control = headers.get("cache-control");
    if (!cache_control || !/(no-store|immutable)/.test(cache_control)) {
      headers.set("etag", `"${hash(normalized_body)}"`);
    }
  }
  return new Response(method !== "head" ? normalized_body : void 0, {
    status,
    headers
  });
}
var chars$1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  var counts = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function(key2) {
            return walk(thing[key2]);
          });
      }
    }
  }
  walk(value);
  var names = /* @__PURE__ */ new Map();
  Array.from(counts).filter(function(entry11) {
    return entry11[1] > 1;
  }).sort(function(a, b) {
    return b[1] - a[1];
  }).forEach(function(entry11, i2) {
    names.set(entry11[0], getName(i2));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + stringify(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v, i2) {
          return i2 in thing ? stringify(v) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key2) {
          return safeKey(key2) + ":" + stringify(thing[key2]);
        }).join(",") + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function(name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values_1.push("Object(" + stringify(thing.valueOf()) + ")");
          break;
        case "RegExp":
          values_1.push(thing.toString());
          break;
        case "Date":
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case "Array":
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function(v, i2) {
            statements_1.push(name + "[" + i2 + "]=" + stringify(v));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function(v) {
            return "add(" + stringify(v) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function(_a4) {
            var k = _a4[0], v = _a4[1];
            return "set(" + stringify(k) + ", " + stringify(v) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key2) {
            statements_1.push("" + name + safeProp(key2) + "=" + stringify(thing[key2]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name = "";
  do {
    name = chars$1[num % chars$1.length] + name;
    num = ~~(num / chars$1.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string")
    return stringifyString(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  var str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escapeUnsafeChars(JSON.stringify(key2));
}
function safeProp(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? "." + key2 : "[" + escapeUnsafeChars(JSON.stringify(key2)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i2 = 0; i2 < str.length; i2 += 1) {
    var char = str.charAt(i2);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i2 + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i2];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
function noop3() {
}
function safe_not_equal2(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
Promise.resolve();
var subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop3) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal2(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i2 = 0; i2 < subscriber_queue.length; i2 += 2) {
            subscriber_queue[i2][0](subscriber_queue[i2 + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop3) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop3;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function coalesce_to_error(err) {
  return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
}
var render_json_payload_script_dict = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var render_json_payload_script_regex = new RegExp(`[${Object.keys(render_json_payload_script_dict).join("")}]`, "g");
function render_json_payload_script(attrs, payload) {
  const safe_payload = JSON.stringify(payload).replace(render_json_payload_script_regex, (match) => render_json_payload_script_dict[match]);
  let safe_attrs = "";
  for (const [key2, value] of Object.entries(attrs)) {
    if (value === void 0)
      continue;
    safe_attrs += ` sveltekit:data-${key2}=${escape_html_attr(value)}`;
  }
  return `<script type="application/json"${safe_attrs}>${safe_payload}<\/script>`;
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(`[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`, "g");
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var s2 = JSON.stringify;
function create_prerendering_url_proxy(url) {
  return new Proxy(url, {
    get: (target, prop, receiver) => {
      if (prop === "search" || prop === "searchParams") {
        throw new Error(`Cannot access url.${prop} on a page with prerendering enabled`);
      }
      return Reflect.get(target, prop, receiver);
    }
  });
}
var encoder = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array = encode$1(data);
  for (let i2 = 0; i2 < array.length; i2 += 16) {
    const w = array.subarray(i2, i2 + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i22 = 0; i22 < 64; i22++) {
      if (i22 < 16) {
        tmp = w[i22];
      } else {
        a = w[i22 + 1 & 15];
        b = w[i22 + 14 & 15];
        tmp = w[i22 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i22 & 15] + w[i22 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i22];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x2) {
    return (x2 - Math.floor(x2)) * 4294967296;
  }
  let prime = 2;
  for (let i2 = 0; i2 < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i2 < 8) {
        init[i2] = frac(prime ** (1 / 2));
      }
      key[i2] = frac(prime ** (1 / 3));
      i2++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i2 = 0; i2 < bytes.length; i2 += 4) {
    const a = bytes[i2 + 0];
    const b = bytes[i2 + 1];
    const c = bytes[i2 + 2];
    const d = bytes[i2 + 3];
    bytes[i2 + 0] = d;
    bytes[i2 + 1] = c;
    bytes[i2 + 2] = b;
    bytes[i2 + 3] = a;
  }
}
function encode$1(str) {
  const encoded = encoder.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i2;
  for (i2 = 2; i2 < l; i2 += 3) {
    result += chars[bytes[i2 - 2] >> 2];
    result += chars[(bytes[i2 - 2] & 3) << 4 | bytes[i2 - 1] >> 4];
    result += chars[(bytes[i2 - 1] & 15) << 2 | bytes[i2] >> 6];
    result += chars[bytes[i2] & 63];
  }
  if (i2 === l + 1) {
    result += chars[bytes[i2 - 2] >> 2];
    result += chars[(bytes[i2 - 2] & 3) << 4];
    result += "==";
  }
  if (i2 === l) {
    result += chars[bytes[i2 - 2] >> 2];
    result += chars[(bytes[i2 - 2] & 3) << 4 | bytes[i2 - 1] >> 4];
    result += chars[(bytes[i2 - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var csp_ready;
var generate_nonce;
var generate_hash;
if (typeof crypto !== "undefined") {
  const array = new Uint8Array(16);
  generate_nonce = () => {
    crypto.getRandomValues(array);
    return base64(array);
  };
  generate_hash = sha256;
} else {
  const name = "crypto";
  csp_ready = import(name).then((crypto2) => {
    generate_nonce = () => {
      return crypto2.randomBytes(16).toString("base64");
    };
    generate_hash = (input) => {
      return crypto2.createHash("sha256").update(input, "utf-8").digest().toString("base64");
    };
  });
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var Csp = class {
  constructor({ mode, directives }, { dev, prerender, needs_nonce }) {
    __privateAdd2(this, _use_hashes, void 0);
    __privateAdd2(this, _dev, void 0);
    __privateAdd2(this, _script_needs_csp, void 0);
    __privateAdd2(this, _style_needs_csp, void 0);
    __privateAdd2(this, _directives, void 0);
    __privateAdd2(this, _script_src, void 0);
    __privateAdd2(this, _style_src, void 0);
    __privateSet2(this, _use_hashes, mode === "hash" || mode === "auto" && prerender);
    __privateSet2(this, _directives, dev ? __spreadValues({}, directives) : directives);
    __privateSet2(this, _dev, dev);
    const d = __privateGet2(this, _directives);
    if (dev) {
      const effective_style_src2 = d["style-src"] || d["default-src"];
      if (effective_style_src2 && !effective_style_src2.includes("unsafe-inline")) {
        d["style-src"] = [...effective_style_src2, "unsafe-inline"];
      }
    }
    __privateSet2(this, _script_src, []);
    __privateSet2(this, _style_src, []);
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    __privateSet2(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet2(this, _style_needs_csp, !dev && !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet2(this, _script_needs_csp) && !__privateGet2(this, _use_hashes);
    this.style_needs_nonce = __privateGet2(this, _style_needs_csp) && !__privateGet2(this, _use_hashes);
    if (this.script_needs_nonce || this.style_needs_nonce || needs_nonce) {
      this.nonce = generate_nonce();
    }
  }
  add_script(content) {
    if (__privateGet2(this, _script_needs_csp)) {
      if (__privateGet2(this, _use_hashes)) {
        __privateGet2(this, _script_src).push(`sha256-${generate_hash(content)}`);
      } else if (__privateGet2(this, _script_src).length === 0) {
        __privateGet2(this, _script_src).push(`nonce-${this.nonce}`);
      }
    }
  }
  add_style(content) {
    if (__privateGet2(this, _style_needs_csp)) {
      if (__privateGet2(this, _use_hashes)) {
        __privateGet2(this, _style_src).push(`sha256-${generate_hash(content)}`);
      } else if (__privateGet2(this, _style_src).length === 0) {
        __privateGet2(this, _style_src).push(`nonce-${this.nonce}`);
      }
    }
  }
  get_header(is_meta = false) {
    const header = [];
    const directives = __spreadValues({}, __privateGet2(this, _directives));
    if (__privateGet2(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet2(this, _style_src)
      ];
    }
    if (__privateGet2(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet2(this, _script_src)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = directives[key2];
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
  get_meta() {
    const content = escape_html_attr(this.get_header(true));
    return `<meta http-equiv="content-security-policy" content=${content}>`;
  }
};
_use_hashes = /* @__PURE__ */ new WeakMap();
_dev = /* @__PURE__ */ new WeakMap();
_script_needs_csp = /* @__PURE__ */ new WeakMap();
_style_needs_csp = /* @__PURE__ */ new WeakMap();
_directives = /* @__PURE__ */ new WeakMap();
_script_src = /* @__PURE__ */ new WeakMap();
_style_src = /* @__PURE__ */ new WeakMap();
var updated = __spreadProps(__spreadValues({}, readable(false)), {
  check: () => false
});
async function render_response({
  branch,
  options,
  state,
  $session,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  stuff
}) {
  if (state.prerender) {
    if (options.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options.template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %svelte.nonce%");
    }
  }
  const stylesheets = new Set(options.manifest._.entry.css);
  const modulepreloads = new Set(options.manifest._.entry.js);
  const styles = /* @__PURE__ */ new Map();
  const serialized_data = [];
  let shadow_props;
  let rendered;
  let is_private = false;
  let maxage;
  if (error2) {
    error2.stack = options.get_stack(error2);
  }
  if (resolve_opts.ssr) {
    branch.forEach(({ node, props: props2, loaded, fetched, uses_credentials }) => {
      if (node.css)
        node.css.forEach((url) => stylesheets.add(url));
      if (node.js)
        node.js.forEach((url) => modulepreloads.add(url));
      if (node.styles)
        Object.entries(node.styles).forEach(([k, v]) => styles.set(k, v));
      if (fetched && page_config.hydrate)
        serialized_data.push(...fetched);
      if (props2)
        shadow_props = props2;
      if (uses_credentials)
        is_private = true;
      maxage = loaded.maxage;
    });
    const session = writable($session);
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        session: __spreadProps(__spreadValues({}, session), {
          subscribe: (fn) => {
            is_private = true;
            return session.subscribe(fn);
          }
        }),
        updated
      },
      page: {
        error: error2,
        params: event.params,
        routeId: event.routeId,
        status,
        stuff,
        url: state.prerender ? create_prerendering_url_proxy(event.url) : event.url
      },
      components: branch.map(({ node }) => node.module.default)
    };
    const print_error = (property, replacement) => {
      Object.defineProperty(props.page, property, {
        get: () => {
          throw new Error(`$page.${property} has been replaced by $page.url.${replacement}`);
        }
      });
    };
    print_error("origin", "origin");
    print_error("path", "pathname");
    print_error("query", "searchParams");
    for (let i2 = 0; i2 < branch.length; i2 += 1) {
      props[`props_${i2}`] = await branch[i2].loaded.props;
    }
    rendered = options.root.render(props);
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let { head, html: body } = rendered;
  const inlined_style = Array.from(styles.values()).join("\n");
  await csp_ready;
  const csp = new Csp(options.csp, {
    dev: options.dev,
    prerender: !!state.prerender,
    needs_nonce: options.template_contains_nonce
  });
  const target = hash(body);
  const init_app = `
		import { start } from ${s2(options.prefix + options.manifest._.entry.file)};
		start({
			target: document.querySelector('[data-hydrate="${target}"]').parentNode,
			paths: ${s2(options.paths)},
			session: ${try_serialize($session, (error3) => {
    throw new Error(`Failed to serialize session data: ${error3.message}`);
  })},
			route: ${!!page_config.router},
			spa: ${!resolve_opts.ssr},
			trailing_slash: ${s2(options.trailing_slash)},
			hydrate: ${resolve_opts.ssr && page_config.hydrate ? `{
				status: ${status},
				error: ${serialize_error(error2)},
				nodes: [
					${(branch || []).map(({ node }) => `import(${s2(options.prefix + node.entry)})`).join(",\n						")}
				],
				params: ${devalue(event.params)},
				routeId: ${s2(event.routeId)}
			}` : "null"}
		});
	`;
  const init_service_worker = `
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('${options.service_worker}');
		}
	`;
  if (options.amp) {
    const styles2 = `${inlined_style}
${rendered.css.code}`;
    head += `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"><\/script>

		<style amp-custom>${styles2}</style>`;
    if (options.service_worker) {
      head += '<script async custom-element="amp-install-serviceworker" src="https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js"><\/script>';
      body += `<amp-install-serviceworker src="${options.service_worker}" layout="nodisplay"></amp-install-serviceworker>`;
    }
  } else {
    if (inlined_style) {
      const attributes = [];
      if (options.dev)
        attributes.push(" data-sveltekit");
      if (csp.style_needs_nonce)
        attributes.push(` nonce="${csp.nonce}"`);
      csp.add_style(inlined_style);
      head += `
	<style${attributes.join("")}>${inlined_style}</style>`;
    }
    head += Array.from(stylesheets).map((dep) => {
      const attributes = [
        'rel="stylesheet"',
        `href="${options.prefix + dep}"`
      ];
      if (csp.style_needs_nonce) {
        attributes.push(`nonce="${csp.nonce}"`);
      }
      if (styles.has(dep)) {
        attributes.push("disabled", 'media="(max-width: 0)"');
      }
      return `
	<link ${attributes.join(" ")}>`;
    }).join("");
    if (page_config.router || page_config.hydrate) {
      head += Array.from(modulepreloads).map((dep) => `
	<link rel="modulepreload" href="${options.prefix + dep}">`).join("");
      const attributes = ['type="module"', `data-hydrate="${target}"`];
      csp.add_script(init_app);
      if (csp.script_needs_nonce) {
        attributes.push(`nonce="${csp.nonce}"`);
      }
      body += `
		<script ${attributes.join(" ")}>${init_app}<\/script>`;
      body += serialized_data.map(({ url, body: body2, response }) => render_json_payload_script({ type: "data", url, body: typeof body2 === "string" ? hash(body2) : void 0 }, response)).join("\n	");
      if (shadow_props) {
        body += render_json_payload_script({ type: "props" }, shadow_props);
      }
    }
    if (options.service_worker) {
      csp.add_script(init_service_worker);
      head += `
				<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_service_worker}<\/script>`;
    }
  }
  if (state.prerender && !options.amp) {
    const http_equiv = [];
    const csp_headers = csp.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (maxage) {
      http_equiv.push(`<meta http-equiv="cache-control" content="max-age=${maxage}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  }
  const segments = event.url.pathname.slice(options.paths.base.length).split("/").slice(2);
  const assets2 = options.paths.assets || (segments.length > 0 ? segments.map(() => "..").join("/") : ".");
  const html = await resolve_opts.transformPage({
    html: options.template({ head, body, assets: assets2, nonce: csp.nonce })
  });
  const headers = new Headers({
    "content-type": "text/html",
    etag: `"${hash(html)}"`
  });
  if (maxage) {
    headers.set("cache-control", `${is_private ? "private" : "public"}, max-age=${maxage}`);
  }
  if (!options.floc) {
    headers.set("permissions-policy", "interest-cohort=()");
  }
  if (!state.prerender) {
    const csp_header = csp.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
  }
  return new Response(html, {
    status,
    headers
  });
}
function try_serialize(data, fail) {
  try {
    return devalue(data);
  } catch (err) {
    if (fail)
      fail(coalesce_to_error(err));
    return null;
  }
}
function serialize_error(error2) {
  if (!error2)
    return null;
  let serialized = try_serialize(error2);
  if (!serialized) {
    const { name, message, stack } = error2;
    serialized = try_serialize(__spreadProps(__spreadValues({}, error2), { name, message, stack }));
  }
  if (!serialized) {
    serialized = "{}";
  }
  return serialized;
}
var parse_1 = parse$1;
var serialize_1 = serialize;
var __toString = Object.prototype.toString;
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function parse$1(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  var obj = {};
  var opt = options || {};
  var dec = opt.decode || decode;
  var index = 0;
  while (index < str.length) {
    var eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    var endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    var key2 = str.slice(index, eqIdx).trim();
    if (obj[key2] === void 0) {
      var val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.charCodeAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key2] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  var value = enc(val);
  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError("argument val is invalid");
  }
  var str = name + "=" + value;
  if (opt.maxAge != null) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    var expires = opt.expires;
    if (!isDate(expires) || isNaN(expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function decode(str) {
  return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
}
function encode(val) {
  return encodeURIComponent(val);
}
function isDate(val) {
  return __toString.call(val) === "[object Date]" || val instanceof Date;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch (e2) {
    return str;
  }
}
var setCookie = { exports: {} };
var defaultParseOptions = {
  decodeValues: true,
  map: false,
  silent: false
};
function isNonEmptyString(str) {
  return typeof str === "string" && !!str.trim();
}
function parseString(setCookieValue, options) {
  var parts = setCookieValue.split(";").filter(isNonEmptyString);
  var nameValue = parts.shift().split("=");
  var name = nameValue.shift();
  var value = nameValue.join("=");
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  try {
    value = options.decodeValues ? decodeURIComponent(value) : value;
  } catch (e2) {
    console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.", e2);
  }
  var cookie = {
    name,
    value
  };
  parts.forEach(function(part) {
    var sides = part.split("=");
    var key2 = sides.shift().trimLeft().toLowerCase();
    var value2 = sides.join("=");
    if (key2 === "expires") {
      cookie.expires = new Date(value2);
    } else if (key2 === "max-age") {
      cookie.maxAge = parseInt(value2, 10);
    } else if (key2 === "secure") {
      cookie.secure = true;
    } else if (key2 === "httponly") {
      cookie.httpOnly = true;
    } else if (key2 === "samesite") {
      cookie.sameSite = value2;
    } else {
      cookie[key2] = value2;
    }
  });
  return cookie;
}
function parse(input, options) {
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  if (!input) {
    if (!options.map) {
      return [];
    } else {
      return {};
    }
  }
  if (input.headers && input.headers["set-cookie"]) {
    input = input.headers["set-cookie"];
  } else if (input.headers) {
    var sch = input.headers[Object.keys(input.headers).find(function(key2) {
      return key2.toLowerCase() === "set-cookie";
    })];
    if (!sch && input.headers.cookie && !options.silent) {
      console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning.");
    }
    input = sch;
  }
  if (!Array.isArray(input)) {
    input = [input];
  }
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  if (!options.map) {
    return input.filter(isNonEmptyString).map(function(str) {
      return parseString(str, options);
    });
  } else {
    var cookies = {};
    return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
      var cookie = parseString(str, options);
      cookies2[cookie.name] = cookie;
      return cookies2;
    }, cookies);
  }
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString;
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  var cookiesStrings = [];
  var pos = 0;
  var start;
  var ch;
  var lastComma;
  var nextStart;
  var cookiesSeparatorFound;
  function skipWhitespace() {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }
  function notSpecialChar() {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  }
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}
setCookie.exports = parse;
setCookie.exports.parse = parse;
var parseString_1 = setCookie.exports.parseString = parseString;
var splitCookiesString_1 = setCookie.exports.splitCookiesString = splitCookiesString;
function normalize(loaded) {
  const has_error_status = loaded.status && loaded.status >= 400 && loaded.status <= 599 && !loaded.redirect;
  if (loaded.error || has_error_status) {
    const status = loaded.status;
    if (!loaded.error && has_error_status) {
      return { status: status || 500, error: new Error() };
    }
    const error2 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
    if (!(error2 instanceof Error)) {
      return {
        status: 500,
        error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error2}"`)
      };
    }
    if (!status || status < 400 || status > 599) {
      console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
      return { status: 500, error: error2 };
    }
    return { status, error: error2 };
  }
  if (loaded.redirect) {
    if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
      };
    }
    if (typeof loaded.redirect !== "string") {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be a string')
      };
    }
  }
  if (loaded.dependencies) {
    if (!Array.isArray(loaded.dependencies) || loaded.dependencies.some((dep) => typeof dep !== "string")) {
      return {
        status: 500,
        error: new Error('"dependencies" property returned from load() must be of type string[]')
      };
    }
  }
  if (loaded.context) {
    throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');
  }
  return loaded;
}
var absolute = /^([a-z]+:)?\/?\//;
var scheme = /^[a-z]+:/;
function resolve(base2, path) {
  if (scheme.test(path))
    return path;
  const base_match = absolute.exec(base2);
  const path_match = absolute.exec(path);
  if (!base_match) {
    throw new Error(`bad base path: "${base2}"`);
  }
  const baseparts = path_match ? [] : base2.slice(base_match[0].length).split("/");
  const pathparts = path_match ? path.slice(path_match[0].length).split("/") : path.split("/");
  baseparts.pop();
  for (let i2 = 0; i2 < pathparts.length; i2 += 1) {
    const part = pathparts[i2];
    if (part === ".")
      continue;
    else if (part === "..")
      baseparts.pop();
    else
      baseparts.push(part);
  }
  const prefix = path_match && path_match[0] || base_match && base_match[0] || "";
  return `${prefix}${baseparts.join("/")}`;
}
function is_root_relative(path) {
  return path[0] === "/" && path[1] !== "/";
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && /\/[^./]+$/.test(path)) {
    return path + "/";
  }
  return path;
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
async function load_node({
  event,
  options,
  state,
  route,
  node,
  $session,
  stuff,
  is_error,
  is_leaf,
  status,
  error: error2
}) {
  const { module: module2 } = node;
  let uses_credentials = false;
  const fetched = [];
  const cookies = parse_1(event.request.headers.get("cookie") || "");
  const new_cookies = [];
  let loaded;
  const shadow = is_leaf ? await load_shadow_data(route, event, options, !!state.prerender) : {};
  if (shadow.cookies) {
    shadow.cookies.forEach((header) => {
      new_cookies.push(parseString_1(header));
    });
  }
  if (shadow.error) {
    loaded = {
      status: shadow.status,
      error: shadow.error
    };
  } else if (shadow.redirect) {
    loaded = {
      status: shadow.status,
      redirect: shadow.redirect
    };
  } else if (module2.load) {
    const load_input = {
      url: state.prerender ? create_prerendering_url_proxy(event.url) : event.url,
      params: event.params,
      props: shadow.body || {},
      routeId: event.routeId,
      get session() {
        uses_credentials = true;
        return $session;
      },
      fetch: async (resource, opts = {}) => {
        let requested;
        if (typeof resource === "string") {
          requested = resource;
        } else {
          requested = resource.url;
          opts = __spreadValues({
            method: resource.method,
            headers: resource.headers,
            body: resource.body,
            mode: resource.mode,
            credentials: resource.credentials,
            cache: resource.cache,
            redirect: resource.redirect,
            referrer: resource.referrer,
            integrity: resource.integrity
          }, opts);
        }
        opts.headers = new Headers(opts.headers);
        for (const [key2, value] of event.request.headers) {
          if (key2 !== "authorization" && key2 !== "cookie" && key2 !== "host" && key2 !== "if-none-match" && !opts.headers.has(key2)) {
            opts.headers.set(key2, value);
          }
        }
        const resolved = resolve(event.url.pathname, requested.split("?")[0]);
        let response;
        let dependency;
        const prefix = options.paths.assets || options.paths.base;
        const filename = decodeURIComponent(resolved.startsWith(prefix) ? resolved.slice(prefix.length) : resolved).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = options.manifest.assets.has(filename);
        const is_asset_html = options.manifest.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file = is_asset ? filename : filename_html;
          if (options.read) {
            const type = is_asset ? options.manifest.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            response = new Response(options.read(file), {
              headers: type ? { "content-type": type } : {}
            });
          } else {
            response = await fetch(`${event.url.origin}/${file}`, opts);
          }
        } else if (is_root_relative(resolved)) {
          if (opts.credentials !== "omit") {
            uses_credentials = true;
            const authorization = event.request.headers.get("authorization");
            const combined_cookies = __spreadValues({}, cookies);
            for (const cookie2 of new_cookies) {
              if (!domain_matches(event.url.hostname, cookie2.domain))
                continue;
              if (!path_matches(resolved, cookie2.path))
                continue;
              combined_cookies[cookie2.name] = cookie2.value;
            }
            const cookie = Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
            if (cookie) {
              opts.headers.set("cookie", cookie);
            }
            if (authorization && !opts.headers.has("authorization")) {
              opts.headers.set("authorization", authorization);
            }
          }
          if (opts.body && typeof opts.body !== "string") {
            throw new Error("Request body must be a string");
          }
          response = await respond(new Request(new URL(requested, event.url).href, __spreadProps(__spreadValues({}, opts), { credentials: void 0 })), options, __spreadProps(__spreadValues({}, state), {
            initiator: route
          }));
          if (state.prerender) {
            dependency = { response, body: null };
            state.prerender.dependencies.set(resolved, dependency);
          }
        } else {
          if (resolved.startsWith("//")) {
            requested = event.url.protocol + requested;
          }
          if (`.${new URL(requested).hostname}`.endsWith(`.${event.url.hostname}`) && opts.credentials !== "omit") {
            uses_credentials = true;
            const cookie = event.request.headers.get("cookie");
            if (cookie)
              opts.headers.set("cookie", cookie);
          }
          const external_request = new Request(requested, opts);
          response = await options.hooks.externalFetch.call(null, external_request);
        }
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          new_cookies.push(...splitCookiesString_1(set_cookie).map((str) => parseString_1(str)));
        }
        const proxy = new Proxy(response, {
          get(response2, key2, _receiver) {
            async function text() {
              const body = await response2.text();
              const headers = {};
              for (const [key3, value] of response2.headers) {
                if (key3 !== "set-cookie" && key3 !== "etag") {
                  headers[key3] = value;
                }
              }
              if (!opts.body || typeof opts.body === "string") {
                const status_number = Number(response2.status);
                if (isNaN(status_number)) {
                  throw new Error(`response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`);
                }
                fetched.push({
                  url: requested,
                  body: opts.body,
                  response: {
                    status: status_number,
                    statusText: response2.statusText,
                    headers,
                    body
                  }
                });
              }
              if (dependency) {
                dependency.body = body;
              }
              return body;
            }
            if (key2 === "arrayBuffer") {
              return async () => {
                const buffer = await response2.arrayBuffer();
                if (dependency) {
                  dependency.body = new Uint8Array(buffer);
                }
                return buffer;
              };
            }
            if (key2 === "text") {
              return text;
            }
            if (key2 === "json") {
              return async () => {
                return JSON.parse(await text());
              };
            }
            return Reflect.get(response2, key2, response2);
          }
        });
        return proxy;
      },
      stuff: __spreadValues({}, stuff),
      status: is_error ? status ?? null : null,
      error: is_error ? error2 ?? null : null
    };
    if (options.dev) {
      Object.defineProperty(load_input, "page", {
        get: () => {
          throw new Error("`page` in `load` functions has been replaced by `url` and `params`");
        }
      });
    }
    loaded = await module2.load.call(null, load_input);
    if (!loaded) {
      throw new Error(`load function must return a value${options.dev ? ` (${node.entry})` : ""}`);
    }
    if (loaded.fallthrough) {
      throw new Error("fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching");
    }
  } else if (shadow.body) {
    loaded = {
      props: shadow.body
    };
  } else {
    loaded = {};
  }
  if (shadow.body && state.prerender) {
    const pathname = `${event.url.pathname.replace(/\/$/, "")}/__data.json`;
    const dependency = {
      response: new Response(void 0),
      body: JSON.stringify(shadow.body)
    };
    state.prerender.dependencies.set(pathname, dependency);
  }
  return {
    node,
    props: shadow.body,
    loaded: normalize(loaded),
    stuff: loaded.stuff || stuff,
    fetched,
    set_cookie_headers: new_cookies.map((new_cookie) => {
      const _a4 = new_cookie, { name, value } = _a4, options2 = __objRest(_a4, ["name", "value"]);
      return serialize_1(name, value, options2);
    }),
    uses_credentials
  };
}
async function load_shadow_data(route, event, options, prerender) {
  if (!route.shadow)
    return {};
  try {
    const mod = await route.shadow();
    if (prerender && (mod.post || mod.put || mod.del || mod.patch)) {
      throw new Error("Cannot prerender pages that have endpoints with mutative methods");
    }
    const method = normalize_request_method(event);
    const is_get = method === "head" || method === "get";
    const handler = method === "head" ? mod.head || mod.get : mod[method];
    if (!handler && !is_get) {
      return {
        status: 405,
        error: new Error(`${method} method not allowed`)
      };
    }
    const data = {
      status: 200,
      cookies: [],
      body: {}
    };
    if (!is_get) {
      const result = await handler(event);
      if (result.fallthrough) {
        throw new Error("fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching");
      }
      const { status, headers, body } = validate_shadow_output(result);
      data.status = status;
      add_cookies(data.cookies, headers);
      if (status >= 300 && status < 400) {
        data.redirect = headers instanceof Headers ? headers.get("location") : headers.location;
        return data;
      }
      data.body = body;
    }
    const get = method === "head" && mod.head || mod.get;
    if (get) {
      const result = await get(event);
      if (result.fallthrough) {
        throw new Error("fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching");
      }
      const { status, headers, body } = validate_shadow_output(result);
      add_cookies(data.cookies, headers);
      data.status = status;
      if (status >= 400) {
        data.error = new Error("Failed to load data");
        return data;
      }
      if (status >= 300) {
        data.redirect = headers instanceof Headers ? headers.get("location") : headers.location;
        return data;
      }
      data.body = __spreadValues(__spreadValues({}, body), data.body);
    }
    return data;
  } catch (e2) {
    const error2 = coalesce_to_error(e2);
    options.handle_error(error2, event);
    return {
      status: 500,
      error: error2
    };
  }
}
function add_cookies(target, headers) {
  const cookies = headers["set-cookie"];
  if (cookies) {
    if (Array.isArray(cookies)) {
      target.push(...cookies);
    } else {
      target.push(cookies);
    }
  }
}
function validate_shadow_output(result) {
  const { status = 200, body = {} } = result;
  let headers = result.headers || {};
  if (headers instanceof Headers) {
    if (headers.has("set-cookie")) {
      throw new Error("Endpoint request handler cannot use Headers interface with Set-Cookie headers");
    }
  } else {
    headers = lowercase_keys(headers);
  }
  if (!is_pojo(body)) {
    throw new Error("Body returned from endpoint request handler must be a plain object");
  }
  return { status, headers, body };
}
async function respond_with_error({
  event,
  options,
  state,
  $session,
  status,
  error: error2,
  resolve_opts
}) {
  try {
    const branch = [];
    let stuff = {};
    if (resolve_opts.ssr) {
      const default_layout = await options.manifest._.nodes[0]();
      const default_error = await options.manifest._.nodes[1]();
      const layout_loaded = await load_node({
        event,
        options,
        state,
        route: null,
        node: default_layout,
        $session,
        stuff: {},
        is_error: false,
        is_leaf: false
      });
      const error_loaded = await load_node({
        event,
        options,
        state,
        route: null,
        node: default_error,
        $session,
        stuff: layout_loaded ? layout_loaded.stuff : {},
        is_error: true,
        is_leaf: false,
        status,
        error: error2
      });
      branch.push(layout_loaded, error_loaded);
      stuff = error_loaded.stuff;
    }
    return await render_response({
      options,
      state,
      $session,
      page_config: {
        hydrate: options.hydrate,
        router: options.router
      },
      stuff,
      status,
      error: error2,
      branch,
      event,
      resolve_opts
    });
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options.handle_error(error3, event);
    return new Response(error3.stack, {
      status: 500
    });
  }
}
async function respond$1(opts) {
  const { event, options, state, $session, route, resolve_opts } = opts;
  let nodes;
  if (!resolve_opts.ssr) {
    return await render_response(__spreadProps(__spreadValues({}, opts), {
      branch: [],
      page_config: {
        hydrate: true,
        router: true
      },
      status: 200,
      error: null,
      event,
      stuff: {}
    }));
  }
  try {
    nodes = await Promise.all(route.a.map((n) => n == void 0 ? n : options.manifest._.nodes[n]()));
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options.handle_error(error3, event);
    return await respond_with_error({
      event,
      options,
      state,
      $session,
      status: 500,
      error: error3,
      resolve_opts
    });
  }
  const leaf = nodes[nodes.length - 1].module;
  let page_config = get_page_config(leaf, options);
  if (state.prerender) {
    const should_prerender = leaf.prerender ?? state.prerender.default;
    if (!should_prerender) {
      return new Response(void 0, {
        status: 204
      });
    }
  }
  let branch = [];
  let status = 200;
  let error2 = null;
  let set_cookie_headers = [];
  let stuff = {};
  ssr:
    if (resolve_opts.ssr) {
      for (let i2 = 0; i2 < nodes.length; i2 += 1) {
        const node = nodes[i2];
        let loaded;
        if (node) {
          try {
            loaded = await load_node(__spreadProps(__spreadValues({}, opts), {
              node,
              stuff,
              is_error: false,
              is_leaf: i2 === nodes.length - 1
            }));
            set_cookie_headers = set_cookie_headers.concat(loaded.set_cookie_headers);
            if (loaded.loaded.redirect) {
              return with_cookies(new Response(void 0, {
                status: loaded.loaded.status,
                headers: {
                  location: loaded.loaded.redirect
                }
              }), set_cookie_headers);
            }
            if (loaded.loaded.error) {
              ({ status, error: error2 } = loaded.loaded);
            }
          } catch (err) {
            const e2 = coalesce_to_error(err);
            options.handle_error(e2, event);
            status = 500;
            error2 = e2;
          }
          if (loaded && !error2) {
            branch.push(loaded);
          }
          if (error2) {
            while (i2--) {
              if (route.b[i2]) {
                const index = route.b[i2];
                const error_node = await options.manifest._.nodes[index]();
                let node_loaded;
                let j = i2;
                while (!(node_loaded = branch[j])) {
                  j -= 1;
                }
                try {
                  const error_loaded = await load_node(__spreadProps(__spreadValues({}, opts), {
                    node: error_node,
                    stuff: node_loaded.stuff,
                    is_error: true,
                    is_leaf: false,
                    status,
                    error: error2
                  }));
                  if (error_loaded.loaded.error) {
                    continue;
                  }
                  page_config = get_page_config(error_node.module, options);
                  branch = branch.slice(0, j + 1).concat(error_loaded);
                  stuff = __spreadValues(__spreadValues({}, node_loaded.stuff), error_loaded.stuff);
                  break ssr;
                } catch (err) {
                  const e2 = coalesce_to_error(err);
                  options.handle_error(e2, event);
                  continue;
                }
              }
            }
            return with_cookies(await respond_with_error({
              event,
              options,
              state,
              $session,
              status,
              error: error2,
              resolve_opts
            }), set_cookie_headers);
          }
        }
        if (loaded && loaded.loaded.stuff) {
          stuff = __spreadValues(__spreadValues({}, stuff), loaded.loaded.stuff);
        }
      }
    }
  try {
    return with_cookies(await render_response(__spreadProps(__spreadValues({}, opts), {
      stuff,
      event,
      page_config,
      status,
      error: error2,
      branch: branch.filter(Boolean)
    })), set_cookie_headers);
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options.handle_error(error3, event);
    return with_cookies(await respond_with_error(__spreadProps(__spreadValues({}, opts), {
      status: 500,
      error: error3
    })), set_cookie_headers);
  }
}
function get_page_config(leaf, options) {
  if ("ssr" in leaf) {
    throw new Error("`export const ssr` has been removed \u2014 use the handle hook instead: https://kit.svelte.dev/docs/hooks#handle");
  }
  return {
    router: "router" in leaf ? !!leaf.router : options.router,
    hydrate: "hydrate" in leaf ? !!leaf.hydrate : options.hydrate
  };
}
function with_cookies(response, set_cookie_headers) {
  if (set_cookie_headers.length) {
    set_cookie_headers.forEach((value) => {
      response.headers.append("set-cookie", value);
    });
  }
  return response;
}
async function render_page(event, route, options, state, resolve_opts) {
  if (state.initiator === route) {
    return new Response(`Not found: ${event.url.pathname}`, {
      status: 404
    });
  }
  if (route.shadow) {
    const type = negotiate(event.request.headers.get("accept") || "text/html", [
      "text/html",
      "application/json"
    ]);
    if (type === "application/json") {
      return render_endpoint(event, await route.shadow());
    }
  }
  const $session = await options.hooks.getSession(event);
  return respond$1({
    event,
    options,
    state,
    $session,
    resolve_opts,
    route
  });
}
function negotiate(accept, types2) {
  const parts = accept.split(",").map((str, i2) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      return { type, subtype, q: +q, i: i2 };
    }
    throw new Error(`Invalid Accept header: ${accept}`);
  }).sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types2) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex((part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*"));
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function exec(match, names, types2, matchers) {
  const params = {};
  for (let i2 = 0; i2 < names.length; i2 += 1) {
    const name = names[i2];
    const type = types2[i2];
    const value = match[i2 + 1] || "";
    if (type) {
      const matcher = matchers[type];
      if (!matcher)
        throw new Error(`Missing "${type}" param matcher`);
      if (!matcher(value))
        return;
    }
    params[name] = value;
  }
  return params;
}
var DATA_SUFFIX = "/__data.json";
var default_transform = ({ html }) => html;
async function respond(request, options, state) {
  var _a4, _b, _c;
  let url = new URL(request.url);
  const normalized = normalize_path(url.pathname, options.trailing_slash);
  if (normalized !== url.pathname && !((_a4 = state.prerender) == null ? void 0 : _a4.fallback)) {
    return new Response(void 0, {
      status: 301,
      headers: {
        location: (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
      }
    });
  }
  const { parameter, allowed } = options.method_override;
  const method_override = (_b = url.searchParams.get(parameter)) == null ? void 0 : _b.toUpperCase();
  if (method_override) {
    if (request.method === "POST") {
      if (allowed.includes(method_override)) {
        request = new Proxy(request, {
          get: (target, property, _receiver) => {
            if (property === "method")
              return method_override;
            return Reflect.get(target, property, target);
          }
        });
      } else {
        const verb = allowed.length === 0 ? "enabled" : "allowed";
        const body = `${parameter}=${method_override} is not ${verb}. See https://kit.svelte.dev/docs/configuration#methodoverride`;
        return new Response(body, {
          status: 400
        });
      }
    } else {
      throw new Error(`${parameter}=${method_override} is only allowed with POST requests`);
    }
  }
  let decoded = decodeURI(url.pathname);
  let route = null;
  let params = {};
  if (options.paths.base && !((_c = state.prerender) == null ? void 0 : _c.fallback)) {
    if (!decoded.startsWith(options.paths.base)) {
      return new Response(void 0, { status: 404 });
    }
    decoded = decoded.slice(options.paths.base.length) || "/";
  }
  const is_data_request = decoded.endsWith(DATA_SUFFIX);
  if (is_data_request) {
    decoded = decoded.slice(0, -DATA_SUFFIX.length) || "/";
    const normalized2 = normalize_path(url.pathname.slice(0, -DATA_SUFFIX.length), options.trailing_slash);
    url = new URL(url.origin + normalized2 + url.search);
  }
  if (!state.prerender || !state.prerender.fallback) {
    const matchers = await options.manifest._.matchers();
    for (const candidate of options.manifest._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.names, candidate.types, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  const event = {
    get clientAddress() {
      if (!state.getClientAddress) {
        throw new Error(`${"@sveltejs/adapter-vercel"} does not specify getClientAddress. Please raise an issue`);
      }
      Object.defineProperty(event, "clientAddress", {
        value: state.getClientAddress()
      });
      return event.clientAddress;
    },
    locals: {},
    params,
    platform: state.platform,
    request,
    routeId: route && route.id,
    url
  };
  const removed = (property, replacement, suffix = "") => ({
    get: () => {
      throw new Error(`event.${property} has been replaced by event.${replacement}` + suffix);
    }
  });
  const details = ". See https://github.com/sveltejs/kit/pull/3384 for details";
  const body_getter = {
    get: () => {
      throw new Error("To access the request body use the text/json/arrayBuffer/formData methods, e.g. `body = await request.json()`" + details);
    }
  };
  Object.defineProperties(event, {
    method: removed("method", "request.method", details),
    headers: removed("headers", "request.headers", details),
    origin: removed("origin", "url.origin"),
    path: removed("path", "url.pathname"),
    query: removed("query", "url.searchParams"),
    body: body_getter,
    rawBody: body_getter
  });
  let resolve_opts = {
    ssr: true,
    transformPage: default_transform
  };
  try {
    const response = await options.hooks.handle({
      event,
      resolve: async (event2, opts) => {
        if (opts) {
          resolve_opts = {
            ssr: opts.ssr !== false,
            transformPage: opts.transformPage || default_transform
          };
        }
        if (state.prerender && state.prerender.fallback) {
          return await render_response({
            event: event2,
            options,
            state,
            $session: await options.hooks.getSession(event2),
            page_config: { router: true, hydrate: true },
            stuff: {},
            status: 200,
            error: null,
            branch: [],
            resolve_opts: __spreadProps(__spreadValues({}, resolve_opts), {
              ssr: false
            })
          });
        }
        if (route) {
          let response2;
          if (is_data_request && route.type === "page" && route.shadow) {
            response2 = await render_endpoint(event2, await route.shadow());
            if (request.headers.has("x-sveltekit-load")) {
              if (response2.status >= 300 && response2.status < 400) {
                const location = response2.headers.get("location");
                if (location) {
                  const headers = new Headers(response2.headers);
                  headers.set("x-sveltekit-location", location);
                  response2 = new Response(void 0, {
                    status: 204,
                    headers
                  });
                }
              }
            }
          } else {
            response2 = route.type === "endpoint" ? await render_endpoint(event2, await route.load()) : await render_page(event2, route, options, state, resolve_opts);
          }
          if (response2) {
            if (response2.status === 200 && response2.headers.has("etag")) {
              let if_none_match_value = request.headers.get("if-none-match");
              if (if_none_match_value == null ? void 0 : if_none_match_value.startsWith('W/"')) {
                if_none_match_value = if_none_match_value.substring(2);
              }
              const etag = response2.headers.get("etag");
              if (if_none_match_value === etag) {
                const headers = new Headers({ etag });
                for (const key2 of [
                  "cache-control",
                  "content-location",
                  "date",
                  "expires",
                  "vary"
                ]) {
                  const value = response2.headers.get(key2);
                  if (value)
                    headers.set(key2, value);
                }
                return new Response(void 0, {
                  status: 304,
                  headers
                });
              }
            }
            return response2;
          }
        }
        if (!state.initiator) {
          const $session = await options.hooks.getSession(event2);
          return await respond_with_error({
            event: event2,
            options,
            state,
            $session,
            status: 404,
            error: new Error(`Not found: ${event2.url.pathname}`),
            resolve_opts
          });
        }
        if (state.prerender) {
          return new Response("not found", { status: 404 });
        }
        return await fetch(request);
      },
      get request() {
        throw new Error("request in handle has been replaced with event" + details);
      }
    });
    if (response && !(response instanceof Response)) {
      throw new Error("handle must return a Response object" + details);
    }
    return response;
  } catch (e2) {
    const error2 = coalesce_to_error(e2);
    options.handle_error(error2, event);
    try {
      const $session = await options.hooks.getSession(event);
      return await respond_with_error({
        event,
        options,
        state,
        $session,
        status: 500,
        error: error2,
        resolve_opts
      });
    } catch (e22) {
      const error3 = coalesce_to_error(e22);
      return new Response(options.dev ? error3.stack : error3.message, {
        status: 500
      });
    }
  }
}
var base = "";
var assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
var template = ({ head, body, assets: assets2, nonce }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta name="google-site-verification" content="afCjVIJiYkLbhmfi-VM5MdUW79Sj0WzOBprfwT-ymJ4" />\n		<meta charset="utf-8" />\n		<meta name="description" content="" />\n		<link rel="icon" href="' + assets2 + '/favicon.ico" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		' + head + "\n	</head>\n	<body>\n		<div>" + body + "</div>\n	</body>\n</html>\n";
var read = null;
set_paths({ "base": "", "assets": "" });
var Server = class {
  constructor(manifest2) {
    this.options = {
      amp: false,
      csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
      dev: false,
      floc: false,
      get_stack: (error2) => String(error2),
      handle_error: (error2, event) => {
        this.options.hooks.handleError({
          error: error2,
          event,
          get request() {
            throw new Error("request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details");
          }
        });
        error2.stack = this.options.get_stack(error2);
      },
      hooks: null,
      hydrate: true,
      manifest: manifest2,
      method_override: { "parameter": "_method", "allowed": [] },
      paths: { base, assets },
      prefix: assets + "/_app/",
      prerender: true,
      read,
      root: Root,
      service_worker: null,
      router: true,
      template,
      template_contains_nonce: false,
      trailing_slash: "never"
    };
  }
  async respond(request, options = {}) {
    if (!(request instanceof Request)) {
      throw new Error("The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");
    }
    if (!this.options.hooks) {
      const module2 = await Promise.resolve().then(() => (init_hooks_1c45ba0b(), hooks_1c45ba0b_exports));
      this.options.hooks = {
        getSession: module2.getSession || (() => ({})),
        handle: module2.handle || (({ event, resolve: resolve2 }) => resolve2(event)),
        handleError: module2.handleError || (({ error: error2 }) => console.error(error2.stack)),
        externalFetch: module2.externalFetch || fetch
      };
    }
    return respond(request, this.options, options);
  }
};

// .svelte-kit/vercel-tmp/manifest.js
var manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["FluentSystemIcons-Regular.ttf", "MicaDark.png", "MicaLight.png", "app-images/dynawin/DynaWinImage.jpg", "app-images/dynawin/logoDark.png", "app-images/dynawin/logoLight.png", "app-images/granny-keyboard/GrannyKeyboardImage.png", "app-images/granny-keyboard/logoDark.png", "app-images/granny-keyboard/logoLight.png", "app-images/launcherx/LauncherXImage.png", "app-images/launcherx/logoDark.png", "app-images/launcherx/logoLight.png", "app-images/p5js-paint-app/p5jsPaintAppImage.png", "favicon.ico", "logo-img.png", "screenshots/dynawin/DynamicThemeDark.png", "screenshots/dynawin/DynamicThemeLight.png", "screenshots/dynawin/DynamicWallpaperDark.png", "screenshots/dynawin/DynamicWallpaperLight.png", "screenshots/dynawin/WindowDark.png", "screenshots/dynawin/WindowLight.png", "screenshots/granny-keyboard/Window.png", "screenshots/launcherx/WindowDark.png", "screenshots/launcherx/WindowLight.png", "screenshots/p5js-paint-app/Window.png", "sitemap.xml", "youtube-profiles/clickphase.png", "youtube-profiles/granny.png", "youtube-profiles/matthias-wang.jpg"]),
  mimeTypes: { ".ttf": "font/ttf", ".png": "image/png", ".jpg": "image/jpeg", ".ico": "image/vnd.microsoft.icon", ".xml": "application/xml" },
  _: {
    entry: { "file": "start-01655fc5.js", "js": ["start-01655fc5.js", "chunks/index-a7d8ca41.js", "chunks/index-adad17a3.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2)),
      () => Promise.resolve().then(() => (init__3(), __exports3)),
      () => Promise.resolve().then(() => (init__4(), __exports4)),
      () => Promise.resolve().then(() => (init__5(), __exports5)),
      () => Promise.resolve().then(() => (init__6(), __exports6)),
      () => Promise.resolve().then(() => (init__7(), __exports7)),
      () => Promise.resolve().then(() => (init__8(), __exports8)),
      () => Promise.resolve().then(() => (init__9(), __exports9)),
      () => Promise.resolve().then(() => (init__10(), __exports10))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "aboutcontact",
        pattern: /^\/aboutcontact\/?$/,
        names: [],
        types: [],
        path: "/aboutcontact",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "animationsvideos",
        pattern: /^\/animationsvideos\/?$/,
        names: [],
        types: [],
        path: "/animationsvideos",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "dynawin",
        pattern: /^\/dynawin\/?$/,
        names: [],
        types: [],
        path: "/dynawin",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        id: "granny-keyboard",
        pattern: /^\/granny-keyboard\/?$/,
        names: [],
        types: [],
        path: "/granny-keyboard",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        id: "launcherx",
        pattern: /^\/launcherx\/?$/,
        names: [],
        types: [],
        path: "/launcherx",
        shadow: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        id: "p5js-paint-app",
        pattern: /^\/p5js-paint-app\/?$/,
        names: [],
        types: [],
        path: "/p5js-paint-app",
        shadow: null,
        a: [0, 8],
        b: [1]
      },
      {
        type: "page",
        id: "software",
        pattern: /^\/software\/?$/,
        names: [],
        types: [],
        path: "/software",
        shadow: null,
        a: [0, 9],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};

// .svelte-kit/vercel-tmp/serverless.js
installFetch();
var server = new Server(manifest);
var serverless_default = async (req, res) => {
  let request;
  try {
    request = await getRequest(`https://${req.headers.host}`, req);
  } catch (err) {
    res.statusCode = err.status || 400;
    return res.end(err.reason || "Invalid request body");
  }
  setResponse(res, await server.respond(request, {
    getClientAddress() {
      return request.headers.get("x-forwarded-for");
    }
  }));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/*!
* screenfull
* v5.2.0 - 2021-11-03
* (c) Sindre Sorhus; MIT License
*/
/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
