const errorData = [];

// Helper function to add error data
function addError(code, symptom, cause, guide) {
    errorData.push({
        "제품군": "AC",
        "에러코드": code,
        "증상": symptom,
        "원인": cause,
        "조치가이드": guide
    });
}

// C-series errors
addError("C101", "에러 표시 및 구동부 정지(실내.외기 통신 에러)",
    "실외기 전원 미 연결 또는 전원공급 안됨, 실내.외기간 통신선 연결 상태 불량 (특히, 통신 커넥터 덜 삽입), 전원선과 통신선 오결선 (특히, 매립현장에서 자주 발생), 실내기 MAIN PBA 불량, 실외기 INVERTER PBA 불량",
    "【조치 부위】 실외기 전원부, 실내/외기 통신연결부, 실내/외기 전원/통신 연결부, 실내기 MAIN PBA, 실외기 INVERTER PBA\n【고장 점검 방법】 실외기 전원 확인(AC 221V), 실내/외기 통신선 커넥터 확인, PBA부 커넥터 연결부 확인, 실내/외기 통신선 연결부위 확인(정상 설치 확인), 실내기 MAIN PBA 내 LED점등확인, PBA외관 파손 또는 그을음 확인, 실외기 INV PBA 내 LED점등확인, PBA외관 파손 또는 그을음 확인\n【조치 방법】 실외기 전원 체결, 통신선 교체 또는 통신선 재체결, 전원선/통신선 재체결, 실내기 MAIN PBA 교체, 실외기 INV PBA 교체");

addError("C103", "에러 표시 및 구동부 정지(실내기 판넬 - 메인간 통신에러)",
    "실내기 MAIN PBA와 CONTROL PBA or DISPLAY PBA 연결 Wire 단선, 실내기 MAIN PBA 불량, 실내기 CONTROL PBA or DISPLAY PBA 불량",
    "【조치 부위】 실내기 WIRE 연결부, 실내기 MAIN PBA, 실내기 CONTROL 또는 DISPLAY PBA\n【고장 점검 방법】 연결 WIRE 정상체결, PIN빠짐 확인, 실내기 PBA 내 LED점등확인, PBA외관 파손 또는 그을음 확인\n【조치 방법】 WIRE 교체, 실내기 MAIN PBA 교체, 실내기 CONTROL 또는 DISPLAY PBA 교체");

addError("C105", "정상 운전(카메라/네트워크 통신에러)",
    "실내기 CONTROL PBA or DISPLAY PBA와 WIFI MODULE 연결 Wire 단선, 실내기 CONTROL PBA or DISPLAY PBA 불량, 실내기 WIFI MODULE 불량",
    "【조치 부위】 실내기 WIRE 연결부, 실내기 CONTROL 또는 DISPLAY PBA, WIFI MODULE\n【고장 점검 방법】 연결 WIRE 정상체결, PIN빠짐 확인, 실내기 PBA 내 LED점등확인, PBA외관 파손 또는 그을음 확인\n【조치 방법】 WIRE 교체, 실내기 CONTROL 또는 DISPLAY PBA 교체, WIFI MODULE 교체");

addError("C121", "정상 운전(실내기 ROOM 온도센서)",
    "실내기 실내온도 측정센서 불량, 실내기 MAIN PBA 불량",
    "【조치 부위】 실내 온도센서부, 실내기 MAIN PBA\n【고장 점검 방법】 실내기 실내온도 센서 단선/체결 확인, 실내기 실내온도 센서 단품 저항값 확인(상온25℃ 11KΩ), 실내기 PBA 내 LED점등확인, PBA외관 파손 또는 그을음 확인\n【조치 방법】 실내기 실내온도 센서 교체, 실내기 MAIN PBA 교체");

addError("C122", "에러 표시 및 구동부 정지(실내기 열교환기 IN 온도 센서 이상)",
    "실내기 EVA IN 측정센서 불량, 실내기 MAIN PBA 불량",
    "【조치 부위】 실내 EVA IN 센서부, 실내기 MAIN PBA\n【고장 점검 방법】 실내기 EVA IN 센서 단선/체결 확인, 실내기 EVA IN 센서 단품 저항값 확인(상온25℃ 11KΩ), 실내기 PBA 내 LED점등확인, PBA외관 파손 또는 그을음 확인\n【조치 방법】 실내기 EVA IN 센서 교체, 실내기 MAIN PBA 교체");

addError("C123", "에러 표시 및 구동부 정지(실내기 열교환기 OUT 온도 센서 이상)",
    "실내기 EVA OUT 측정센서 불량, 실내기 MAIN PBA 불량",
    "【조치 부위】 실내 EVA OUT 센서부, 실내기 MAIN PBA\n【고장 점검 방법】 실내기 EVA OUT 센서 단선/체결 확인, 실내기 EVA OUT 센서 단품 저항값 확인(상온25℃ 11KΩ), 실내기 PBA 내 LED점등확인, PBA외관 파손 또는 그을음 확인\n【조치 방법】 실내기 EVA OUT 센서 교체, 실내기 MAIN PBA 교체");

addError("C138", "정상 운전(GAS SENSOR 에러)",
    "실내기 GAS 측정센서 불량, 실내기 MAIN PBA 불량",
    "【조치 부위】 실내 GAS 센서부, 실내기 MAIN PBA\n【고장 점검 방법】 실내기 GAS 센서 단선/체결 확인, 실내기 PBA 내 LED점등확인, PBA외관 파손 또는 그을음 확인\n【조치 방법】 실내기 GAS 센서 교체, 실내기 MAIN PBA 교체");

addError("C140", "정상 운전(PM1.0 먼지센서 통신에러)",
    "실내기 먼지 측정센서 불량, 실내기 MAIN PBA 불량",
    "【조치 부위】 실내 먼지 센서부, 실내기 MAIN PBA\n【고장 점검 방법】 실내기 먼지 센서 단선/체결 확인, 실내기 PBA 내 LED점등확인, PBA외관 파손 또는 그을음 확인\n【조치 방법】 실내기 먼지 센서 교체, 실내기 MAIN PBA 교체");

addError("C142", "정상 운전(습도 센서 에러)",
    "실내기 습도 측정센서 불량, 실내기 MAIN PBA 불량",
    "【조치 부위】 실내 습도 센서부, 실내기 MAIN PBA\n【고장 점검 방법】 실내기 습도 센서 단선/체결 확인, 실내기 PBA 내 LED점등확인, PBA외관 파손 또는 그을음 확인\n【조치 방법】 실내기 습도 센서 교체, 실내기 MAIN PBA 교체");

addError("C154", "에러 표시 및 구동부 정지(상단 실내 FAN MOTOR 에러)",
    "MOTOR WIRE 단선 및 체결불량, 실내 FAN MOTOR 내부 회로 불량, 실내기 MAIN PBA 불량",
    "【조치 부위】 실내기 WIRE 연결부, 실내기 FAN MOTOR, 실내기 MAIN PBA\n【고장 점검 방법】 연결 WIRE 정상체결/PIN빠짐 확인, 실내 FAN MOTOR PIN SHORT확인, 실내기 MAIN PBA 내 LED점등확인, PBA외관 파손 또는 그을음 확인, 실내기 MAIN PBA MOTOR 전원부 확인\n【조치 방법】 WIRE 교체, FAN MOTOR 교체, 실내기 MAIN PBA 교체");

addError("C155", "에러 표시 및 구동부 정지(중단 실내 FAN MOTOR 에러)",
    "MOTOR WIRE 단선 및 체결불량, 실내 FAN MOTOR 내부 회로 불량, 실내기 MAIN PBA 불량",
    "【조치 부위】 실내기 WIRE 연결부, 실내기 FAN MOTOR, 실내기 MAIN PBA\n【고장 점검 방법】 연결 WIRE 정상체결/PIN빠짐 확인, 실내 FAN MOTOR PIN SHORT확인, 실내기 MAIN PBA 내 LED점등확인, PBA외관 파손 또는 그을음 확인, 실내기 MAIN PBA MOTOR 전원부 확인\n【조치 방법】 WIRE 교체, FAN MOTOR 교체, 실내기 MAIN PBA 교체");

addError("C161", "혼용운전 에러",
    "내부 에어컨 동작 모드 이상시 발생",
    "【조치 부위】 실내 에어컨 운전 모드 확인\n【고장 점검 방법】 실내 에어컨 운전 모드 확인(난방,냉방 동시 사용중인지)\n【조치 방법】 고객 설명");

addError("C162", "에러 표시 및 구동부 정지(실내 EEPROM 에러)",
    "실내기 CONTROL PBA or DISPLAY PBA 불량",
    "【조치 부위】 실내기 CONTROL 또는 DISPLAY PBA\n【고장 점검 방법】 실내기 PBA 내 LED점등확인, PBA외관 파손 또는 그을음 확인\n【조치 방법】 실내기 CONTROL 또는 DISPLAY PBA 교체");

addError("C163", "에러 표시 및 구동부 정지(옵션 이상 에러)",
    "실내기 OPTION(REMOCON) 점검, 실내기 CONTROL PBA or DISPLAY PBA 불량",
    "【조치 부위】 실내기 OPTION 점검, 실내기 CONTROL 또는 DISPLAY PBA\n【고장 점검 방법】 실내기 OPTION 입력, 실내기 PBA 내 LED점등확인, PBA외관 파손 또는 그을음 확인\n【조치 방법】 실내기 CONTROL 또는 DISPLAY PBA 교체");

addError("C176", "에러 표시 및 구동부 정지(하단 실내 FAN MOTOR 에러)",
    "MOTOR WIRE 단선 및 체결불량, 실내 FAN MOTOR 내부 회로 불량, 실내기 MAIN PBA 불량",
    "【조치 부위】 실내기 WIRE 연결부, 실내기 FAN MOTOR, 실내기 MAIN PBA\n【고장 점검 방법】 연결 WIRE 정상체결/PIN빠짐 확인, 실내 FAN MOTOR PIN SHORT확인, 실내기 MAIN PBA 내 LED점등확인, PBA외관 파손 또는 그을음 확인, 실내기 MAIN PBA MOTOR 전원부 확인\n【조치 방법】 WIRE 교체, FAN MOTOR 교체, 실내기 MAIN PBA 교체");

addError("C187", "정상 운전(K1 제로필터 FEED/BACK 에러)",
    "집진필터 장착 불량, 집진필터 WIRE 단선 및 체결불량, 실내기 MAIN PBA 불량",
    "【조치 부위】 집진필터부, 실내기 WIRE 연결부, 실내기 MAIN PBA\n【고장 점검 방법】 집진필터 정상 장착 확인, 연결 WIRE 정상체결/PIN빠짐 확인(REED SW확인), 실내기 MAIN PBA 내 LED점등확인, PBA외관 파손 또는 그을음 확인\n【조치 방법】 집진필터 교체, WIRE 교체, 실내기 MAIN PBA 교체");

addError("C188", "정상 운전(K1 제로필터 FEED/BACK 에러(상단))",
    "집진필터 장착 불량, 집진필터 WIRE 단선 및 체결불량, 실내기 MAIN PBA 불량",
    "【조치 부위】 집진필터부, 실내기 WIRE 연결부, 실내기 MAIN PBA\n【고장 점검 방법】 집진필터 정상 장착 확인, 연결 WIRE 정상체결/PIN빠짐 확인(REED SW확인), 실내기 MAIN PBA 내 LED점등확인, PBA외관 파손 또는 그을음 확인\n【조치 방법】 집진필터 교체, WIRE 교체, 실내기 MAIN PBA 교체");

addError("C200", "에러 표시(실내기 써큘레이터 모터 이상)",
    "MOTOR WIRE 단선 및 체결불량, 실내 FAN MOTOR 내부 회로 불량, 실내기 MAIN PBA 불량",
    "【조치 부위】 실내기 WIRE 연결부, 실내기 FAN MOTOR, 실내기 MAIN PBA\n【고장 점검 방법】 연결 WIRE 정상체결/PIN빠짐 확인, 실내 FAN MOTOR PIN SHORT확인, 실내기 MAIN PBA 내 LED점등확인, PBA외관 파손 또는 그을음 확인, 실내기 MAIN PBA MOTOR 전원부 확인\n【조치 방법】 WIRE 교체, FAN MOTOR 교체, 실내기 MAIN PBA 교체");

addError("C201", "에러 표시 및 구동부 정지(실내외기 통신 이상 - 실내기 TRACKING 에러)",
    "실내.외기간 통신선 연결 상태 불량 (특히, 통신 커넥터 덜 삽입), 실내기 MAIN PBA 불량, 실외기 INVERTER PBA 불량",
    "【조치 부위】 실내/외기 통신연결부, 실내기 MAIN PBA, 실외기 INVERTER PBA\n【고장 점검 방법】 실내/외기 통신선 커넥터 확인, PBA부 커넥터 연결부 확인, 실내기 MAIN PBA 내 LED점등확인, 실외기 INV PBA 내 LED점등확인\n【조치 방법】 통신선 교체 또는 통신선 재체결, 실내기 MAIN PBA 교체, 실외기 INV PBA 교체");

addError("C202", "에러 표시 및 구동부 정지(실내기 통신 이상 - 실내기 정상운전 통신에러)",
    "실내.외기간 통신선 연결 상태 불량 (특히, 통신 커넥터 덜 삽입), 실내기 MAIN PBA 불량, 실외기 INVERTER PBA 불량",
    "【조치 부위】 실내/외기 통신연결부, 실내기 MAIN PBA, 실외기 INVERTER PBA\n【고장 점검 방법】 실내/외기 통신선 커넥터 확인, PBA부 커넥터 연결부 확인, 실내기 MAIN PBA 내 LED점등확인, 실외기 INV PBA 내 LED점등확인\n【조치 방법】 통신선 교체 또는 통신선 재체결, 실내기 MAIN PBA 교체, 실외기 INV PBA 교체");

addError("C203", "에러 표시 및 구동부 정지(실외기 PBA 통신 이상 - 인버터마이컴 통신에러)",
    "실외기 INVERTER PBA 불량",
    "【조치 부위】 실외기 INVERTER PBA\n【고장 점검 방법】 실외기 INV PBA 내 LED점등확인, PBA외관 파손 또는 그을음 확인\n【조치 방법】 실외기 INV PBA 교체");

addError("C221", "에러 표시 및 구동부 정지(실외 온도 센서 에러)",
    "실외기 실외온도 측정센서 불량, 실외기 INVERTER PBA 불량",
    "【조치 부위】 실외 온도센서부, 실외기 INVERTER PBA\n【고장 점검 방법】 실외기 실외온도 센서 단선/체결 확인, 실외기 실외온도 센서 단품 저항값 확인(상온25℃ 11KΩ), 실외기 INV PBA 내 LED점등확인\n【조치 방법】 실외기 실외온도 센서 교체, 실외기 INV PBA 교체");

addError("C237", "에러 표시 및 구동부 정지(실외기 배관온도 센서 에러 SHORT/OPEN)",
    "실외기 배관온도 측정센서 불량, 실외기 INVERTER PBA 불량",
    "【조치 부위】 실외 배관온도센서부, 실외기 INVERTER PBA\n【고장 점검 방법】 실외기 배관온도 센서 단선/체결 확인, 실외기 배관온도 센서 단품 저항값 확인(상온25℃ 11KΩ), 실외기 INV PBA 내 LED점등확인\n【조치 방법】 실외기 배관온도 센서 교체, 실외기 INV PBA 교체");

addError("C251", "에러 표시 및 구동부 정지(실외 DISCHARGE 온도센서 에러)",
    "실외기 DISCHARGE온도 측정센서 불량, 실외기 INVERTER PBA 불량",
    "【조치 부위】 실외 DISCHARGE온도센서부, 실외기 INVERTER PBA\n【고장 점검 방법】 실외기 DISCHARGE온도 센서 단선/체결 확인, 실외기 DISCHARGE온도 센서 단품 저항값 확인(상온25℃ 201KΩ), 실외기 INV PBA 내 LED점등확인\n【조치 방법】 실외기 DISCHARGE온도 센서 교체, 실외기 INV PBA 교체");

addError("C320", "에러 표시 및 구동부 정지(실외 OLP 온도센서 에러)",
    "실외기 OLP온도 측정센서 불량, 실외기 INVERTER PBA 불량",
    "【조치 부위】 실외 OLP온도센서부, 실외기 INVERTER PBA\n【고장 점검 방법】 실외기 OLP온도 센서 단선/체결 확인, 실외기 OLP온도 센서 단품 저항값 확인(상온25℃ 201KΩ), 실외기 INV PBA 내 LED점등확인\n【조치 방법】 실외기 OLP온도 센서 교체, 실외기 INV PBA 교체");

addError("C404", "에러 표시 및 구동부 정지(과부하 보호제어 - 실외기 과부하 발생시)",
    "실외기가 기계실에 설치된 상태에서 루버(창문)가 개방이 안된 경우, 실외기가 루버(창문)에서 11cm 이상 떨어져 설치된 경우, 실외기의 토출구가 루버(창문) 보다 낮게 설치된 경우, 실외기 흡입구가 막힌 경우, 기타 원인으로 실외기에서 원활한 냉기 배출이 안되거나 직사광선에 의한 실외기 내부 온도가 높은 경우",
    "【조치 부위】 실외기 환기상태(흡입, 토출구 장애물 및 루버 개폐상태)\n【고장 점검 방법】 과부하 보호제어(실외기 과부하 발생시)\n【조치 방법】 실외기가 설치된 곳의 환기 상태를 확인해주세요. 실외기 실 갤러리가 열려있는지 확인해주시고, 실외기의 통풍을 막는 주변 장애물을 정리한 후 전원을 껐다 켜주세요. [창문형 에어컨] 기기 뒷면의 창문이 닫혀 있으면 열어주세요. 바람이 실외로 나가는 쪽 주변을 정리해주세요. 조치 후에도 동일한 점검코드가 계속 발생한다면, 전문 엔지니어의 점검이 필요합니다.");

addError("C416", "에러 표시 및 구동부 정지(Discharge 보호제어 - 실외기 토출온도 과승 시)",
    "실외기가 과열되거나 열방출이 되지 않는 경우, 또는 실외기의 온도를 감지하는 센서에 이상이 있을 경우 발생, 냉매 누설 또는 냉매 부족에 의한 압축기 토출온도 높음",
    "【조치 부위】 실외기 환기상태, 냉매량\n【고장 점검 방법】 Discharge 보호제어(실외기 토출온도 과승 시)\n【조치 방법】 과열된 실외기를 식힐 수 있도록 잠시 전원을 꺼주세요. 실외기 실 갤러리가 열려 있는지 확인해 주시고, 실외기 통풍을 막는 주변 장애물을 정리한 후 전원을 다시 켜주세요. 조치 후에도 동일한 점검코드가 계속 발생한다면, 전문 엔지니어의 점검이 필요합니다.");

addError("C422", "에러 표시 및 구동부 정지(자가 진단 중 EEV-A이상 시 - EEV 막힘제어)",
    "냉매 배관 계통 막힘(서비스밸브 미개방, 용접부 막힘, 연결배관 꺾임), 냉매 누설에 의한 냉매 부족, 실내기 EVA온도센서 오조립, EEV 커넥터 체결 불량, EEV 단품 불량",
    "【조치 부위】 실외 전동변, 서비스밸브 개방 상태/배관 꺽임 유무/냉매량, 실내기 EVA온도센서부, 실외기 PBA EEV체결부, EEV 단품\n【고장 점검 방법】 서비스밸브 고저압 개방 확인, 매립배관 용접부 막힘 확인, 배관 꺾임 확인, EEV 동작 여부 확인, 배관 연결부 누설 여부 점검 후 냉매압 점검, 실내기 EVA온도센서 정상체결 확인, EEV 단품 검토\n【조치 방법】 배관 교체 후 재연결, 서비스밸브 OPEN, 냉매 보충, 실내기 EVA온도센서 정상 체결, 실외기 INV PBA 교체, EEV 단품 교체");

addError("C440", "에러 표시 및 구동부 정지(난방시 실외온도 제한에러)",
    "실외기 실외온도 측정센서 불량, 실외기 INVERTER PBA 불량",
    "【조치 부위】 실외 온도센서부, 실외기 INVERTER PBA\n【고장 점검 방법】 실외기 실외온도 센서 단선/체결 확인, 실외기 실외온도 센서 단품 저항값 확인(상온25℃ 11KΩ), 실외기 INV PBA 내 LED점등확인\n【조치 방법】 실외기 실외온도 센서 교체, 실외기 INV PBA 교체");

addError("C441", "에러 표시 및 구동부 정지(냉방시 실외온도 제한에러)",
    "실외기 실외온도 측정센서 불량, 실외기 INVERTER PBA 불량",
    "【조치 부위】 실외 온도센서부, 실외기 INVERTER PBA\n【고장 점검 방법】 실외기 실외온도 센서 단선/체결 확인, 실외기 실외온도 센서 단품 저항값 확인(상온25℃ 11KΩ), 실외기 INV PBA 내 LED점등확인\n【조치 방법】 실외기 실외온도 센서 교체, 실외기 INV PBA 교체");

addError("C458", "에러 표시 및 구동부 정지(실외기 Fan Motor 이상)",
    "MOTOR WIRE 단선 및 체결불량, 실외 FAN MOTOR 내부 회로 불량, 실외기 INVERTER PBA 불량",
    "【조치 부위】 실외기 WIRE 연결부, 실외기 FAN MOTOR, 실외기 INVERTER PBA\n【고장 점검 방법】 연결 WIRE 정상체결/PIN빠짐 확인, 실외 FAN MOTOR PIN SHORT확인, 실외기 INV PBA 내 LED점등확인, 실외기 INV PBA MOTOR 전원부 확인\n【조치 방법】 WIRE 교체, FAN MOTOR 교체, 실외기 INV PBA 교체");

addError("C461", "에러 표시 및 구동부 정지(압축기 기동운전 이상)",
    "COMP 단품 불량, COMP WIRE 단선 및 체결불량, 서비스 밸브 개방 불량, 냉매 과차징 배관 막힘, 실외기 INVERTER PBA 불량",
    "【조치 부위】 COMP, 서비스밸브부, 냉매압, 실외기 INVERTER PBA\n【고장 점검 방법】 COMP 이상동작 및 큰 진동 확인, 연결 WIRE 정상체결/PIN빠짐 확인, 서비스밸브부 개방확인, 냉매압 확인, 실외기 INV PBA 내 LED점등확인\n【조치 방법】 COMP 교체, WIRE 교체, 서비스밸브 OPEN, 냉매량 조정, 실외기 INV PBA 교체");

addError("C462", "에러 표시 및 구동부 정지(전전류 보호제어 에러 - 실외기 입력 전류 이상)",
    "실외기 입력 전압 비정상, 실외기 INVERTER PBA 불량, 실외기 환기 불량, 냉매량 과다",
    "【조치 부위】 실외기 전원 입력부, 실외기 INVERTER PBA, 실외기 환기 상태, 냉매량\n【고장 점검 방법】 실외기 전원 확인(AC 187~254V), 실외기 INV PBA 내 LED점등확인\n【조치 방법】 집 전원 확인 및 수리, 실외기 INV PBA 교체, 루버(창문) 개방, 실외기가 루버(창문)에서 11cm 이내 설치, 실외기 토출구와 루버(창문)를 같은 높이로 설치, 흡입구 주변 정리, 냉매압 점검을 통한 냉매량 조정");

addError("C463", "에러 표시 및 구동부 정지(실외 OLP 보호제어 점검 - 압축기 상부 온도 과승 시)",
    "실외기 압축기의 윗쪽에 장착된 OLP 센서에서 감지한 온도가 너무 높을 경우 발생, 서비스 밸브 미개방, 냉매 누설 또는 냉매 부족에 의한 압축기 토출온도 높음",
    "【조치 부위】 서비스 밸브 개방여부, 냉매량\n【고장 점검 방법】 실외 OLP 보호제어 점검(압축기 상부 온도 과승 시)\n【조치 방법】 실외기 설치 상태를 확인 필요. 제품의 흡입구나 토출구를 막는 장애물을 정리하고, 실외기실의 갤러리를 열어서 바람이 잘 통하게 조치한 후 제품을 다시 시작해 주세요. 조치 후 동일 에러가 지속될 경우, 점검이 필요할 수 있습니다. 서비스 밸브 개방 여부 확인, 배관 연결부 누설 여부 점검 후 냉매압 점검을 통한 부족 냉매 보충");

addError("C464", "에러 표시 및 구동부 정지(압축기 전류 상승 이상 에러)",
    "COMP 단품 불량, COMP WIRE 단선 및 체결불량, 서비스 밸브 개방 불량, 실외기 INVERTER PBA 불량, 실외기 환기 불량, 냉매량 과다",
    "【조치 부위】 COMP, 서비스밸브부, 냉매 구속, 실외기 INVERTER PBA\n【고장 점검 방법】 COMP 이상동작 및 큰 진동 확인, 연결 WIRE 정상체결/PIN빠짐 확인, 서비스밸브부 개방확인, 냉매구속 확인, 실외기 INV PBA 내 LED점등확인, COMP연결선 분리 후 ERROR 확인(C464=INV불량, C468=COMP불량)\n【조치 방법】 실외기 통풍 환경 점검, INV PBA-COMP WIRE 점검 및 재연결, COMP 내부 권선 단선 여부 점검, 서비스밸브 점검, 냉매압 점검을 통한 냉매량 조정, 실외기 INV PBA 교체, COMP 교체");

addError("C465", "에러 표시 및 구동부 정지(압축기 운전 부하 상승 에러)",
    "고압 서비스밸브 개방, 열교환 개방 공간 확보 이상, 냉매 과차징, 실외 FAN 날개 이상, COMP 단품 불량",
    "【조치 부위】 서비스 밸브 개방여부, 실외기 개방공간, 냉매량, 실외 FAN 날개, COMP\n【고장 점검 방법】 고압서비스 밸브 개방 확인, 실외기 열교환이 가능한 공간 확보 확인, 냉매 과차징 확인, 실외 FAN 날개 이상 확인, COMP 이상소음/동작 확인\n【조치 방법】 서비스 밸브 개방 여부 및 배관 꺾임 및 막힘 여부 확인, 실외기 주변 환기 상태 및 갤러리 개방 여부 확인, 냉매량 조절, FAN 날개 파손 및 모터와 체결 상태 확인, COMP 교체");

addError("C466", "에러 표시 및 구동부 정지(실외 제어기 내부 전압 이상)",
    "실외기 입력 전압 비정상, 실외기 INVERTER PBA 불량",
    "【조치 부위】 실외기 전원 입력부, 실외기 INVERTER PBA\n【고장 점검 방법】 실외기 전원 확인(AC 187~254V), 실외기 INV PBA 내 LED점등확인\n【조치 방법】 집 전원 확인 및 수리, 실외기 INV PBA 교체");

addError("C467", "에러 표시 및 구동부 정지(압축기 운전 이상 - 압축기 WIRE 미결 에러)",
    "COMP 단품 불량, COMP WIRE 단선 및 체결불량, 실외기 INVERTER PBA 불량",
    "【조치 부위】 COMP, 실외기 INVERTER PBA\n【고장 점검 방법】 COMP 이상동작 및 큰 진동 확인, 연결 WIRE 정상체결/PIN빠짐 확인, 실외기 INV PBA 내 LED점등확인\n【조치 방법】 COMP 교체, WIRE 교체, 실외기 INV PBA 교체");

addError("C468", "에러 표시 및 구동부 정지(압축기 전류센서 이상 에러)",
    "실외기 입력 전압 비정상, 실외기 INVERTER PBA 불량",
    "【조치 부위】 실외기 전원 입력부, 실외기 INVERTER PBA\n【고장 점검 방법】 실외기 전원 확인(AC 187~254V), 실외기 INV PBA 내 LED점등확인\n【조치 방법】 집 전원 확인 및 수리, 실외기 INV PBA 교체");

addError("C469", "에러 표시 및 구동부 정지(실외 제어기 내부 전압센서 이상 에러)",
    "실외기 입력 전압 비정상, 실외기 INVERTER PBA 불량",
    "【조치 부위】 실외기 전원 입력부, 실외기 INVERTER PBA\n【고장 점검 방법】 실외기 전원 확인(AC 187~254V), 실외기 INV PBA 내 LED점등확인\n【조치 방법】 집 전원 확인 및 수리, 실외기 INV PBA 교체");

addError("C470", "에러 표시 및 구동부 정지(실외기 EEPROM 이상)",
    "실외기 EEPROM 불량, 실외기 INVERTER PBA 불량",
    "【조치 부위】 실외기 INVERTER PBA\n【고장 점검 방법】 실외기 EEPROM 이상\n【조치 방법】 실외기 EEPROM 교체확인, 실외기 INV PBA 교체");

addError("C471", "에러 표시 및 구동부 정지(실외기 EEPROM 이상 - OTP 에러)",
    "실외기 입력 전압 비정상, 실외기 INVERTER PBA 불량",
    "【조치 부위】 실외기 전원 입력부, 실외기 INVERTER PBA\n【고장 점검 방법】 실외기 전원 확인(AC 187~254V), 실외기 INV PBA 내 LED점등확인\n【조치 방법】 집 전원 확인 및 수리, 실외기 INV PBA 교체");

addError("C474", "에러 표시 및 구동부 정지(방열판 온도센서 이상)",
    "실외기 입력 전압 비정상, 실외기 INVERTER PBA 불량",
    "【조치 부위】 실외기 전원 입력부, 실외기 INVERTER PBA\n【고장 점검 방법】 실외기 전원 확인(AC 187~254V), 실외기 INV PBA 내 LED점등확인\n【조치 방법】 집 전원 확인 및 수리, 실외기 INV PBA 교체");

addError("C483", "에러 표시 및 구동부 정지(HW 연결 전류 이상 - AC 과전압 보호 에러)",
    "실외기 입력 전압 비정상, 실외기 INVERTER PBA 불량",
    "【조치 부위】 실외기 전원 입력부, 실외기 INVERTER PBA\n【고장 점검 방법】 실외기 전원 확인(AC 187~254V), 실외기 INV PBA 내 LED점등확인\n【조치 방법】 집 전원 확인 및 수리, 실외기 INV PBA 교체");

addError("C484", "에러 표시 및 구동부 정지(제어기 입력 전류 과상승 - 과전류 보호 체크)",
    "REACTOR 단품 불량, REACTOR WIRE 단선 및 체결불량, 실외기 INVERTER PBA 불량",
    "【조치 부위】 REACTOR, 실외기 INVERTER PBA\n【고장 점검 방법】 REACTOR 이상동작 및 큰 진동 확인, 연결 WIRE 정상체결/PIN빠짐 확인, 실외기 INV PBA 내 LED점등확인\n【조치 방법】 REACTOR 교체, WIRE 교체, 실외기 INV PBA 교체");

addError("C485", "에러 표시 및 구동부 정지(실외제어기 입력 전류센서 이상에러)",
    "실외기 입력 전압 비정상, 실외기 INVERTER PBA 불량",
    "【조치 부위】 실외기 전원 입력부, 실외기 INVERTER PBA\n【고장 점검 방법】 실외기 전원 확인(AC 187~254V), 실외기 INV PBA 내 LED점등확인\n【조치 방법】 집 전원 확인 및 수리, 실외기 INV PBA 교체");

addError("C488", "에러 표시 및 구동부 정지(입력 전압센서 이상에러)",
    "실외기 입력 전압 비정상, 실외기 INVERTER PBA 불량",
    "【조치 부위】 실외기 전원 입력부, 실외기 INVERTER PBA\n【고장 점검 방법】 실외기 전원 확인(AC 187~254V), 실외기 INV PBA 내 LED점등확인\n【조치 방법】 집 전원 확인 및 수리, 실외기 INV PBA 교체");

addError("C500", "에러 표시 및 구동부 정지(인버터1 IPM OverHeat 에러)",
    "실외기 INVERTER PBA 불량, 실외기 BLDC FAN 속도 이상",
    "【조치 부위】 실외기 INVERTER PBA, 실외기 BLDC FAN\n【고장 점검 방법】 실외기 INV PBA 내 IPM/PFCM 스크류 체결상태 확인, 실외기 FAN속도 확인, 실외기 INV PBA 내 LED점등확인\n【조치 방법】 실외기 INV PBA 내 IPM/PFCM 스크류 재체결, C459에러 확인, 실외기 INV PBA 교체");

addError("C507", "에러 표시 및 구동부 정지(고압스위치 연결 에러)",
    "실외기실 환기 안됨, 고압스위치 센서 SHORT/OPEN, 냉매 충전/회수 모드에서 고압측 밸브 잠금 후 압력 상승, 실외기 INVERTER PBA 불량",
    "【조치 부위】 실외 환기 상태, 고압스위치, 서비스밸브, 실외기 INVERTER PBA\n【고장 점검 방법】 실외기 환기상태 확인, 고압스위치 커넥터 저항값 확인(4ohm이하), 서비스 밸브 정상 및 배관상태 확인, 실외기 INV PBA 내 LED점등확인\n【조치 방법】 실외기 주변 환기 상태 및 갤러리 개방 여부 확인, 스위치 Wire 연결 상태 및 단선 점검, 서비스밸브 배관 교체, 실외기 INV PBA 내 LED점등확인");

addError("C554", "에러 표시 및 구동부 정지(냉매 부족 에러)",
    "실외기의 압축기가 가동을 하지 못하는 경우 발생, 공급 배관 길이(8m) 이상의 설치 현장에서 냉매 미보충, 매립현장의 고압배관이 3/8\"인 상태에서 냉매 미보충, 배관 꺾임 또는 부분 막힘에 의한 냉매 순환량 부족",
    "【조치 부위】 냉매량, 배관꺽임 혹은 막힘 여부\n【고장 점검 방법】 냉매 부족 점검 필요\n【조치 방법】 냉매가 부족하다는 표시입니다. 최근 제품이동 등의 재설치를 한 경우라면 설치기사와 먼저 확인해 보시거나, 서비스엔지니어의 점검을 원하시면 방문진행하도록 하겠습니다. 설치 안내서의 기준대로 냉매량 점검모드에서 냉매 보충, 배관 꺾임 또는 막힘 여부 점검");

addError("C574", "에러 표시 및 구동부 정지(냉매 완전 누설)",
    "실외기에서 에어컨 가스가 누설 또는 모자라는 경우, 배관 연결부 냉매 누설, 배관 막힘, 서비스밸브 미개방",
    "【조치 부위】 냉매누설부위, 배관막힘 상태, 서비스밸브 개방 상태\n【고장 점검 방법】 냉매 완전 누설\n【조치 방법】 냉매가 없다는 표시입니다. 최근 제품이동 등의 재설치를 한 경우라면 설치기사와 먼저 확인해 보시거나, 서비스엔지니어의 점검을 원하시면 방문진행하도록 하겠습니다. 배관 연결부 누설 수리 후 냉매량 점검모드로 냉매 보충, 서비스밸브 개방 여부/배관 꺾임 및 막힘 여부 점검");

// E-series errors
addError("E101", "에러 표시 및 구동부 정지(실내.외기 통신 에러)",
    "실외기 전원 미 연결 또는 전원공급 안됨, 실내.외기간 통신선 연결 상태 불량, 전원선과 통신선 오결선, 실내기 MAIN PBA 불량, 실외기 INVERTER PBA 불량",
    "【조치 부위】 실외기 전원부, 실내/외기 통신연결부, 실내/외기 전원/통신 연결부, 실내기 MAIN PBA, 실외기 MAIN PBA, 실외기 INVERTER PBA\n【고장 점검 방법】 실외기 전원 확인(AC 220V), 실내/외기 통신선 커넥터 확인, 실내/외기 통신선 연결부위 확인, 실내기 MAIN PBA 내 LED점등확인, 실외기 INV PBA 내 LED점등확인\n【조치 방법】 실외기 전원 체결, 통신선 교체 또는 통신선 재체결, 전원선/통신선 재체결, 실내기 MAIN PBA 교체, 실외기 INV PBA 교체");

addError("E103", "에러 표시 및 구동부 정지(실내기 판넬 - 메인간 통신에러)",
    "실내기 MAIN PBA와 CONTROL PBA or DISPLAY PBA 연결 Wire 단선, 실내기 MAIN PBA 불량, 실내기 CONTROL PBA or DISPLAY PBA 불량",
    "【조치 부위】 실내기 WIRE 연결부, 실내기 MAIN PBA, 실내기 CONTROL 또는 DISPLAY PBA\n【고장 점검 방법】 연결 WIRE 정상체결/PIN빠짐 확인, 실내기 PBA 내 LED점등확인\n【조치 방법】 WIRE 교체, 실내기 MAIN PBA 교체, 실내기 CONTROL 또는 DISPLAY PBA 교체");

addError("E105", "정상 운전(카메라/네트워크 통신에러)",
    "실내기 CONTROL PBA or DISPLAY PBA와 WIFI MODULE 연결 Wire 단선, 실내기 CONTROL PBA or DISPLAY PBA 불량, 실내기 WIFI MODULE 불량",
    "【조치 부위】 실내기 WIRE 연결부, 실내기 CONTROL 또는 DISPLAY PBA, WIFI MODULE\n【고장 점검 방법】 연결 WIRE 정상체결/PIN빠짐 확인, 실내기 PBA 내 LED점등확인\n【조치 방법】 WIRE 교체, 실내기 CONTROL 또는 DISPLAY PBA 교체, WIFI MODULE 교체");

addError("E108", "설정 주소 중복 에러(통신상에 동일 주소의 장치가 2대 이상 존재함)",
    "시스템에어컨의 실내기에 설정된 고유주소가 중복된 경우 발생",
    "【고장 점검 방법】 설정주소 중복 Error\n【조치 방법】 설치된 실내기 간 주소가 중복되었는지 주소 설정 점검이 필요합니다.");

addError("E121", "정상 운전(실내기 ROOM 온도센서)",
    "실내기 실내온도 측정센서 불량, 실내기 MAIN PBA 불량",
    "【조치 부위】 실내 온도센서부, 실내기 MAIN PBA\n【고장 점검 방법】 실내기 실내온도 센서 단선/체결 확인, 실내기 실내온도 센서 단품 저항값 확인(상온25℃ 10KΩ), 실내기 PBA 내 LED점등확인\n【조치 방법】 실내기 실내온도 센서 교체, 실내기 MAIN PBA 교체");

addError("E122", "에러 표시 및 구동부 정지(실내기 열교환기 IN 온도 센서 이상)",
    "실내기 EVA IN 측정센서 불량, 실내기 MAIN PBA 불량",
    "【조치 부위】 실내 EVA IN 센서부, 실내기 MAIN PBA\n【고장 점검 방법】 실내기 EVA IN 센서 단선/체결 확인, 실내기 EVA IN 센서 단품 저항값 확인(상온25℃ 10KΩ), 실내기 PBA 내 LED점등확인\n【조치 방법】 실내기 EVA IN 센서 교체, 실내기 MAIN PBA 교체");

addError("E123", "에러 표시 및 구동부 정지(실내기 열교환기 OUT 온도 센서 이상)",
    "실내기 EVA OUT 측정센서 불량, 실내기 MAIN PBA 불량",
    "【조치 부위】 실내 EVA OUT 센서부, 실내기 MAIN PBA\n【고장 점검 방법】 실내기 EVA OUT 센서 단선/체결 확인, 실내기 EVA OUT 센서 단품 저항값 확인(상온25℃ 10KΩ), 실내기 PBA 내 LED점등확인\n【조치 방법】 실내기 EVA OUT 센서 교체, 실내기 MAIN PBA 교체");

addError("E128", "실내기의 Eva in 온도센서가 Eva_in 배관으로부터 이탈",
    "실내기 열교환기(에바)에 냉매가 들어오는 쪽에 연결된 배관표면의 온도를 측정하는 센서에 이상이 있을 경우 발생",
    "【조치 부위】 실내 EVA IN 센서부, 실내기 MAIN PBA\n【고장 점검 방법】 실내 Eva_in 센서 이탈 점검 필요\n【조치 방법】 실내 Eva_in 센서 Pocket 고정여부를 확인해 주세요. 그리고 실내기와 실외기의 전원을 껐다 켜주세요. 조치 후에도 동일한 점검코드가 계속 발생한다면, 전문 엔지니어의 점검이 필요합니다.");

addError("E129", "실내기의 Eva out 온도센서가 Eva_out 배관으로부터 이탈",
    "실내기 열교환기(에바)에서 냉매가 나가는 쪽으로 연결된 배관표면의 온도를 측정하는 센서에 이상이 있을 경우 발생",
    "【조치 부위】 실내 EVA OUT 센서부, 실내기 MAIN PBA\n【고장 점검 방법】 실내 Eva_out 센서 이탈 점검 필요\n【조치 방법】 실내 Eva_out 센서 Pocket 고정여부를 확인해 주세요. 그리고 실내기와 실외기의 전원을 껐다 켜주세요. 조치 후에도 동일한 점검코드가 계속 발생한다면, 전문 엔지니어의 점검이 필요합니다.");

addError("E138", "정상 운전(GAS SENSOR 에러)",
    "실내기 GAS 측정센서 불량, 실내기 MAIN PBA 불량",
    "【조치 부위】 실내 GAS 센서부, 실내기 MAIN PBA\n【고장 점검 방법】 실내기 GAS 센서 단선/체결 확인, 실내기 PBA 내 LED점등확인\n【조치 방법】 실내기 GAS 센서 교체, 실내기 MAIN PBA 교체");

addError("E140", "정상 운전(PM1.0 먼지센서 통신에러)",
    "실내기 먼지 측정센서 불량, 실내