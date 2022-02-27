
var bindings = (function() {
  var _scriptDir = import.meta.url;
  
  return (
function(bindings) {
  bindings = bindings || {};

var Module=typeof bindings!=="undefined"?bindings:{};var readyPromiseResolve,readyPromiseReject;Module["ready"]=new Promise(function(resolve,reject){readyPromiseResolve=resolve;readyPromiseReject=reject});var moduleOverrides={};var key;for(key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key]}}var arguments_=[];var thisProgram="./this.program";var quit_=function(status,toThrow){throw toThrow};var ENVIRONMENT_IS_WEB=true;var ENVIRONMENT_IS_WORKER=false;var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(typeof document!=="undefined"&&document.currentScript){scriptDirectory=document.currentScript.src}if(_scriptDir){scriptDirectory=_scriptDir}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.replace(/[?#].*/,"").lastIndexOf("/")+1)}else{scriptDirectory=""}{read_=function(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=function(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=function(url,onload,onerror){var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=function(){if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}setWindowTitle=function(title){document.title=title}}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.warn.bind(console);for(key in moduleOverrides){if(moduleOverrides.hasOwnProperty(key)){Module[key]=moduleOverrides[key]}}moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];var tempRet0=0;var setTempRet0=function(value){tempRet0=value};var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var noExitRuntime=Module["noExitRuntime"]||true;if(typeof WebAssembly!=="object"){abort("no native wasm support detected")}var wasmMemory;var ABORT=false;var EXITSTATUS;function assert(condition,text){if(!condition){abort("Assertion failed: "+text)}}function alignUp(x,multiple){if(x%multiple>0){x+=multiple-x%multiple}return x}var buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateGlobalBufferAndViews(buf){buffer=buf;Module["HEAP8"]=HEAP8=new Int8Array(buf);Module["HEAP16"]=HEAP16=new Int16Array(buf);Module["HEAP32"]=HEAP32=new Int32Array(buf);Module["HEAPU8"]=HEAPU8=new Uint8Array(buf);Module["HEAPU16"]=HEAPU16=new Uint16Array(buf);Module["HEAPU32"]=HEAPU32=new Uint32Array(buf);Module["HEAPF32"]=HEAPF32=new Float32Array(buf);Module["HEAPF64"]=HEAPF64=new Float64Array(buf)}var INITIAL_MEMORY=Module["INITIAL_MEMORY"]||16777216;var wasmTable;var __ATPRERUN__=[];var __ATINIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnInit(cb){__ATINIT__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}Module["preloadedImages"]={};Module["preloadedAudios"]={};function abort(what){{if(Module["onAbort"]){Module["onAbort"](what)}}what="Aborted("+what+")";err(what);ABORT=true;EXITSTATUS=1;what+=". Build with -s ASSERTIONS=1 for more info.";var e=new WebAssembly.RuntimeError(what);readyPromiseReject(e);throw e}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return filename.startsWith(dataURIPrefix)}var wasmBinaryFile;if(Module["locateFile"]){wasmBinaryFile="output.wasm";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}}else{wasmBinaryFile=new URL("output.wasm",import.meta.url).toString()}function getBinary(file){try{if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}else{throw"both async and sync fetching of the wasm failed"}}catch(err){abort(err)}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch==="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){if(!response["ok"]){throw"failed to load wasm binary file at '"+wasmBinaryFile+"'"}return response["arrayBuffer"]()}).catch(function(){return getBinary(wasmBinaryFile)})}}return Promise.resolve().then(function(){return getBinary(wasmBinaryFile)})}function createWasm(){var info={"a":asmLibraryArg};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;wasmMemory=Module["asm"]["g"];updateGlobalBufferAndViews(wasmMemory.buffer);wasmTable=Module["asm"]["i"];addOnInit(Module["asm"]["h"]);removeRunDependency("wasm-instantiate")}addRunDependency("wasm-instantiate");function receiveInstantiationResult(result){receiveInstance(result["instance"])}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){return WebAssembly.instantiate(binary,info)}).then(function(instance){return instance}).then(receiver,function(reason){err("failed to asynchronously prepare wasm: "+reason);abort(reason)})}function instantiateAsync(){if(!wasmBinary&&typeof WebAssembly.instantiateStreaming==="function"&&!isDataURI(wasmBinaryFile)&&typeof fetch==="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiationResult,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");return instantiateArrayBuffer(receiveInstantiationResult)})})}else{return instantiateArrayBuffer(receiveInstantiationResult)}}if(Module["instantiateWasm"]){try{var exports=Module["instantiateWasm"](info,receiveInstance);return exports}catch(e){err("Module.instantiateWasm callback failed with error: "+e);return false}}instantiateAsync().catch(readyPromiseReject);return{}}function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback=="function"){callback(Module);continue}var func=callback.func;if(typeof func==="number"){if(callback.arg===undefined){getWasmTableEntry(func)()}else{getWasmTableEntry(func)(callback.arg)}}else{func(callback.arg===undefined?null:callback.arg)}}}var wasmTableMirror=[];function getWasmTableEntry(funcPtr){var func=wasmTableMirror[funcPtr];if(!func){if(funcPtr>=wasmTableMirror.length)wasmTableMirror.length=funcPtr+1;wasmTableMirror[funcPtr]=func=wasmTable.get(funcPtr)}return func}function ___cxa_allocate_exception(size){return _malloc(size+16)+16}function ExceptionInfo(excPtr){this.excPtr=excPtr;this.ptr=excPtr-16;this.set_type=function(type){HEAP32[this.ptr+4>>2]=type};this.get_type=function(){return HEAP32[this.ptr+4>>2]};this.set_destructor=function(destructor){HEAP32[this.ptr+8>>2]=destructor};this.get_destructor=function(){return HEAP32[this.ptr+8>>2]};this.set_refcount=function(refcount){HEAP32[this.ptr>>2]=refcount};this.set_caught=function(caught){caught=caught?1:0;HEAP8[this.ptr+12>>0]=caught};this.get_caught=function(){return HEAP8[this.ptr+12>>0]!=0};this.set_rethrown=function(rethrown){rethrown=rethrown?1:0;HEAP8[this.ptr+13>>0]=rethrown};this.get_rethrown=function(){return HEAP8[this.ptr+13>>0]!=0};this.init=function(type,destructor){this.set_type(type);this.set_destructor(destructor);this.set_refcount(0);this.set_caught(false);this.set_rethrown(false)};this.add_ref=function(){var value=HEAP32[this.ptr>>2];HEAP32[this.ptr>>2]=value+1};this.release_ref=function(){var prev=HEAP32[this.ptr>>2];HEAP32[this.ptr>>2]=prev-1;return prev===1}}var exceptionLast=0;var uncaughtExceptionCount=0;function ___cxa_throw(ptr,type,destructor){var info=new ExceptionInfo(ptr);info.init(type,destructor);exceptionLast=ptr;uncaughtExceptionCount++;throw ptr}function _abort(){abort("")}function _emscripten_memcpy_big(dest,src,num){HEAPU8.copyWithin(dest,src,src+num)}function emscripten_realloc_buffer(size){try{wasmMemory.grow(size-buffer.byteLength+65535>>>16);updateGlobalBufferAndViews(wasmMemory.buffer);return 1}catch(e){}}function _emscripten_resize_heap(requestedSize){var oldSize=HEAPU8.length;requestedSize=requestedSize>>>0;var maxHeapSize=2147483648;if(requestedSize>maxHeapSize){return false}for(var cutDown=1;cutDown<=4;cutDown*=2){var overGrownHeapSize=oldSize*(1+.2/cutDown);overGrownHeapSize=Math.min(overGrownHeapSize,requestedSize+100663296);var newSize=Math.min(maxHeapSize,alignUp(Math.max(requestedSize,overGrownHeapSize),65536));var replacement=emscripten_realloc_buffer(newSize);if(replacement){return true}}return false}function _setTempRet0(val){setTempRet0(val)}var asmLibraryArg={"f":___cxa_allocate_exception,"e":___cxa_throw,"d":_abort,"b":_emscripten_memcpy_big,"c":_emscripten_resize_heap,"a":_setTempRet0};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){return(___wasm_call_ctors=Module["___wasm_call_ctors"]=Module["asm"]["h"]).apply(null,arguments)};var _emscripten_bind_VoidPtr___destroy___0=Module["_emscripten_bind_VoidPtr___destroy___0"]=function(){return(_emscripten_bind_VoidPtr___destroy___0=Module["_emscripten_bind_VoidPtr___destroy___0"]=Module["asm"]["j"]).apply(null,arguments)};var _emscripten_bind_Heap_Heap_0=Module["_emscripten_bind_Heap_Heap_0"]=function(){return(_emscripten_bind_Heap_Heap_0=Module["_emscripten_bind_Heap_Heap_0"]=Module["asm"]["k"]).apply(null,arguments)};var _emscripten_bind_Heap_insert_2=Module["_emscripten_bind_Heap_insert_2"]=function(){return(_emscripten_bind_Heap_insert_2=Module["_emscripten_bind_Heap_insert_2"]=Module["asm"]["l"]).apply(null,arguments)};var _emscripten_bind_Heap_extract_0=Module["_emscripten_bind_Heap_extract_0"]=function(){return(_emscripten_bind_Heap_extract_0=Module["_emscripten_bind_Heap_extract_0"]=Module["asm"]["m"]).apply(null,arguments)};var _emscripten_bind_Heap_size_0=Module["_emscripten_bind_Heap_size_0"]=function(){return(_emscripten_bind_Heap_size_0=Module["_emscripten_bind_Heap_size_0"]=Module["asm"]["n"]).apply(null,arguments)};var _emscripten_bind_Heap___destroy___0=Module["_emscripten_bind_Heap___destroy___0"]=function(){return(_emscripten_bind_Heap___destroy___0=Module["_emscripten_bind_Heap___destroy___0"]=Module["asm"]["o"]).apply(null,arguments)};var _emscripten_bind_Deque_Deque_0=Module["_emscripten_bind_Deque_Deque_0"]=function(){return(_emscripten_bind_Deque_Deque_0=Module["_emscripten_bind_Deque_Deque_0"]=Module["asm"]["p"]).apply(null,arguments)};var _emscripten_bind_Deque_push_1=Module["_emscripten_bind_Deque_push_1"]=function(){return(_emscripten_bind_Deque_push_1=Module["_emscripten_bind_Deque_push_1"]=Module["asm"]["q"]).apply(null,arguments)};var _emscripten_bind_Deque_unshift_1=Module["_emscripten_bind_Deque_unshift_1"]=function(){return(_emscripten_bind_Deque_unshift_1=Module["_emscripten_bind_Deque_unshift_1"]=Module["asm"]["r"]).apply(null,arguments)};var _emscripten_bind_Deque_pop_0=Module["_emscripten_bind_Deque_pop_0"]=function(){return(_emscripten_bind_Deque_pop_0=Module["_emscripten_bind_Deque_pop_0"]=Module["asm"]["s"]).apply(null,arguments)};var _emscripten_bind_Deque_shift_0=Module["_emscripten_bind_Deque_shift_0"]=function(){return(_emscripten_bind_Deque_shift_0=Module["_emscripten_bind_Deque_shift_0"]=Module["asm"]["t"]).apply(null,arguments)};var _emscripten_bind_Deque_size_0=Module["_emscripten_bind_Deque_size_0"]=function(){return(_emscripten_bind_Deque_size_0=Module["_emscripten_bind_Deque_size_0"]=Module["asm"]["u"]).apply(null,arguments)};var _emscripten_bind_Deque_at_1=Module["_emscripten_bind_Deque_at_1"]=function(){return(_emscripten_bind_Deque_at_1=Module["_emscripten_bind_Deque_at_1"]=Module["asm"]["v"]).apply(null,arguments)};var _emscripten_bind_Deque___destroy___0=Module["_emscripten_bind_Deque___destroy___0"]=function(){return(_emscripten_bind_Deque___destroy___0=Module["_emscripten_bind_Deque___destroy___0"]=Module["asm"]["w"]).apply(null,arguments)};var _malloc=Module["_malloc"]=function(){return(_malloc=Module["_malloc"]=Module["asm"]["x"]).apply(null,arguments)};var calledRun;dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function run(args){args=args||arguments_;if(runDependencies>0){return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();readyPromiseResolve(Module);if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("")},1);doRun()},1)}else{doRun()}}Module["run"]=run;if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}run();function WrapperObject(){}WrapperObject.prototype=Object.create(WrapperObject.prototype);WrapperObject.prototype.constructor=WrapperObject;WrapperObject.prototype.__class__=WrapperObject;WrapperObject.__cache__={};Module["WrapperObject"]=WrapperObject;function getCache(__class__){return(__class__||WrapperObject).__cache__}Module["getCache"]=getCache;function wrapPointer(ptr,__class__){var cache=getCache(__class__);var ret=cache[ptr];if(ret)return ret;ret=Object.create((__class__||WrapperObject).prototype);ret.ptr=ptr;return cache[ptr]=ret}Module["wrapPointer"]=wrapPointer;function castObject(obj,__class__){return wrapPointer(obj.ptr,__class__)}Module["castObject"]=castObject;Module["NULL"]=wrapPointer(0);function destroy(obj){if(!obj["__destroy__"])throw"Error: Cannot destroy object. (Did you create it yourself?)";obj["__destroy__"]();delete getCache(obj.__class__)[obj.ptr]}Module["destroy"]=destroy;function compare(obj1,obj2){return obj1.ptr===obj2.ptr}Module["compare"]=compare;function getPointer(obj){return obj.ptr}Module["getPointer"]=getPointer;function getClass(obj){return obj.__class__}Module["getClass"]=getClass;var ensureCache={buffer:0,size:0,pos:0,temps:[],needed:0,prepare:function(){if(ensureCache.needed){for(var i=0;i<ensureCache.temps.length;i++){Module["_free"](ensureCache.temps[i])}ensureCache.temps.length=0;Module["_free"](ensureCache.buffer);ensureCache.buffer=0;ensureCache.size+=ensureCache.needed;ensureCache.needed=0}if(!ensureCache.buffer){ensureCache.size+=128;ensureCache.buffer=Module["_malloc"](ensureCache.size);assert(ensureCache.buffer)}ensureCache.pos=0},alloc:function(array,view){assert(ensureCache.buffer);var bytes=view.BYTES_PER_ELEMENT;var len=array.length*bytes;len=len+7&-8;var ret;if(ensureCache.pos+len>=ensureCache.size){assert(len>0);ensureCache.needed+=len;ret=Module["_malloc"](len);ensureCache.temps.push(ret)}else{ret=ensureCache.buffer+ensureCache.pos;ensureCache.pos+=len}return ret},copy:function(array,view,offset){offset>>>=0;var bytes=view.BYTES_PER_ELEMENT;switch(bytes){case 2:offset>>>=1;break;case 4:offset>>>=2;break;case 8:offset>>>=3;break}for(var i=0;i<array.length;i++){view[offset+i]=array[i]}}};function VoidPtr(){throw"cannot construct a VoidPtr, no constructor in IDL"}VoidPtr.prototype=Object.create(WrapperObject.prototype);VoidPtr.prototype.constructor=VoidPtr;VoidPtr.prototype.__class__=VoidPtr;VoidPtr.__cache__={};Module["VoidPtr"]=VoidPtr;VoidPtr.prototype["__destroy__"]=VoidPtr.prototype.__destroy__=function(){var self=this.ptr;_emscripten_bind_VoidPtr___destroy___0(self)};function Heap(){this.ptr=_emscripten_bind_Heap_Heap_0();getCache(Heap)[this.ptr]=this}Heap.prototype=Object.create(WrapperObject.prototype);Heap.prototype.constructor=Heap;Heap.prototype.__class__=Heap;Heap.__cache__={};Module["Heap"]=Heap;Heap.prototype["insert"]=Heap.prototype.insert=function(element,value){var self=this.ptr;if(element&&typeof element==="object")element=element.ptr;if(value&&typeof value==="object")value=value.ptr;_emscripten_bind_Heap_insert_2(self,element,value)};Heap.prototype["extract"]=Heap.prototype.extract=function(){var self=this.ptr;return _emscripten_bind_Heap_extract_0(self)};Heap.prototype["size"]=Heap.prototype.size=function(){var self=this.ptr;return _emscripten_bind_Heap_size_0(self)};Heap.prototype["__destroy__"]=Heap.prototype.__destroy__=function(){var self=this.ptr;_emscripten_bind_Heap___destroy___0(self)};function Deque(){this.ptr=_emscripten_bind_Deque_Deque_0();getCache(Deque)[this.ptr]=this}Deque.prototype=Object.create(WrapperObject.prototype);Deque.prototype.constructor=Deque;Deque.prototype.__class__=Deque;Deque.__cache__={};Module["Deque"]=Deque;Deque.prototype["push"]=Deque.prototype.push=function(element){var self=this.ptr;if(element&&typeof element==="object")element=element.ptr;_emscripten_bind_Deque_push_1(self,element)};Deque.prototype["unshift"]=Deque.prototype.unshift=function(element){var self=this.ptr;if(element&&typeof element==="object")element=element.ptr;_emscripten_bind_Deque_unshift_1(self,element)};Deque.prototype["pop"]=Deque.prototype.pop=function(){var self=this.ptr;return _emscripten_bind_Deque_pop_0(self)};Deque.prototype["shift"]=Deque.prototype.shift=function(){var self=this.ptr;return _emscripten_bind_Deque_shift_0(self)};Deque.prototype["size"]=Deque.prototype.size=function(){var self=this.ptr;return _emscripten_bind_Deque_size_0(self)};Deque.prototype["at"]=Deque.prototype.at=function(index){var self=this.ptr;if(index&&typeof index==="object")index=index.ptr;return _emscripten_bind_Deque_at_1(self,index)};Deque.prototype["__destroy__"]=Deque.prototype.__destroy__=function(){var self=this.ptr;_emscripten_bind_Deque___destroy___0(self)};


  return bindings.ready
}
);
})();
export default bindings;