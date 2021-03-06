import axios from "axios";
import {ROUTES} from "../../../constants";

export const newGame = ({token, rows, columns, mines}) => {
  return axios
    .post(ROUTES.NEW_GAME, {height: rows, length: columns, mines}, {
      headers: {
        Authorization: token
      }
    })
    .then((response) => response.data)
    .then((data) => ({board: serializeBoard(data)}))
    .catch((error) => ({errorMsg: error.toJSON().message}));
};

export const loadGame = ({token, boardId}) => {
  return axios
    .get(ROUTES.LOAD_GAME(boardId), {
      headers: {
        Authorization: token
      }
    })
    .then((response) => response.data)
    .then((data) => ({loadedBoard: serializeBoard(data)}))
    .catch((error) => ({errorMsg: error.toJSON().message}));
};

export const saveGame = ({token, boardId, time}) => {
  return axios
    .post(ROUTES.SAVE_GAME(boardId), {time}, {
      headers: {
        Authorization: token
      }
    })
    .then(() => ({}))
    .catch((error) => ({errorMsg: error.toJSON().message}));
};

export const getBoards = ({token}) => {
  return axios
    .get(ROUTES.LOAD_GAMES, {
      headers: {
        Authorization: token
      }
    })
    .then((response) => response.data)
    .then((data) => ({loadedBoards: data.map(serializeBoard)}))
    .catch((error) => ({errorMsg: error.toJSON().message}));
}

export const markSquare = ({token, boardId, squareId}) => {
  return axios
    .post(ROUTES.MARK_SQUARE(boardId, squareId), {}, {
      headers: {
        Authorization: token
      }
    })
    .then((response) => response.data)
    .then((data) => ({loadedSquare: data}))
    .catch((error) => ({errorMsg: error.toJSON().message}));
}

export const openSquare = ({token, boardId, squareId}) => {
  return axios
    .post(ROUTES.OPEN_SQUARE(boardId, squareId), {}, {
      headers: {
        Authorization: token
      }
    })
    .then((response) => response.data)
    .then((data) => ({loadedSquare: data}))
    .catch((error) => ({errorMsg: error.toJSON().message}));
}

const serializeBoard = (board) => ({
  ...board,
  rows: board.height,
  columns: board.length,
});