import NetInfo from '@react-native-community/netinfo';
export const withNetwork = (action, onNetworkError) => {
  NetInfo.fetch()
    .then(state => {
      if (state.isInternetReachable) {
        action();
      } else {
        if (onNetworkError) {
          onNetworkError('Could not connect to Internet');
        }
      }
    })
    .catch(e => {
      if (onNetworkError) {
        onNetworkError('Could not connect to Internet', e);
      }
    });
};

export function numberFormat(text) {
  return text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
