'use strict';

import React from 'react-native';
const {
  StyleSheet,
  ListView,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  PropTypes,
  InteractionManager,
  ProgressBarAndroid,
  Image,
  Platform,
  DrawerLayoutAndroid,
  Dimensions,
  Navigator,
  
  View
  } = React;
import HomeContainer from '../containers/HomeContainer';
import HistoryContainer from '../containers/HistoryContainer';
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../components/Header';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  // reddit: PropTypes.object.isRequired
};

var canLoadMore;
var _typeIds = new Array();
var loadMoreTime = 0;

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // dataSource: new ListView.DataSource({
      //   rowHasChanged: (row1, row2) => row1 !== row2,
      // })
    };
  }

  componentDidMount () {
  
  }

  componentWillReceiveProps (nextProps) {
    
  }

 
   onPress () {
    const {navigator} = this.props;
    InteractionManager.runAfterInteractions(() => {
      navigator.push({
        component: HistoryContainer,
        name: '历史收入账单',
      });
    });
  }

  onPressDrawerItem (index) {
    const {navigator} = this.props;
   
  }


  render () {
    const {navigator} = this.props;
  
    return (
        <View style={styles.container}>
          <Header title="典典学院" foreground="dark" style={{backgroundColor:"#fff"}} />
          <View style={styles.homeUserInfo}>
            <TouchableOpacity underlayColor={'#FA6778'} style={{flex:1}}>
              <View style={styles.userTx}>
                  <Image style={{width: 60, height: 60,borderRadius: 30}}  source={require('../resources/images/tx.jpg') } />
              </View>
            </TouchableOpacity>
            <View style={styles.userInfoRight}>
              <View>
                <Text style={styles.userName}>真名-工号</Text>
              </View>
              <View>
                <Text style={styles.userWork}>开发工程师开发工程师</Text>
              </View>
            </View>
          </View>
          <View style={styles.deposit}>
            <View style={styles.depositLeft}>
              <Text style={styles.depositTitle}>提现</Text>
            </View>
            <View style={styles.depositRight}>
              <Text style={styles.depositNum}>¥ 16000.00</Text>
            </View>
          </View>
          <View style={styles.income}>
            <View style={styles.incomeTop}>
              <Text style={styles.incomeTitle}>今日收入</Text>
            </View>
            <View style={styles.incomBottom}>
              <Text style={styles.incometNum}>¥ 16000.00</Text>
            </View>
          </View>
          <View style={styles.incomeDetail}>
            <View style={styles.incomeDeLeft}>
              <View>
                <Text style={styles.incomeDeNum}>
                  ¥ 60.00
                </Text>
              </View>
              <View>
                <Text style={styles.incomeDeType}>
                  订单收入
                </Text>
              </View>
            </View>
             <View style={styles.incomeDeRight}>
                 <View>
                  <Text style={styles.incomeDeNum}> ¥ 200.00</Text>
                </View>
                <View>
                  <Text style={styles.incomeDeType}>评价收入</Text>
                </View>
            </View>
          </View>
          <View style={styles.planIncome}>
            <View style={styles.planIncomeHead}>
              <View style={styles.headLeft}>
                <Text style={styles.headTitle}>
                  预计收入
                </Text>
              </View>
              <View style={styles.headRight}>
                <Text style={styles.headTitle}>¥ 2120.00</Text>
              </View>
            </View>
            <View style={styles.planIncomeBody}>
              <View style={styles.planIncomeItem}>
                <View style={styles.incomeItemLeft}>
                  <Text style={styles.itemText}>
                    基本工资
                  </Text>
                </View>
                <View style={styles.incomeItemRight}>
                  <Text style={styles.itemText}>
                    ¥ 2000.00
                  </Text>
                </View>
                 <View>
                  <Text style={styles.arrowLeftIcon}>
                    >
                  </Text>
                </View>
              </View>
              
               <View style={styles.planIncomeItem}>
                <View style={styles.incomeItemLeft}>
                  <Text style={styles.itemText}>
                    订单收入
                  </Text>
                </View>
                <View style={styles.incomeItemRight}>
                  <Text style={styles.itemText}>
                    ¥ 2000.00
                  </Text>
                </View>
                 <View>
                  <Text style={styles.arrowLeftIcon}>
                    >
                  </Text>
                </View>
              </View>
              
               <View style={styles.planIncomeItem}>
                <View style={styles.incomeItemLeft}>
                  <Text style={styles.itemText}>
                    评价收入
                  </Text>
                </View>
                <View style={styles.incomeItemRight}>
                  <Text style={styles.itemText}>
                    ¥ 2000.00
                  </Text>
                </View>
                 <View>
                  <Text style={styles.arrowLeftIcon}>
                    >
                  </Text>
                </View>
              </View>
              
               <View style={[styles.planIncomeItem,styles.planIncomeItemLast]}>
                <View style={styles.incomeItemLeft}>
                  <Text style={styles.itemText}>
                    奖惩情况
                  </Text>
                </View>
                <View style={styles.incomeItemRight}>
                  <Text style={styles.itemText}>
                    ¥ -200.00
                  </Text>
                 
                </View>
                <View>
                  <Text style={styles.arrowLeftIcon}>
                    >
                  </Text>
                </View>
              </View>
            </View>
            
          </View>
          <View style={styles.notes}>
            <Text style={styles.notesText}>
              *分红情况查看历史账单
            </Text>
          </View>
          <TouchableOpacity onPress={this.onPress.bind(this)}>
            <View style={styles.hisBil}>
              <View style={styles.hisBilLeft}>
                <Text style={styles.hisBilTitle}>
                  历史月收入账单
                </Text>
              </View>
              <View>
                <Text style={styles.arrowLeftIcon}>></Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f9f9f9',
  },
  homeUserInfo: {
    
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: 'rgba(175, 175, 175, 0.49)',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
  },
  userInfoRight: {
    flex: 4,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 14,
    color: '#5D5D5D',
    lineHeight: 20,
  },
  userWork: {
    fontSize: 14,
    color: '#AFAFAF',
    lineHeight: 20,
  },
  deposit: {
    // flex: 1,
    height: 40,
    padding: 15,
    flexDirection: 'row',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(175, 175, 175, 0.49)',
  },
  depositLeft: {
    flex: 1,
    justifyContent: 'center',
    
  },
  depositRight: {
    justifyContent: 'center',
  },
  depositTitle: {
    fontSize: 16,
    color: 'rgba(103, 103, 103, 1)',
    
  },
  depositNum: {
    fontSize: 16,
    color: 'rgba(175, 175, 175, 1)',
  },
  income: {
    // flex: 1,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 90,
    backgroundColor: 'rgba(255, 116, 33, 1)',
   
  },
  incomeTop: {
    justifyContent: 'center',
  },
  incomeBottom: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  incomeTitle: {
    color: '#fff',
    fontSize: 16,
    
  },
  incometNum: {
    color: '#fff',
    fontSize: 34,
  },
  incomeDetail: {
    flexDirection: 'row',
    height: 60,
    paddingTop: 7,
    paddingBottom: 7,
   borderBottomWidth: 1,
   borderColor: 'rgba(175, 175, 175, 0.49)',
    backgroundColor: '#fff',
  },
  incomeDeLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(175, 175, 175, 1)',
    borderRightWidth: 1,
    
  },
  incomeDeNum: {
    color: 'rgba(255, 116, 33, 1)',
    fontSize: 17,
    lineHeight: 24
  },
  incomeDeRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  incomeDeType: {
    color: 'rgba(175, 175, 175, 1)',
    fontSize: 12,
    lineHeight: 17,
  },
  planIncome: {
    // flex: 1,
     backgroundColor: '#fff',
     marginTop: 5,
  },
  planIncomeHead: {
    flex: 1,
    height: 45,
    
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 35,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'rgba(175, 175, 175, 0.49)',
  },
  headLeft: {
   flex: 1, 
  },
  headTitle: {
   fontSize: 16,
   color: 'rgba(93, 93, 93, 1)', 
  },
  planIncomeBody: {
    flex: 1,
    flexDirection: 'column',
  },
  planIncomeItem: {
    flex: 1,
    flexDirection: 'row',
     height: 45,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(175, 175, 175, 0.49)',
    marginLeft: 15,
    marginRight: 15,    
  },
  planIncomeItemLast: {
   marginLeft: 0,
   marginRight: 0,
   paddingLeft: 15,
   paddingRight: 15, 
  },
  incomeItemLeft: {
    flex: 1,
  },
 itemText: {
   color: 'rgba(175, 175, 175, 1)',
   fontSize: 14,
 },
 notes: {
   paddingLeft: 15,
   paddingRight: 15,
   height: 20,
    flexDirection: 'row',
   alignItems: 'center',
 },
 notesText: {
   color: 'rgba(175, 175, 175, 1)',
   fontSize: 12,
 },
 hisBil: {
   height: 40,
   flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: '#fff',
   paddingLeft: 15,
   paddingRight: 15,
   borderTopWidth: 1,
   borderBottomWidth: 1,
   borderColor: 'rgba(175, 175, 175, 0.49)',
 },
 hisBilTitle: {
   fontSize: 14,
   color: 'rgba(103, 103, 103, 1)',
 },
 hisBilLeft: {
   flex: 1,
    flexDirection: 'row',
 },
 arrowLeftIcon: {
   color:  'rgba(175, 175, 175, 1)',
   fontSize: 20,
   lineHeight: 20,
   marginLeft: 10,
 }
  

});

Main.propTypes = propTypes;

export default Main;
