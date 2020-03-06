# Practical_Note

실용적인 노트를 만들어보자!

메모장 기능
글자 수 세주기(공백 포함, 미포함)
... 추가 진행 시 작성

시작일 2020.03.04 수

2020.03.06 금
진행 사항
- Navigator 추가
- QuickScreen Setting Modal 제외 완성

* Navigator를 사용할 때 애니메이션 효과를 사용하기 위해서 createMaterialToptabnavigator으로 tabBarPosition = "bottom"으로 아래에 고정시켜서 사용.
* 키보드가 올라왔을 때 키보드 외에 다른 화면을 터치했을 때 키보드가 내려가게 하는 코드. <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
  이걸로 감싼다
* 키보드가 올라왔을 때 화면이 키보드에 맞게 알아서 올라가는 코드 View => KeyboardAvoidingView behavior = "padding"
위 세 개를 알았다.
