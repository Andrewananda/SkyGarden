import {Appbar, Badge, Searchbar} from 'react-native-paper';
import {moderateScale} from 'react-native-size-matters';
import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {black, green} from '../utils/colors';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

export default function Header(props) {
  const products = useSelector(state => state.appState.addedProducts);
  const navigation = useNavigation();
  return (
    <Appbar.Header style={styles.appBarHeader}>
      <Appbar.Action
        style={styles.logoStyle}
        icon={require('../../assets/skylogo.png')}
        size={moderateScale(120)}
      />
      {props.onPress && (
        <Appbar.BackAction
          color={'white'}
          style={styles.btnBackNav}
          onPress={props.onPress}
        />
      )}
      <Pressable
        onPress={() => navigation.navigate('Cart')}
        style={styles.cartStyle}>
        <Badge style={styles.badgeStyle}>
          <Text style={{color: '#fff'}}>{products.length}</Text>
        </Badge>
        <Appbar.Action color={'#fff'} icon={'cart'} style={styles.cartStyle} />
      </Pressable>
      <Searchbar placeholder="Search for everything" style={styles.searchBar} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  appBarHeader: {
    backgroundColor: black,
    height: moderateScale(110),
  },
  logoStyle: {
    position: 'absolute',
    top: moderateScale(-70),
  },
  btnBackNav: {
    position: 'absolute',
    top: moderateScale(2),
  },
  badgeStyle: {
    position: 'absolute',
    right: 0,
    top: 5,
    backgroundColor: green,
  },
  cartStyle: {
    position: 'absolute',
    right: 0,
    top: 3,
  },
  searchBar: {
    position: 'absolute',
    top: moderateScale(50),
    height: moderateScale(38),
    margin: moderateScale(10),
    width: '90%',
    borderRadius: 10,
  },
});
