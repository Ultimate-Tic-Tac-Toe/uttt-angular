import { asyncScheduler, Observable, scheduled } from "rxjs";
import { Config } from "../config.model";

export const configMock: Config = {
  api: {
    uttt: {
      base: "test",
      uri: {
        uttt: ""
      }
    }
  },
  gameOptions: {
    localGame: {
      name: "Local Game",
      options: {
        opponents: [
          "Play against a friend",
          "Play against a computer"
        ],
        firstTurn: [
          "Player",
          "Computer"
        ],
        difficulties: [
          "Beginner",
          "MCTS Easy",
          "MCTS Medium",
          "MCTS Hard"
        ]
      }
    },
    onlineGame: {
      name: "Online Game"
    }
  }
}

export const configServiceStub = {
    get(): Observable<Config> {
        return scheduled([configMock], asyncScheduler);
    }
}
