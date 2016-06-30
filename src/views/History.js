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
import HomeContainer from '../containers/HomeContainer'
import HistoryContainer from '../containers/HistoryContainer'
import IncomeRules from '../pages/IncomeRules'
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
      })
    });
  }
   onPressGoBack (){
    const {navigator} = this.props;
    InteractionManager.runAfterInteractions(() => {
      navigator.pop()
    });
  }
  onPressGORules() {
    const {navigator} = this.props;
    InteractionManager.runAfterInteractions(() => {
      navigator.push({
        component: IncomeRules,
        name: '收入规则',
      })
    });
  }

  onPressDrawerItem (index) {
    const {navigator} = this.props;
   
  }

  render () {
    const {navigator} = this.props;
  
    return (
        <View style={styles.container}>
          <Header title="历史收入账单" foreground="dark" style={{backgroundColor:"#fff"}} leftItem={{
            title:'<',
            onPress:()=>this.onPressGoBack()
          }} rightItem= {{
            title: '收入规则',
            onPress: ()=> this.onPressGORules()
          }}/>
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
         
        </View>
        
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f9f9f9',
  },
  
  planIncome: {
    // flex: 1,
     backgroundColor: '#fff',
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
