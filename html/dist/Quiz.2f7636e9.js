// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gG6lx":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "501ec5f62f7636e9";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
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
            it = it.call(o);
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
            if (typeof document !== 'undefined') removeErrorOverlay();
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
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
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
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
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
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
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

},{}],"UDmWr":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const questions_json_1 = __importDefault(require("./questions.json"));
// Variable définissant si une questions a été répondue ou non
let clicked = false;
// Variable pour le score définie à 0
let score = 0;
// Div HTML contenant le score
let Score = document.createElement("div");
// Création de la partie générale du quiz
let Quiz = document.getElementById("Quiz");
// Création des différents thèmes
let Film = document.createElement("div");
Film.classList.add("Thème");
Film.innerHTML = "Les Films";
Quiz.appendChild(Film);
let Nature = document.createElement("div");
Nature.classList.add("Thème");
Nature.innerHTML = "La nature";
Quiz.appendChild(Nature);
let Jeux = document.createElement("div");
Jeux.classList.add("Thème");
Jeux.innerHTML = "Les Jeux-Vidéos";
Quiz.appendChild(Jeux);
// Quand on choisit le thème "Film"
Film.addEventListener("click", function() {
    // Suppression des thèmes pour afficher le quiz
    Quiz.removeChild(Film);
    Quiz.removeChild(Nature);
    Quiz.removeChild(Jeux);
    // Nombre de questions de chaque thèmes
    var NbQuestionsFilms = questions_json_1.default.Films.length;
    // Le nombre aléatoire mit dans une variable
    let NombreAleatoire1 = NbAleatoire1();
    // Ajout des questions dans un tableau et des réponses dans un tableau
    var QuestionsFilms = [];
    var Reponses = [];
    var GoodAwnser = [];
    // Ajout de tableaux dans le tableaux Reponses
    for(let i3 = 0; i3 < NbQuestionsFilms; i3++)Reponses.push([]);
    // Ajout des questions et de la bonne réponse
    for(let i1 = 0; i1 < NbQuestionsFilms; i1++){
        QuestionsFilms.push(questions_json_1.default.Films[i1].Question);
        GoodAwnser.push(questions_json_1.default.Films[i1].GoodAwnser);
    }
    // Ajout des reponses
    for(let i2 = 0; i2 < NbQuestionsFilms; i2++)for(let j = 0; j < 4; j++)Reponses[i2].push(questions_json_1.default.Films[i2].Reponses[j]);
    console.log("les questions sont" + QuestionsFilms);
    console.log(Reponses);
    // Création du quiz HTML
    // Création de la variable de la question
    let question1 = document.createElement("div");
    question1.id = "Question";
    // Création des variables de la question et des réponses
    Quiz.appendChild(question1);
    let GoodFeedBack = document.createElement("div");
    GoodFeedBack.classList.add("GoodFeedBack");
    GoodFeedBack.innerHTML = "Bravo, tu as trouvé la bonne réponse !";
    let BadFeedBack = document.createElement("div");
    BadFeedBack.classList.add("BadFeedBack");
    BadFeedBack.innerHTML = "Dommage, c'est la mauvaise réponse !";
    AffichageQuestion(question1, NombreAleatoire1);
    function CreateQuiz() {
        for(let i = 0; i < 4; i++){
            var reponse = document.createElement("div");
            reponse.classList.add("reponse");
            reponse.value = AffichageReponse(reponse, NombreAleatoire1, i);
            reponse.id = "reponse" + i; // output ==> reponse0 ou reponse1 ou reponse2 ou reponse3
            Quiz.appendChild(reponse);
            AffichageReponse(reponse, NombreAleatoire1, i);
            reponse.addEventListener("click", function() {
                if (clicked == false) {
                    if (Reponses[NombreAleatoire1][i] == GoodAwnser[NombreAleatoire1]) {
                        Quiz.appendChild(GoodFeedBack);
                        Scores();
                    } else Quiz.appendChild(BadFeedBack);
                    clicked = true;
                }
            });
        }
        return reponse;
    }
    let reponse1 = CreateQuiz();
    // Création du bouton de validation
    const submit = document.createElement("button");
    submit.id = "submit";
    submit.innerHTML = "validé";
    Quiz.appendChild(submit);
    // Fonction générant un nombre aléatoire
    function NbAleatoire1() {
        if (NbQuestionsFilms > 0) var NbAleatoire = Math.floor(Math.random() * NbQuestionsFilms);
        else NbAleatoire = -1;
        return NbAleatoire;
    }
    // Affichage du score
    Quiz.appendChild(Score);
    Score.classList.add("Score");
    Score.innerHTML = score + " / " + questions_json_1.default.Films.length;
    // Affichage des Questions
    function AffichageQuestion(question, NombreAleatoire) {
        if (NombreAleatoire >= 0) question.innerHTML = QuestionsFilms[NombreAleatoire];
        else {
            Quiz.removeChild(question);
            Quiz.removeChild(submit);
            finQuiz();
        }
    }
    // Affichage des Réponses
    function AffichageReponse(reponse, NombreAleatoire, index) {
        console.log(NombreAleatoire);
        if (NombreAleatoire >= 0) reponse.innerHTML = Reponses[NombreAleatoire][index];
        else Quiz.removeChild(reponse);
    }
    // Fonctioon supprimant la question qui est apparue
    function DelQuestion() {
        QuestionsFilms.splice(NombreAleatoire1, 1);
        Reponses.splice(NombreAleatoire1, 1);
        NbQuestionsFilms -= 1;
        console.log(QuestionsFilms);
        GoodAwnser.splice(NombreAleatoire1, 1);
    }
    // Fonction du score
    function Scores() {
        score += 1;
        Score.innerHTML = score + " / " + questions_json_1.default.Films.length;
    }
    // Création de l'interface de fin du quiz
    function finQuiz() {
        let fin = document.createElement("div");
        Quiz.appendChild(fin);
        fin.innerHTML = "C'est la fin du Quiz";
        fin.classList.add("FinQuiz");
        let retour = document.createElement("a");
        Quiz.appendChild(retour);
        retour.innerHTML = "<- Retour";
        retour.href = "/localhost:1234";
    }
    // Active la fonction AffichageAleatoire() et la fonction ArrayEmpty() lors du click sur le bouton Valider
    submit.onclick = function() {
        if (clicked == false) alert("Veuillez choisir une réponse");
        else {
            // Redéfinission de la vérification si une question a été répondue ou non
            clicked = false;
            // Appelle la fonction supprimant la question déjà apparue
            DelQuestion();
            // Redéfini les nombre aléatoire
            let NombreAleatoire = NbAleatoire1();
            AffichageQuestion(question1, NombreAleatoire);
            for(let i = 0; i < 4; i++){
                let reponse = document.getElementById("reponse" + i);
                AffichageReponse(reponse, NombreAleatoire, i);
            }
            // Supprime les class "GoodAnswer" et  "BadAnswer" qui ajoutent un fond à la réponse cliquée
            if (Quiz.contains(GoodFeedBack)) Quiz.removeChild(GoodFeedBack);
            else Quiz.removeChild(BadFeedBack);
        }
    };
});
// **********************************************************************************************************************************************************************
// Deuxième Quiz
// **********************************************************************************************************************************************************************
// Quand on choisit le Thème "Nature"
Nature.addEventListener("click", function() {
    // Suppression des thèmes pour afficher le quiz
    Quiz.removeChild(Film);
    Quiz.removeChild(Nature);
    Quiz.removeChild(Jeux);
    // Nombre de questions de chaque thèmes
    var NbQuestionsNature = questions_json_1.default.Nature.length;
    // Le nombre aléatoire mit dans une variable
    let NombreAleatoire2 = NbAleatoire2();
    // Ajout des questions dans un tableau et des réponses dans un tableau
    var QuestionsNature = [];
    var Reponses = [];
    var GoodAwnser = [];
    // Ajout de tableaux dans le tableaux Reponses
    for(let i6 = 0; i6 < NbQuestionsNature; i6++)Reponses.push([]);
    // Ajout des questions et de la bonne réponse
    for(let i4 = 0; i4 < NbQuestionsNature; i4++){
        QuestionsNature.push(questions_json_1.default.Nature[i4].Question);
        GoodAwnser.push(questions_json_1.default.Nature[i4].GoodAwnser);
    }
    // Ajout des reponses
    for(let i5 = 0; i5 < NbQuestionsNature; i5++)for(let j = 0; j < 4; j++)Reponses[i5].push(questions_json_1.default.Nature[i5].Reponses[j]);
    console.log("les questions sont" + QuestionsNature);
    console.log(Reponses);
    // Création du quiz HTML
    // Création de la variable de la question
    let question2 = document.createElement("div");
    question2.id = "Question";
    // Création des variables de la question et des réponses
    Quiz.appendChild(question2);
    let GoodFeedBack = document.createElement("div");
    GoodFeedBack.classList.add("GoodFeedBack");
    GoodFeedBack.innerHTML = "Bravo, tu as trouvé la bonne réponse !";
    let BadFeedBack = document.createElement("div");
    BadFeedBack.classList.add("BadFeedBack");
    BadFeedBack.innerHTML = "Dommage, c'est la mauvaise réponse !";
    AffichageQuestion(question2, NombreAleatoire2);
    function CreateQuiz() {
        for(let i = 0; i < 4; i++){
            var reponse = document.createElement("div");
            reponse.classList.add("reponse");
            reponse.value = AffichageReponse(reponse, NombreAleatoire2, i);
            reponse.id = "reponse" + i; // output ==> reponse0 ou reponse1 ou reponse2 ou reponse3
            Quiz.appendChild(reponse);
            AffichageReponse(reponse, NombreAleatoire2, i);
            reponse.addEventListener("click", function() {
                if (clicked == false) {
                    if (Reponses[NombreAleatoire2][i] == GoodAwnser[NombreAleatoire2]) {
                        Quiz.appendChild(GoodFeedBack);
                        Scores();
                    } else Quiz.appendChild(BadFeedBack);
                    clicked = true;
                }
            });
        }
        return reponse;
    }
    let reponse2 = CreateQuiz();
    // Création du bouton de validation
    const submit = document.createElement("button");
    submit.id = "submit";
    submit.innerHTML = "validé";
    Quiz.appendChild(submit);
    // Fonction générant un nombre aléatoire
    function NbAleatoire2() {
        if (NbQuestionsNature > 0) var NbAleatoire = Math.floor(Math.random() * NbQuestionsNature);
        else NbAleatoire = -1;
        return NbAleatoire;
    }
    // Affichage du score
    Quiz.appendChild(Score);
    Score.classList.add("Score");
    Score.innerHTML = score + " / " + questions_json_1.default.Nature.length;
    // Affichage des Questions
    function AffichageQuestion(question, NombreAleatoire) {
        if (NombreAleatoire >= 0) question.innerHTML = QuestionsNature[NombreAleatoire];
        else {
            Quiz.removeChild(question);
            Quiz.removeChild(submit);
            finQuiz();
        }
    }
    // Affichage des Réponses
    function AffichageReponse(reponse, NombreAleatoire, index) {
        console.log(NombreAleatoire);
        if (NombreAleatoire >= 0) reponse.innerHTML = Reponses[NombreAleatoire][index];
        else Quiz.removeChild(reponse);
    }
    // Fonctioon supprimant la question qui est apparue
    function DelQuestion() {
        QuestionsNature.splice(NombreAleatoire2, 1);
        Reponses.splice(NombreAleatoire2, 1);
        NbQuestionsNature -= 1;
        console.log(QuestionsNature);
        GoodAwnser.splice(NombreAleatoire2, 1);
    }
    // Fonction du score
    function Scores() {
        score += 1;
        Score.innerHTML = score + " / " + questions_json_1.default.Nature.length;
    }
    // Création de l'interface de fin du quiz
    function finQuiz() {
        let fin = document.createElement("div");
        Quiz.appendChild(fin);
        fin.innerHTML = "C'est la fin du Quiz";
        fin.classList.add("FinQuiz");
        let retour = document.createElement("a");
        Quiz.appendChild(retour);
        retour.innerHTML = "<- Retour";
        retour.href = "/localhost:1234";
    }
    // Active la fonction AffichageAleatoire() et la fonction ArrayEmpty() lors du click sur le bouton Valider
    submit.onclick = function() {
        if (clicked == false) alert("Veuillez choisir une réponse");
        else {
            // Redéfinission de la vérification si une question a été répondue ou non
            clicked = false;
            // Appelle la fonction supprimant la question déjà apparue
            DelQuestion();
            // Redéfini les nombre aléatoire
            let NombreAleatoire = NbAleatoire2();
            AffichageQuestion(question2, NombreAleatoire);
            for(let i = 0; i < 4; i++){
                let reponse = document.getElementById("reponse" + i);
                AffichageReponse(reponse, NombreAleatoire, i);
            }
            // Supprime les class "GoodAnswer" et  "BadAnswer" qui ajoutent un fond à la réponse cliquée
            if (Quiz.contains(GoodFeedBack)) Quiz.removeChild(GoodFeedBack);
            else Quiz.removeChild(BadFeedBack);
        }
    };
});
// **********************************************************************************************************************************************************************
// Deuxième Quiz
// **********************************************************************************************************************************************************************
// Quand on choisit le Thème "Jeux"
Jeux.addEventListener("click", function() {
    // Suppression des thèmes pour afficher le quiz
    Quiz.removeChild(Film);
    Quiz.removeChild(Nature);
    Quiz.removeChild(Jeux);
    // Nombre de questions de chaque thèmes
    var NbQuestionsJeux = questions_json_1.default.JeuxVidéos.length;
    // Le nombre aléatoire mit dans une variable
    let NombreAleatoire3 = NbAleatoire3();
    // Ajout des questions dans un tableau et des réponses dans un tableau
    var QuestionsJeux = [];
    var Reponses = [];
    var GoodAwnser = [];
    // Ajout de tableaux dans le tableaux Reponses
    for(let i9 = 0; i9 < NbQuestionsJeux; i9++)Reponses.push([]);
    // Ajout des questions et de la bonne réponse
    for(let i7 = 0; i7 < NbQuestionsJeux; i7++){
        QuestionsJeux.push(questions_json_1.default.JeuxVidéos[i7].Question);
        GoodAwnser.push(questions_json_1.default.JeuxVidéos[i7].GoodAwnser);
    }
    // Ajout des reponses
    for(let i8 = 0; i8 < NbQuestionsJeux; i8++)for(let j = 0; j < 4; j++)Reponses[i8].push(questions_json_1.default.JeuxVidéos[i8].Reponses[j]);
    console.log("les questions sont" + QuestionsJeux);
    console.log(Reponses);
    // Création du quiz HTML
    // Création de la variable de la question
    let question3 = document.createElement("div");
    question3.id = "Question";
    // Création des variables de la question et des réponses
    Quiz.appendChild(question3);
    let GoodFeedBack = document.createElement("div");
    GoodFeedBack.classList.add("GoodFeedBack");
    GoodFeedBack.innerHTML = "Bravo, tu as trouvé la bonne réponse !";
    let BadFeedBack = document.createElement("div");
    BadFeedBack.classList.add("BadFeedBack");
    BadFeedBack.innerHTML = "Dommage, c'est la mauvaise réponse !";
    AffichageQuestion(question3, NombreAleatoire3);
    function CreateQuiz() {
        for(let i = 0; i < 4; i++){
            var reponse = document.createElement("div");
            reponse.classList.add("reponse");
            reponse.value = AffichageReponse(reponse, NombreAleatoire3, i);
            reponse.id = "reponse" + i; // output ==> reponse0 ou reponse1 ou reponse2 ou reponse3
            Quiz.appendChild(reponse);
            AffichageReponse(reponse, NombreAleatoire3, i);
            reponse.addEventListener("click", function() {
                if (clicked == false) {
                    if (Reponses[NombreAleatoire3][i] == GoodAwnser[NombreAleatoire3]) {
                        Quiz.appendChild(GoodFeedBack);
                        Scores();
                    } else Quiz.appendChild(BadFeedBack);
                    clicked = true;
                }
            });
        }
        return reponse;
    }
    let reponse3 = CreateQuiz();
    // Création du bouton de validation
    const submit = document.createElement("button");
    submit.id = "submit";
    submit.innerHTML = "validé";
    Quiz.appendChild(submit);
    // Fonction générant un nombre aléatoire
    function NbAleatoire3() {
        if (NbQuestionsJeux > 0) var NbAleatoire = Math.floor(Math.random() * NbQuestionsJeux);
        else NbAleatoire = -1;
        return NbAleatoire;
    }
    // Affichage du score
    Quiz.appendChild(Score);
    Score.classList.add("Score");
    Score.innerHTML = score + " / " + questions_json_1.default.JeuxVidéos.length;
    // Affichage des Questions
    function AffichageQuestion(question, NombreAleatoire) {
        if (NombreAleatoire >= 0) question.innerHTML = QuestionsJeux[NombreAleatoire];
        else {
            Quiz.removeChild(question);
            Quiz.removeChild(submit);
            finQuiz();
        }
    }
    // Affichage des Réponses
    function AffichageReponse(reponse, NombreAleatoire, index) {
        console.log(NombreAleatoire);
        if (NombreAleatoire >= 0) reponse.innerHTML = Reponses[NombreAleatoire][index];
        else Quiz.removeChild(reponse);
    }
    // Fonctioon supprimant la question qui est apparue
    function DelQuestion() {
        QuestionsJeux.splice(NombreAleatoire3, 1);
        Reponses.splice(NombreAleatoire3, 1);
        NbQuestionsJeux -= 1;
        console.log(QuestionsJeux);
        GoodAwnser.splice(NombreAleatoire3, 1);
    }
    // Fonction du score
    function Scores() {
        score += 1;
        Score.innerHTML = score + " / " + questions_json_1.default.JeuxVidéos.length;
    }
    // Création de l'interface de fin du quiz
    function finQuiz() {
        let fin = document.createElement("div");
        Quiz.appendChild(fin);
        fin.innerHTML = "C'est la fin du Quiz";
        fin.classList.add("FinQuiz");
        let retour = document.createElement("a");
        Quiz.appendChild(retour);
        retour.innerHTML = "<- Retour";
        retour.href = "/localhost:1234";
    }
    // Active la fonction AffichageAleatoire() et la fonction ArrayEmpty() lors du click sur le bouton Valider
    submit.onclick = function() {
        if (clicked == false) alert("Veuillez choisir une réponse");
        else {
            // Redéfinission de la vérification si une question a été répondue ou non
            clicked = false;
            // Appelle la fonction supprimant la question déjà apparue
            DelQuestion();
            // Redéfini les nombre aléatoire
            let NombreAleatoire = NbAleatoire3();
            AffichageQuestion(question3, NombreAleatoire);
            for(let i = 0; i < 4; i++){
                let reponse = document.getElementById("reponse" + i);
                AffichageReponse(reponse, NombreAleatoire, i);
            }
            // Supprime les class "GoodAnswer" et  "BadAnswer" qui ajoutent un fond à la réponse cliquée
            if (Quiz.contains(GoodFeedBack)) Quiz.removeChild(GoodFeedBack);
            else Quiz.removeChild(BadFeedBack);
        }
    };
});

},{"./questions.json":"4WqBB"}],"4WqBB":[function(require,module,exports) {
module.exports = JSON.parse("{\"Nature\":[{\"Question\":\"Quel animal a dees rayures noires\",\"Reponses\":[\"Chien\",\"Zèbre\",\"Châmeau\",\"Souris\"],\"GoodAwnser\":\"Zèbre\"},{\"Question\":\"Où vit le Panda ?\",\"Reponses\":[\"France\",\"Japon\",\"Chine\",\"Australie\"],\"GoodAwnser\":\"Chine\"}],\"JeuxVidéos\":[{\"Question\":\"Quand a été créé Minecraft ?\",\"Reponses\":[2009,2008,2007,2010],\"GoodAwnser\":2009},{\"Question\":\"Comment s'appelle le frère de Mario ?\",\"Reponses\":[\"Luigi\",\"Bowser\",\"Wario\",\"Waluigi\"],\"GoodAwnser\":\"Luigi\"}],\"Films\":[{\"Question\":\"De quelle couleur est Shrek ?\",\"Reponses\":[\"Vert\",\"Rouge\",\"Jaune\",\"Bleu\"],\"GoodAwnser\":\"Vert\"},{\"Question\":\"Quel type de véhicule est Martin dans Cars ?\",\"Reponses\":[\"Course\",\"Dépanneuse\",\"Tank\",\"Scooter\"],\"GoodAwnser\":\"Dépanneuse\"},{\"Question\":\"Comment s'appellent les personnages jaune dans 'Moi moche et méchant' ? \",\"Reponses\":[\"Les minions\",\"Les jaunes\",\"Les aliens\",\"Les goules\"],\"GoodAwnser\":\"Les minions\"}]}");

},{}]},["gG6lx","UDmWr"], "UDmWr", "parcelRequirecd43")

//# sourceMappingURL=Quiz.2f7636e9.js.map
