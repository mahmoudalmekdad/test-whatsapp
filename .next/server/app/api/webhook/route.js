"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/webhook/route";
exports.ids = ["app/api/webhook/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwebhook%2Froute&page=%2Fapi%2Fwebhook%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwebhook%2Froute.ts&appDir=%2FUsers%2Fmr.radi%2FDesktop%2Fhi%2Ftest-whatsapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmr.radi%2FDesktop%2Fhi%2Ftest-whatsapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwebhook%2Froute&page=%2Fapi%2Fwebhook%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwebhook%2Froute.ts&appDir=%2FUsers%2Fmr.radi%2FDesktop%2Fhi%2Ftest-whatsapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmr.radi%2FDesktop%2Fhi%2Ftest-whatsapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_mr_radi_Desktop_hi_test_whatsapp_app_api_webhook_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/webhook/route.ts */ \"(rsc)/./app/api/webhook/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/webhook/route\",\n        pathname: \"/api/webhook\",\n        filename: \"route\",\n        bundlePath: \"app/api/webhook/route\"\n    },\n    resolvedPagePath: \"/Users/mr.radi/Desktop/hi/test-whatsapp/app/api/webhook/route.ts\",\n    nextConfigOutput,\n    userland: _Users_mr_radi_Desktop_hi_test_whatsapp_app_api_webhook_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/webhook/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ3ZWJob29rJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ3ZWJob29rJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGd2ViaG9vayUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm1yLnJhZGklMkZEZXNrdG9wJTJGaGklMkZ0ZXN0LXdoYXRzYXBwJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRm1yLnJhZGklMkZEZXNrdG9wJTJGaGklMkZ0ZXN0LXdoYXRzYXBwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNnQjtBQUM3RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3RleHQvPzE2MzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL21yLnJhZGkvRGVza3RvcC9oaS90ZXN0LXdoYXRzYXBwL2FwcC9hcGkvd2ViaG9vay9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvd2ViaG9vay9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3dlYmhvb2tcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3dlYmhvb2svcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvbXIucmFkaS9EZXNrdG9wL2hpL3Rlc3Qtd2hhdHNhcHAvYXBwL2FwaS93ZWJob29rL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS93ZWJob29rL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwebhook%2Froute&page=%2Fapi%2Fwebhook%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwebhook%2Froute.ts&appDir=%2FUsers%2Fmr.radi%2FDesktop%2Fhi%2Ftest-whatsapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmr.radi%2FDesktop%2Fhi%2Ftest-whatsapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/webhook/route.ts":
/*!**********************************!*\
  !*** ./app/api/webhook/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n// To handle a GET request to /api\nasync function GET(req) {\n    if (req.query[\"hub.mode\"] && req.query[\"hub.verify_token\"]) {\n        if (req.query[\"hub.mode\"] === \"subscribe\" && req.query[\"hub.verify_token\"] === \"TestByJawad\") {\n            // res.status(200).send(challange)\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(Number(req.query[\"hub.challenge\"]), {\n                status: 200\n            });\n        } else {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                res: \"res.status(403)\"\n            }, {\n                status: 403\n            });\n        }\n    } else {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            res: \"res.status(403)\"\n        }, {\n            status: 403\n        });\n    }\n} // To handle a POST request to /api\n // export async function POST(req: Request) {\n //   // Do whatever you want\n //   let body_param: any = req.body\n //   console.log(JSON.stringify(body_param,null,2))\n //   if(body_param && body_param.object){\n //       if(body_param.entry && \n //           body_param.entry[0].changes &&\n //           body_param.entry[0].changes[0].value.messages &&\n //           body_param.entry[0].changes[0].value.messages[0]){\n //           let phone_no_id = body_param.entry[0].changes[0].value.metadata.phone_number_id\n //           let from = body_param.entry[0].changes[0].value.messages[0].from\n //           let msg_body = body_param.entry[0].changes[0].value.messages[0].text.body\n //           axios({\n //               method : \"POST\",\n //               url : `https://graph.facebook.com/v19.0/${phone_no_id}/messages?access_token=${`EAANrLF1TIn8BO5vaM4YohWbYNqlRg72pZBJ8eBM3KXdFQDuNMDUc8ZCgEWgrJPaEpNgIQnsJOZCOG8B3Y6NBCWjfEKhPYwkeiVVWJKsLY51LhBkIy6O5FR0ZAec4WyBFHRZC0Vci1CKWjmBzqFLHQJXlXNXAB9JlHyb0hkNxfEnAQXyvWHIrLlPvfTzak5lcSrvINZCuvDvYFwZBZCjZB`}`,\n //               data : {\n //                   messaging_product : \"whatsapp\",\n //                   to : from,\n //                   text : {\n //                       body:\"Hi.. I'm Dr. Clinica, your message is \"+msg_body\n //                   }\n //               },\n //               headers : {\n //                   \"Content-Type\" : \"application/json\"\n //               }\n //           }).then(function (response) {\n //               console.log(response)\n //           }).catch(function (error) {\n //               console.log(error.toJSON());\n //           });\n //           return NextResponse.json({ message: \"res: status(200)\" }, { status: 200 });\n //       }else{\n //         return NextResponse.json({ message: \"res: (400) \" }, { status: 200 });\n //     }\n //   }else{\n //     return NextResponse.json({ message: \"res: (200) \" }, { status: 200 });\n //   }\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3dlYmhvb2svcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDMkM7QUFFM0Msa0NBQWtDO0FBQzNCLGVBQWVDLElBQUlDLEdBQU87SUFFL0IsSUFBR0EsSUFBSUMsS0FBSyxDQUFDLFdBQVcsSUFBSUQsSUFBSUMsS0FBSyxDQUFDLG1CQUFtQixFQUFDO1FBQ3RELElBQUdELElBQUlDLEtBQUssQ0FBQyxXQUFXLEtBQUssZUFBZUQsSUFBSUMsS0FBSyxDQUFDLG1CQUFtQixLQUFLLGVBQWM7WUFDeEYsa0NBQWtDO1lBQ2xDLE9BQU9ILHFEQUFZQSxDQUFDSSxJQUFJLENBQUNDLE9BQU9ILElBQUlDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRztnQkFBRUcsUUFBUTtZQUFJO1FBQy9FLE9BQUs7WUFDSCxPQUFPTixxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDO2dCQUFDRyxLQUFLO1lBQWlCLEdBQUc7Z0JBQUVELFFBQVE7WUFBSTtRQUNuRTtJQUNKLE9BQUs7UUFDRCxPQUFPTixxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDO1lBQUNHLEtBQUs7UUFBaUIsR0FBRztZQUFFRCxRQUFRO1FBQUk7SUFDckU7QUFDRixFQUVBLG1DQUFtQztDQUNuQyw2Q0FBNkM7Q0FDN0MsNEJBQTRCO0NBQzVCLG1DQUFtQztDQUNuQyxtREFBbUQ7Q0FFbkQseUNBQXlDO0NBQ3pDLGdDQUFnQztDQUNoQywyQ0FBMkM7Q0FDM0MsNkRBQTZEO0NBQzdELCtEQUErRDtDQUUvRCw0RkFBNEY7Q0FDNUYsNkVBQTZFO0NBQzdFLHNGQUFzRjtDQUV0RixvQkFBb0I7Q0FDcEIsaUNBQWlDO0NBQ2pDLDJUQUEyVDtDQUMzVCx5QkFBeUI7Q0FDekIsb0RBQW9EO0NBQ3BELCtCQUErQjtDQUMvQiw2QkFBNkI7Q0FDN0IsK0VBQStFO0NBQy9FLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsNEJBQTRCO0NBQzVCLHdEQUF3RDtDQUN4RCxrQkFBa0I7Q0FDbEIsMENBQTBDO0NBQzFDLHNDQUFzQztDQUN0Qyx3Q0FBd0M7Q0FDeEMsNkNBQTZDO0NBQzdDLGdCQUFnQjtDQUNoQix3RkFBd0Y7Q0FDeEYsZUFBZTtDQUNmLGlGQUFpRjtDQUNqRixRQUFRO0NBQ1IsV0FBVztDQUNYLDZFQUE2RTtDQUU3RSxNQUFNO0NBQ04sSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RleHQvLi9hcHAvYXBpL3dlYmhvb2svcm91dGUudHM/MjE4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuLy8gVG8gaGFuZGxlIGEgR0VUIHJlcXVlc3QgdG8gL2FwaVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXE6YW55KSB7XG5cbiAgaWYocmVxLnF1ZXJ5W1wiaHViLm1vZGVcIl0gJiYgcmVxLnF1ZXJ5W1wiaHViLnZlcmlmeV90b2tlblwiXSl7XG4gICAgICBpZihyZXEucXVlcnlbXCJodWIubW9kZVwiXSA9PT0gXCJzdWJzY3JpYmVcIiAmJiByZXEucXVlcnlbXCJodWIudmVyaWZ5X3Rva2VuXCJdID09PSBcIlRlc3RCeUphd2FkXCIpe1xuICAgICAgICAgIC8vIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGNoYWxsYW5nZSlcbiAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oTnVtYmVyKHJlcS5xdWVyeVtcImh1Yi5jaGFsbGVuZ2VcIl0pLCB7IHN0YXR1czogMjAwIH0pO1xuICAgICAgfWVsc2V7ICBcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtyZXM6ICdyZXMuc3RhdHVzKDQwMyknfSwgeyBzdGF0dXM6IDQwMyB9KTtcbiAgICAgIH1cbiAgfWVsc2V7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe3JlczogJ3Jlcy5zdGF0dXMoNDAzKSd9LCB7IHN0YXR1czogNDAzIH0pO1xuICB9XG59XG5cbi8vIFRvIGhhbmRsZSBhIFBPU1QgcmVxdWVzdCB0byAvYXBpXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcbi8vICAgLy8gRG8gd2hhdGV2ZXIgeW91IHdhbnRcbi8vICAgbGV0IGJvZHlfcGFyYW06IGFueSA9IHJlcS5ib2R5XG4vLyAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGJvZHlfcGFyYW0sbnVsbCwyKSlcblxuLy8gICBpZihib2R5X3BhcmFtICYmIGJvZHlfcGFyYW0ub2JqZWN0KXtcbi8vICAgICAgIGlmKGJvZHlfcGFyYW0uZW50cnkgJiYgXG4vLyAgICAgICAgICAgYm9keV9wYXJhbS5lbnRyeVswXS5jaGFuZ2VzICYmXG4vLyAgICAgICAgICAgYm9keV9wYXJhbS5lbnRyeVswXS5jaGFuZ2VzWzBdLnZhbHVlLm1lc3NhZ2VzICYmXG4vLyAgICAgICAgICAgYm9keV9wYXJhbS5lbnRyeVswXS5jaGFuZ2VzWzBdLnZhbHVlLm1lc3NhZ2VzWzBdKXtcblxuLy8gICAgICAgICAgIGxldCBwaG9uZV9ub19pZCA9IGJvZHlfcGFyYW0uZW50cnlbMF0uY2hhbmdlc1swXS52YWx1ZS5tZXRhZGF0YS5waG9uZV9udW1iZXJfaWRcbi8vICAgICAgICAgICBsZXQgZnJvbSA9IGJvZHlfcGFyYW0uZW50cnlbMF0uY2hhbmdlc1swXS52YWx1ZS5tZXNzYWdlc1swXS5mcm9tXG4vLyAgICAgICAgICAgbGV0IG1zZ19ib2R5ID0gYm9keV9wYXJhbS5lbnRyeVswXS5jaGFuZ2VzWzBdLnZhbHVlLm1lc3NhZ2VzWzBdLnRleHQuYm9keVxuXG4vLyAgICAgICAgICAgYXhpb3Moe1xuLy8gICAgICAgICAgICAgICBtZXRob2QgOiBcIlBPU1RcIixcbi8vICAgICAgICAgICAgICAgdXJsIDogYGh0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tL3YxOS4wLyR7cGhvbmVfbm9faWR9L21lc3NhZ2VzP2FjY2Vzc190b2tlbj0ke2BFQUFOckxGMVRJbjhCTzV2YU00WW9oV2JZTnFsUmc3MnBaQko4ZUJNM0tYZEZRRHVOTURVYzhaQ2dFV2dySlBhRXBOZ0lRbnNKT1pDT0c4QjNZNk5CQ1dqZkVLaFBZd2tlaVZWV0pLc0xZNTFMaEJrSXk2TzVGUjBaQWVjNFd5QkZIUlpDMFZjaTFDS1dqbUJ6cUZMSFFKWGxYTlhBQjlKbEh5YjBoa054ZkVuQVFYeXZXSElyTGxQdmZUemFrNWxjU3J2SU5aQ3V2RHZZRndaQlpDalpCYH1gLFxuLy8gICAgICAgICAgICAgICBkYXRhIDoge1xuLy8gICAgICAgICAgICAgICAgICAgbWVzc2FnaW5nX3Byb2R1Y3QgOiBcIndoYXRzYXBwXCIsXG4vLyAgICAgICAgICAgICAgICAgICB0byA6IGZyb20sXG4vLyAgICAgICAgICAgICAgICAgICB0ZXh0IDoge1xuLy8gICAgICAgICAgICAgICAgICAgICAgIGJvZHk6XCJIaS4uIEknbSBEci4gQ2xpbmljYSwgeW91ciBtZXNzYWdlIGlzIFwiK21zZ19ib2R5XG4vLyAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICAgIGhlYWRlcnMgOiB7XG4vLyAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiIDogXCJhcHBsaWNhdGlvbi9qc29uXCJcbi8vICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4vLyAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuLy8gICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuLy8gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50b0pTT04oKSk7XG4vLyAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJyZXM6IHN0YXR1cygyMDApXCIgfSwgeyBzdGF0dXM6IDIwMCB9KTtcbi8vICAgICAgIH1lbHNle1xuLy8gICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcInJlczogKDQwMCkgXCIgfSwgeyBzdGF0dXM6IDIwMCB9KTtcbi8vICAgICB9XG4vLyAgIH1lbHNle1xuLy8gICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwicmVzOiAoMjAwKSBcIiB9LCB7IHN0YXR1czogMjAwIH0pO1xuXG4vLyAgIH1cbi8vIH0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiR0VUIiwicmVxIiwicXVlcnkiLCJqc29uIiwiTnVtYmVyIiwic3RhdHVzIiwicmVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/webhook/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwebhook%2Froute&page=%2Fapi%2Fwebhook%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwebhook%2Froute.ts&appDir=%2FUsers%2Fmr.radi%2FDesktop%2Fhi%2Ftest-whatsapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmr.radi%2FDesktop%2Fhi%2Ftest-whatsapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();