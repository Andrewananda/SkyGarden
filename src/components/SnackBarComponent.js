import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Snackbar, Button} from 'react-native-paper';

export default class SnackBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      message: '',
      btnText: 'Okay',
    };
  }

  onDismissSnackBar = () => {
    this.setState({visible: false});
  };

  onToggleSnackBar = () => {
    this.setState({visible: !this.state.visible});
  };

  showSnackBar(message, btnText) {
    this.setState({message: message, visible: true, btnText: btnText});
  }

  render() {
    return (
      <View style={styles.container}>
        <Snackbar
          visible={this.state.visible}
          onDismiss={this.onDismissSnackBar}
          action={{
            label: this.state.btnText,
            onPress: () => {
              this.props.onPress;
            },
          }}>
          {this.state.message}
        </Snackbar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
