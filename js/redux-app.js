'use strict';
var APP = {};

APP.launch = function (music) { // this method is called from musicupload.js
  const combinedReducer = combineReducers({
    playerReducer
  }); 

  APP.store = createStore(combinedReducer);
  APP.actions = hiosActions(APP.store);
  APP.audio = hiosAudio();
  APP.view = hiosView(APP.actions, APP.audio);
  APP.view.buildHTML(); 
  observeStore(APP.store, APP.view.updateView);
  APP.store.dispatch({type: 'LOAD_PLAYER', uploadedMusic: music});   
};
