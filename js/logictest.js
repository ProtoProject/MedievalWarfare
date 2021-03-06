/**
 * Created by Administrator on 13. 11. 30.
 */

/**
 * 게임 환경 설정값
 */
GameConfiguration = {
    palyer : null
};

/**********************************************************************************************************************
 * 공통 함수
 **********************************************************************************************************************/

/**
 * 설정 저장하기
 */
var saveGameConfiguration = function(){

};

/**********************************************************************************************************************
 * 첫 화면 함수
 **********************************************************************************************************************/
//=======================================================================
// 이벤트 함수
//=======================================================================

/**
 * 새 게임 화면 보이기
 */
var showNewGame = function(){
    createNewGame();
};

/**
 * 게임 로드 화면 보이기
 */
var showLoadGame = function(){
    loadGame();
};

/**
 * 환경설정 화면 보이기
 */
var showSettings = function(){
    setConfiguration();
};

//=======================================================================
// 내부 로직 함수
//=======================================================================

/**
 * 초기화
 */
var initialize = function(){
    /**
     * 1. 게임 설정 파일 로딩
     */
};

/**
 * 새 게임 생성
 */
var createNewGame = function(){
    alert("New Game!!");

    /**
     * 1. 플레이어 생성 화면으로 넘어가기
     */
    showCreatePlayer();
};

/**
 * 게임 로드
 */
var loadGame = function(){
    alert("Load Game!!");

    /**
     * 1. 게임 저장 파일 읽기
     * 2. 저장되어있는 목록 표시하기
     * 3. 선택된 목록으로 게임 로드
     */
};

/**
 * 환경설정
 */
var setConfiguration = function(){
    alert("Game Settings!!");
    saveGameConfiguration();
};

/**********************************************************************************************************************
 * 플레이어 생성 함수
 **********************************************************************************************************************/
//=======================================================================
// 이벤트 함수
//=======================================================================

/**
 * 플레이어 생성
 */
var showCreatePlayer = function(){

};

//=======================================================================
// 내부 로직 함수
//=======================================================================

/**
 * 플레이어 생성
 */
var createPlayer = function(){
    /**
     * 1. 플레이어 이름 설정
     * 2. 영웅의 클래스 설정
     * 3. 게임 설정과 설정 파일에 반영
     */
    setHero();
    saveGameConfiguration();
};

/**
 * 영웅 설정
 */
var setHero = function(){
    var hero = {

    };

    GameConfiguration.hero = hero;
};

/**
 * 게임 생성
 */
var createGame = function(){
    showGameStage();
};

/**********************************************************************************************************************
 * 스테이지 선택 화면  함수
 **********************************************************************************************************************/
//=======================================================================
// 이벤트 함수
//=======================================================================

/**
 * 스테이지 선택 화면 보이기
 */
var showGameStage = function(){

};

//=======================================================================
// 내부 로직 함수
//=======================================================================

/**
 * 스테이지 선택
 */
var selectStage = function(stageId){
    showStageDetail(stageId);
};

/**********************************************************************************************************************
 * 스테이지 진입 화면 함수
 **********************************************************************************************************************/
//=======================================================================
// 이벤트 함수
//=======================================================================

/**
 * 스테이지 상세 정보 화면 보이기
 */
var showStageDetail = function(){

};

//=======================================================================
// 내부 로직 함수
//=======================================================================

/**
 * 전투 시작
 */
var startBattle = function(){
    showBattleScreen();
};

/**
 * 스테이지 선택 화면으로 돌아가기
 */
var backToStageSelect = function(){
    showGameStage();
};

/**********************************************************************************************************************
 * 전투 화면 함수
 **********************************************************************************************************************/
//=======================================================================
// 이벤트 함수
//=======================================================================

/**
 * 전투 화면 보이기
 */
var showBattleScreen = function(){

};

//=======================================================================
// 내부 로직 함수
//=======================================================================


/**********************************************************************************************************************
 * 전투 결과 화면 함수
 **********************************************************************************************************************/
//=======================================================================
// 이벤트 함수
//=======================================================================

/**
 * 전투 결과 화면 보이기
 */
var showBattleResultScreen = function(){

} ;

//=======================================================================
// 내부 로직 함수
//=======================================================================

/**
 * 결과 확인 후 스테이지 선택 화면으로 넘어가기
 */
var backToGameStage = function(){
    showGameStage();
};