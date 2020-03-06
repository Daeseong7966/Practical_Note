import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TouchableOpacity, Clipboard } from 'react-native';
import Modal from 'react-native-modal';
import ProgressBar from 'react-native-progress/Bar';
import AntIcon from 'react-native-vector-icons/AntDesign';
import PasteIcon from 'react-native-vector-icons/FontAwesome';
import SettingScreen from '../modals/QuickSettingModal';

class QuickScreen extends React.Component{
    state = {
        BasicNum : 100,
        UserText : "",
        isSettingVisible : false
    }

    readFromClipboard = async () => {
        const clipboardContent = await Clipboard.getString();
        this.setState({UserText : clipboardContent});
    }

    writeToClipboard = async () => {
        await Clipboard.setString(this.state.UserText);
    }

    render(){
        const IncludeNum = this.state.UserText.length;
        const NotIncludeNum = this.state.UserText.replace(/\s/gi, "").length;
        return(
            <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
            <KeyboardAvoidingView style = {styles.container} behavior = "padding">
                <TouchableOpacity style = {{position : "absolute", top : 0, right : 0, marginTop : 20}}>
                    <AntIcon name = "setting" size = {30} color = "black" />
                </TouchableOpacity>
                <View style = {styles.percentageBox}>
                    <View style = {styles.progressTextBox}>
                        <Text>공백 포함</Text>
                        <Text style = {{position : "absolute", right : 0}}>{IncludeNum}/{this.state.BasicNum}</Text>
                    </View>
                    <ProgressBar progress = {IncludeNum/this.state.BasicNum} width = {null}  />
                </View>

                <View style = {styles.percentageBox}>
                    <View style = {styles.progressTextBox}>
                        <Text>공백 미포함</Text>
                        <Text style = {{position : "absolute", right : 0}}>{NotIncludeNum}/{this.state.BasicNum}</Text>
                    </View>
                    <ProgressBar progress = {NotIncludeNum/this.state.BasicNum} width = {null} />
                </View>

                <TextInput
                    style = {styles.TextInput}
                    placeholder = "텍스트를 입력해주세요!"
                    multiline = {true}
                    autoCapitalize = "none"
                    value = {this.state.UserText}
                    onChangeText = {(text) => this.setState({UserText : text})}
                />

                <View style = {{flexDirection : "row", marginTop : "5%"}}>
                    <TouchableOpacity onPress = {() => this.writeToClipboard()} style = {styles.CircleBtn}>
                        <AntIcon name = "copy1" size = {20} color = "black" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {() => this.readFromClipboard()} style = {styles.CircleBtn}>
                        <PasteIcon name = "paste" size = {20} color = "black" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {() => this.setState({UserText : ""})} style = {styles.CircleBtn}>
                        <AntIcon name = "delete" size = {20} color = "black" />
                    </TouchableOpacity>
                </View>

                <Modal isVisible = {this.state.isSettingVisible}>
                    <SettingScreen />
                </Modal>
            </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
    },
    percentageBox : {
        width : "90%",
        height : 60,
        borderRadius : 4,
        borderWidth : 1,
        borderColor : "black",
        paddingLeft : 10,
        paddingRight : 10,
        justifyContent : "center",
        marginBottom : "3%",
    },
    progressTextBox : {
        flexDirection : "row",
        marginBottom : 5
    },
    TextInput : {
        width : "90%",
        height : 200,
        borderRadius : 4,
        borderColor : "black",
        borderWidth : 1,
        paddingLeft : 10
    },
    CircleBtn : {
        width : 40,
        height : 40,
        borderRadius : 100/2,
        justifyContent : "center",
        alignItems : "center",
        borderWidth : 2,
        borderColor : "black",
        marginLeft : "5%",
        marginRight : "5%"
    }
})

export default QuickScreen;