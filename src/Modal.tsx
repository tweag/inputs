import React from "react";
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
  isVisible: boolean;
  orientation: string;
}

export class Modal extends React.Component<ModalProps, State> {
  public state = {
    isVisible: false,
    orientation: "portrait"
  };

  public open = () => {
    this.setState({ isVisible: true });
  };

  public close = () => {
    this.setState({ isVisible: false });
  };

  private handleClose = () => {
    this.close();

    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  private handleOrientationChange = (e: NativeSyntheticEvent<any>) => {
    this.setState({ orientation: e.nativeEvent.orientation });
  };

  public render() {
    const { isVisible, orientation } = this.state;
    const {
      children,
      render,
      headerStyle,
      bodyStyle,
      backdropStyle,
      ...modalProps
    } = this.props;

    const height = orientation === "portrait" ? 215 : 162;
    const context = {
      isVisible,
      orientation,
      open: this.open,
      close: this.close
    };

    return (
      <>
        {children(context)}

        <RNModal
          visible={isVisible}
          transparent
          animationType="slide"
          supportedOrientations={["portrait", "landscape"]}
          onOrientationChange={this.handleOrientationChange}
          {...modalProps}
        >
          <TouchableOpacity
            style={[styles.backdrop, backdropStyle]}
            onPress={this.handleClose}
          />

          <View style={[styles.header, headerStyle]}>
            <TouchableWithoutFeedback
              onPress={this.handleClose}
              hitSlop={hitSlop}
            >
              <View>
                <Text style={styles.done}>Done</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={[styles.body, { height }, bodyStyle]}>
            {render(context)}
          </View>
        </RNModal>
      </>
    );
  }
}
