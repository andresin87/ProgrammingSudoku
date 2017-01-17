/**
 * Created by alucas on 16/1/17.
 */
import * as types from '../../constants/actionTypes';
import database from '../../helpers/firebase';
import uuidV4 from 'uuid/v4';

export function start() {
  return (dispatch, getState) => {
    let state = getState();
    let stack = [];
    for(let i = 0; i < state.sudoku.stack.size; i++) {
      stack[i] = state.sudoku.stack.get(i);
    }
    let { NEW_GAME } = types;
    let r;
    let uuid = uuidV4();
    let newGamePromise = () => database.child('games').child(uuid).once('value').then(function(snapshot) {
      r = snapshot.val();
      if (r === null) {
        let sudoku = {
          sudoku: {
            ...(state.sudoku),
            uuid: uuid,
          }
        };
        database.child(`games/${uuid}`).set({
          ...(sudoku.sudoku),
          stack: stack
        });
        return dispatch({
          ...sudoku,
          type: NEW_GAME
        });
      } else {
        uuid = uuidV4();
        newGamePromise();
      }
    });
    newGamePromise();
  }
}

export function load(uuid) {
  return (dispatch, getState) => {
    let state = getState();
    let { LOAD_GAME } = types;
    let r;
    console.log('here');
    let loadGamePromise = () => database.child('games').child(uuid).once('value').then(function(snapshot) {
      r = snapshot.val();
      if (r === null) {
        // ERROR
        console.log('LOAD_GAME_ERROR');
      } else {
        let sudoku = {
          sudoku: {
            ...r,
            stack: state.sudoku.stack.push(...(r.stack))
          }
        };
        console.log(r);
        return dispatch({
          ...sudoku,
          type: LOAD_GAME
        });
      }
    });
    loadGamePromise();
  }
}