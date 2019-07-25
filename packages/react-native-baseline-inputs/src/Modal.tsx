import * as React from "react";
import { ModalProps } from "./types";
import {
  Modal as RNModal,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";

const hitSlop = {
  top: 4,
  right: 4,
  bottom: 4,
  left: 4
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1
  },
  header: {
    height: 44,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#EFF1F2",
    borderTopWidth: 0.5,
    borderTopColor: "#919498"
  },
  body: {
    justifyContent: "center",
    backgroundColor: "#D0D4DB"
  },
  done: {
    color: "#007AFE",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 1,
    paddingRight: 2
  }
});

interface State {
  orientation: string;
}

export class Modal extends React.Component<ModalProps, State> {
  public state = {
    orientation: "portrait"
  };

  private handleOrientationChange = (e: NativeSyntheticEvent<any>) => {
    this.setState({ orientation: e.nativeEvent.orientation });
  };

  public render() {
    const {
      body,
      children,
      style,
      isVisible,
      headerStyle,
      backdropStyle,
      onRequestClose,
      ...modalProps
    } = this.props;

    const height = this.state.orientation === "portrait" ? 215 : 162;

    return (
      <>
        {children}

        <RNModal
          visible={isVisible}
          transparent
          animationType="slide"
          supportedOrientations={["portrait", "landscape"]}
          onRequestClose={onRequestClose}
          onOrientationChange={this.handleOrientationChange}
          {...modalProps}
        >
          <TouchableOpacity
            style={[styles.backdrop, backdropStyle]}
            onPress={onRequestClose}
          />

          <View style={[styles.header, headerStyle]}>
            <TouchableWithoutFeedback
              hitSlop={hitSlop}
              onPress={onRequestClose}
            >
              <View>
                <Text style={styles.done}>Done</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={[styles.body, { height }, style]}>{body}</View>
        </RNModal>
      </>
    );
  }
}
