import { Console, Random } from "@woowacourse/mission-utils";
import MESSAGE from "./MESSAGE.js";

class App {
  async play() {
    await init();
  }
}
// 기본 입출력 함수
const print = (message) => Console.print(message);
const input = async (input = {}) => await Console.readLineAsync(input);

//init - 게임 시작메시지출력, 게임 진행시작
const init = async () => {
  while (true) {
    print(MESSAGE.GAME_START);
  }
};

// 컴퓨터의 임의의 3자리 수 생성 함수
const generateRandomoNumber = () => {
  const computerNumber = [];
  while (computerNumber.length < 3) {
    const randomNumber = Random.pickNumberInRange(1, 9);
    if (!computerNumber.includes(randomNumber)) {
      computerNumber.push(randomNumber);
    }
  }
  return computerNumber;
};

// 플레이어로부터 3자리수 입력받는 함수
const getPlayerNumber = async () => {
  const playerNum = await input(MESSAGE.INPUT_NUMBER);
  if (!isValidateNumber(playerNum)) {
    throw new Error(MESSAGE.INPUT_NUMBER_ERROR);
  }
  // 컴퓨터의 수도 숫자배열이니까 플레이어의 수도 숫자배열로
  const playerNumber = [...playerNum].map(Number);
  return playerNumber;
};

// 플레이어로부터 입력받은 수 유효성 검사 함수
const isValidateNumber = (playerNum) => {
  if (playerNum.length !== 3) return false;
  if (!/^[1-9]{3}$/.test(playerNum)) return false;
  const playerNumber = [...playerNum].map(Number);
  if (new Set(playerNumber).size !== 3) return false;

  return true;
};

export default App;
