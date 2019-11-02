import React, {Component} from 'react';
import { SafeAreaView, Image, StatusBar, Animated, ScrollView, TextInput, View, Dimensions, StyleSheet,TouchableOpacity, TouchableHighlight } from 'react-native';

import Constants from 'expo-constants';
const {width} = Dimensions.get('screen');

const segmentsLength = 61;
const minTime = 0;
const segmentWidth = 2;
const segmentSpacing = 20;
const spacerWidth = (width - segmentWidth) / 2;
const snapSegment = segmentWidth + segmentSpacing;
const rulerWidth = width + (segmentsLength - 1) * snapSegment;
const data = [...Array(segmentsLength).keys()].map((i) => i + minTime);

const indicatorWrapperWidth = 100;


const Ruler = () => {
  return (
    <View style={styles.ruler}>
      <View style={styles.spacer}/>
      {data.map(i => {
        const tenth = i % 10 === 0;
        return (
          <View
            key={i}
            style={[
              styles.segment,
              {
                backgroundColor: tenth ? '#333' : '#999',
                height: tenth ? 40 : 20,
                marginRight: i === (data.length - 1) ? 0 : segmentSpacing
              },
            ]}
          />
        );
      })}
      <View style={styles.spacer}/>
    </View>
  );
};




class TimeView extends Component {
 scrollRef = React.createRef();
 textRef = React.createRef();
 value = 0;

   constructor(props) {
   super(props);
   this.state = {
     scrollX: new Animated.Value(0),
     initialTime: 25
   };


   // this observer is return an event which contains the value of the animation
   this.state.scrollX.addListener(({value}) => {
     const sliderValue = Math.round(value / snapSegment);
     if (this.textRef && this.textRef.current){
       this.textRef.current.setNativeProps({
         text: `${sliderValue + minTime}`
       })
     }
   })

   }

 componentDidMount() {
   StatusBar.setHidden(true);
   setTimeout(() => {
     if (this.scrollRef && this.scrollRef.current) {
       // The current scrollRef it's actually getting the Animated instance ( returned from createAnimatedComponent(ScrollView) )
       // and we need to access the ScrollView instead of the Animated instance because ScrollView is providing
       // the `scrollTo` method.
       // Instead of using _component (which is a bad practice in general -> accessing private method should always happend through
       // public methods), AnimatedImplementation actually exposing a method called getNode https://github.com/facebook/react-native/pull/9944
       // that will return _component.

       // give the comment above, the below implementation can be:
       // this.scrollRef.current.getNode().scrollTo({x: this._calculateOffset(), y: 0, animated: true})
       // this.scrollRef.current -> Animated instance
       // this.scrollRef.current.getNode() -> ScrollView instance
       this.scrollRef.current._component.scrollTo({x: this._calculateOffset(), y: 0, animated: true})
     }
   }, 1000)
 }


 _calculateOffset = () => {
   return snapSegment * (this.state.initialTime - minTime);
 }


  _onPress = () => {
    console.log("pressed");
    this.props.navigation.navigate('ResultsView');

  }

 render() {
   return (
     <View style={styles.container}>
       <View style = {styles.icon}>
<TouchableOpacity style = {styles.button} onPress={this._onPress}>
<View style = {styles.icon}>
       <Image style = {styles.img}
        source={require('../assets/chef.png')}
      />
       </View>
      </TouchableOpacity>
       </View>
       <View style = {{height:50}}>
     <Animated.ScrollView
      delayPressIn={0}
               style={StyleSheet.absoluteFillObject}
               contentContainerStyle = {{alignItems: 'flex-end' }}
         horizontal
         ref={this.scrollRef}
         onLayout={event => {
           this.frameWidth = event.nativeEvent.layout.width;
           const maxOffset = this.contentWidth - this.frameWidth;
           if (maxOffset < this.xOffset) {
             this.xOffset = maxOffset;
           }
         }}
         onContentSizeChange={contentWidth => {
           this.contentWidth = contentWidth;
           const maxOffset = this.contentWidth - this.frameWidth;
           if (maxOffset < this.xOffset) {
             this.xOffset = maxOffset;
           }
         }}
         onScroll={Animated.event(
           [
             {
               nativeEvent: {
                 contentOffset: { x: this.state.scrollX },
               },
             },
           ],
           { useNativeDriver: true }
         )}
         snapToInterval={snapSegment}
         scrollEventThrottle={16}
         showsHorizontalScrollIndicator={false}
         bounces={false}>
       <Ruler />
     </Animated.ScrollView>
     </View>
       <View style={styles.indicatorWrapper}>
         <TextInput ref={this.textRef} style={styles.text} />
         <View style={[styles.segment, styles.indicator]}/>
       </View>
     </View>
   );
 }
}

export default TimeView;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  ruler: {
    width: rulerWidth,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  spacer: {
    width: spacerWidth,
    height: 100
  },
  segment: {
    width: segmentWidth
  },
    text: {
    fontSize: 42,
    marginBottom: 10
  },
    indicator: {
    height: 100,
    backgroundColor: 'orange'
  },
  indicatorWrapper: {
    position: 'absolute',
    left: (width - indicatorWrapperWidth) / 2,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: indicatorWrapperWidth
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom:50
  },
  img: {
    resizeMode: 'contain',
    height: 200,
    width: 200,
  },
  button: {
    alignItems: 'center',
    justifyContent:'center',
    padding: 10,
    height:100,
    width:100
  },
});
