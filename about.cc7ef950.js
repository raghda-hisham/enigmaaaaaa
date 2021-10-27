// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"d68cx":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4e5dac8afe405db7";
module.bundle.HMR_BUNDLE_ID = "36dabe97cc7ef950";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}]},["d68cx"], null, "parcelRequire70e5")
const langEl = document.querySelector('.langWrap');
const langElMobile = document.querySelector('.langWrapmobile');
const link = document.querySelectorAll('.lang');
const homehEl = document.querySelector('.navAbout');
const whohEl = document.querySelector('.navWorks');
const navStart = document.querySelector('.navProject');
const whotEl = document.querySelector('.navServ');
// const headerTitle = document.querySelector('.headerTitle');
const headerBio = document.querySelector('.headerBio');
const headerCta = document.querySelector('.headerCta');
const aboutFatoratitle = document.querySelector('.aboutvaluestitlefatora');
const aboutFatorabio = document.querySelector('.aboutvaluesbio');
// const fatoraMechTitle = document.querySelector('.aboutmissioncontent');
// const fatoraMechBio = document.querySelector('.fatoraaboutbiomech');
const fatoraMechBioList1 = document.querySelector('.fatoraaboutbiolist1');
const fatoraMechBioList2 = document.querySelector('.fatoraaboutbiolist2');
const fatoraMechBioList3 = document.querySelector('.fatoraaboutbiolist3');
const fatoraMechBioList4 = document.querySelector('.fatoraaboutbiolist4');
const fatoraMechBioList5 = document.querySelector('.fatoraaboutbiolist5');
const fatoraValuesTitle = document.querySelector('.aboutvaluestitleelec');
const fatoraValuesBio = document.querySelector('.fatoraaboutbioelec');
const aboutValTitle1 = document.querySelector('.aboutValTitle1');
const aboutValBio1 = document.querySelector('.aboutValBio1');
const aboutValTitle2 = document.querySelector('.aboutValTitle2');
const aboutValBio2 = document.querySelector('.aboutValBio2');
const aboutValTitle3 = document.querySelector('.aboutValTitle3');
const aboutValBio3 = document.querySelector('.aboutValBio3');
const fatoraValueswhyTitle = document.querySelector('.aboutvaluestitlewhy');
const fatoraValueswhyBio = document.querySelector('.fatoraaboutbiowhy');
const readmoreabout = document.querySelector('.readmoreabout');
const footer1 = document.querySelector('.footercontenttitlesub');
const footer2 = document.querySelector('.footercontenttitlecontact');
const footer3 = document.querySelector('.footercontentaddress');
const footer4 = document.querySelector('.footercontentemail');
const footer5 = document.querySelector('.footercontentpagestitle');
const footer6 = document.querySelector('.footerMain');
const footer7 = document.querySelector('.footerAbout');
const footer8 = document.querySelector('.footerServ');
const footer9 = document.querySelector('.footerFatora');
const footer0 = document.querySelector('.footerContact');
const sidenav1 = document.querySelector('.sidenavAbout');
const sidenav2 = document.querySelector('.sidenavWorks');
const sidenav3 = document.querySelector('.sidenavServices');
const sidenav4 = document.querySelector('.sidenavNewproject');
const headerTitleAbout = document.querySelector('.headerTitleAbout');
window.onload = function() {
    document.querySelector('.preloader').style.display = " none";
    homehEl.innerHTML = data.arabic.navAbout;
    whohEl.innerHTML = data.arabic.navWorks;
    whotEl.innerHTML = data.arabic.navServ;
    navStart.innerHTML = data.arabic.navProject;
    // headerTitle.innerHTML = data.arabic.headerTitle; 
    headerCta.innerHTML = data.arabic.headerCta;
    headerBio.innerHTML = data.arabic.headerBio;
    aboutFatoratitle.innerHTML = data.arabic.aboutvaluestitlefatora;
    aboutFatorabio.innerHTML = data.arabic.aboutvaluesbio;
    fatoraMechBioList1.innerHTML = data.arabic.fatoraaboutbiolist1;
    fatoraMechBioList2.innerHTML = data.arabic.fatoraaboutbiolist2;
    fatoraMechBioList3.innerHTML = data.arabic.fatoraaboutbiolist3;
    fatoraMechBioList4.innerHTML = data.arabic.fatoraaboutbiolist4;
    fatoraMechBioList5.innerHTML = data.arabic.fatoraaboutbiolist5;
    fatoraValuesTitle.innerHTML = data.arabic.aboutvaluestitleelec;
    fatoraValuesBio.innerHTML = data.arabic.fatoraaboutbioelec;
    // 
    aboutValTitle1.innerHTML = data.arabic.aboutValTitle1;
    aboutValBio1.innerHTML = data.arabic.aboutValBio1;
    aboutValTitle2.innerHTML = data.arabic.aboutValTitle2;
    aboutValBio2.innerHTML = data.arabic.aboutValBio2;
    aboutValTitle3.innerHTML = data.arabic.aboutValTitle3;
    aboutValBio3.innerHTML = data.arabic.aboutValBio3;
    fatoraValueswhyTitle.innerHTML = data.arabic.aboutvaluestitlewhy;
    fatoraValueswhyBio.innerHTML = data.arabic.fatoraaboutbiowhy;
    readmoreabout.innerHTML = data.arabic.readmoreabout;
    footer1.innerHTML = data.arabic.footercontenttitlesub;
    footer2.innerHTML = data.arabic.footercontenttitlecontact;
    footer3.innerHTML = data.arabic.footercontentaddress;
    footer4.innerHTML = data.arabic.footercontentemail;
    footer5.innerHTML = data.arabic.footercontentpagestitle;
    footer6.innerHTML = data.arabic.footerMain;
    footer7.innerHTML = data.arabic.footerAbout;
    footer8.innerHTML = data.arabic.footerServ;
    footer9.innerHTML = data.arabic.footerFatora;
    footer0.innerHTML = data.arabic.footerContact;
    sidenav1.innerHTML = data.arabic.sidenavAbout;
    sidenav2.innerHTML = data.arabic.sidenavWorks;
    sidenav3.innerHTML = data.arabic.sidenavServices;
    sidenav4.innerHTML = data.arabic.sidenavNewproject;
    headerTitleAbout.innerHTML = data.arabic.headerTitleAbout;
    // const headerTitleAbout = document.querySelector('.headerTitleAbout');
    if (localStorage.language == "arabic") {
        document.querySelector(".header h1").style.textAlign = "right";
        homehEl.innerHTML = data.arabic.navAbout;
        whohEl.innerHTML = data.arabic.navWorks;
        whotEl.innerHTML = data.arabic.navServ;
        // headerTitle.innerHTML = data.arabic.headerTitle; 
        headerCta.innerHTML = data.arabic.headerCta;
        headerBio.innerHTML = data.arabic.headerBio;
        aboutFatoratitle.innerHTML = data.arabic.aboutvaluestitlefatora;
        aboutFatorabio.innerHTML = data.arabic.aboutvaluesbio;
        fatoraMechBioList1.innerHTML = data.arabic.fatoraaboutbiolist1;
        fatoraMechBioList2.innerHTML = data.arabic.fatoraaboutbiolist2;
        fatoraMechBioList3.innerHTML = data.arabic.fatoraaboutbiolist3;
        fatoraMechBioList4.innerHTML = data.arabic.fatoraaboutbiolist4;
        fatoraMechBioList5.innerHTML = data.arabic.fatoraaboutbiolist5;
        fatoraValuesTitle.innerHTML = data.arabic.aboutvaluestitleelec;
        fatoraValuesBio.innerHTML = data.arabic.fatoraaboutbioelec;
        aboutValTitle1.innerHTML = data.arabic.aboutValTitle1;
        aboutValBio1.innerHTML = data.arabic.aboutValBio1;
        aboutValTitle2.innerHTML = data.arabic.aboutValTitle2;
        aboutValBio2.innerHTML = data.arabic.aboutValBio2;
        aboutValTitle3.innerHTML = data.arabic.aboutValTitle3;
        aboutValBio3.innerHTML = data.arabic.aboutValBio3;
        fatoraValueswhyTitle.innerHTML = data.arabic.aboutvaluestitlewhy;
        fatoraValueswhyBio.innerHTML = data.arabic.fatoraaboutbiowhy;
        readmoreabout.innerHTML = data.arabic.readmoreabout;
        footer1.innerHTML = data.arabic.footercontenttitlesub;
        footer2.innerHTML = data.arabic.footercontenttitlecontact;
        footer3.innerHTML = data.arabic.footercontentaddress;
        footer4.innerHTML = data.arabic.footercontentemail;
        footer5.innerHTML = data.arabic.footercontentpagestitle;
        footer6.innerHTML = data.arabic.footerMain;
        footer7.innerHTML = data.arabic.footerAbout;
        footer8.innerHTML = data.arabic.footerServ;
        footer9.innerHTML = data.arabic.footerFatora;
        footer0.innerHTML = data.arabic.footerContact;
        sidenav1.innerHTML = data.arabic.sidenavAbout;
        sidenav2.innerHTML = data.arabic.sidenavWorks;
        sidenav3.innerHTML = data.arabic.sidenavServices;
        sidenav4.innerHTML = data.arabic.sidenavNewproject;
        headerTitleAbout.innerHTML = data.arabic.headerTitleAbout;
        document.querySelector('nav').style.fontFamily = "cairo";
        rtl();
    } else {
        document.querySelector('nav').style.fontFamily = "Raleway";
        document.querySelector(".header h1").style.textAlign = "left";
        homehEl.innerHTML = data.english.navAbout;
        whohEl.innerHTML = data.english.navWorks;
        whotEl.innerHTML = data.english.navServ;
        navStart.innerHTML = data.english.navProject;
        // headerTitle.innerHTML = data.english.headerTitle; 
        headerCta.innerHTML = data.english.headerCta;
        headerBio.innerHTML = data.english.headerBio;
        aboutFatoratitle.innerHTML = data.english.aboutvaluestitlefatora;
        aboutFatorabio.innerHTML = data.english.aboutvaluesbio;
        fatoraMechBioList1.innerHTML = data.english.fatoraaboutbiolist1;
        fatoraMechBioList2.innerHTML = data.english.fatoraaboutbiolist2;
        fatoraMechBioList3.innerHTML = data.english.fatoraaboutbiolist3;
        fatoraMechBioList4.innerHTML = data.english.fatoraaboutbiolist4;
        fatoraMechBioList5.innerHTML = data.english.fatoraaboutbiolist5;
        fatoraValuesTitle.innerHTML = data.english.aboutvaluestitleelec;
        fatoraValuesBio.innerHTML = data.english.fatoraaboutbioelec;
        aboutValTitle1.innerHTML = data.english.aboutValTitle1;
        aboutValBio1.innerHTML = data.english.aboutValBio1;
        aboutValTitle2.innerHTML = data.english.aboutValTitle2;
        aboutValBio2.innerHTML = data.english.aboutValBio2;
        aboutValTitle3.innerHTML = data.english.aboutValTitle3;
        aboutValBio3.innerHTML = data.english.aboutValBio3;
        fatoraValueswhyTitle.innerHTML = data.english.aboutvaluestitlewhy;
        fatoraValueswhyBio.innerHTML = data.english.fatoraaboutbiowhy;
        readmoreabout.innerHTML = data.english.readmoreabout;
        footer1.innerHTML = data.english.footercontenttitlesub;
        footer2.innerHTML = data.english.footercontenttitlecontact;
        footer3.innerHTML = data.english.footercontentaddress;
        footer4.innerHTML = data.english.footercontentemail;
        footer5.innerHTML = data.english.footercontentpagestitle;
        footer6.innerHTML = data.english.footerMain;
        footer7.innerHTML = data.english.footerAbout;
        footer8.innerHTML = data.english.footerServ;
        footer9.innerHTML = data.english.footerFatora;
        footer0.innerHTML = data.english.footerContact;
        sidenav1.innerHTML = data.english.sidenavAbout;
        sidenav2.innerHTML = data.english.sidenavWorks;
        sidenav3.innerHTML = data.english.sidenavServices;
        sidenav4.innerHTML = data.english.sidenavNewproject;
        headerTitleAbout.innerHTML = data.english.headerTitleAbout;
        ltr();
    }
};
link.forEach((el)=>{
    el.addEventListener('click', ()=>{
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');
        console.log(localStorage.language);
        const attr = el.getAttribute('language');
        homehEl.textContent = data[attr].navAbout;
        whohEl.innerHTML = data[attr].navWorks;
        whotEl.innerHTML = data[attr].navServ;
        // headerTitle.innerHTML = data[attr].headerTitle; 
        headerCta.innerHTML = data[attr].headerCta;
        headerBio.innerHTML = data[attr].headerBio;
        headerBio.innerHTML = data[attr].headerBio;
        navStart.innerHTML = data[attr].navProject;
        aboutFatoratitle.innerHTML = data[attr].aboutvaluestitlefatora;
        aboutFatorabio.innerHTML = data[attr].aboutvaluesbio;
        fatoraMechBioList1.innerHTML = data[attr].fatoraaboutbiolist1;
        fatoraMechBioList2.innerHTML = data[attr].fatoraaboutbiolist2;
        fatoraMechBioList3.innerHTML = data[attr].fatoraaboutbiolist3;
        fatoraMechBioList4.innerHTML = data[attr].fatoraaboutbiolist4;
        fatoraMechBioList5.innerHTML = data[attr].fatoraaboutbiolist5;
        fatoraValuesTitle.innerHTML = data[attr].aboutvaluestitleelec;
        fatoraValuesBio.innerHTML = data[attr].fatoraaboutbioelec;
        aboutValTitle1.innerHTML = data[attr].aboutValTitle1;
        aboutValBio1.innerHTML = data[attr].aboutValBio1;
        aboutValTitle2.innerHTML = data[attr].aboutValTitle2;
        aboutValBio2.innerHTML = data[attr].aboutValBio2;
        aboutValTitle3.innerHTML = data[attr].aboutValTitle3;
        aboutValBio3.innerHTML = data[attr].aboutValBio3;
        fatoraValueswhyTitle.innerHTML = data[attr].aboutvaluestitlewhy;
        fatoraValueswhyBio.innerHTML = data[attr].fatoraaboutbiowhy;
        readmoreabout.innerHTML = data[attr].readmoreabout;
        footer1.innerHTML = data[attr].footercontenttitlesub;
        footer2.innerHTML = data[attr].footercontenttitlecontact;
        footer3.innerHTML = data[attr].footercontentaddress;
        footer4.innerHTML = data[attr].footercontentemail;
        footer5.innerHTML = data[attr].footercontentpagestitle;
        footer6.innerHTML = data[attr].footerMain;
        footer7.innerHTML = data[attr].footerAbout;
        footer8.innerHTML = data[attr].footerServ;
        footer9.innerHTML = data[attr].footerFatora;
        footer0.innerHTML = data[attr].footerContact;
        sidenav1.innerHTML = data[attr].sidenavAbout;
        sidenav2.innerHTML = data[attr].sidenavWorks;
        sidenav3.innerHTML = data[attr].sidenavServices;
        sidenav4.innerHTML = data[attr].sidenavNewproject;
        headerTitleAbout.innerHTML = data[attr].headerTitleAbout;
    });
});
// for mobile
link.forEach((el)=>{
    el.addEventListener('click', ()=>{
        langElMobile.querySelector('.active').classList.remove('active');
        el.classList.add('active');
        console.log(localStorage.language);
        const attr = el.getAttribute('language');
        homehEl.textContent = data[attr].navAbout;
        whohEl.innerHTML = data[attr].navWorks;
        whotEl.innerHTML = data[attr].navServ;
        navStart.innerHTML = data[attr].navProject;
        // headerTitle.innerHTML = data[attr].headerTitle; 
        headerCta.innerHTML = data[attr].headerCta;
        headerBio.innerHTML = data[attr].headerBio;
        aboutFatoratitle.innerHTML = data[attr].aboutvaluestitlefatora;
        aboutFatorabio.innerHTML = data[attr].aboutvaluesbio;
        fatoraMechBioList1.innerHTML = data[attr].fatoraaboutbiolist1;
        fatoraMechBioList2.innerHTML = data[attr].fatoraaboutbiolist2;
        fatoraMechBioList3.innerHTML = data[attr].fatoraaboutbiolist3;
        fatoraMechBioList4.innerHTML = data[attr].fatoraaboutbiolist4;
        fatoraMechBioList5.innerHTML = data[attr].fatoraaboutbiolist5;
        fatoraValuesTitle.innerHTML = data[attr].aboutvaluestitleelec;
        fatoraValuesBio.innerHTML = data[attr].fatoraaboutbioelec;
        aboutValTitle1.innerHTML = data[attr].aboutValTitle1;
        aboutValBio1.innerHTML = data[attr].aboutValBio1;
        aboutValTitle2.innerHTML = data[attr].aboutValTitle2;
        aboutValBio2.innerHTML = data[attr].aboutValBio2;
        aboutValTitle3.innerHTML = data[attr].aboutValTitle3;
        aboutValBio3.innerHTML = data[attr].aboutValBio3;
        fatoraValueswhyTitle.innerHTML = data[attr].aboutvaluestitlewhy;
        fatoraValueswhyBio.innerHTML = data[attr].fatoraaboutbiowhy;
        readmoreabout.innerHTML = data[attr].readmoreabout;
        footer1.innerHTML = data[attr].footercontenttitlesub;
        footer2.innerHTML = data[attr].footercontenttitlecontact;
        footer3.innerHTML = data[attr].footercontentaddress;
        footer4.innerHTML = data[attr].footercontentemail;
        footer5.innerHTML = data[attr].footercontentpagestitle;
        footer6.innerHTML = data[attr].footerMain;
        footer7.innerHTML = data[attr].footerAbout;
        footer8.innerHTML = data[attr].footerServ;
        footer9.innerHTML = data[attr].footerFatora;
        footer0.innerHTML = data[attr].footerContact;
        sidenav1.innerHTML = data[attr].sidenavAbout;
        sidenav2.innerHTML = data[attr].sidenavWorks;
        sidenav3.innerHTML = data[attr].sidenavServices;
        sidenav4.innerHTML = data[attr].sidenavNewproject;
        headerTitleAbout.innerHTML = data[attr].headerTitleAbout;
    });
});
var data = {
    "english": {
        "navAbout": "About",
        "navWorks": "Enigma Fatora",
        "navServ": "Services",
        "navProject": "Start Now",
        "headerTitle": "about enigma",
        "headerBio": "Enigma is a new software solutions agency specializing in the design and development of software solutions and E-invoice systems. Enigma is established in Saudi Arabia willing to serve every company, small business, or start-up in KSA and across the globe. Enigma merges modern innovation, and security in its products and develops software with fast and reliable platforms. ",
        "headerCta": "let's talk",
        "aboutvaluestitlefatora": "our mission",
        "aboutvaluesbio": "Enigma focuses on innovation and creativity in all the projects it implements, taking into account the level of quality and safety, all within a specific time plan.",
        "fatoraaboutbiolist1": "Taking your business to professionality.",
        "fatoraaboutbiolist2": "Leading your work to make a good business impact.",
        "fatoraaboutbiolist3": "Making sure that the Software delivered is professional, and scalable.",
        "fatoraaboutbiolist4": "Consider Cybersecurity practices in our solutions.",
        "fatoraaboutbiolist5": "Support needed for a secure digital environment using advanced and specialized tools.",
        "aboutValTitle1": "Clients",
        "aboutValTitle2": "Evolution",
        "aboutValTitle3": "Quality",
        "aboutValBio1": "We focus on wording Long-term Relationships with Customers to help them go straight to their Value Proposition.",
        "aboutValBio2": "We benefit from the updated insight data and learning to deliver premium services to our business customers worldwide.",
        "aboutValBio3": "The quality of the product or service is determined by the quality of the process that led to its production, so we at Enigma care about the performance of the process that leads to a product that conforms to international quality standards",
        "aboutvaluestitleelec": "our values",
        "fatoraaboutbioelec": "Electronic invoicing is a procedure that aims to convert the issuing of paper invoices and notes into an electronic process that allows the exchange and processing of invoices, credit notes & debit notes in a structure electronic format between buyer and seller through an integrated electronic solution.",
        "aboutvaluestitlewhy": " Why choice enigma fatora?",
        "fatoraaboutbiowhy": "Enigma Fatoora helps different companies, and retailers transform their business into a digital one, and this is represented by a number of services such as payment gateway, online store, POS cashier system, payment links, and creating professional invoices. Whether you own your own store or your online store, you can use our Enigma Fatoora system to easily receive your money from anywhere as quickly as possible. By using the Enigma Fatoora system, you can manage your trade through a single control panel and provide assistance from a specialized team to help you with e-marketing.",
        "readmoreabout": "read more",
        "footercontenttitlesub": 'subscribe to our newsletters',
        "footercontenttitlecontact": 'contact now',
        "footercontentaddress": 'Asir , Saudi Arabia',
        "footercontentemail": 'info@enigma.com.sa',
        "footercontentpagestitle": 'discover more about enigma',
        "footerMain": 'Main',
        "footerAbout": 'About',
        "footerServ": 'Services',
        "footerFatora": 'Enigma Fatora',
        "footerContact": 'Contact Us',
        "sidenavAbout": 'About',
        "sidenavWorks": 'Enigma fatora',
        "sidenavServices": 'Services',
        "sidenavNewproject": 'Contact',
        "headerTitleAbout": "about enigma"
    },
    "arabic": {
        "navAbout": "عنا",
        "navWorks": "انيجما فاتورة",
        "navServ": "خدماتنا",
        "navProject": "إبدا الآن ",
        "headerTitle": "عن انيجما",
        "headerCta": "تواصل معنا",
        "headerBio": "انيجما هي شركة حلول تقنية متخصصة في تصميم وتطوير مواقع الويب و تطبيقات الموبايل وتقديم التصميمات الإبداعية المبتكرة, بالاضافه الي نظام الفاتورة الإلكترونية .   تأسست انيجما في المملكة العربية السعودية وتقدم خدماتها للمؤسسات المختلفه  ، أو حتى متاجر التجزئة داخل المملكة وفي جميع أنحاء العالم. تدمج انيجما الابتكار الحديث والأمان في منتجاتها وتطور البرامج باستخدام أحدث التقنيات والأدوات المتخصصة . ",
        "aboutvaluestitlefatora": "مهمة انيجما",
        "aboutvaluesbio": "تركز انيجما علي الابتكار و الإبداع في كل المشروعات التي تقوم بتنفيذها , مع مراعة مستوي الجودة و الأمان , كل ذالك في خطة زمنية محددة ",
        "fatoraaboutbiolist1": "نأخذ اعمالك إلى الاحتراف",
        "fatoraaboutbiolist2": "نقود اعمالك لإحداث تأثير تجاري جيد.",
        "fatoraaboutbiolist3": "نتأكد من أن الخدمات المقدمة احترافية وقابلة للتطوير.",
        "fatoraaboutbiolist4": "نأخذ في الاعتبار ممارسات الأمن السيبراني في حلولنا.            ",
        "fatoraaboutbiolist5": "ندعم بيئة رقمية آمنة باستخدام أدوات متقدمة ومتخصصة في كل مجال .            ",
        "aboutValTitle1": "العملاء",
        "aboutValTitle2": "التطور",
        "aboutValTitle3": "الجودة",
        "aboutValBio1": "نركز على توطيد علاقات طويلة الأمد مع العملاء لمساعدتهم في تحقيق اهدافهم  .",
        "aboutValBio2": "نستفيد من البيانات المحدثة والتعلم المستمر لتقديم خدمات مبتكرة لعملائنا في جميع أنحاء العالم.",
        "aboutValBio3": "جودة المنتج او الخدمه تحدد بجودة العملية التي أدت إلي إنتاجها , لذلك نحن في انيجما نهتم بأداء العملية التي تؤدي إلى منتج مطابق لمعدلات الجودة العالمية",
        "aboutvaluestitleelec": "قيمنا",
        "fatoraaboutbioelec": "من خلال الإيمان بأن العمل في بيئة مثالية والتركيز على تحسين الفريق تقنيًا ، يمكننا تقديم التكنولوجيا التي تحتاجها الشركات والمؤسسات للتعامل مع التحديات الجديدة في مجالها.",
        "aboutvaluestitlewhy": "لماذا تختار انيجما فاتورة ؟",
        "fatoraaboutbiowhy": "تساعد انيجما فاتورة الشركات المختلفة و تجار التجزئة على تحويل أعمالهم إلى أعمال رقمية ، ويتم تمثيل ذلك من خلال عدد من الخدمات مثل بوابة الدفع والمتجر عبر الإنترنت ونظام الصراف POS وروابط الدفع وإنشاء فواتير إلكترونية مسجلة.  سواء كنت تمتلك متجرك الخاص أو متجرك عبر الإنترنت ، يمكنك استخدام نظام انيجما فاتورة الخاص  لتلقي أموالك بسهولة من أي مكان في أسرع وقت ممكن.  باستخدام نظام انيجما فاتورة ، يمكنك إدارة تجارتك من خلال لوحة تحكم واحدة وتقديم المساعدة من فريق متخصص لمساعدتك في التسويق الإلكتروني.",
        "readmoreabout": "إقرا المزيد",
        "footercontenttitlesub": 'اشترك في نشرتنا الاخباريه ',
        "footercontenttitlecontact": 'تواصل على ',
        "footercontentaddress": 'عسير , المملكة العربية السعودية',
        "footercontentemail": 'info@enigma.com.sa',
        "footercontentpagestitle": 'اكتشف المزيد عن انيجما',
        "footerMain": 'الرئيسية',
        "footerAbout": 'عن انيجما',
        "footerServ": 'خدماتنا',
        "footerFatora": 'انيجما فاتورة',
        "footerContact": 'تواصل معنا',
        "sidenavAbout": 'عن انيجما',
        "sidenavWorks": 'انيجما فاتورة',
        "sidenavServices": 'خدماتنا',
        "sidenavNewproject": 'تواصل معنا',
        "headerTitleAbout": "عن انيجما"
    }
};
//arabic lang
const changlangEn = document.querySelector('.en');
const changlangMobileEn = document.querySelector('.enmobile');
const changlangAr = document.querySelector('.ar');
const changlangMobileAr = document.querySelector('.armobile');
function rtl() {
    document.querySelector('.about-header').dir = "rtl";
    document.querySelectorAll('.about-values-content').forEach((para)=>{
        para.dir = "rtl";
    });
    document.querySelector('.about-header-title').dir = "rtl";
    document.getElementsByName('Email')[0].placeholder = 'البريد الالكتروني';
    document.querySelector('.mainnav').dir = "rtl";
    document.querySelector('.footer').dir = "rtl";
    document.querySelector('.about-mission').dir = "rtl";
    document.querySelector('.about-mission img').style.right = "40%";
    document.querySelector('.sidenav ul').dir = "rtl";
    document.querySelector('.backToTop').style.left = "30px";
    document.querySelector('.backToTop').style.right = "unset";
    document.querySelector('.footercontentnumber').dir = "ltr";
    document.querySelectorAll('.main-text').forEach((woh)=>{
        woh.dir = "rtl";
        woh.style.textAlign = "right";
    });
    document.querySelector('.fatorabtn').style.display = "none";
    localStorage.setItem('language', "arabic");
    document.body.style.fontFamily = "cairo";
    document.querySelector('.sidenav').style.fontFamily = "Cairo";
    document.querySelector('.sidenav ul').style.margin = "-50px";
    document.querySelector('.fatoraaboutbiolist1').style.margin = "-10px 20px";
    document.querySelector('.fatoraaboutbiolist2').style.margin = "-10px 20px";
    document.querySelector('.fatoraaboutbiolist3').style.margin = "-10px 20px";
    document.querySelector('.fatoraaboutbiolist4').style.margin = "-10px 20px";
    document.querySelector('.fatoraaboutbiolist5').style.margin = "-10px 20px";
    document.querySelector(".header h1").style.textAlign = "right";
    footerRtl();
}
function ltr() {
    //         document.querySelector('.about-item').dir = " ltr"
    document.querySelector('.about-header').dir = "ltr";
    document.querySelectorAll('.about-values-content').forEach((para)=>{
        para.dir = "ltr";
    });
    document.querySelector('.about-header-title').dir = "ltr";
    document.getElementsByName('Email')[0].placeholder = 'Email ';
    document.querySelector('.backToTop').style.right = "30px";
    document.querySelector('.backToTop').style.left = "unset";
    document.querySelector('.mainnav').dir = "ltr";
    document.querySelector('.sidenav ul').dir = "ltr";
    document.querySelector('.footer').dir = "ltr";
    document.querySelector('.about-mission').dir = "ltr";
    document.querySelector('.about-mission img').style.right = "-40%";
    document.querySelectorAll('.main-bio').forEach((woh)=>{
        woh.dir = "ltr";
        woh.style.textAlign = "left";
    });
    document.querySelectorAll('.main-text').forEach((woh)=>{
        woh.dir = "ltr";
        woh.style.textAlign = "left";
    });
    document.querySelector('.fatorabtn').style.display = "block";
    localStorage.setItem('language', "english");
    document.body.style.fontFamily = "Montserrat";
    document.querySelector('.sidenav').style.fontFamily = "Montserrat";
    document.querySelector('.fatoraaboutbiolist1').style.margin = "0px ";
    document.querySelector('.fatoraaboutbiolist2').style.margin = "0px ";
    document.querySelector('.fatoraaboutbiolist3').style.margin = "0px ";
    document.querySelector('.fatoraaboutbiolist4').style.margin = "0px ";
    document.querySelector('.fatoraaboutbiolist5').style.margin = "0px ";
    document.querySelector(".header h1").style.textAlign = "left";
    footerLtr();
}
// for desk 
changlangEn.addEventListener('click', function() {
    ltr();
});
changlangAr.addEventListener('click', function() {
    rtl();
});
// for mobile 
changlangMobileEn.addEventListener('click', function() {
    ltr();
});
changlangMobileAr.addEventListener('click', function() {
    rtl();
});
function footerRtl() {
    var x = window.matchMedia("(max-width: 800px)");
    if (x.matches) {
        document.querySelector('.footer').style.margin = "0 -5vw";
        document.querySelector('.about-mission img').style.right = "0%";
    }
}
function footerLtr() {
    var x = window.matchMedia("(max-width: 800px)");
    if (x.matches) {
        document.querySelector('.footer').style.margin = "0 5vw";
        document.querySelector('.about-mission img').style.right = "0%";
    }
}



//# sourceMappingURL=about.cc7ef950.js.map